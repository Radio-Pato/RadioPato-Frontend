import React from 'react'
import styles from './Home.module.css';

function Home() {
  return (
    <div>
      <div className={styles.comments__container}>
        <div className={styles.comment}>
          <p>Esto es un comentario.</p>
        </div>
        <div className={styles.comment}>
          <p>Esto es un comentario.</p>
        </div>
        <div className={styles.comment}>
          <p>Esto es un comentario.</p>
        </div>
        <div className={styles.comment}>
          <p>Esto es un comentario.</p>
        </div>
      </div>
    </div>
  )
}

export default Home