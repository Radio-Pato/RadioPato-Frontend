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
            setComments(res.data.data);
        })
    }, []);

	const deleteComment = (comment:any)=>{
				deleteComents(comment)
				location.reload()

	}
   if(section.length <= 0 ){
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
        </>
    )
   }
}

export default BoxCommentComponent