"use client";
import Link from "next/link";
import styles from "@/app/components/Header/Header.module.css";

export function Header() {
  return (
    <header className={styles.Header}>
      <Link href="/" className={styles.anchor}>
        Index
      </Link>
      <Link href="/about" className={styles.anchor}>
        About
      </Link>
    </header>
  );
}
