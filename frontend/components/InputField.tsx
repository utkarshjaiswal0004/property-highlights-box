import React, { useState, useEffect } from "react";
import styles from "../app/page.module.css";

interface InputFieldProps {
  value: string;
  onChange: (value: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({ value, onChange }) => {
  const [localText, setLocalText] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newText = e.target.value;
    setLocalText(newText);
    onChange(newText);
  };

  useEffect(() => {
    if (value !== localText) {
      setLocalText(value || "");
    }
  }, [value]);

  return (
    <input
      className={styles.input}
      value={localText}
      onChange={handleChange}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
        }
      }}
    />
  );
};

export default InputField;
