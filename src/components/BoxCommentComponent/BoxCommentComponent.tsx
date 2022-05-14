import React from 'react';
import styles from './BoxCommentComponent.module.css'

function BoxCommentComponent() {
  return (
      <>
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