import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#268735] text-white text-center p-4" id='contato'>
      <div className="flex items-center justify-center">
        <p>Rua do Livramento Nº 540</p>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex-grow border-t border-[#ffffffbe] mx-4"></div>
        <p>Ananindeua PA - Bairro: Centro</p>
        <div className="flex-grow border-t border-[#ffffffbe] mx-4"></div>
      </div>
      <div className="flex items-center justify-center">
        <p>CEP: 67030-130</p>
      </div>
    </footer>
  );
};

export default Footer;
