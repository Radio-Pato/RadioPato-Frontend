import React from 'react';
import styles from './BoxCommentComponent.module.css'

function BoxCommentComponent() {

    return (
        <>
        <div className={styles.tabs__container}>
            <a href="#"  className={`${styles.tab} ${styles.active}`}>General</a>
            <a href="#"  className={styles.tab}>Pestaña 1</a>
            <a href="#"  className={styles.tab}>Pestaña 2</a>
        </div>
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
        </>
    )
}


export default BoxCommentComponent