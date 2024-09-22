// Header.tsx
import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import styles from "../app/page.module.css";

interface HeaderProps {
  addHighlight: () => void;
}

const Header: React.FC<HeaderProps> = ({ addHighlight }) => {
  return (
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
  );
};

export default Header;
