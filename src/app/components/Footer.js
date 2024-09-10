"use client";
import Image from "next/image";
import styles from "../page.module.css";

export function Footer() {
  return (
    <footer className={styles.Footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      />
      Thanks By{" "}
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className={styles.vercelLogo}
        width={100}
        height={24}
        priority
      />
    </footer>
  );
}
