import axios from "axios"
import { DATA_REQUEST,DATA_SUCCESS,DATA_FAILURE,DELETE_REQUEST,DELETE_SUCCESS,DELETE_FAILURE,
EDIT_REQUEST,EDIT_SUCCESS,EDIT_FAILURE } from "./actionTypes"


export const getData=(params)=>(dispatch)=>{
    dispatch({type:DATA_REQUEST})
    axios.get("https://weware.onrender.com/users", params)
    .then((res)=>dispatch({type:DATA_SUCCESS, payload:res.data}))
    .catch((err)=>dispatch({type:DATA_FAILURE}))
    }


    export const deleteItem = (id, payload) => (dispatch) => {
        dispatch({ type: DELETE_REQUEST});
        return axios.delete(`https://weware.onrender.com/users/${id}`, payload)
          .then((r) => dispatch({ type: DELETE_SUCCESS, payload: r }))
          .catch((e) => dispatch((e) => dispatch({ type: DELETE_FAILURE, payload: e })
            )
          );
      };

      export const EditData = (id, payload) => (dispatch) => {
        dispatch({ type: EDIT_REQUEST });
        return axios.put(`"https://weware.onrender.com/users/${id}`, payload)
          .then((r) => { dispatch({ type:EDIT_SUCCESS, payload: r.data });})
          .catch((e) => dispatch({ type: EDIT_FAILURE, payload: e }));
      };