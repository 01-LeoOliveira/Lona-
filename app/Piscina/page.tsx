import React from "react";
import Nav from "@/components/Nav";
import Header from "@/components/Header";

const Piscina = () => {
  return (
    <div>
      {/* Passando a imagem específica da piscina para o Header */}
      <Header imageSrc="/imagens/Page-piscina.png" />
      <Nav />
      {/* Conteúdo específico da página */}
      <div className="py-8 px-4">
        <h1 className="text-3xl font-bold text-center text-[#268735]">Lona para Piscina</h1>
        <p className="mt-4 text-lg text-gray-700 text-center max-w-2xl mx-auto bg-piscina text-white p-4 rounded-lg">
          Nossa lona para piscina é fabricada com material de alta resistência, ideal para proteger e manter a água da sua piscina sempre limpa. Disponível em várias dimensões e cores para se adequar às suas necessidades. 
          Aproveite a qualidade e durabilidade que somente a nossa lona pode oferecer!
        </p>

        {/* Opcional: Se quiser adicionar uma imagem ou detalhes extras */}
        <div className="flex justify-center mt-8">
          <img
            src="/imagens/bg.png"
            alt="Detalhes da Lona para Piscina"
            className="rounded-lg shadow-lg w-full max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Piscina;
