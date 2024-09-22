"use client";

import React, { useState, useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import update from "immutability-helper";
import styles from "../app/page.module.css";
import Header from "./Header";
import HighlightList from "./HighlightList";
import {
  createHighlight,
  getHighlights,
  updateHighlight as apiUpdateHighlight,
  deleteHighlight as apiDeleteHighlight,
  reorderHighlights as apiReorderHighlights,
} from "../service/highlightService";
import { useDebounce } from "@/hooks/useDebounce";

interface Highlight {
  _id: string;
  info: string;
  sequence: number;
}

const Home: React.FC = () => {
  const [highlights, setHighlights] = useState<Highlight[]>([]);

  useEffect(() => {
    const fetchHighlights = async () => {
      const savedHighlights = await getHighlights();
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
    try {
      const updatedHighlight = await apiUpdateHighlight(id, text);
      setHighlights((prev) =>
        prev.map((h) =>
          h._id === id ? { ...h, info: updatedHighlight.info } : h
        )
      );
    } catch (error) {
      console.error("Error updating highlight:", error);
    }
  };

  const debounceUpdateHighlight = useDebounce(updateHighlight, 1000);
  const handleTextChange = (id: string, text: string) => {
    setHighlights((prev) =>
      prev.map((h) => (h._id === id ? { ...h, info: text } : h))
    );
    debounceUpdateHighlight(id, text);
  };

  const deleteHighlight = async (id: string) => {
    try {
      await apiDeleteHighlight(id);
      setHighlights((prev) => prev.filter((h) => h._id !== id));
    } catch (error) {
      console.error("Error deleting highlight:", error);
    }
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
      await apiReorderHighlights(highlightIds);
    } catch (error) {
      console.error("Error reordering highlights:", error);
    }
  };

  const debounceMoveHighlight = useDebounce(moveHighlight, 500);

  const handleMoveHighlight = (dragIndex: number, hoverIndex: number) => {
    debounceMoveHighlight(dragIndex, hoverIndex);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.container}>
        <Header addHighlight={addHighlight} />
        <HighlightList
          highlights={highlights}
          moveHighlight={handleMoveHighlight}
          updateHighlight={handleTextChange}
          deleteHighlight={deleteHighlight}
        />
      </div>
    </DndProvider>
  );
};

export default Home;
