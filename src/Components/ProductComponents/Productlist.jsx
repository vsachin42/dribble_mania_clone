import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Get_Data } from '../../Redux/ProductReducer/action'
import { Box } from '@chakra-ui/react'
import ProductCard from './ProductCard'

const Productlist = () => {
  const product=useSelector((store)=>store.ProductReducer.products)
  const dispatch=useDispatch()
  console.log(product)
  useEffect(()=>{
     dispatch(Get_Data)
  },[])
  return (
    <Box w={'90%'} margin={'0px auto'} mt={'10%'} display={'grid'} gridTemplateColumns={'auto auto auto auto'} gap={'40px'}>
      {product.map((el)=>{
        return <ProductCard key={el.id} {...el}/>
      })}
    </Box>
  )
}

export default Productlist





{/* <Box w={'90%'} margin={'0px auto'} mt={'10%'} display={'grid'} gridTemplateColumns={'auto auto auto auto'} gap={'40px'}>
{product.map((el)=>{
  return <ProductCard key={el.id} {...el}/>
})}
</Box> */}