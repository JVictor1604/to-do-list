import "./DeleteAtividadeModal.css"
import Modal from "components/Modal/Modal";
import { api } from "utils/api";

function DeleteAtividadeModal({ closeModal, atividadeParaDeletar, onDeleteAtividade }) {
  
    const handleDelete = async (atividade) => {
    await api.deleteAtividade(atividade.id);
    onDeleteAtividade(atividade);
    closeModal();
  };

  return (
    <Modal closeModal={closeModal}>
      <div className="DeletaAtividadeModal">
        <h2>Confirme sua Ação</h2>
        
        <p>
          Você realmente deseja remover esta Atividade?
        </p>

        <br />

        <div>
          <button
            onClick={() => handleDelete(atividadeParaDeletar)}
            className="DeletaAtividadeModal__confirmar"
          >
            {" "}
            Sim{" "}
          </button>
          <button onClick={closeModal} className="DeletaAtividadeModal__cancelar">
            {" "}
            Cancelar{" "}
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteAtividadeModal;