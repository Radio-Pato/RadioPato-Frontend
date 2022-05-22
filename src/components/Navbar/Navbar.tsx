import { useState,useEffect } from 'react';
import styles from "./Navbar.module.css";
import { getComments} from '../../utils/Services'

function Navbar() {
  const [comments, setComments] = useState<any>([]);

  useEffect(() => {
    getComments().then((res) => {
        /* console.log(res.data.data) */
        setComments(res.data.data);
    })
}, [comments]);

  return (
    <div>
      
      <ul className={styles.news}>
      <p className={styles.comunicadostitle}>
                        <strong>Últimos comunicados</strong>
                      </p>
            {
               comments.filter((commentall: any) => commentall.section === "Comunicados").map( (comment:any)=> (
                    <li className={styles.notice}>
                    <div>

                      <p>
                      {comment.text}
                      </p>
                      
                    </div>
                  </li>
            ))
            }
      </ul>
    </div>
  );
}

export default Navbar;