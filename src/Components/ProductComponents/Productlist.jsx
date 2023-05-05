import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Get_Data } from '../../Redux/ProductReducer/action'
import { Box, Select } from '@chakra-ui/react'
import ProductCard from './ProductCard'
import { useSearchParams } from 'react-router-dom'

const Productlist = () => {
  const product = useSelector((store) => store.ProductReducer.products)
  const [order, setorder] = useState("")
  const [filter, setfilter] = useState("")
  const dispatch = useDispatch()
  const [searchparams, setsearchparams] = useSearchParams()
  // console.log(product)
  useEffect(() => {
    dispatch(Get_Data)
  }, [])
  const paramsobj = {
    params: {
      _sort: "rating",
      _order: order
    }
  }

  const handlesort = (e) => {
    console.log(e.target.value)
    setorder(e.target.value)
  }
  const handlefilter = (e) => {
    console.log(e.target.value)
    setfilter(e.target.value)
  }
  useEffect(() => {
    dispatch(Get_Data(paramsobj))
  }, [order])

  useEffect(() => {
    const param = {

    }
    order && (param.order = order)
    setsearchparams(param)
  }, [order])

  return (
    <Box>
      <Box display={'flex'} justifyContent={'space-between'} width={'90%'} margin={'2% auto'}>
        {/* sorting */}
        <Box>
          <Select onChange={handlesort} border="1px solid gray" _hover={'none'} w={'100%'} placeholder='popular'>
            <option value='desc'>High Rating</option>
            <option value='asc'>Low Rating</option>
          </Select>
        </Box>
        {/* filtering */}
        <Box>
        <Select onChange={handlefilter} border="1px solid gray" _hover={'none'} w={'100%'} placeholder='filter'>
            <option value='name'>High Rating</option>
            <option value='usertype'>Low Rating</option>
          </Select>
        </Box>
      </Box>

      <Box w={'90%'} margin={'0px auto'} display={'grid'} gridTemplateColumns={'auto auto auto auto'} gap={'40px'}>
        {product.map((el) => {
          return <ProductCard key={el.id} {...el} />
        })}
      </Box>
    </Box>
  )
}

export default Productlist





