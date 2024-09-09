import Image from "next/image";
import styles from "../page.module.css";
import { Footer } from "../components/Footer.js";
import { Links } from "../components/Links";
import { Headline } from "../components/Headline";

export default function About() {
  return (
    <main className={styles.main}>
      <Headline page="about" />

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
      <Footer />
    </main>
  );
}
