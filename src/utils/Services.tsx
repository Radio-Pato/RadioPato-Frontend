import axios from 'axios';

let URL_MAIN= "http://localhost:3001/users/"


export const postRegister = async (data:any) => {
    let URL = `${URL_MAIN}registro`;
    let response = await axios.post(URL, data);
    return response;
  };

  export const getRegister = async () => {
    const bodyParameters:any = {
      method: 'GET',
            body: {
              email:"nahyomi2000@gmail.com",password:"palmira123"
            }
    }
    let URL = "http://localhost:3001/users/acceso";
    let response = await axios.get(URL,bodyParameters);
    return response;
  };