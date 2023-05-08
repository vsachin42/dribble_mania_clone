import { Box, Button, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { VscHeart } from "react-icons/vsc";
import { ViewIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom';


const ProductCard = ({ id, image, name, usertype, rating }) => {
  const [heart, setheart] = useState(Math.ceil(Math.random(Date.now) * 10) || 0)
  const [eye, seteye] = useState(Math.ceil(Math.random(Date.now) * 10) || 0)

  const increaheart = () => {
    setheart((heart) => heart + 1)
  }

  const incrementeye = () => {
    seteye((eye) => eye + 1)
  }

  return (
    <Link to={`/product/${id}`}><Box borderTopRadius={'10px'} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" ml={{base:'80px',sm:'0px',md:'0',lg:'0',xl:'0',"2xl":'0'}} p={'10px'}>
      <Image borderRadius={"10px"} w="100%" src={image} h={'230px'} />
      <Box p={"6px"} mt={'5px'} display={'flex'} justifyContent={'space-around'} w={{base:"100%",sm:"100%",md:"100%",lg:"100%",xl:"100%","2xl":"100%"}} h={{base:"200px",sm:"100px",md:"80px",lg:"80px",xl:"80px","2xl":"100px"}} position={'relative'}>
        <Text fontSize={'14px'} w={'70%'} fontWeight={'semibold'}>{name}</Text>

        <Box w={'100%'} display={'flex'} justifyContent={'space-between'}>
          <Button  mt={'1px'} fontSize={'10px'} padding={'0px'} h={'20px'} color={'white'} backgroundColor={"#ccc"} _hover={{ backgroundColor: "#ea4c89", color: "white" }} fontWeight={'semibold'}>{usertype}</Button>

          <Box mt={'4px'} w={'50%'} display={'flex'} justifyContent={'space-around'}>
            <VscHeart onClick={increaheart} /><Text mt={'-4px'}>{heart * Math.ceil(Math.random(Date.now) * 10)}</Text>
            <Box w="50%" display={'flex'} >
              <ViewIcon onClick={incrementeye} />
              <Text pr={'5px'} mt={'-4px'}>{eye}.{Math.ceil(Math.random(Date.now) * 10) || 0}k</Text>
            </Box>
          </Box>
        </Box>
      </Box>
      <Button marginBottom={'10px'}>Rating - {rating}</Button>
    </Box>
    </Link>
  )
}

export default ProductCard