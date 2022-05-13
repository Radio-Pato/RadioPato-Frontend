import axios from 'axios';

let URL_MAIN= "http://localhost:3001/users/"


export const postRegister = async (data:any) => {
    let URL = `${URL_MAIN}registro`;
    let response = await axios.post(URL, data);
    return response;
  };

  export const getRegister = async (data:any) => {
	let URL = `${URL_MAIN}acceso`;
	let response = await axios.post('http://localhost:3001/users/acceso',data)
    return response;
  };