import React from 'react';
import Header from './components/Header';
import Servicos from './components/Servicos';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Promocoes from './components/Promocoes';
import SobreENos from './components/SobreENos';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero/>
      <Promocoes/>
      <Servicos />
     <SobreENos/>
      <Footer />
    </div>
  );
}

export default App;
