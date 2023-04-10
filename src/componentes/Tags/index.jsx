import styles from "./Tags.module.scss"
export default function Tags() {
  return (
    <div className="tags row mt-5 m-0">
      <div className={`col-lg-3 col-sm-12 ${styles.tags__grid}`}>
        <h3 className={styles.tags__titulo}>Busque por tags: </h3>
      </div>
      <div className={`col-lg-9 col-sm-12 ${styles.tags__grid}`}>
        <ul className={styles.tags__lista}>
          <li className={styles.tags__lista__item}>Puddle</li>
          <li className={styles.tags__lista__item}>Vira-Lata</li>
          <li className={styles.tags__lista__item}>Pomerânia</li>
          <li className={styles.tags__lista__item}>Dachshund</li>
        </ul>
      </div>
    </div>
  )
}
