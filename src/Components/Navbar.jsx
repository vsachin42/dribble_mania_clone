import { Button} from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={{display: "flex", justifyContent: "space-between",  padding: "2vh", width:"95%", margin:"auto"}}>
        <div style={{display: "flex", wordSpacing: "2vw"}}>
            {/* <img src="./dribbble-mania.jpeg"></img> */}
            <Link to="/products" style={{textDecoration: "non"}}><p style={{fontSize:"20px"}}>Inspiration</p></Link>
            <Link to="/products" style={{textDecoration: "none"}}><p style={{fontSize:"20px"}}>Find Work</p></Link>
            <Link to="/products" style={{textDecoration: "none"}}><p style={{fontSize:"20px"}}>Learn Design</p></Link>
            <Link to="/products" style={{textDecoration: "none"}}><p style={{fontSize:"20px"}}>Go Pro</p></Link>
            <Link to="/products" style={{textDecoration: "none"}}><p style={{fontSize:"20px"}}>Hire Designers</p></Link>
        </div>
        <div style={{display: "flex", width:"10%", alignItems: "center", justifyContent:"space-between"}}>
            <Link to="/login">
                <Button bg={'white'}
              color={'grey'}
              _hover={{
                bg: 'white',
              }}>Sign in</Button>
              </Link>
            <Link to="/signup"><Button bg={'pink.500'}
              color={'white'}
              _hover={{
                bg: 'pink.400',
              }}>Sign Up</Button></Link>
        </div>
    </div>
  );
}

export default Navbar;