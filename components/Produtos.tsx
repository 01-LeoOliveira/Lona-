import React from "react";

const Produtos = () => {

    return (
        <div>
            <div className="bg-[#f2f5f7] py-16 flex flex-col items-center">
                <h2 className="text-[#268735] text-3xl font-semibold">PRODUTOS</h2>

                <div className="bg-[#D7E8D7] w-[100%] p-8 rounded-md flex justify-around items-center">
                    {/* Seta esquerda */}
                    <div className="absolute left-0 ml-4 bg-[#4B994B] p-2 rounded-full cursor-pointer">
                        <span className="text-white text-2xl">{"<"}</span>
                    </div>

                    {/* Galeria de produtos */}
                    <div className="grid grid-cols-4 gap-4 mx-auto">
                        {/* Produto 1 */}
                        <div className="text-center">
                            <p className="mt-2 font-semibold">Lona para Caminhão</p>
                            <img
                                src="/imagens/caminhão.png" // Substitua pelo caminho correto da imagem
                                alt="Lona para Caminhão"
                                className="rounded-lg shadow-md border-[#45ee72] border-4"
                            />
                        </div>
                        {/* Produto 2 */}
                        <div className="text-center">
                            <p className="mt-2 font-semibold">Lona para Piscina</p>
                            <img
                                src="/imagens/piscina.png" // Substitua pelo caminho correto da imagem
                                alt="Lona para Piscina"
                                className="rounded-lg shadow-md border-[#45ee72] border-4"
                            />
                        </div>
                        {/* Produto 3 */}
                        <div className="text-center">
                            <p className="mt-2 font-semibold">Tendas</p>
                            <img
                                src="/imagens/tenda.png" // Substitua pelo caminho correto da imagem
                                alt="Tendas"
                                className="rounded-lg shadow-md border-[#45ee72] border-4"
                            />
                        </div>
                        {/* Produto 4 */}
                        <div className="text-center">
                            <p className="mt-2 font-semibold">Lona para Galpões</p>
                            <img
                                src="/imagens/galpões.png" // Substitua pelo caminho correto da imagem
                                alt="Lona para Galpões"
                                className="rounded-lg shadow-md border-[#45ee72] border-4"
                            />
                        </div>
                    </div>

                    {/* Seta direita */}
                    <div className="absolute right-0 text-center justify-center items-center mr-4 w-[10%] h-[10%] bg-[#337333]  cursor-pointer">
                        <span className="text-white text-2xl">{">"}</span>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Produtos