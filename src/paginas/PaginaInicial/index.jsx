import Cabecalho from "../../componentes/Cabecalho"
import banner from "./banner.jpg"
import Menu from "../../componentes/Menu/indenx"
import styles from "./paginaInicial.module.scss"
import Galeria from "../../componentes/Galeria"

export default function PaginaInicial() {
  return (
    <>
      <Cabecalho />
      <main>
        <div className="container">
          <section className={styles.principal}>
            <div className="row d-flex align-items-center">
              <div className="col-3">
                <Menu />
              </div>
              <div className="col-9">
                <div className={styles.principal__imagem}>
                  <h1>
                    A galeria mais completa canina mais compelta da internet
                  </h1>
                  <img
                    className="img-fluid"
                    src={banner}
                    alt="foto de um leao como imagem principal do site"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
        <Galeria />
      </main>
    </>
  )
}
