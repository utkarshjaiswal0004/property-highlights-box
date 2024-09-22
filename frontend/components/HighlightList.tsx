// HighlightList.tsx
import React from "react";
import HighlightRow from "./HighlightRow";
import styles from "../app/page.module.css";

interface Highlight {
  _id: string;
  info: string;
  sequence: number;
}

interface HighlightListProps {
  highlights: Highlight[];
  moveHighlight: (dragIndex: number, hoverIndex: number) => void;
  updateHighlight: (id: string, text: string) => void;
  deleteHighlight: (id: string) => Promise<void>;
}

const HighlightList: React.FC<HighlightListProps> = ({
  highlights,
  moveHighlight,
  updateHighlight,
  deleteHighlight,
}) => {
  return (
    <div className={styles.highlightsList}>
      {highlights.map((highlight, index) => (
        <HighlightRow
          key={highlight?._id ?? index}
          index={index}
          highlight={highlight}
          moveHighlight={moveHighlight}
          updateHighlight={updateHighlight}
          deleteHighlight={deleteHighlight}
        />
      ))}
    </div>
  );
};

export default HighlightList;
