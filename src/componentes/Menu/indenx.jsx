import React from "react"
import styles from "./Menu.module.scss"
import { AiFillHome, AiFillHeart, AiFillBulb, AiFillEye } from "react-icons/ai"
import { BsFillSunFill } from "react-icons/bs"

export default function Menu() {
  return (
    <nav className={`p-0  ${styles.menu}`}>
      <ul className={` m-0  p-0${styles.menu__listas}`}>
        <li className={` m-0  ${styles.menu__item}`}>
          <span>
            <AiFillHome size={30} />
          </span>
          <a href="/">Ínicio</a>
        </li>
        <li className={` m-0  ${styles.menu__item}`}>
          <span>
            <AiFillEye size={30} />
          </span>
          <a href="/">Mais vistas</a>
        </li>
        <li className={` m-0  ${styles.menu__item}`}>
          <span>
            <AiFillHeart size={30} />
          </span>
          <a href="/">Mais curtidas</a>
        </li>
        <li className={` m-0  ${styles.menu__item}`}>
          <span>
            <BsFillSunFill size={30} />
          </span>
          <a href="/">Novas</a>
        </li>
        <li className={styles.menu__item}>
          <span>
            <AiFillBulb size={30} />
          </span>
          <a href="/">Surprenda-me</a>
        </li>
      </ul>
    </nav>
  )
}
