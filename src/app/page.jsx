"use client";
import "./page.module.css";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { Main } from "@/app/components/Main";

export default function Index() {
  return (
    <>
      <Header />
      <Main page="index" />
      <Footer />
    </>
  );
}
