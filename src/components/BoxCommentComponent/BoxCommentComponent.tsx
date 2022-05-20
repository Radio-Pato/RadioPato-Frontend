import { useState,useEffect } from 'react';
import {getSections, getComments, deleteComents} from '../../utils/Services'
import styles from './BoxCommentComponent.module.css'
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

function BoxCommentComponent() {
    const [toggleState, setToggleState] = useState(0);
    const [section, setSection] = useState<any>([]);
    const [comments, setComments] = useState<any>([]);
	const owner = Cookies.get('email')
    const toggleTab = (index: number) => {
        if( !(toggleState === index) ){
            setToggleState(index);
        }
    };

    useEffect(() => {

        getSections()
        .then((res)=>{
            setSection(res.data.data)
        })

    }, [section])

    useEffect(() => {
        getComments().then((res) => {
            console.log(res.data.data);
            setComments(res.data.data);
        })
    }, []);

	const deleteComment = (comment:any)=>{
				deleteComents(comment)
				location.reload()

	}
    let  n = 0
   if(section.length <= 0 ){
       console.log("prueba setion", section)
       return <p>loading ...</p>
   }else {
    return (

        <>
            <div className={styles.tabs__container}>
            {
                section.map( (section:any, index: number) => (
                    <Link to={''} key={section._id } onClick={() => toggleTab(index)} className={toggleState === index ? `${styles.tab} ${styles.active}` : styles.tab}>
                        {section.title}
                    </Link>
                )
            )}
            </div>

            {
                section.map( (section:any, index: number) => (
                    <div className={toggleState === index ? styles.comments__container : `${styles.comments__container} ${styles.display__none}`}>
                        {
                            comments.filter((commentall: any) => commentall.section === section.title).map( (comment:any)=> (
                                <div key={comment._id} className={styles.comment}>
                                    <p>{comment.text}</p>

									<div style={{ display: comment.owner === owner ? "block" : "none" }}>
									<button type="button" onClick={() => deleteComment(comment)}>Borrar</button>
									</div>
                                </div>

                            ))
                        }
                    </div>
                )
            )}


            {/* <div className={toggleState === 0 ? styles.comments__container : `${styles.comments__container} ${styles.display__none}`}>
                {
                    comentariosGeneral.map( comentario =>
                    <div key={comentario} className={styles.comment}>
                        <p>{comentario}</p>
                    </div>
                    )
                }
            </div>

            <div className={toggleState === 1 ? styles.comments__container : `${styles.comments__container} ${styles.display__none}`}>
                {
                    comentariosComunicados.map( comentario =>
                    <div key={comentario} className={styles.comment}>
                        <p>{comentario}</p>
                    </div>
                    )
                }
            </div>

            <div className={toggleState === 2 ? styles.comments__container : `${styles.comments__container} ${styles.display__none}`}>
                {
                    comentariosEventos.map( comentario =>
                    <div key={comentario}  className={styles.comment}>
                        <p>{comentario}</p>
                    </div>
                    )
                }
            </div> */}
        </>
    )
   }

    /* return (

        <>
        <ul className={styles.tabs__container}>
            <li onClick={() => toggleTab(1)} className={toggleState === 1 ? `${styles.tab} ${styles.active}` : styles.tab}> {section[0].title} </li>
            <li onClick={() => toggleTab(2)} className={toggleState === 2 ? `${styles.tab} ${styles.active}` : styles.tab}>Comunicados</li>
            <li onClick={() => toggleTab(3)} className={toggleState === 3 ? `${styles.tab} ${styles.active}` : styles.tab}>Eventos</li>
        </ul> */
      {/*   <div className={styles.tabs__container}>
            <a onClick={() => toggleTab(1)} className={toggleState === 1 ? `${styles.tab} ${styles.active}` : styles.tab}>General</a>
            <a onClick={() => toggleTab(2)} className={toggleState === 2 ? `${styles.tab} ${styles.active}` : styles.tab}>Comunicados</a>
            <a onClick={() => toggleTab(3)} className={toggleState === 3 ? `${styles.tab} ${styles.active}` : styles.tab}>Eventos</a>
            <button >edictar secciones</button>
        </div>

        <div className={toggleState === 1 ? styles.comments__container : `${styles.comments__container} ${styles.display__none}`}>
            {
                comentariosGeneral.map( comentario =>
                <div className={styles.comment}>
                    <p>{comentario}</p>
                </div>
                )
            }
        </div>

        <div className={toggleState === 2 ? styles.comments__container : `${styles.comments__container} ${styles.display__none}`}>
            {
                comentariosComunicados.map( comentario =>
                <div className={styles.comment}>
                    <p>{comentario}</p>
                </div>
                )
            }
        </div>

        <div className={toggleState === 3 ? styles.comments__container : `${styles.comments__container} ${styles.display__none}`}>
            {
                comentariosEventos.map( comentario =>
                <div className={styles.comment}>
                    <p>{comentario}</p>
                </div>
                )
            }
        </div> */}
   /*      </>
    ) */
}


export default BoxCommentComponent