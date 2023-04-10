import { FaSearch } from "react-icons/fa"
import cabecalho from "./Cabecalho.module.scss"

export default function Cabecalho() {
  return (
    <header>
      <nav className="navbar mb-5">
        <div
          className={`container mt-3 d-flex align-items-center   ${cabecalho.ui}`}
        >
          <a className="navbar-brand d-flex align-items-center  me-0">
            <h1 className={cabecalho.title_logo}>Gall3ria</h1>
          </a>
          <form
            className={`d-flex  align-items-center p-0 m-0  ${cabecalho.form_pesquisar}`}
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
