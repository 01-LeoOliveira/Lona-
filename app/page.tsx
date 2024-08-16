import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Produtos from "@/components/Produtos";
import Sobre from "@/components/Sobre";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function Home() {
  return (
    <div>
      {/* Passando a imagem que você deseja exibir na Home */}
      <Header imageSrc="/imagens/logo.jpeg" />
      <Nav />
      <Sobre />
      <Produtos />
      <Contato />
      <Footer />
      <WhatsAppIcon />
    </div>
  );
}
