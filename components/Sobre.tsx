import React from "react";

const Sobre = () => {
  return (
    <div className="bg-[#f2f5f7] py-16 flex flex-col items-center">
      {/* Título */}
      <h2 className="text-[#268735] text-3xl font-bold mb-8">
        SOBRE A LONA +
      </h2>

      {/* Caixa verde com texto */}
      <div className="relative left-0 w-[70%] h-[300px] bg-[#4B994B] p-8 text-white shadow-md">
        <p>
          Nossa missão é entregar aos nossos clientes lonas da melhor qualidade,
          para você usar como cobertura de cargas, tendas, galpões e capas de piscinas.
        </p>
        <p className="mt-4">
          Sejam lonas com medidas pré-estabelecidas até lonas especialmente confeccionadas ao gosto do cliente.
        </p>

        {/* Setas decorativas */}
        {/* <div className="absolute bottom-[-20px] right-[-40px] w-[200px] h-[50px] bg-yellow-400 "></div> */}
      </div>
    </div>
  );
};

export default Sobre;
