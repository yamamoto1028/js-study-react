"use client";
import styles from "./Footer.module.css";
import { FooterImage } from "./FooterImage";

export function Footer() {
  return (
    <footer className={styles.Footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      />
      <FooterImage text="Thanks By " />
    </footer>
  );
}
