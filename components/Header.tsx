import React from "react";

// Definir props para o Header
interface HeaderProps {
  imageSrc: string;
}

const Header: React.FC<HeaderProps> = ({ imageSrc }) => {
  return (
    <div>
      {/* Nome da empresa */}
      <div className="bg-[#268735] w-full h-20 text-white flex items-center justify-center font-semibold text-2xl shadow-2xl">
        LONA <span className="text-yellow-300">+</span>
      </div>
      {/* Espaço reservado para a imagem */}
      <div className="w-full h-[300px] md:h-[560px] bg-gray-200 flex items-center justify-center">
        <img src={imageSrc} alt="Banner" className="w-full h-full " />
      </div>
    </div>
  );
};

export default Header;
