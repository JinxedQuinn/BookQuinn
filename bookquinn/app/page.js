import Image from "next/image";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Presentation from "./components/Presentation";
import Skills from "./components/Skills";
import CV from "./components/Cvcomponent";
import Contact from "./components/Contact";
import Infos from "./components/Infos";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Presentation />
      <Contact />
      <Infos />
      <Footer />
    </>
  );
}