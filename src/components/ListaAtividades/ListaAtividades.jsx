import React, { useEffect, useState } from "react";
import "./ListaAtividades.css";
import ListaAtividadeItem from "components/ListaAtividadesItem/ListaAtividadesItem";
import { api } from "utils/api";



function AtividadeLista() {

    const [atividades, setAtividades] = useState([]);

    const getAtividades = async () => {
        const response = await api.getAllAtividades()
        setAtividades(response)
    }

    useEffect(() => {
        getAtividades();
    }, [])


    return (

        <div className="AtividadeLista">
            {atividades.map((atividade, index) => (

                <ListaAtividadeItem
                    key={`AtividadeListaItem-${index}`}
                    atividade={atividade}
                />
            ))}

        </div>

    );
}

export default AtividadeLista;