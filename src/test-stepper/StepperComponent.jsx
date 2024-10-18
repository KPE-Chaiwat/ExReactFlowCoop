import React, { useState } from "react";
import styles from "./StepperComponent.module.css"; // Importing the CSS module

const StepperComponent = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = ["Step 1", "Step 2", "Step 3", "Step 4"];

  const handleClick = (index) => {
    setCurrentStep(index);
  };

  return (
    <div className={styles.stepperContainer}>
      {steps.map((step, index) => (
        <div
          key={index}
          className={`${styles.step} ${
            currentStep === index ? styles.active : ""
          } ${index <= currentStep ? styles.completed : ""}`}
          onClick={() => handleClick(index)}
        >
          <div className={styles.stepCircle}>{index + 1}</div>
          <div className={styles.stepLabel}>{step}</div>
        </div>
      ))}
    </div>
  );
};

export default StepperComponent;
