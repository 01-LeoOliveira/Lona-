import React from "react";

const Contato = () => {
    return (
        <div className="bg-[#f2f5f7] py-16 flex flex-col items-center">
            <h2 className="text-[#268735] text-3xl font-semibold mb-8">CONSULTORIA E DÚVIDAS</h2>
            <form className="bg-white w-[80%] md:w-[60%] lg:w-[50%] p-8 rounded-md shadow-md">
                <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
                    <div className="w-full md:w-1/2 mb-4 md:mb-0">
                        <label htmlFor="nome" className="block text-gray-700 font-semibold mb-2">Nome</label>
                        <input
                            type="text"
                            id="nome"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#268735]"
                            placeholder="Digite seu nome"
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <label htmlFor="telefone" className="block text-gray-700 font-semibold mb-2">Telefone</label>
                        <input
                            type="tel"
                            id="telefone"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#268735]"
                            placeholder="Digite seu telefone"
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">E-mail</label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#268735]"
                        placeholder="Digite seu e-mail"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="assunto" className="block text-gray-700 font-semibold mb-2">Assunto</label>
                    <textarea
                        id="assunto"
                        className="w-full h-[250px] px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#268735]"
                        placeholder="Digite sua mensagem"
                    ></textarea>
                </div>
                <button type="submit" className="w-full bg-[#268735] text-white py-2 rounded-md hover:bg-[#47a047]">
                    Enviar
                </button>
            </form>
        </div>
    );
};

export default Contato;
