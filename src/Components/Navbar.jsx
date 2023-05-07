import { Box, Button, Container, Flex, Image, Spacer, Text, filter } from '@chakra-ui/react';
import React from 'react';
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
        </div>
        )};

export default Navbar;