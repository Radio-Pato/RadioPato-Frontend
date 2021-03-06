import { useContext } from "react";
import { AuthContext } from "../../contexts/DataContext";
import Navbar from "../../components/Navbar/Navbar";
import Layout from "../../components/Layout/Layout";
import styles from "./Home.module.css";
import BoxCommentComponent from "../../components/BoxCommentComponent/BoxCommentComponent";

function Home() {
  const { auth, setAuth }: any = useContext(AuthContext);
  return (
    <Layout>
      <main className={styles.main}>
        <section className={styles.left}>
          <BoxCommentComponent></BoxCommentComponent>
        </section>
        <section className={styles.right}>
          <Navbar />
        </section>
      </main>
    </Layout>
  );
}

export default Home;
