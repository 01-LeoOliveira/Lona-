import React from "react";

const Header = () => {
  return (
    <div>
      {/* Nome da empresa */}
      <div className="bg-[#268735] w-full h-20 text-white flex items-center justify-center font-semibold text-2xl shadow-2xl">
        LONA <span className="text-yellow-300">+</span>
      </div>
      
      {/* Espaço reservado para a imagem */}
      <div className="w-full h-[300px] md:h-[560px] bg-gray-200 flex items-center justify-center">
        {/* Adicione sua imagem aqui */}
        <img src="/path/to/your/image.jpg" alt="Banner" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Header;
