import React from "react";
import backgroundImage from '../public/imagens/caminhão.png';
 // Substitua pelo caminho correto da sua imagem

const Sobre = () => {
  return (
    <div className="py-16 flex flex-col items-center" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
      {/* Título */}
      <h2 className="text-white text-3xl font-bold mb-8">
        SOBRE A LONA +
      </h2>

      {/* Caixa com texto */}
      <div className="relative left-0 w-full sm:w-[90%] md:w-[80%] lg:w-[70%] h-auto bg-white p-6 sm:p-8 text-black shadow-md rounded-lg">
        <p className="text-sm sm:text-base md:text-lg">
          Nossa missão é entregar aos nossos clientes lonas da melhor qualidade,
          para você usar como cobertura de cargas, tendas, galpões e capas de piscinas.
        </p>
        <p className="mt-4 text-sm sm:text-base md:text-lg">
          Sejam lonas com medidas pré-estabelecidas até lonas especialmente confeccionadas ao gosto do cliente.
        </p>
      </div>
    </div>
  );
};

export default Sobre;
