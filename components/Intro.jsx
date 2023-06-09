import styles from "@styles/intro.module.css"

const Intro = () => {
  return (
    <div className={styles.introContainer}>
      <div className={styles.inner}>
        <div className={styles.titleContainer}>
            <h3 className={styles.subtitle}>New Comics!</h3>
            <h2 className={styles.title}>Coming Out Daily</h2>
        </div>
        
        <p className={styles.introText}>
          Sed posuere consectetur est at lobortis. Nulla vitae elit
          libero, a pharetra augue. Cum sociis natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Nullam
          id dolor id nibh ultricies vehicula ut id elit.
        </p>
      </div>
    </div>
  )
}

export default Intro