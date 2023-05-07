import React, { useState } from 'react';
import { Input, Button, Heading, Alert, AlertIcon, Text} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { addUser } from '../Redux/AuthReducer/action';
import { useNavigate } from 'react-router-dom';

const alertDialouge = () => {
  return <Alert status='success'>
      <AlertIcon />
      Data uploaded to the server. Fire on!
     </Alert>
}

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignUp = () => {
    const newUser = {
      name,
      email,
      password
    }
    if(name && email && password){
      dispatch(addUser(newUser));
      navigate("/login");
      setName("");
      setEmail("");
      setPassword("");
    }else{
      alert("Please fill all details");
       alertDialouge()
    }
  };


 return (
   <div style={{width:"20%", margin:"auto", position:"relative", top:"10vh"}}>
    <Text fontSize="2xl" color={"orange.400"}>SignUp to Dribbble Mania</Text>
    <Input type="text" placeholder='Enter name here...' value={name} style={{margin:"1vh"}} onChange={(e) => setName(e.target.value)}/>
     <Input type="email" placeholder='Enter the email...' value={email} style={{margin:"1vh"}} onChange={(e) => setEmail(e.target.value)}/>
     <Input type="password" placeholder='Enter passsword...' value={password} style={{margin:"1vh"}} onChange={(e) => setPassword(e.target.value)}/>
     <Button size='md' height='48px' width='200px' border='none' bgColor={"pink.500"} color={"white"} style={{margin:"1vh"}}onClick={handleSignUp}>Create Account</Button>
   </div>
 )
    
}

export default SignUp;