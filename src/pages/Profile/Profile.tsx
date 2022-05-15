import React, { Children } from "react";
import Layout from "../../components/Layout/Layout";
import styles from "./Profile.module.css";

function Profile() {
  return (
    <Layout>
      <main className={styles.main}>
        <div className={styles.profile}>
          <h3>Perfil de Usuario</h3>
        </div>
      </main>
    </Layout>
  );
}
export default Profile;
