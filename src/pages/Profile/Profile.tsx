import React, { Children, useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import styles from "./Profile.module.css";
import { useForm } from "react-hook-form";
import { getUsers, updateUser } from "../../utils/Services";
import Cookies from "js-cookie";

type TInputs = {
  name: string;
  surname: string;
  email: string;
  address: string;
  building: string;
  password: string;
};

function Profile() {
  const email: String | undefined = Cookies.get("email");
  const token: String | undefined = Cookies.get("access_token");

  const [user, setUser] = useState<any>([]);
/*   const [takeAway, setTakeAway] = useState(user) */

  useEffect(() => {
    getUsers(email, token).then((res) => {
      setUser(res.data.data);
      console.log(user)
    });
  }, []);

  // 


  const onChange = (e:any) => {
    setUser({
        ...user,
        [e.target.name]: e.target.value
    }
    )
}

const changeSubmit = (e:any) => {
  e.preventDefault();
  console.log(user)
  updateUser(user).then((res) => {
    console.log(res);
    
  });

}

  if (user <= 0) {
    return <p>Loading...</p>;
  } else {
    return (
      <Layout>
         <form onSubmit={changeSubmit}>
          <input
            type="text"
            placeholder="name"
            name="name"
            value={user.name}
            onChange={onChange} 
          />

          <input
            type="text"
            name="surname"
            value={user.surname}
            placeholder="surname"
            onChange={onChange}
          />
          <input
            type="text"
            name="address"
            placeholder="Dirección"
            value={user.address}
            onChange={onChange}
          />
          <input type="submit" value="edictar"/>
        </form>
      </Layout>
    );
  }
}

export default Profile;
