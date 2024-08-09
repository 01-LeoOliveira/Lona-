import React from "react";

const Header = () => {
  return (
    <div>
      {/* Nome da empresa */}
      <div className="bg-[#268735] w-full h-20 text-white flex items-center justify-center font-semibold text-2xl shadow-2xl">
        LONA <span className="text-yellow-300">+</span>
      </div>
      {/* Espaço reservado para a imagem */}
      <div className="w-[100%] h-[560px] bg-gray-200 flex items-center justify-center">
        {/* Você pode adicionar uma imagem aqui */}
        <img src="/path/to/your/image.jpg" alt="Banner" className="w-[100%] h-full object-cover" />
      </div>
     
    </div>
  );
};

export default Header;
