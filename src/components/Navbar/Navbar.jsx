import "./Navbar.css"
import logo from 'assets/icons/logo.svg'
import botao from 'assets/icons/botao.svg'


function Navbar({ createAtividade }) {


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

        <button type="button" className="Opcoes__atividade Atividade" onClick={() => createAtividade()}>
          <img src={botao} width="40px" className="Atividade__icone" alt="Adicionar Atividade" />
        </button>



      </div>
    </div>

  )
}

export default Navbar