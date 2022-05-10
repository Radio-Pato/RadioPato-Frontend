import React, { Children } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Layout from '../../components/Layout/Layout'
import styles from './Home.module.css'

function Home() {
  return (
    <Layout>
      <main className={styles.main}>
        <section className={styles.left}>Contenido</section>
        <section className={styles.right}>
          <Navbar />
        </section>
      </main>
    </Layout>
  )
}

export default Home