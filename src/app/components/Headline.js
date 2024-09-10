"use client";
import styles from "./Headline.module.css";
import { FooterImage } from "./FooterImage";

export function Headline(props) {
  return (
    <div>
      <h1 className={styles.title}>{props.page} page</h1>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          {props.children}
        </p>
      </div>
      <div>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FooterImage text="By " />
        </a>
      </div>
    </div>
  );
}
