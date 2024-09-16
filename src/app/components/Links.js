"use client";
import styles from "./Links.module.css";

const ITEMS = [
  {
    key: "1",
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    title: "Docs",
    discription: "Find in-depth information about Next.js features and API.",
  },
  {
    key: "2",
    href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    title: "Learn",
    discription: "Learn about Next.js in an interactive course with quizzes!",
  },
  {
    key: "3",
    href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    title: "Templates",
    discription: "Explore starter templates for Next.js.",
  },
  {
    key: "4",
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    title: "Deploy",
    discription:
      "Instantly deploy your Next.js site to a shareable URL with Vercel.",
  },
];

export function Links() {
  return (
    <>
      <div className={styles.grid}>
        {ITEMS.map((item) => {
          return (
            <a
              key={item.key}
              href={item.href}
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                {item.title}
                <span>-&gt;</span>
              </h2>
              <p>{item.discription}</p>
            </a>
          );
        })}
      </div>
    </>
  );
}
