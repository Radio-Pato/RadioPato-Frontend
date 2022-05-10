
import React, { Children } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Layout from '../../components/Layout/Layout'
import styles from './Home.module.css'

function Home() {
  return (
    <Layout>
      <main className={styles.main}>
        <section className={styles.left}>
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
        </section>
        <section className={styles.right}>
          <Navbar />
        </section>
      </main>
    </Layout>
  )
}

export default Home