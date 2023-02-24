import './Home.css';
import { useEffect, useState } from 'react';
import { ActionMode } from "constants/index";




import Navbar from 'components/Navbar/Navbar';
import AtividadeLista from 'components/ListaAtividades/ListaAtividades';
import AtividadesFormModal from 'components/AtividadesFormModal/AtividadesFormModal';
import DeleteAtividadeModal from 'components/DeleteAtividadeModal/DeleteAtividadeModal';


function Home() {

  const [canShowAdicionaAtividadeModal, setCanShowAdicionaAtividadeModal] = useState(false);


  const [atividades, setAtividades] = useState([]);
  const [modoAtual, setModoAtual] = useState(ActionMode.NORMAL);

  const [atividadeParaAdicionar, setAtividadeParaAdicionar] = useState();
  const [atividadeParaEditar, setAtividadeParaEditar] = useState();
  const [atividadeParaDeletar, setAtividadeParaDeletar] = useState();

  const [atividadeRemovida, setAtividadeRemovida] = useState();

  const handleDeleteAtividade = (atividadeToDelete) => {
    setAtividadeParaDeletar(atividadeToDelete);
  }

  const handleUpdateAtividade = (atividadeToUpdate) => {
    setAtividadeParaEditar(atividadeToUpdate);
    setCanShowAdicionaAtividadeModal(true);
  }

  const handleCloseModal = () => {
    setCanShowAdicionaAtividadeModal(false);
    setAtividadeParaAdicionar();
    setAtividadeParaDeletar();
    setAtividadeParaEditar();
  }

  const handleActions = (action) => {
    const novaAcao = modoAtual === action ? ActionMode.NORMAL : action;
    setModoAtual(novaAcao);
  }

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

        <Navbar
          mode={modoAtual}
          createAtividade={() => setCanShowAdicionaAtividadeModal(true)}
          updateAtividade={() => handleActions(ActionMode.ATUALIZAR)}
          deleteAtividade={() => handleActions(ActionMode.DELETAR)}
        />

      </div>

      <div className="Home__container">

        <AtividadeLista
          mode={modoAtual}
          atividadeCriada={atividadeParaAdicionar}
          deleteAtividade={handleDeleteAtividade}
          updateAtividade={handleUpdateAtividade}
          atividadeRemovida={atividadeRemovida}
        />

        {
          canShowAdicionaAtividadeModal && (
            <AtividadesFormModal
              closeModal={handleCloseModal}
              mode={modoAtual}
              atividadeToUpdate={atividadeParaEditar}
            />)
        }

        {
          atividadeParaDeletar &&
          <DeleteAtividadeModal
            atividadeParaDeletar={atividadeParaDeletar}
            closeModal={handleCloseModal}
            onDeleteAtividade={(atividade) => setAtividadeRemovida(atividade)}
          />
        }
      </div>
    </div>
  );
}


export default Home;