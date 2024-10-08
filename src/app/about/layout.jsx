import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "About Page",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <div lang="ja">
      <div className={inter.className}>{children}</div>
    </div>
  );
}
