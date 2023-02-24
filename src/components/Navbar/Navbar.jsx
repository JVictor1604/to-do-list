import "./Navbar.css"
import { ActionMode } from "constants/index";


import logo from 'assets/icons/logo.svg'
import botao from 'assets/icons/botao.svg'
import editar from 'assets/icons/editar.svg'
import deletar from 'assets/icons/deletar.svg'





function Navbar({ createAtividade, updateAtividade, deleteAtividade, mode }) {


  return (

    <div className="Home__header Header">
      <div className="row">
        <div className="Header__logo Logo">

          <span className="Logo__titulo"> To Do List </span>

          <img
            src={logo}
            width="70px"
            alt="Logo To Do List"
            className="Logo__icone"
          />

        </div>


        <div>

          <button type="button" 
            className="Opcoes__atividade Atividade"
            onClick={() => createAtividade()}>
            <img src={botao} width="40px" className="Atividade__icone__criar" alt="Adicionar Atividade" />
          </button>


          <button type="button"
            className={`Opcoes__atividade Atividade ${mode === ActionMode.ATUALIZAR && "Atividade__ativa"}`}
            onClick={() => updateAtividade()}>
            <img src={editar} width="40px" className="Atividade__icone__editar" alt="Editar Atividade" />
          </button>


          <button type="button"
            className={`Opcoes__atividade Atividade ${mode === ActionMode.DELETAR && "Atividade__deletar"}`}
            onClick={() => deleteAtividade()}>
            <img src={deletar} width="40px" className="Atividade__icone__deletar" alt="Deletar Atividade" />
          </button>

        </div>

      </div>


    </div>

  )
}

export default Navbar