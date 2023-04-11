import styles from "./paginaInicial.module.scss"
import banner from "./banner.jpeg"
import Cabecalho from "../../componentes/Cabecalho"
import Menu from "../../componentes/Menu/indenx"
import Galeria from "../../componentes/Galeria"

export default function PaginaInicial() {
  return (
    <>
      <Cabecalho />
      <main>
        <div className="container">
          <section className={styles.principal}>
            <div className={styles.principal__menu}>
              <Menu />
            </div>
            <div className={` ${styles.principal__imagem}`}>
              <h1>A galeria canina mais completa da internet</h1>

              <img
                className="img-fluid"
                src={banner}
                alt="foto de um leao como imagem principal do site"
              />
            </div>
          </section>
        </div>
        <Galeria />
      </main>
    </>
  )
}
