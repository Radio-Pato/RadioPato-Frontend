import { useState } from 'react';
import styles from './BoxCommentComponent.module.css'

function BoxCommentComponent() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index: number) => {
        setToggleState(index);
    };

    return (
        <>
        <div className={styles.tabs__container}>
            <a onClick={() => toggleTab(1)} className={toggleState === 1 ? `${styles.tab} ${styles.active}` : styles.tab}>General</a>
            <a onClick={() => toggleTab(2)} className={toggleState === 2 ? `${styles.tab} ${styles.active}` : styles.tab}>Pestaña 1</a>
            <a onClick={() => toggleTab(3)} className={toggleState === 3 ? `${styles.tab} ${styles.active}` : styles.tab}>Pestaña 2</a>
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