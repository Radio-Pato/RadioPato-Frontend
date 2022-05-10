import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
        <ul className={styles.socialMedia}>
            <li className={styles.icons}>
                <a className={styles.branded}
                    href='https://www.linkedin.com/'
                    target="_blank">
                    <FontAwesomeIcon icon={faLinkedin}/>
                </a>
            </li>
            <li className={styles.icons}>
                <a className={styles.branded}
                    href='https://github.com/'
                    target="_blank">
                    <FontAwesomeIcon icon={faGithub}/>
                </a>
            </li>
            <li className={styles.icons}>
                <a className={styles.branded}
                    href='https://twitter.com/?lang=es'
                    target="_blank">
                    <FontAwesomeIcon icon={faTwitter}/>
                </a>
            </li>
            <li className={styles.icons}>
                <a className={styles.branded}
                    href='https://es-es.facebook.com/'
                    target="_blank">
                    <FontAwesomeIcon icon={faFacebook}/>
                </a>
            </li>
        </ul>
    </footer>
  )
}

export default Footer