"use client";
import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import { Main } from "@/app/components/Main";
import "@/app/about/about.module.css";

export default function About() {
  return (
    <>
      <Header />
      <Main page="about" />
      <Footer />
    </>
  );
}
