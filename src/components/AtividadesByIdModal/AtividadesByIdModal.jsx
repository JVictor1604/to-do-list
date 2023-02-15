import "./AtividadesByIdModal.css"
import Modal from "components/Modal/Modal";


function AtividadesByIdModal({ closeModal, atividades }) {


    return (
        <Modal closeModal={closeModal} >
            <div className="AdicionaAtividadeModal">

                <h3 className="AtividadeListaItem__titulo">
                    {atividades.titulo}
                </h3>

                <div className="AtividadeListaItem__info">

                    <div className="AtividadeListaItem__descricao">
                        {atividades.descricao}
                    </div>

                    <div className="AtividadeListaItem__data">
                        {`Às ${atividades.hora} horas de ${atividades.data}`}
                    </div>

                </div>

            </div>
        </Modal>
    );
}

export default AtividadesByIdModal;