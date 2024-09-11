"use client";
import { Footer } from "../components/Footer.js";
import { Header } from "../components/Header.js";
import { Main } from "../components/Main.js";
import "./about.module.css";

export default function About() {
  return (
    <div>
      <Header />
      <Main page="about" />
      <Footer />
    </div>
  );
}
