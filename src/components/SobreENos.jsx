import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';


export default function SobreENos() {
  return (
    <section className="bg-black py-16 px-4 md:px-8">
      <div className="bg-black flex flex-col md:flex-row">
        {/* Primeira Seção: SOBRE NOS */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md mb-8 md:mb-0 md:mr-4">
          <h2 className="text-3xl font-bold mb-4 text-white" style={textShadowStyle}>SOBRE NÓS</h2>
          <p className="text-lg text-black">
            Aqui você encontra um pouco mais sobre nossa história e missão. Nosso objetivo é oferecer o melhor serviço de barbearia com qualidade e atenção aos detalhes. Venha nos visitar e descubra tudo o que temos a oferecer! <br />
            <b>Estamos localizados neste endereço: Rua Antônio Vicente Ferreira 767 planalto</b>
          </p>
        </div>

        {/* Segunda Seção: Redes Sociais */}
        <div className="flex-1 bg-cover bg-center h-64 rounded-lg">
          <div className="flex flex-col justify-center items-center h-full bg-black bg-opacity-50 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-white mb-4">Nos siga nas redes sociais</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/ismaelbarbearia/" target="_blank" rel="noopener noreferrer" className="text-white text-3xl">
                <FaInstagram />
              </a>
      
              <a href="https://wa.me/+553492510059" target="_blank" rel="noopener noreferrer" className="text-white text-3xl">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const textShadowStyle = {
  textShadow: '4px 4px 4px rgba(0, 0, 0, 0.9)', // Adiciona uma sombra para destacar o texto
};
