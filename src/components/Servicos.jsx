import React from 'react';
import { motion } from 'framer-motion'; // Importa o framer-motion para animações
import { useInView } from 'react-intersection-observer'; // Importa o hook de observação
// Importe as imagens dos serviços
import corteBarbaImg from '../assets/corte-barba.jpg'; 
import corteSelagem from '../assets/corte-selagem.jpg';
import corte from '../assets/corte.jpg';
import barba from '../assets/barba.jpg';
import sobrancelha from '../assets/sobrancelha.jpg';
import higienizacao from '../assets/higienizacao.jpg';
import higienizacaoSimples from '../assets/higienizacao-simples.jpg';
import alinhamentoCorte from '../assets/alinhamentoCorte.jpg';
import limpezaPele from '../assets/limpeza-de-pele.jpg';
import pigmentacao from '../assets/pigmentacao.jpg';
import acabamento from '../assets/acabamento.jpg';
import hidratacao from '../assets/hidratacao.jpg';
import hindu from '../assets/hindu.jpg';
import corteHindu from '../assets/corte-hindu.jpg';


export default function Servicos() {
  const { ref: servicosRef, inView } = useInView({
    triggerOnce: false, // Permite que a animação seja disparada múltiplas vezes
    threshold: 0.1 // Define o percentual de visibilidade para disparar a animação
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 }, // Movimenta o elemento de baixo para cima
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const fadeInDown = {
    hidden: { opacity: 0, y: -40 }, // Movimenta o elemento de cima para baixo
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const servicos = [
    { nome: "Corte e barba (Segunda a Quarta)", preco: "R$ 59,99", imagem: corteBarbaImg },
    { nome: "Corte e selagem (Segunda a Quarta)", preco: "R$ 59,99", imagem: corteSelagem },
    { nome: "Corte", preco: "R$ 35,00", imagem: corte },
    { nome: "Barba", preco: "R$ 35,00", imagem: barba },
    { nome: "Sobrancelha", preco: "R$ 10,00", imagem: sobrancelha },
    { nome: "Higienização completa", preco: "R$ 20,00", imagem: higienizacao },
    { nome: "Higienização simples", preco: "R$ 15,00", imagem: higienizacaoSimples },
    { nome: "Corte + Alinhamento de fios", preco: "R$ 100,00", imagem: alinhamentoCorte },
    { nome: "Limpeza de pele", preco: "R$ 25,00", imagem: limpezaPele },
    { nome: "Pigmentação", preco: "R$ 20,00", imagem: pigmentacao },
    { nome: "Acabamento cabelo ou barba", preco: "R$ 20,00", imagem: acabamento },
    { nome: "Hidratação", preco: "R$ 20,00", imagem: hidratacao },
    { nome: "Hindu", preco: "R$ 49,99", imagem: hindu },
    { nome: "Corte+Hindu", preco: "R$ 79,99", imagem: corteHindu },
  ];

  return (
    <section id="servico2" className="py-16 bg-black text-center px-4 md:px-8" ref={servicosRef}>
      <h2 style={textShadowStyle} className="text-4xl text-white font-bold mb-6">Nossos Serviços</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicos.map((servico, index) => (
          <motion.div 
            key={index} 
            className="bg-gray-100 p-6 rounded-lg shadow-md"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={index % 2 === 0 ? fadeInUp : fadeInDown} // Alterna a animação com base no índice
          >
            {servico.imagem && (
              <img
                src={servico.imagem}
                alt={servico.nome}
                className="w-full h-48 object-cover rounded-md mb-4"
                loading="lazy"
              />
            )}
            <h3 className="text-xl font-bold">{servico.nome}</h3>
            <p className="mt-2 text-lg font-semibold text-gray-700">{servico.preco}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const textShadowStyle = {
  textShadow: '4px 4px 4px rgba(0, 0, 0, 0.9)', // Adiciona uma sombra para destacar o texto
};
