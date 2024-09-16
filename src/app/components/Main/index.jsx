"use client";
import Image from "next/image";
import styles from "@/app/components/Main/Main.module.css";
import { Headline } from "@/app/components/Headline";
import { Links } from "@/app/components/Links";
import { useCallback } from "react";

export function Main(props) {
  const foo = "1";
  const handleClick = useCallback((e) => {
    console.log(e.target.href);
    e.preventDefault();
    alert(foo);
  }, []);
  return (
    <main className={styles.main}>
      <Headline page={props.page}>
        <code className={styles.code}>src/app/{props.page}.jsx</code>
      </Headline>

      <a href="/about" onClick={handleClick}>
        ボタン
      </a>

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
