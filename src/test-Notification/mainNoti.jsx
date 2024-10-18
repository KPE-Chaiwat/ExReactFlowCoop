import { useState } from "react";
import Notification from "./Notification";

function MainNoti() {
  const [notifications, setNotifications] = useState([]);

  // Add a new notification
  const showNotification = (message, type = "info", timeout = 3000) => {
    const newNotification = { message, type };
    setNotifications((prev) => [...prev, newNotification]);

    // Remove the notification after `timeout`
    setTimeout(() => {
      removeNotificationByMessage(message);
    }, timeout);
  };

  // Remove a notification by index
  const removeNotification = (index) => {
    setNotifications((prev) => prev.filter((_, i) => i !== index));
  };

  // Remove a notification by message (useful for auto-dismissal)
  const removeNotificationByMessage = (message) => {
    setNotifications((prev) => prev.filter((n) => n.message !== message));
  };
  return (
    <div>
      <h1>React Notification Example</h1>
      <button onClick={() => showNotification("Info message!", "info", 4000)}>
        Show Info Notification
      </button>
      <button
        onClick={() => showNotification("Success message!", "success", 5000)}
      >
        Show Success Notification
      </button>
      <button
        onClick={() => showNotification("Warning message!", "warning", 6000)}
      >
        Show Warning Notification
      </button>
      <button onClick={() => showNotification("Error message!", "error", 7000)}>
        Show Error Notification
      </button>

      <Notification
        notifications={notifications}
        removeNotification={removeNotification}
      />
    </div>
  );
}

export default MainNoti;
