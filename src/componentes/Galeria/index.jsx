import Cartao from "../Cartao"
import Tags from "../Tags"
import Populares from "../populares"
import styles from "./Galeria.module.scss"
export default function Galeria() {
  return (
    <div className="container-fluid ">
      <section className={`${styles.galeria}`}>
        <div className="row">
          <h2 className={`text-center mt-5 ${styles.galeria__titulo}`}>
            Navegue pela galeria
          </h2>
        </div>
        <div className="row">
          <Tags></Tags>
        </div>
        <div className="row mt-5 text-center">
          <div className="col-lg-9 col-sm-12">
            <Cartao />
          </div>
          <div className="col-lg-3 mt-5 mt-lg-0">
            <Populares />
          </div>
        </div>
      </section>
    </div>
  )
}
