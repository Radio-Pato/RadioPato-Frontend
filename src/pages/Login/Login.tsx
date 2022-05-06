import styles from './Login.module.css'
import {useState} from 'react'
import Acceso from '../../components/Acceso/Acceso';
import Registro from '../../components/Registro/Registro';

interface LoginProps {
  changer: boolean;
}

const ImgRender = ({changer}: LoginProps) => {
  return <div>
    {changer 
      ? <div className={`${styles.images} ${styles.img1}`}></div> 
      : <div className={`${styles.images} ${styles.img2}`}></div> 
    }</div>;
};

function Login() {
  const [ changer, setChanger] = useState(true);

  return (
    <div className={styles.login}>

      <div className={styles.login__left}>
        <ImgRender changer= {changer} />
      </div>

      <div className={styles.login__right}>
        <div>
          <span className= {`${styles.tittle} 
            ${changer 
                ? styles.tittleActive 
                : ""}`}
            onClick={() => {setChanger(true)}}>Login</span>
          <span className={`${styles.tittle} ${changer
            ? ""
            : styles.tittleActive}`}
            onClick={() => {setChanger(false)}}>Registro</span>
        </div>
        
        {changer
        ?<Acceso />
        :<Registro />
        }
      </div>

    </div>
  )
}

export default Login