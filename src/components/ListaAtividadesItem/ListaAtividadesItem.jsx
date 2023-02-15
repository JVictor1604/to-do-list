import "./ListaAtividadesItem.css"



function ListaAtividadeItem({ atividade, index }) {



    return (<div className="row">

        <div className="AtividadeListaItem" key={`AtividadeListaItem-${index}`}>


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