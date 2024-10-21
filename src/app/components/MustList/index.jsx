import React from "react";
import styles from "@/app/components/MustList/mustList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrashCan } from "@fortawesome/free-solid-svg-icons";

export const MustList = ({ taskList, setTaskList }) => {
  const handleDelete = (id) => {
    //タスクを削除する。
    setTaskList(taskList.filter((task) => task.id !== id));
    return;
  };

  const handleCompleted = (id) => {
    //クリック時に状態を切り替える
    setTaskList(
      taskList.map((task) => {
        if (id === task.id) {
          return {
            ...task,
            completed: !task.completed,
          };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className={styles.mustList}>
      <div className={styles.musts}>
        {taskList.map((task, index) => (
          <div
            className={task.completed ? styles.completed : styles.must}
            key={index}
          >
            <div className={styles.mustText}>
              <li>{task.text}</li>
            </div>
            <div className={styles.icons}>
              <button
                className={styles.completeBtn}
                onClick={() => handleCompleted(task.id)}
              >
                <FontAwesomeIcon icon={faCheck} className="faCheck" />
              </button>
              <button
                className={styles.deleteBtn}
                onClick={() => handleDelete(task.id)}
              >
                <FontAwesomeIcon icon={faTrashCan} className="faTrashCan" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
