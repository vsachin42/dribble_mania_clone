import axios from "axios"
import { GET_PRODUCT_FALIURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./actionTypes"

export const Get_Data=(dispatch)=>{
    dispatch({type:GET_PRODUCT_REQUEST})
    axios.get("http://localhost:8080/products")
    .then((res)=>{
    dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data})
    })
    .catch((err)=>{
        console.log(err)
        dispatch({type:GET_PRODUCT_FALIURE})
    })
}