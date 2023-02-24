import "./ListaAtividadesItem.css"
import { ActionMode } from "constants/index";


function ListaAtividadeItem({ atividade, index, clickItem, mode }) {

    const badgeAction = (canRender) => {
        if (canRender)
            return (<span
                className={`AtividadeListaItem__tag ${mode === ActionMode.DELETAR && 'AtividadeListaItem__tag--deletar'}`}> {mode} </span>);
    }

    return (<div className="row">

        <div
            className={`AtividadeListaItem 
            ${mode !== ActionMode.NORMAL && 'AtividadeListaItem--disable'}
            ${mode === ActionMode.DELETAR && 'AtividadeListaItem--deletar'}`}
            key={`AtividadeListaItem-${index}`}
            onClick={() => clickItem(atividade.id)}>

            {badgeAction(mode !== ActionMode.NORMAL)}

            <div className="AtividadeListaItem__titulo">
                {atividade.titulo}
            </div>

            <div className="AtividadeListaItem__descricao">
                {atividade.descricao}
            </div>

            <div className="AtividadeListaItem__data">
                {`Marcado para ás ${atividade.hora} horas de ${atividade.data}`}
            </div>

            <div className="input">

                <p>
                    <input className="checkbox" type="checkbox" name="colors" value="blue" /><br />
                </p>

            </div>


        </div>
    </div>)
}


export default ListaAtividadeItem