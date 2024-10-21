"use client";
import styles from "@/app/about/about.module.css";
import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import { Main } from "@/app/components/Main";

export default function todoList() {
  return (
    <div className={styles.main}>
      <Header />

      <Main page="To do" />
      <Footer />
    </div>
  );
}
