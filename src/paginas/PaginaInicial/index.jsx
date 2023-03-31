import Cabecalho from "../../componentes/Cabecalho"
import banner from "./banner.webp"
import Menu from "../../componentes/Menu/indenx"
import styles from "./paginaInicial.module.scss"

export default function PaginaInicial() {
  return (
    <>
      <Cabecalho />
      <main>
        <div className="container">
          <section className={styles.principal}>
            <div className="row d-flex align-items-center">
              <div className="col-4">
                <Menu />
              </div>
              <div className="col-8">
                <div className={styles.principal__imagem}>
                  <h1>A galeria mais completa da natureza com IA</h1>
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
      </main>
    </>
  )
}
