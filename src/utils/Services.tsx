import axios from "axios";

let URL_MAIN = "http://localhost:3001/";

export const postRegister = async (data: any) => {
  let URL = `${URL_MAIN}usuarios/registro`;
  let response = await axios.post(URL, data);
  return response;
};

export const getRegister = async (data: any) => {
  let URL = `${URL_MAIN}usuarios/acceso`;
  let response = await axios.post(URL, data);
  return response;
};

export const getSections = async () => {
  let URL = `${URL_MAIN}secciones`;
  let response = await axios.get(URL);
  return response;
};

export const getUsers = async (
  email: String | undefined,
  token: String | undefined
) => {
  let URL = `${URL_MAIN}usuarios/miperfil`;
  let response = await axios.post(URL, { email: email, token: token });
  return response;
};

export const updateUser = async (data: any) => {
  let URL = `${URL_MAIN}usuarios/miperfil`;
  let response = await axios.patch(URL, data);
  return response;
};

export const deleteUser = async (data: any) => {
  let URL = `${URL_MAIN}usuarios/miperfil`;
  let response = await axios.delete(URL, { data: data });
  return response;
};

export const getComments = async () => {
  let URL = `${URL_MAIN}comentarios`;
  let response = await axios.get(URL);
  return response;
};

export const createComent = async (data: any) => {
  let URL = `${URL_MAIN}comentarios`;
  let response = await axios.post(URL, data);
  return response;
};

export const deleteComents = async (data: any) => {
  let URL = `${URL_MAIN}comentarios`;
  let response = await axios.delete(URL, { data: data });
  return response;
};
