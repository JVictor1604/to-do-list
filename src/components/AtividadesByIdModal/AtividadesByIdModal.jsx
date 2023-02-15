import "./AtividadesByIdModal.css"
import Modal from "components/Modal/Modal";


function AtividadesByIdModal({ closeModal, atividades }) {


    return (
        <Modal closeModal={closeModal} >
            <div className="AdicionaAtividadeModal">
                
                   <h1> {atividades.titulo} </h1>

            </div>
        </Modal>
    );
}

export default AtividadesByIdModal;