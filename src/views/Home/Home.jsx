import './Home.css';
import { useEffect, useState } from 'react';
import { api } from 'utils/api';


import ListaAtividades from 'components/ListaAtividades/ListaAtividades'
import Navbar from 'components/Navbar/Navbar';
import AtividadesFormModal from 'components/AtividadesFormModal/AtividadesFormModal';
import AtividadesByIdModal from 'components/AtividadesByIdModal/AtividadesByIdModal';


function Home() {

  const [canShowAdicionaAtividadeModal, setCanShowAdicionaAtividadeModal] = useState(false);

  const [canShowAtividadeByIdModal, setCanShowAtividadeByIdModal] = useState(false);

  const [atividadeParaAdicionar, setAtividadeParaAdicionar] = useState();

  const [atividades, setAtividades] = useState([]);

  const getAtividadeById = async (atividadeId) => {
    const response = await api.getAtividadeById(atividadeId);
    setAtividades(response);
  }

  useEffect(() => {getAtividadeById();}, [])

  return (
    <div className="Home">

      <div className="Navbar">
        <Navbar createAtividade={() => setCanShowAdicionaAtividadeModal(true)} />
      </div>

      <div className="Home__container">
        <ListaAtividades atividadeCriada={atividadeParaAdicionar}/>

        {
          canShowAdicionaAtividadeModal && (<AtividadesFormModal closeModal={() => setCanShowAdicionaAtividadeModal(false)} onCreateAtividade={(atividade) => setAtividadeParaAdicionar(atividade)} />)
        }

        {
          canShowAtividadeByIdModal && (<AtividadesByIdModal closeModal={() => setCanShowAtividadeByIdModal(false)} 
          atividades={atividades}
           />)
        }

      </div>
    </div>
  );
}


export default Home;