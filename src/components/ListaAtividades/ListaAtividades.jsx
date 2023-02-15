import React, { useEffect, useState } from "react";
import "./ListaAtividades.css";
import { api } from "utils/api";

import ListaAtividadeItem from "components/ListaAtividadesItem/ListaAtividadesItem";
import AtividadesByIdModal from "components/AtividadesByIdModal/AtividadesByIdModal";



function AtividadeLista({ atividadeCriada }) {

    const [atividades, setAtividades] = useState([]);

    const [atividadeModal, setAtividadeModal] = useState(false);


    const adicionaAtividadeNaLista = (atividade) => {
        const lista = [...atividades, atividade];
        setAtividades(lista);
    };


    const getAtividadeById = async (atividadeId) => {
        const response = await api.getAtividadeById(atividadeId);
        setAtividadeModal(response);
    }


    const getAtividades = async () => {
        const response = await api.getAllAtividades()
        setAtividades(response)
    }


    useEffect(() => {
        getAtividades();
    }, [])

    useEffect(() => {
        if (atividadeCriada) adicionaAtividadeNaLista(atividadeCriada);
    }, [atividadeCriada]);


    return (

        <div className="AtividadeLista">
            {atividades.map((atividade, index) => (

                <ListaAtividadeItem
                    className="listaAtividadeItem"
                    key={`AtividadeListaItem-${index}`}
                    atividade={atividade}
                    clickItem={(atividadeId) => getAtividadeById(atividadeId)}

                />
            ))}

            {
                atividadeModal && (<AtividadesByIdModal
                    closeModal={() => setAtividadeModal(false)}
                    atividades={atividadeModal}
                />)
            }

        </div>

    );
}

export default AtividadeLista;