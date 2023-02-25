import React, { useEffect, useState, useCallback } from "react";
import "./ListaAtividades.css";
import { api } from "utils/api";


import ListaAtividadeItem from "components/ListaAtividadesItem/ListaAtividadesItem";
import AtividadesByIdModal from "components/AtividadesByIdModal/AtividadesByIdModal";

import { ActionMode } from "constants/index";

function AtividadeLista({ atividadeCriada, mode, updateAtividade, deleteAtividade, atividadeRemovida, atividadeEditada }) {

    const [atividades, setAtividades] = useState([]);

    const [atividadeModal, setAtividadeModal] = useState(false);


    const adicionaAtividadeNaLista = useCallback(
        
        (atividade) => {
        const lista = [...atividades, atividade];
        setAtividades(lista);},
        [atividades]);


    const getAtividadeById = async (atividadeId) => {

        const response = await api.getAtividadeById(atividadeId);

        const mapper = {
            [ActionMode.NORMAL]: () => setAtividadeModal(response),
            [ActionMode.ATUALIZAR]: () => updateAtividade(response),
            [ActionMode.DELETAR]: () => deleteAtividade(response),
        };

        mapper[mode]();
    }




    const getAtividades = async () => {
        const response = await api.getAllAtividades()
        setAtividades(response)
    }


    useEffect(() => {
        getAtividades();
    }, [atividadeRemovida, atividadeEditada])

    useEffect(() => {
        if (
          atividadeCriada &&
          !atividades.map(({ id }) => id).includes(atividadeCriada.id)
        ) {
          adicionaAtividadeNaLista(atividadeCriada);
        }
      }, [adicionaAtividadeNaLista, atividadeCriada, atividades]) 
    

    return (

        <div className="AtividadeLista">
            {atividades.map((atividade, index) => (

                <ListaAtividadeItem
                    className="listaAtividadeItem"
                    key={`AtividadeListaItem-${index}`}
                    atividade={atividade}
                    clickItem={(atividadeId) => getAtividadeById(atividadeId)}
                    mode={mode}

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