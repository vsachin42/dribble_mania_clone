import { Button } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={{display: "flex", justifyContent: "space-between",  padding: "2vh"}}>
        <div style={{display: "flex", wordSpacing: "2vw"}}>
            <img src="../Logo/dribbble-mania.jpeg"></img>
            <Link to="/products" style={{textDecoration: "none"}}><h2>Inspiration</h2></Link>
            <Link to="/products" style={{textDecoration: "none"}}><h2>Find Work</h2></Link>
            <Link to="/products" style={{textDecoration: "none"}}><h2>Learn Design</h2></Link>
            <Link to="/products" style={{textDecoration: "none"}}><h2>Go Pro</h2></Link>
            <Link to="/products" style={{textDecoration: "none"}}><h2>Hire Designers</h2></Link>
        </div>
        <div style={{display: "flex", width:"10%", alignItems: "center", justifyContent:"space-between"}}>
            {/* <Link to="/login"> */}
                <Button bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>Sign in</Button>
              {/* </Link> */}
            <Link to="/signup"><Button>Sign Up</Button></Link>
        </div>
    </div>
  );
}

export default Navbar;