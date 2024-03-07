import { GET_PRODUCTO, GET_PRODUCTOS } from "./actions/actionsProductos.js";
import { GET_TOKEN } from "./actions/actionsToкen.js";


const initialState = {
    productos: null,
    token: null,
    producto: null
  }
  
const rootReducer = (state = initialState, action)=>{
    switch (action.type) {
        case GET_PRODUCTOS:
            return {...state, productos:action.payload};
        case GET_PRODUCTO:
            return {...state, producto:action.payload};
        case GET_TOKEN:
            return {...state, token:action.payload};
            default:
            return {...state}
    }
}


export default rootReducer;