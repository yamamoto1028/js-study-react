import { Inter } from "next/font/google";
import "../globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

// Font Awesomeの自動スタイル追加を無効にします
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "todoList Page",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <div lang="ja">
      <div className={inter.className}>{children}</div>
    </div>
  );
}
