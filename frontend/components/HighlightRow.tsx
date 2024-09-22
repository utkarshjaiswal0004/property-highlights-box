import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { RiDeleteBinLine } from "react-icons/ri";
import styles from "../app/page.module.css";
import InputField from "./InputField";
import DragHandle from "./DragHandle";

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

  const [, drag] = useDrag({
    type: "HIGHLIGHT",
    item: { index },
  });

  const [, drop] = useDrop({
    accept: "HIGHLIGHT",
    hover: (item: { index: number }) => {
      if (!ref.current || item.index === index) return;
      moveHighlight(item.index, index);
      item.index = index;
    },
  });

  drag(drop(ref));

  return (
    <div ref={ref} className={styles.row}>
      <DragHandle />
      <InputField
        value={highlight.info}
        onChange={(value) => updateHighlight(highlight._id, value)}
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
