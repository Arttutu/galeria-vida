import React from "react"
import style from "./CartaoPopular.module.scss"
import fotosPopulares from "./fotos-populares.json"

export default function CartaoPopular() {
  return (
    <>
      {fotosPopulares.map(function fotosPopulares(foto) {
        return (
          <li className={`mt-4 ${style.CartaoPopular}`}>
            <img
              className={` ${style.imagem}`}
              src={foto.imagem}
              alt={foto.alt}
            ></img>
          </li>
        )
      })}
    </>
  )
}
