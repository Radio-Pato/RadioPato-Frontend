import styles from "./LoadComponent.module.css";
import { Spinner } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// npm install bootstrap reactstrap

function LoadComponent() {
  return (
    <div className={styles.divFather}>
      <Spinner className={styles.spinnerReactstrap} />
    </div>
  );
}

export default LoadComponent;
