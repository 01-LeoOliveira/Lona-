import React from "react";
import Link from "next/link"; // Importando Link para roteamento
const Produtos = () => {
    return (
        <div id="produtos">
            {/* Título dos produtos */}
            <div className="py-8 flex justify-center">
                <h2 className="text-[#268735] text-3xl font-semibold">PRODUTOS</h2>
            </div>

            {/* galeria de produtos */}
            <div className="py-8 bg-[#b4e9a2] flex flex-col items-center">
                <div className="flex flex-wrap justify-center gap-4">
                    <>
                        {/* produto 1 */}
                            <Link href="/Piscina" passHref> 
                                <div className="text-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer">
                                    <p className="mt-2 font-semibold">Lona para piscina</p>
                                    <img
                                        src="/imagens/piscina.png"
                                        alt="Lona para piscina"
                                        className="rounded-lg shadow-md border-[#46c2fc] border-4 h-auto w-full max-w-xs hover:border-white"
                                    />
                                </div>
                           </Link>
                        {/* produto 2 */}
                        <Link href="/pages/Tenda" passHref>
                            <div className="text-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer">
                                <p className="mt-2 font-semibold">Tendas</p>
                                <img
                                    src="/imagens/tenda.png"
                                    alt="Tendas"
                                    className="rounded-lg shadow-md border-[#46c2fc] border-4 h-auto w-full max-w-xs hover:border-white"
                                />
                            </div>
                        </Link>
                        {/* produto 3 */}
                        <Link href="/galpao" passHref>
                            <div className="text-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer">
                                <p className="mt-2 font-semibold">Lona para galpão</p>
                                <img
                                    src="/imagens/galpões.png"
                                    alt="Lona para galpão"
                                    className="rounded-lg shadow-md border-[#46c2fc] border-4 h-auto w-full max-w-xs hover:border-white"
                                />
                            </div>
                        </Link>
                        {/* produto 4 */}
                        <Link href="/caminhao" passHref>
                            <div className="text-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer">
                                <p className="mt-2 font-semibold">Lona para caminhão</p>
                                <img
                                    src="/imagens/caminhão.png"
                                    alt="Lona para caminhão"
                                    className="rounded-lg shadow-md border-[#46c2fc] border-4 h-auto w-full max-w-xs hover:border-white"
                                />
                            </div>
                        </Link>
                        {/* produto 5 */}
                        <Link href="/toldo" passHref>
                            <div className="text-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer">
                                <p className="mt-2 font-semibold">Lona para toldo</p>
                                <img
                                    src="/imagens/toldo.png"
                                    alt="Lona para toldo"
                                    className="rounded-lg shadow-md border-[#46c2fc] border-4 h-auto w-full max-w-xs hover:border-white"
                                />
                            </div>
                        </Link>
                    </>
                </div>
            </div>
        </div>
    );
};

export default Produtos;
