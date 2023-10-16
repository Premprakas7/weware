import axios from "axios"
import { DATA_REQUEST,DATA_SUCCESS,DATA_FAILURE } from "./actionTypes"


export const getData=(params)=>(dispatch)=>{
    dispatch({type:DATA_REQUEST})
    axios.get("https://weware.onrender.com/users", params)
    .then((res)=>dispatch({type:DATA_SUCCESS, payload:res.data}))
    .catch((err)=>dispatch({type:DATA_FAILURE}))
    }