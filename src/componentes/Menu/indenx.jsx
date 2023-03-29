import React from "react"
import styles from "./Menu.module.scss"
import { AiFillHome, AiFillHeart, AiFillBulb, AiFillEye } from "react-icons/ai"
import { BsFillSunFill } from "react-icons/bs"

export default function Menu() {
  return (
    <div className="container">
      <nav className={styles.menu}>
        <ul className={styles.menu__listas}>
          <li className={styles.menu__item}>
            <span>
              <AiFillHome size={25} />
            </span>
            <a href="/">Ínicio</a>
          </li>
          <li className={styles.menu__item}>
            <span>
              <AiFillEye size={25} />
            </span>
            <a href="/">Mais vistas</a>
          </li>
          <li className={styles.menu__item}>
            <span>
              <AiFillHeart size={25} />
            </span>
            <a href="/">Mais curtidas</a>
          </li>
          <li className={styles.menu__item}>
            <span>
              <BsFillSunFill size={25} />
            </span>
            <a href="/">Novas</a>
          </li>
          <li className={styles.menu__item}>
            <span>
              <AiFillBulb size={25} />
            </span>
            <a href="/">Surprenda-me</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
