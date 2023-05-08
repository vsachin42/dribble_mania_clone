import React, { useState } from 'react';
import { Input, Button, Text} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from '../Redux/AuthReducer/action';
import { useNavigate } from 'react-router-dom';

const Login = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const userData = useSelector(store => store.authReducer.userData);
   const dispatch = useDispatch();
   const navigate = useNavigate();

   
   console.log(userData);
   
   const handleLogin = () => {
     dispatch(getUserData);
     if(email==="admin@mail.com" && password==="admin"){
      navigate("/admin");
     }else if(email && password){
      if(email && password){
        // userData.map((el) => {
        //   if(el.email===email && el.password===password){
        //       navigate("/");
        //       localStorage.setItem("userName", JSON.stringify(el.name));
        //   }
        // })
        for(let i=1; i<userData.length; i++){
          if(userData[i].email===email && userData[i].password===password){
             localStorage.setItem("userName", JSON.stringify(userData[i].name));
             navigate("/");
                  break;
              }
        }
      }else{
        alert("Wrong Credentials");
      }
     }else{
      alert("Please fill all details");
     };
    // setEmail("");
    // setPassword("");
   }


  return (
    <div style={{width:"20%", margin:"auto", position:"relative", top:"10vh"}}>
    <Text fontSize="xl" color={"grey.400"}>Email Address</Text>
      <Input type="email" placeholder='Enter the email' value={email} style={{margin:"1vh"}} onChange={(e) => setEmail(e.target.value)}/>
    <Text fontSize="xl" color={"grey.400"}>Password</Text>
      <Input type="password" placeholder='Enter passsword' value={password} style={{margin:"1vh"}} onChange={(e) => setPassword(e.target.value)}/>
      <Button size='md' height='48px' width='200px' border='2px' borderColor='green.500' style={{margin:"1vh"}}onClick={handleLogin}>Sign In</Button>
    </div>
  )
}

export default Login;