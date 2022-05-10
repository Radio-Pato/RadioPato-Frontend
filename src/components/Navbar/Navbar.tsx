import React from 'react'
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <div>
        <ul className={styles.news}>
            <li className={styles.notice}>
            <div>
                <p><strong>Ultima noticia</strong></p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, ex ob</p>
                <a href='#'>Leer mas</a>
            </div>   
            </li>
            <li className={styles.notice}>
            <div>
                <p><strong>Ultima noticia</strong></p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, ex ob</p>
                <a href='#'>Leer mas</a>
            </div>   
            </li>
            <li className={styles.notice}>
            <div>
                <p><strong>Ultima noticia</strong></p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, ex ob</p>
                <a href='#'>Leer mas</a>
            </div>   
            </li>
        </ul>
    </div>
  )
}

export default Navbar