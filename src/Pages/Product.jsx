import { Box } from '@chakra-ui/react'
import React from 'react'
import Video from '../Components/ProductComponents/Video'
import Productlist from '../Components/ProductComponents/Productlist'


const Product = () => {
  return (
   <Box>
      <Video />
     <Productlist/> 
    </Box>
  )
}

export default Product