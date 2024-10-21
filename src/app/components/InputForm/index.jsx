import React, { useState } from "react";
import styles from "@/app/components/InputForm/inputForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";

export const InputForm = ({ taskList, setTaskList }) => {
  const [inputText, setInputtext] = useState(""); //空の文字列で用意

  const handleSubmit = (e) => {
    e.preventDefault(); //フォームの既存機能を停止する（Enterで再レンダリングしないようにする）
    //タスクを追加する
    setTaskList([
      ...taskList,
      {
        id: taskList.length,
        text: inputText,
        completed: false,
      },
    ]);
    setInputtext(""); //入力した文字を消す
  };
  const handleChange = (e) => {
    setInputtext(e.target.value);
  };

  return (
    <div className={styles.inputForm}>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={inputText} />
        <button className={styles.toDoButton}>
          <FontAwesomeIcon icon={faSquarePlus} />
        </button>
      </form>
    </div>
  );
};
