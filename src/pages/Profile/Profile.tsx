import React, { Children, useContext, useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import styles from "./Profile.module.css";
import { useForm } from "react-hook-form";
import { getUsers, updateUser, deleteUser } from "../../utils/Services";
import Cookies from "js-cookie";
import { AuthContext } from "../../contexts/DataContext";
import { useNavigate } from "react-router-dom";

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
<<<<<<< HEAD
/*   const [takeAway, setTakeAway] = useState(user) */
=======
	const {auth, setAuth}:any = useContext(AuthContext)
>>>>>>> 6ba653abb939c3094b5f1891c1b0271abd707412

  useEffect(() => {
    getUsers(email, token).then((res) => {
      setUser(res.data.data);
      console.log(user)
    });
  }, []);

<<<<<<< HEAD
  // 
=======
  //
>>>>>>> 6ba653abb939c3094b5f1891c1b0271abd707412


  const onChange = (e:any) => {
    setUser({
        ...user,
        [e.target.name]: e.target.value
    }
    )
}

<<<<<<< HEAD
const changeSubmit = (e:any) => {
=======
const {handleSubmit, register} = useForm<TInputs>({
	reValidateMode: "onChange"
})

/* const changeSubmit = (e:any) => {
>>>>>>> 6ba653abb939c3094b5f1891c1b0271abd707412
  e.preventDefault();
  console.log(user)
  updateUser(user).then((res) => {
    console.log(res);
<<<<<<< HEAD
    
  });

=======

  });

} */
const onSubmitTest = async (data:any, e:any) =>{
	data = user
	e.preventDefault();
	updateUser(data).then((res) => {
		console.log(res);

	  });
}




const navigate = useNavigate()
const deleted = async () =>{
	deleteUser(user)
	.then((res) => {
		if(res.status === 200){
		Cookies.set('access_token',"")
		Cookies.set('email',"")
		Cookies.remove('access_token')
		Cookies.remove('email')
		setAuth(false)

		}
	  }).catch((err)=>{
		console.error(err)
	  })
	navigate("/login")

>>>>>>> 6ba653abb939c3094b5f1891c1b0271abd707412
}

  if (user <= 0) {
    return <p>Loading...</p>;
  } else {
    return (
      <Layout>
<<<<<<< HEAD
         <form onSubmit={changeSubmit}>
          <input
            type="text"
            placeholder="name"
            name="name"
            value={user.name}
            onChange={onChange} 
=======
		  <>
		  <h2 className={styles.title}>&#129414; Bienvenida/o {user.email} ;D &#129414;</h2>
         <form className={styles.profile} onSubmit={handleSubmit(onSubmitTest)}>
          <input
            type="text"
            placeholder="name"
			{...register('name')}
            value={user.name}
            onChange={onChange}
>>>>>>> 6ba653abb939c3094b5f1891c1b0271abd707412
          />

          <input
            type="text"
<<<<<<< HEAD
            name="surname"
=======
            {...register('surname')}
>>>>>>> 6ba653abb939c3094b5f1891c1b0271abd707412
            value={user.surname}
            placeholder="surname"
            onChange={onChange}
          />
          <input
            type="text"
<<<<<<< HEAD
            name="address"
=======
           {...register('address')}
>>>>>>> 6ba653abb939c3094b5f1891c1b0271abd707412
            placeholder="Dirección"
            value={user.address}
            onChange={onChange}
          />
<<<<<<< HEAD
          <input type="submit" value="edictar"/>
        </form>
=======
			     <input
          type="text"
          id="building"
          placeholder="Edificio"
		  value={user.building}
          {...register("building")}
		  onChange={onChange}
        />

			<div className={styles.buttonsForm}>
				<button type="submit">Editar</button>
				<button onClick={deleted}>Borrar</button>
			</div>
        </form>

		</>
>>>>>>> 6ba653abb939c3094b5f1891c1b0271abd707412
      </Layout>
    );
  }
}

<<<<<<< HEAD
export default Profile;
=======
export default Profile;
>>>>>>> 6ba653abb939c3094b5f1891c1b0271abd707412
