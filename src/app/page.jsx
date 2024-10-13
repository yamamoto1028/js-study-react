"use client";
import styles from "@/app/page.module.css";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { Main } from "@/app/components/Main";
import { useCounter } from "@/app/hooks/useCounter";
import { useInputArray } from "@/app/hooks/useInputArray";

export default function Home() {
  const { count, isShow, handleClick, handleDisplay } = useCounter();
  const { array, text, hundleChange, handleAdd } = useInputArray();
  return (
    <div className={styles.main}>
      <Header />
      <button href="/about" onClick={handleClick}>
        ボタン
      </button>
      <input type="text" value={text} onChange={hundleChange} />
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      {isShow ? <h1>{count}</h1> : null}
      <Main page="home" />
      <Footer />
    </div>
  );
}
