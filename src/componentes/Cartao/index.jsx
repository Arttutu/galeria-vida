import fotos from "./fotos.json"
import style from "./Cartao.module.scss"
import { AiOutlineHeart } from "react-icons/ai"
import { RxOpenInNewWindow } from "react-icons/rx"
export default function Cartao() {
  return (
    <>
      {fotos.map((foto) => {
        return (
          <div className={`${style.card}`}>
            <li className={style.card__lista} key={foto.id}>
              <img
                src={foto.imagem}
                alt={foto.titulo}
                className={style.card__lista__imagem}
              ></img>
              <div className={`pb-2 ${style.card__lista__descricao}`}>
                <p>{foto.titulo}</p>
                <p>{foto.creditos}</p>
                <span>
                  <AiOutlineHeart size={25} />
                  <RxOpenInNewWindow size={25} />
                </span>
              </div>
            </li>
          </div>
        )
      })}
    </>
  )
}
