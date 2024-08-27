import React from 'react';
import { useInView } from 'react-intersection-observer';
import heroBg from '../assets/bg-hero.jpg';

export default function Hero() {
  const { ref,} = useInView({
    triggerOnce: false, 
    threshold: 0.1,
  });

  return (
    
    <section 
      id="hero" 
      className="bg-cover bg-center h-[60vh] flex flex-col justify-center items-center text-white"
      style={{ backgroundImage: `url(${heroBg})` }}
      ref={ref} // Aplica o ref para detecção de visibilidade
    >
    </section>
    
   
  );
}


