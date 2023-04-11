import React from "react"
import style from "./Populares.module.scss"
import CartaoPopular from "../CartaoPopular/indenx"

export default function Populares() {
  return (
    <aside>
      ]<h3 className={style.populares__titulo}>Populares</h3>
      <ul className="m-0 p-0">
        <CartaoPopular />
      </ul>
    </aside>
  )
}
