import React from "react";
import Header from "./Header"; // Certifique-se do caminho correto para o componente Header
import Nav from "./Nav"; // Certifique-se do caminho correto para o componente Nav

const Piscina = () => {
  return (
    <div id="piscina">
      {/* Passando a imagem específica da piscina para o Header */}
      <Header imageSrc="/imagens/Page-piscina.png" />
      <Nav />
      
      {/* Conteúdo específico da página */}
      <div className="py-8 px-4">
        <h1 className="text-3xl font-bold text-center text-[#268735]">Lona para Piscina</h1>
        <p className="mt-4 text-lg text-gray-700 text-center">
          Descrição do produto de lona para piscina. Detalhes, características, etc.
        </p>
      </div>
    </div>
  );
};

export default Piscina;
