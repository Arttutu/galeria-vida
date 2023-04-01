import styles from "./Tags.module.scss"
export default function Tags() {
  return (
    <div className="tags row mt-5">
      <div className="col-3">
        <h3 className={styles.tags__titulo}>Busque por tags: </h3>
      </div>
      <div className="col-9 text-end">
        <ul className={styles.tags__lista}>
          <li className={styles.tags__lista__item}>Leão</li>
          <li className={styles.tags__lista__item}>Lobo</li>
          <li className={styles.tags__lista__item}>Urso</li>
          <li className={styles.tags__lista__item}>Cachorro</li>
        </ul>
      </div>
    </div>
  )
}
