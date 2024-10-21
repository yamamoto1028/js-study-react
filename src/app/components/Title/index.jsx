import React from "react";
import styles from "@/app/components/Title/title.module.css";

export const Title = () => {
  return (
    <div className={styles.listPage}>
      <header className={styles.todoHeader}>
        <h1 className={styles.listTitle}>toDoList</h1>
      </header>
    </div>
  );
};
