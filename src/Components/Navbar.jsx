import { Box, Button, Container, Flex, Image, Spacer, Text, filter } from '@chakra-ui/react';
import { Button} from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Flex m={4} shadow={'sm'} p={5}>
        <Box>
          {/* <img src="./image.dribbble-mania.jpeg"></img> */}
          <Link to='/'><Image w={110}  src='./dribbble-mania.jpg'/></Link>
        </Box>
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
        <Spacer/>
        <Box>
          <Link to="/login">
                  <Button bg={'white'}
                color={'grey'}
                _hover={{
                  bg: 'white',
                }}>Sign in</Button>
                </Link>
        </Box>
        <Box ml={2}>
          <Link to="/signup"><Button bg={'#ea4c89'}
                color={'white'} _hover={{backgroundColor:"#F48FB1"}}>Sign Up</Button></Link>
        </Box> 
      </Flex>
      {/* <div style={{display: "flex", width:"10%", alignItems: "center", justifyContent:"space-between"}}>
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
            <Link to="/signup"><Button>Sign Up</Button></Link>
        </div> */}
      
        {/* <div style={{display: "flex", wordSpacing: "2vw"}}>
            <img src="./image.dribbble-mania.jpeg"></img>
            <Link to="/products" style={{textDecoration: "none"}}><h2>Inspiration</h2></Link>
            <Link to="/products" style={{textDecoration: "none"}}><h2>Find Work</h2></Link>
            <Link to="/products" style={{textDecoration: "none"}}><h2>Learn Design</h2></Link>
            <Link to="/products" style={{textDecoration: "none"}}><h2>Go Pro</h2></Link>
            <Link to="/products" style={{textDecoration: "none"}}><h2>Hire Designers</h2></Link>
        </div> */}

      
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