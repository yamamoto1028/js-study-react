"use client";
import Image from "next/image";
import styles from "./Main.module.css";
import { Headline } from "./Headline";
import { Links } from "./Links";

export function Main(props) {
  return (
    <main className={styles.main}>
      <Headline page={props.page}>
        <code className={styles.code}>src/app/{props.page}.js</code>
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
      <Links />
    </main>
  );
}
