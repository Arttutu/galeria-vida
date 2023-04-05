import styles from "./Tags.module.scss"
export default function Tags() {
  return (
    <div className="tags row mt-5">
      <div className="col-3">
        <h3 className={styles.tags__titulo}>Busque por tags: </h3>
      </div>
      <div className="col-9 d-flex justify-content-end">
        <ul className={styles.tags__lista}>
          <li className={styles.tags__lista__item}>Puddle</li>
          <li className={styles.tags__lista__item}></li>
          <li className={styles.tags__lista__item}></li>
          <li className={styles.tags__lista__item}></li>
        </ul>
      </div>
    </div>
  )
}
