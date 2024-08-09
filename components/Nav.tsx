import React from "react";

const Nav = () => {
    return (
        <div>
            {/* Navegação  */}
            <nav className="bg-[#268735] w-[100%] h-16 flex items-center justify-center -space-x-80 text-white text-lg font-semibold ">
                <a href="#" className="hover:text-gray-300">Produtos</a>
                <a href="#" className="hover:text-gray-300">Início</a>
                <a href="#" className="hover:text-gray-300">Contato</a>
            </nav>
        </div>
    )
}
export default Nav