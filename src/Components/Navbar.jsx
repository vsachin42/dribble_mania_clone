import { Box, Button, Container, Flex, Image, Spacer, Text, filter } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
const Navbar = () => {
  let userName = JSON.parse(localStorage.getItem("userName"));
  const navigate = useNavigate();

  const handleLogout = () => {
    if(userName){
      localStorage.removeItem("userName");
      window.location.reload();
    }else{
        navigate("/signup");
    }
  }


  return (
    <DIV >
      <Flex m={4} shadow={'sm'} p={5} >
        <Box className='img'>
          {/* <img src="./image.dribbble-mania.jpeg"></img> */}
          <Link to='/'><Image w={110}  src='./dribbble-mania.jpg'/></Link>
        </Box>
        <Box className='first'>
          <Flex>
            <Box ml={5}>
              <Link to="/products" style={{textDecoration: "none"}}><Text fontWeight={500} color={'grey'} _hover={{color:'black'}} as={'h2'}>Inspiration</Text></Link>
            </Box>
            <Box ml={5}>
              <Link to="/products" style={{textDecoration: "none"}}><Text fontWeight={500} color={'grey'} _hover={{color:'black'}} as={'h2'}>Find Work</Text></Link>
            </Box >
            <Box ml={5}>
              <Link to="/products" style={{textDecoration: "none"}}><Text fontWeight={500} color={'grey'} _hover={{color:'black'}} as={'h2'}>Learn Design</Text></Link>
            </Box>
            <Box ml={5}>
              <Link to="/products" style={{textDecoration: "none"}}><Text fontWeight={500} color={'grey'} _hover={{color:'black'}} as={'h2'}>Go Pro</Text></Link>
            </Box>
            <Box ml={5}>
              <Link to="/products" style={{textDecoration: "none"}}><Text fontWeight={500} color={'grey'} _hover={{color:'black'}} as={'h2'}>Hire Designers</Text></Link>
            </Box >
          </Flex>
        </Box>
        <Spacer/>
        <Box>
          <Link to="/login">
                  <Button bg={'white'}
                color={'grey'}
                _hover={{
                  bg: 'white',
                }}>{
                  userName ? `Hi! ${userName}` : "Sign In" 
                }</Button>
                </Link>
        </Box>
        <Box ml={2} className='signup'>
          {/* <Link to="/signup"> */}
            <Button bg={'#ea4c89'}
                color={'white'} _hover={{backgroundColor:"#F48FB1"}} onClick={handleLogout}>{(JSON.parse(localStorage.getItem("userName")) && "LogOut") || "Sign Up"}</Button>
                {/* </Link> */}
        </Box> 
      </Flex>
      
        </DIV>
        
        )
  };
  const DIV=styled.div`
  
  @media all and (min-width:481px) and (max-width:750px){
    .first{
      display:none;
    }
   
   .signup{
    display: none;
   }
   
  }
  @media all and (max-width:480px){
    .first{
      display: none;
    }
    
   .signup{
    display: none;
   }
  }
  `

export default Navbar
