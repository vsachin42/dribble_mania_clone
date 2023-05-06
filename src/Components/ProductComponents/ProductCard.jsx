import { Box, Button, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { VscHeart } from "react-icons/vsc";
import { ViewIcon } from '@chakra-ui/icons'
import {Link} from "react-router-dom"


const ProductCard = ({ id, image, name, description, usertype, rating }) => {
  const [heart, setheart] = useState(Math.ceil(Math.random(Date.now) * 10) || 0)
  const [eye, seteye] = useState(Math.ceil(Math.random(Date.now) * 10) || 0)

  const increaheart = () => {
    setheart((heart) => heart + 1)
  }

  const incrementeye = () => {
    seteye((eye) => eye + 1)
  }

  return (
    <Link to={`/products/${id}`}><Box borderTopRadius={'10px'} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" >
      <Image borderRadius={"10px"} src={image} h={'230px'} />
      <Box p={"5px"} mt={'5px'} display={'flex'}>
        <Text fontSize={'14px'} fontWeight={'semibold'}>{name}</Text>

        <Box w={'100%'} display={'flex'}>
          <Button ml={'10px'} mt={'1px'} fontSize={'10px'} padding={'0px'} h={'20px'} color={'white'} backgroundColor={"#ccc"} _hover={{ backgroundColor: "#ea4c89", color: "white" }} fontWeight={'semibold'}>{usertype}</Button>

          <Box mt={'4px'} w={'50%'} display={'flex'} justifyContent={'space-around'}>
            {/* <Text borderRadius={'2px'} _hover={{backgroundColor:"#ea4c89",color:"white"}} alignItems={'center'}  padding={'0px'} ><VscHeart/></Text> */}
            {/* <Text pb={'-5'} m={'0px'} _hover={{backgroundColor:"#ea4c89",color:"white"}}><VscHeart onClick={increaheart} /></Text> */}
            <VscHeart onClick={increaheart} /><Text mt={'-4px'}>{heart * Math.ceil(Math.random(Date.now) * 10)}</Text>
            <Box w="50%" display={'flex'}>
              <ViewIcon onClick={incrementeye} />
              <Text pl={'5px'} mt={'-4px'}>{eye}.{Math.ceil(Math.random(Date.now) * 10) || 0}k</Text>
            </Box>
          </Box>
        </Box>
      </Box>
      <Button>Rating - {rating}</Button>
    </Box>
    </Link>
  )
}

export default ProductCard


