import React from "react";

const Nav = () => {
    return (
        <div>
            {/* Navegação */}
            <nav className="bg-[#268735] w-full h-16 flex items-center justify-center gap-24 px-4 md:px-16 text-white text-lg font-semibold">
                <a href="#" className="hover:text-blue-400">Produtos</a>
                <a href="#" className="hover:text-blue-400">Início</a>
                <a href="#" className="hover:text-blue-400">Contato</a>
            </nav>
        </div>
    );
}

export default Nav;
