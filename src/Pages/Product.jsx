import { Box } from '@chakra-ui/react'
import React from 'react'
import Video from '../Components/ProductComponents/Video'
import Productlist from '../Components/ProductComponents/Productlist'
import Footer from './Footer'


const Product = () => {
  return (
   <Box>
      <Video />
     <Productlist/> 
     <Footer/>
    </Box>
  )
}

export default Product