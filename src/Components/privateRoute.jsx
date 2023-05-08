import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const privateRoute = ({children}) => {
    let userName = JSON.parse(localStorage.getItem("userName"));
    // const navigate = useNavigate();
    console.log(userName);

  return (
      userName ? {children} : <Navigate to="/login"></Navigate>
  );
}

export default privateRoute;