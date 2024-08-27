import React from 'react';
import { motion } from 'framer-motion'; // Importa o framer-motion para animações
import { useInView } from 'react-intersection-observer'; // Hook para observar a visibilidade do componente
import corteBarbaImg from '../assets/cortebarba.jpg';
import limpezaPeleImg from '../assets/limpeza-pele.jpg';
import higienizacaoCompletaImg from '../assets/higienizacao-completa.jpg';
import bgPromocoes from '../assets/promocoes-bg.jpg';

export default function Promocoes() {
  const { ref, inView } = useInView({
    triggerOnce: false, // Permite que a animação seja disparada várias vezes
    threshold: 0.2, // Define o percentual de visibilidade para disparar a animação
  });

  // Definindo as variantes da animação
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: i * 1.2 }, // Atraso para a sequência de palavras
    }),
  };

  return (
    <section
      style={{ backgroundImage: `url(${bgPromocoes})` }}
      id="promocoes"
      className="py-16 bg-gray-200 text-center"
    >
      <motion.h2
        ref={ref} // Usa o ref para monitorar a visibilidade do componente
        className="text-white text-4xl font-bold mb-8"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'} // Animação só é ativada quando o componente está visível
      >
        <motion.span
          variants={fadeIn}
          custom={0} // Aparece primeiro
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'} // Controla a animação com base na visibilidade
          style={textShadowStyle}
        >
          Promoção
        </motion.span>
        <motion.span
          variants={fadeIn}
          custom={1} // Aparece depois
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'} // Controla a animação com base na visibilidade
          className="ml-2"
        >
          da Semana
        </motion.span>
      </motion.h2>

      <div className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
        {/* Primeira linha */}
        <div className="flex justify-between items-center mb-4">
          <img
            src={corteBarbaImg}
            alt="Corte e Selagem"
            className="w-20 h-20 rounded-full"
            loading="lazy"
          />
          <div className="flex-1 px-4">
            <h3 className="text-2xl font-bold">CORTE e SELAGEM</h3>
            <p className="text-xl">(ou) CORTE e BARBA</p>
          </div>
        </div>

        {/* Segunda linha */}
        <div className="flex justify-between items-center mb-4 bg-black text-white rounded-lg p-4">
          <div className="flex-1">
            <h3 className="text-2xl font-bold">LIMPEZA DE PELE</h3>
          </div>
          <img
            src={limpezaPeleImg}
            alt="Limpeza de Pele"
            className="w-23 h-20 rounded-full"
            loading="lazy"
          />
        </div>

        {/* Terceira linha */}
        <div className="flex justify-between items-center mb-4">
          <img
            src={higienizacaoCompletaImg}
            alt="Higienização Completa"
            className="w-20 h-20 rounded-full"
            loading="lazy"
          />
          <div className="flex-1 px-4">
            <h3 className="text-2xl font-bold">HIGIENIZAÇÃO COMPLETA</h3>
          </div>
        </div>
         {/* Quarta linha */}
         <div className="flex justify-between items-center mb-4 bg-black text-white rounded-lg p-4">
          <div className="flex-1">
            <h3 className="text-2xl font-bold">SOBRANCELHAS</h3>
          </div>
          </div>
        {/* Preço da promoção */}
        <div className="text-center bg-yellow-300 p-4 rounded-lg shadow-md">
          <p className="text-xl font-bold line-through">De R$ 150,00</p>
          <p className="text-3xl font-bold text-black">Por R$ 100,00</p>
          <p className="text-sm text-gray-700">(Promoção válida de segunda a quarta)</p>
        </div>
      </div>
    </section>
  );
}

const textShadowStyle = {
  textShadow: '4px 4px 4px rgba(0, 0, 0, 0.9)', // Adiciona uma sombra para destacar o texto
};
