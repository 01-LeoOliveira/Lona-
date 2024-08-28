import React from "react";
import Nav from "@/components/Nav";
import Header from "@/components/Header";

const Piscina: React.FC = () => {
  return (
    <div>
      {/* Passando a imagem específica da piscina para o Header */}
      <Header imageSrc="/imagens/Page-piscina.png" />
      <Nav />
      {/* Conteúdo específico da página */}
      <div className="py-8 px-4">
        {/* Adicionei `mb-10` para aumentar a margem inferior do <h1> */}
        <h1 className="text-4xl font-bold text-center text-[#268735] mb-10">
          Lona para Piscina
        </h1>
        <div className="flex justify-start">
          {/* Contêiner externo que posiciona o bloco à esquerda e adiciona seta */}
          <div className="relative bg-[#4B994B] text-white p-6 md:p-10 lg:p-12 rounded-lg shadow-lg
          w-full md:w-3/5 ml-0 mr-auto before:content-[''] before:absolute before:right-[-30px] before:top-0 
          before:bottom-0 before:border-y-[30px] before:border-y-transparent before:border-l-[30px] before:border-l-[#4B994B] 
          rounded-r-none md:before:right-[-40px] md:before:border-y-[70px] md:before:border-l-[40px]">
            {/* Bloco interno para o texto */}
            <p className="text-left">
              Nossas lonas são da mais alta qualidade, nesta sessão você pode verificar as lonas para piscinas já prontas, ou solicitar uma a partir da opção “Produto Personalizado”.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Piscina;
