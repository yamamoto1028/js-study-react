"use client";
import styles from "@/app/about/about.module.css";
import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import { Main } from "@/app/components/Main";
import { useCounter } from "@/app/hooks/useCounter";
import { useInputArray } from "@/app/hooks/useInputArray";

export default function About() {
  const { count, isShow, handleClick, handleDisplay } = useCounter();
  const { array, text, hundleChange, handleAdd } = useInputArray();
  return (
    <div className={styles.main}>
      <Header />
      {isShow ? <h1>{count}</h1> : null}
      <button href="/about" onClick={handleClick}>
        ボタン
      </button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>

      <input type="text" value={text} onChange={hundleChange} />
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>

      <Main page="about" />
      <Footer />
    </div>
  );
}
