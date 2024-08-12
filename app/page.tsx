import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Produtos from "@/components/Produtos";
import Sobre from "@/components/Sobre";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <Nav />
      <Sobre />
      <Produtos />
      <Contato />
      <Footer />
    </div>
  );
}
