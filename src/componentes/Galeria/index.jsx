import Cartao from "../Cartao"
import Tags from "../Tags"
import styles from "./Galeria.module.scss"
export default function Galeria() {
  return (
    <section className="">
      <div className="row">
        <h2 className="text-center mt-4">Navegue pela galeria</h2>
      </div>
      <div className="row">
        <Tags></Tags>
      </div>
      <ul className="mt-5">
        <Cartao />
      </ul>
    </section>
  )
}
