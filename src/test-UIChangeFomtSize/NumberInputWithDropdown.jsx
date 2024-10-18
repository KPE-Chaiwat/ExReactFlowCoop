import React, { useState } from "react";
import styles from "./NumberInputWithDropdown.module.css";

const NumberInputWithDropdown = () => {
  const [selectedNumber, setSelectedNumber] = useState(0); // Start at 0

  // Update state when input value changes
  const handleInputChange = (event) => {
    const value = Math.max(0, Math.min(36, Number(event.target.value))); // Ensure value is between 0 and 36
    setSelectedNumber(value);
  };

  // Decrease the number in the input field
  const handleDecrease = () => {
    setSelectedNumber((prevNumber) => Math.max(prevNumber - 1, 0)); // Prevent going below 0
  };

  // Increase the number in the input field, up to max 36
  const handleIncrease = () => {
    setSelectedNumber((prevNumber) => Math.min(prevNumber + 1, 36)); // Prevent going above 36
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.decreaseButton} onClick={handleDecrease}>
        -
      </button>
      <input
        type="number"
        value={selectedNumber}
        onChange={handleInputChange} // Allow manual input
        placeholder="Enter a number"
        className={styles.input}
        min="0"
        max="36"
      />
      <button className={styles.increaseButton} onClick={handleIncrease}>
        +
      </button>
    </div>
  );
};

export default NumberInputWithDropdown;
