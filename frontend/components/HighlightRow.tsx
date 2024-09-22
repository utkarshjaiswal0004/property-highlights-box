import React, { useRef, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { RiDeleteBinLine } from "react-icons/ri";
import styles from "../app/page.module.css";

interface Highlight {
  _id: string;
  info: string;
}

interface HighlightRowProps {
  index: number;
  highlight: Highlight;
  moveHighlight: (dragIndex: number, hoverIndex: number) => void;
  updateHighlight: (_id: string, info: string) => void;
  deleteHighlight: (_id: string) => Promise<void>;
}

const HighlightRow: React.FC<HighlightRowProps> = ({
  index,
  highlight,
  moveHighlight,
  updateHighlight,
  deleteHighlight,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [localText, setLocalText] = useState(highlight.info || ""); // Local state for input

  const [, drag] = useDrag({
    type: "HIGHLIGHT",
    item: { index },
  });

  const [, drop] = useDrop({
    accept: "HIGHLIGHT",
    hover: (item: { index: number }) => {
      if (item.index !== index) {
        moveHighlight(item.index, index);
        item.index = index;
      }
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newText = e.target.value;
    setLocalText(newText); // Update local state immediately
    updateHighlight(highlight._id, newText); // Call the debounced update function
  };

  // This effect ensures that when highlight info changes, localText is updated
  React.useEffect(() => {
    setLocalText(highlight.info || "");
  }, [highlight.info]);

  drag(drop(ref));

  return (
    <div ref={ref} className={styles.row}>
      <span className={styles.dragHandle}>⋮⋮</span>
      <input
        className={styles.input}
        value={localText} // Use local state for input value
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault(); // Prevent form submission if needed
          }
        }}
      />
      <button
        className={styles.deleteButton}
        onClick={() => deleteHighlight(highlight._id)}
      >
        <RiDeleteBinLine />
      </button>
    </div>
  );
};

export default HighlightRow;
