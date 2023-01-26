import './Home.css';
import { useState } from 'react';


import ListaAtividades from 'components/ListaAtividades/ListaAtividades'
import Navbar from 'components/Navbar/Navbar';
import AtividadesFormModal from 'components/AtividadesFormModal/AtividadesFormModal';

function Home() {

  const [canShowAdicionaAtividadeModal, setCanShowAdicionaAtividadeModal] = useState(false);

  return (
    <div className="Home">

      <div className="Navbar">
        <Navbar createAtividade={() => setCanShowAdicionaAtividadeModal(true)} />
      </div>

      <div className="Home__container">
        <ListaAtividades />

      {
        canShowAdicionaAtividadeModal && (<AtividadesFormModal closeModal={() => setCanShowAdicionaAtividadeModal(false)}/>)
      }

      </div>
    </div>
  );
}


export default Home;