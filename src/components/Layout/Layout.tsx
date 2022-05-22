import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "./Layout.module.css";

interface Props {
  children: JSX.Element;
}

function Layout({ children }: Props) {
  return (
    <>
      <div className={styles.main__container}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
