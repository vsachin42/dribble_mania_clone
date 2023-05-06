import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, NEW_USER_REQUEST } from "./actionTypes"

export const getUserData = (dispatch) => {
    dispatch({type:LOGIN_REQUEST});
  return axios.get("https://dribble-mania.onrender.com/users").then((res) => {
        // console.log(res.data);
        dispatch({type:LOGIN_SUCCESS, payload:res.data});
    }).catch((err) => {
        dispatch({type:LOGIN_FAILURE});
    });
};


export const addUser = (userData) => (dispatch) => {
     dispatch({type:NEW_USER_REQUEST});
     axios.post("https://dribble-mania.onrender.com/users", userData).then((res) => {
        console.log(res);
     }).catch((err) => {
        console.log(err);
     })
}