import axios from "axios";

export const GET_TOKEN = "GET_TOKEN"
const urlServer = "https://catalogo-carcassurban-server.vercel.app/server"
export const getToken = (userData) => {
    return async function (dispatch){
        const datos = userData;
        const data = await axios.post(`${urlServer}/login`, datos );
        const codigo = data.data;
        dispatch({ type: GET_TOKEN, payload: codigo });
    };
};