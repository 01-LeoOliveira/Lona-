import React from "react";

const Sobre = () => {
  return (
    <div className="bg-[#f2f5f7] py-16 flex flex-col items-center">
      {/* Título */}
      <h2 className="text-[#268735] text-3xl font-bold mb-8">
        SOBRE A LONA +
      </h2>

      {/* Caixa verde com texto */}
      <div className="relative left-0 w-full sm:w-[90%] md:w-[80%] lg:w-[70%] h-auto bg-[#4B994B] p-6 sm:p-8 text-white shadow-md rounded-lg">
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
