import styles from "./Tags.module.scss"
import fotos from "../Galeria/fotos.json"
export default function Tags({ tags }) {
  return (
    <div className="tags row mt-5 m-0">
      <div className={`col-lg-3 col-sm-12 ${styles.tags__grid}`}>
        <h3 className={styles.tags__titulo}>Busque por tags: </h3>
      </div>
      <div className={`col-lg-9 col-sm-12 ${styles.tags__grid}`}>
        <ul className={styles.tags__lista}>
          {tags.map((tag) => {
            return (
              <li key={tag} className={styles.tags__lista__item}>
                {tag}
              </li>
            )
          })}
          <li className={styles.tags__lista__item}>Todos</li>
        </ul>
      </div>
    </div>
  )
}
