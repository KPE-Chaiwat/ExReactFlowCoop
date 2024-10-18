// Notification.js
import React from "react";
import styles from "./Notification.module.css";

const Notification = ({ notifications, removeNotification }) => {
  return (
    <div className={styles.notificationContainer}>
      {notifications.map((notification, index) => (
        <div
          key={index}
          className={`${styles.notification} ${styles[notification.type]}`}
        >
          <button
            className={styles.closeButton}
            onClick={() => removeNotification(index)}
          >
            ✖️
          </button>
          <span>{notification.message}</span>
        </div>
      ))}
    </div>
  );
};

export default Notification;
