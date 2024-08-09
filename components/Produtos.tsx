import React from "react";

const Produtos = () => {

    return (
        <div>
            <div className="bg-[#f2f5f7] py-16 flex flex-col items-center">
                <h2 className="text-[#268735] text-3xl font-semibold mb-8">PRODUTOS</h2>

                <div className="relative bg-[#D7E8D7] w-full p-8 rounded-md flex items-center">
                    {/* Seta esquerda */}
                    <div className="absolute left-0 flex items-center justify-center w-16 h-full bg-[#268735]/70 cursor-pointer hidden lg:flex">
                        <span className="text-white text-3xl">{"<"}</span>
                    </div>

                    {/* Galeria de produtos */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto cursor-pointer ">
                        {/* Produto 1 */}
                        <div className="text-center">
                            <p className="mt-2 font-semibold">Lona para Caminhão</p>
                            <img
                                src="/imagens/caminhão.png"
                                alt="Lona para Caminhão"
                                className="rounded-lg shadow-md border-[#45ee72] border-4"
                            />
                        </div>
                        {/* Produto 2 */}
                        <div className="text-center">
                            <p className="mt-2 font-semibold">Lona para Piscina</p>
                            <img
                                src="/imagens/piscina.png"
                                alt="Lona para Piscina"
                                className="rounded-lg shadow-md border-[#45ee72] border-4"
                            />
                        </div>
                        {/* Produto 3 */}
                        <div className="text-center">
                            <p className="mt-2 font-semibold">Tendas</p>
                            <img
                                src="/imagens/tenda.png"
                                alt="Tendas"
                                className="rounded-lg shadow-md border-[#45ee72] border-4"
                            />
                        </div>
                        {/* Produto 4 */}
                        <div className="text-center">
                            <p className="mt-2 font-semibold">Lona para Galpões</p>
                            <img
                                src="/imagens/galpões.png"
                                alt="Lona para Galpões"
                                className="rounded-lg shadow-md border-[#45ee72] border-4"
                            />
                        </div>
                    </div>

                    {/* Seta direita */}
                    <div className="absolute right-0 flex items-center justify-center w-16 h-full bg-[#268735]/70 cursor-pointer hidden lg:flex">
                        <span className="text-white text-3xl">{">"}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Produtos;
