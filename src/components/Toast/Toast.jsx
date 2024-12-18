import React from "react";
import styles from "./Toast.module.css";

function Toast({ message, onClose }) {
  return (
    <div
      className={`${styles.toast} ${
        message.type === "error" ? styles.error : ""
      }`}
    >
      <p>{message.message}</p>
      <button className={styles.closeButton} onClick={onClose}>
        &times;
      </button>
    </div>
  );
}

export default Toast;
