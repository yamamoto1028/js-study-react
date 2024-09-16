"use client";
import Image from "next/image";
import styles from "@/app/components/Footer/Footer.module.css";

export function FooterImage(props) {
  return (
    <footer className={styles.Footer}>
      {props.text}
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
