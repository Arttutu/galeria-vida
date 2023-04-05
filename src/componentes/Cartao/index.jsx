import fotos from "./fotos.json"
import style from "./Cartao.module.scss"
import { AiOutlineHeart } from "react-icons/ai"
import { RxOpenInNewWindow } from "react-icons/rx"
export default function Cartao() {
  return (
    <ul className="row p-0 ">
      {fotos.map((foto) => {
        return (
          <div className="col-lg-4 col-sm-6 mb-4 d-flex justify-content-center">
            <div className={`${style.card}`}>
              <li className={`${style.card__lista}`}>
                <img
                  src={foto.imagem}
                  alt={foto.titulo}
                  className={`img-fluid ${style.card__lista__imagem}`}
                ></img>
                <div className={`pb-2 ${style.card__lista__descricao}`}>
                  <p>{foto.titulo}</p>
                  <div>
                    <p>{foto.creditos}</p>
                    <span>
                      <AiOutlineHeart size={30} />
                      <RxOpenInNewWindow size={30} />
                    </span>
                  </div>
                </div>
              </li>
            </div>
          </div>
        )
      })}
    </ul>
  )
}
