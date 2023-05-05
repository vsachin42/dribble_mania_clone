import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes"

export const login = (dispatch) => {
    dispatch({type:LOGIN_REQUEST});
    axios.get("http://localhost:8080/users").then((res) => {
        console.log(res.data);
        dispatch({type:LOGIN_SUCCESS, payload:res.data});
    }).catch((err) => {
        dispatch({type:LOGIN_FAILURE});
    });
};