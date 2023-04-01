import { FaSearch } from "react-icons/fa"
import cabecalho from "./Cabecalho.module.scss"
import logo from "./logo.png"

export default function Cabecalho() {
  return (
    <header>
      <nav className="navbar mb-5">
        <div
          className={`container mt-3 d-flex align-items-center   ${cabecalho.ui}`}
        >
          <a className="navbar-brand d-flex align-items-center  me-0">
            <img
              className={`img-fluid ${cabecalho.imagem_logo}`}
              src={logo}
            ></img>
            <h1 className={cabecalho.title_logo}>VidaRobótica</h1>
          </a>
          <form
            className={`d-flex justify-content-center align-items-center  ${cabecalho.form_pesquisar}`}
            role="search"
          >
            <span className={cabecalho.icone_pesquisar}>
              <FaSearch size={25} />
            </span>
            <input
              className={cabecalho.botao_pesquisa}
              type="search"
              placeholder="O que você procura"
              aria-label="Search"
            />
          </form>
        </div>
      </nav>
    </header>
  )
}
