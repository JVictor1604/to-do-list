import { useState, useEffect } from "react";
import "./AtividadesFormModal.css"
import Modal from "components/Modal/Modal";
import { api } from "utils/api";

function AtividadesFormModal({ closeModal, onCreateAtividade }) {

    const form = {
        titulo: "",
        descricao: "",
        data: "",
        hora: ""
    };

    const [state, setState] = useState(form);


    const handleChange = (e, name) => {
        setState({ ...state, [name]: e.target.value, });
    };

    const [canDisable, setCanDisable] = useState(true)

    const canDisableSendButton = () => {

        const response = !Boolean(
            state.titulo.length &&
            state.hora.length &&
            state.hora.length
        )

        setCanDisable(response)
    }

    useEffect(
        () => {

            canDisableSendButton();
        }
    )

    const createatividade = async () => {

        const { titulo, descricao, data, hora } = state;


        const atividade = {
            titulo,
            descricao,
            data,
            hora
        }

        const response = await api.createAtividade(atividade);

        onCreateAtividade(response);

        closeModal();

    }

    return (
        <Modal closeModal={closeModal}>
            <div className="AdicionaAtividadeModal">
                <form autoComplete="off">
                    <h2> Adicionar Atividade </h2>
                    <div>
                        <label className="AdicionaAtividadeModal__text" htmlFor="titulo"> Título: </label>
                        <input
                            id="titulo"
                            placeholder="Ir no supermercado"
                            type="text"
                            value={state.titulo}
                            onChange={(e) => handleChange(e, "titulo")}
                            required />
                    </div>
                    <div>
                        <label className="AdicionaAtividadeModal__text" htmlFor="descricao"> Descricão: </label>
                        <input
                            id="descricao"
                            placeholder="Ir ao supermecado da esquina comprar feijão"
                            type="text"
                            value={state.descricao}
                            onChange={(e) => handleChange(e, "descricao")} />
                    </div>
                    <div>
                        <label className="AdicionaAtividadeModal__text" htmlFor="data"> Data: </label>
                        <input
                            id="data"
                            placeholder="18/07/2023"
                            type="text"
                            value={state.data}
                            onChange={(e) => handleChange(e, "data")}
                            required />
                    </div>
                    <div>
                        <label className="AdicionaAtividadeModal__text" htmlFor="hora"> Hora: </label>
                        <input
                            id="hora"
                            placeholder="18:50"
                            type="text"
                            value={state.hora}
                            onChange={(e) => handleChange(e, "hora")}
                            required />
                    </div>

                    <button className="AdicionaAtividadeModal__enviar"
                        type="submit"
                        disabled={canDisable}
                        onClick={createatividade}>
                        Enviar
                    </button>
                </form>
            </div>
        </Modal>
    );
}

export default AtividadesFormModal;