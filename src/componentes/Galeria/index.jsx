import Cartao from "../Cartao"
import Tags from "../Tags"
import styles from "./Galeria.module.scss"
export default function Galeria() {
  return (
    <section className={styles.galeria}>
      <div className="row">
        <h2 className={`text-center mt-5 ${styles.galeria__titulo}`}>
          Navegue pela galeria
        </h2>
      </div>
      <div className="row">
        <Tags></Tags>
      </div>
      <div className="row">
        <Cartao />
      </div>
    </section>
  )
}
