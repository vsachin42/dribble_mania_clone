import React, { useState } from 'react';
import { Input, Button} from '@chakra-ui/react';

const Login = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const handleLogin = () => {
    console.log(email);
    console.log(password);
    setEmail("");
    setPassword("");
   }


  return (
    <div style={{width:"20%", margin:"auto", position:"relative", top:"10vh"}}>
      <Input type="email" placeholder='Enter the email' value={email} style={{margin:"1vh"}} onChange={(e) => setEmail(e.target.value)}/>
      <Input type="password" placeholder='Enter passsword' value={password} style={{margin:"1vh"}} onChange={(e) => setPassword(e.target.value)}/>
      <Button size='md' height='48px' width='200px' border='2px' borderColor='green.500' style={{margin:"1vh"}}onClick={handleLogin}>Login</Button>
    </div>
  )
}

export default Login;