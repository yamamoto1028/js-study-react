import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import { Main } from "@/app/components/Main";
import "@/app/about/about.module.css";

export const metadata = {
  title: "About Page",
  description: "Learn more about our company on the about page",
};

export default function About() {
  return (
    <>
      <Header />
      <Main page="about" />
      <Footer />
    </>
  );
}
