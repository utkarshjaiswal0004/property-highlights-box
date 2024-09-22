"use client";

import React, { useState, useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import update from "immutability-helper";
import styles from "../app/page.module.css";
import { BsInfoCircleFill } from "react-icons/bs";
import HighlightRow from "./HighlightRow";
import {
  createHighlight,
  getHighlights,
  updateHighlight as apiUpdateHighlight,
  deleteHighlight as apiDeleteHighlight,
  reorderHighlights as apiReorderHighlights,
} from "../service/highlightService";

interface Highlight {
  _id: string;
  info: string;
  sequence: number;
}
interface ReorderHighlightsRequest {
  highlightIds: string[];
}

const debounce = (func: Function, delay: number) => {
  let timeoutId: NodeJS.Timeout;

  return (...args: any[]) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const Home: React.FC = () => {
  const [highlights, setHighlights] = useState<Highlight[]>([]);

  useEffect(() => {
    const fetchHighlights = async () => {
      const savedHighlights = await getHighlights();
      console.log(savedHighlights);
      setHighlights(savedHighlights);
    };
    fetchHighlights();
  }, []);

  const addHighlight = async () => {
    const newHighlight = { text: "", sequence: highlights.length + 1 };
    const createdHighlight = await createHighlight(
      newHighlight.text,
      newHighlight.sequence
    );
    setHighlights((prev) => [
      ...prev,
      {
        _id: createdHighlight._id,
        info: createdHighlight.info,
        sequence: createdHighlight.sequence,
      },
    ]);
  };

  const updateHighlight = async (id: string, text: string) => {
    const highlightToUpdate = highlights.find((h) => h._id === id);
    if (highlightToUpdate) {
      try {
        const updatedHighlight = await apiUpdateHighlight(
          id,
          text,
          highlightToUpdate.sequence
        );
        setHighlights((prev) =>
          prev.map((h) =>
            h._id === id ? { ...h, text: updatedHighlight.info } : h
          )
        );
      } catch (error) {
        console.error("Error updating highlight:", error);
      }
    }
  };

  const debounceUpdateHighlight = debounce(updateHighlight, 1000);

  const handleTextChange = (id: string, text: string) => {
    const highlightToUpdate = highlights.find((h) => h._id === id);
    if (highlightToUpdate) {
      setHighlights((prev) =>
        prev.map((h) => (h._id === id ? { ...h, text } : h))
      );
      debounceUpdateHighlight(id, text);
    }
  };

  const deleteHighlight = async (id: string) => {
    await apiDeleteHighlight(id);
    setHighlights((prev) => prev.filter((h) => h._id !== id));
  };

  const moveHighlight = async (dragIndex: number, hoverIndex: number) => {
    const draggedHighlight = highlights[dragIndex];
    const updatedHighlights = update(highlights, {
      $splice: [
        [dragIndex, 1],
        [hoverIndex, 0, draggedHighlight],
      ],
    });

    setHighlights(updatedHighlights);

    const highlightIds = updatedHighlights.map((h) => h._id);
    try {
      // Ensure highlightIds is being passed correctly
      await apiReorderHighlights(highlightIds);
    } catch (error) {
      console.error("Error reordering highlights:", error);
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.container}>
        <div className={styles.containerHeader}>
          <h2>
            Property highlights{" "}
            <i className={styles.infoIcon}>
              <BsInfoCircleFill />
            </i>
          </h2>
          <button onClick={addHighlight} className={styles.addButton}>
            + Add Highlight
          </button>
        </div>
        <div className={styles.highlightsList}>
          {highlights.map((highlight, index) => (
            <HighlightRow
              key={highlight?._id ?? index}
              index={index}
              highlight={highlight}
              moveHighlight={moveHighlight}
              updateHighlight={handleTextChange}
              deleteHighlight={deleteHighlight}
            />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default Home;
