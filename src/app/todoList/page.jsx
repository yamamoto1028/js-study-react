"use client";
import styles from "./todoList.module.css";
// import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
// import { Main } from "@/app/components/Main";
import { Title } from "@/app/components/Title";
import { InputForm } from "@/app/components/InputForm";
import { MustList } from "@/app/components/MustList";
import { useState } from "react";
import { useBgLightBlue } from "@/app/hooks/useBgLightBlue";

export default function todoList() {
  const [taskList, setTaskList] = useState([]); //配列で用意
  useBgLightBlue();
  return (
    <div className={styles.body}>
      <Header />
      <div className={styles.listPage}>
        <Title />
        <InputForm taskList={taskList} setTaskList={setTaskList} />
        <MustList taskList={taskList} setTaskList={setTaskList} />
      </div>
      {/* <Main page="To do" /> */}
      {/* <Footer /> */}
    </div>
  );
}
