import './Home.css';
import { useEffect, useState } from 'react';



import Navbar from 'components/Navbar/Navbar';
import AtividadeLista from 'components/ListaAtividades/ListaAtividades';
import AtividadesFormModal from 'components/AtividadesFormModal/AtividadesFormModal';



function Home() {

  const [canShowAdicionaAtividadeModal, setCanShowAdicionaAtividadeModal] = useState(false);

  const [atividadeParaAdicionar, setAtividadeParaAdicionar] = useState();

  const [atividades, setAtividades] = useState([]);

  const adicionaAtividadeNaLista = (atividade) => {
    const lista = [...atividades, atividade];
    setAtividades(lista);
  };

  useEffect(() => {
    if (atividadeParaAdicionar) adicionaAtividadeNaLista(atividadeParaAdicionar);
  }, [atividadeParaAdicionar]);


  return (
    <div className="Home">

      <div className="Navbar">
        <Navbar createAtividade={() => setCanShowAdicionaAtividadeModal(true)} />
      </div>

      <div className="Home__container">

        <AtividadeLista

        />
        {
          canShowAdicionaAtividadeModal && (<AtividadesFormModal closeModal={() => setCanShowAdicionaAtividadeModal(false)} onCreateAtividade={(atividade) => setAtividadeParaAdicionar(atividade)} />)
        }

      </div>
    </div>
  );
}


export default Home;