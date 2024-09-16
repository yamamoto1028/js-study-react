"use client";
import Image from "next/image";
import styles from "@/app/components/Main/Main.module.css";
import { Headline } from "@/app/components/Headline";
import { Links } from "@/app/components/Links";
import { useEffect, useState } from "react";

export function Main(props) {
  const [count, setCount] = useState(1);

  const handleClick = (e) => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <main className={styles.main}>
      <h1>{count}</h1>
      <button href="/about" onClick={handleClick}>
        ボタン
      </button>
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
