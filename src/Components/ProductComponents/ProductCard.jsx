import { Box, Button, Image ,Text} from '@chakra-ui/react'
import React from 'react'
import { VscHeart } from "react-icons/vsc";

const ProductCard = ({id,image,name,description,usertype}) => {
  return (
    <Box border="1px solid red">
      <Image borderRadius={"10px"} src={image} h={'230px'}/>
      <Box mt={'5px'} display={'flex'}>
      <Text fontSize={'14px'} fontWeight={'semibold'}>{name}</Text>
      <Button ml={'10px'} mt={'1px'} fontSize={'10px'} padding={'0px'} h={'20px'} color={'white'} backgroundColor={"#ccc"}  _hover={{backgroundColor:"#ea4c89",color:"white"}} fontWeight={'semibold'}>{usertype}</Button>
      <Button padding={'0px'} ><VscHeart/></Button>
      </Box>
    </Box>
  )
}

export default ProductCard


