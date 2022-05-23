import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import styles from "./NotFound.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney} from "@fortawesome/free-solid-svg-icons"

function NotFound() {
  return (
    <Layout>
      <>
	  	<h2>No hemos encontrado la página solicitada </h2>
        <h2>¯ \ _ (ツ) _ / ¯</h2>
		<div className={styles.btnhome}>
        <Link className={styles.btnhomtext}  to="/Home">Ir al foro
		<span> <FontAwesomeIcon icon={faHouseChimney} size="lg"></FontAwesomeIcon></span>
		</Link>
		</div>
      </>
    </Layout>
  );
}

export default NotFound;
