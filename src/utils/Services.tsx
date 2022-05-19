import axios from 'axios';

let URL_MAIN= "http://localhost:3001/usuarios/"


export const postRegister = async (data:any) => {
    let URL = `${URL_MAIN}registro`;
    let response = await axios.post(URL, data);
    return response;
  };

  export const getRegister = async (data:any) => {
	let URL = `${URL_MAIN}acceso`;
	let response = await axios.post(URL,data)
    return response;
  };


  export const getSections = async () =>{
	  let URL = "http://localhost:3001/secciones";
	  let response = await axios.get(URL)
	  return response
  }
