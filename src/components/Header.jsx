import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import ismaelIco from '../assets/logo-ismael.ico';

export default function Header() {
  return (
    <header className="bg-black text-white p-4 fixed w-full top-0 shadow-md">
      <nav className="flex justify-between items-center">
        
        <img 
          src={ismaelIco} 
          alt="Logo Ismael" 
          className="h-10 w-15 md:h-14 md:w-26 lg:h-20 lg:w-36" 
        />
        
        <ul className="flex space-x-8">
          <li><a href="#promocoes">Promoções</a></li>
          <li><a href="#servico2">Nossos Serviços</a></li>
          <li>
            <a 
              href="https://wa.me/+553492510059" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <FaWhatsapp className="text-green-500" size={24} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
