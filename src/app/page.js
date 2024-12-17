'use client';
import { useState } from 'react';
import Topo from '@/app/components/Topo';
import Banner from '@/app/components/Banner';
import SecaoExp from '@/app/components/SecaoExpTrabalho';
import Rodape from '@/app/components/Rodape';
import estilos from './page.module.css';

export default function Home() {

  const [ehTemaEscuro, setTemaEscuro] = useState(false);

  function alterarTema() {
    setTemaEscuro(!ehTemaEscuro);
  }

  return (
    <div className={estilos.container}>
      <Topo alterarTema={alterarTema} ehTemaEscuro={ehTemaEscuro}/>
      <main>
          <Banner ehTemaEscuro={ehTemaEscuro}/>
          <SecaoExp ehTemaEscuro={ehTemaEscuro}/>
      </main>
      <Rodape ehTemaEscuro={ehTemaEscuro}/>
    </div>
  );
}
