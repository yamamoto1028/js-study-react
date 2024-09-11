"use client";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import "./page.module.css";

export default function Index() {
  return (
    <div>
      <Header />
      <Main page="index" />
      <Footer />
    </div>
  );
}
