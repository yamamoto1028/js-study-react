"use client";
import Image from "next/image";
import styles from "@/app/components/Main/Main.module.css";
import { Headline } from "@/app/components/Headline";
import { Links } from "@/app/components/Links";
import { useCallback, useEffect, useState } from "react";

export function Main(props) {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);
  const [array, setArray] = useState([]);

  const handleClick = useCallback(() => {
    console.log(count);
    if (count < 10) {
      setCount((prevCount) => prevCount + 1);
    }
  }, [count]);

  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);

  const hundleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      //5文字以上入力したらアラート出してリターンで文字数制御
      alert("5文字以内にしてください");
      return;
    }
    setText(e.target.value.trim()); //スペース打たせない制御。他にも色々ある
  }, []);

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.some((item) => item === text)) {
        alert("同じ要素がすでに存在します。");
        return prevArray;
      }
      return [...prevArray, text]; //スプレッド構文→MDN見て学習　破壊的メソッドは基本的に使ってはいけないため
    });
  }, [text]);

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <main className={styles.main}>
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

      <Headline page={props.page}>
        <code className={styles.code}>src/app/{props.page}.jsx</code>
      </Headline>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </div>
      <Links />
    </main>
  );
}
