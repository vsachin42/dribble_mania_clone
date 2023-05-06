import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Get_Data } from '../../Redux/ProductReducer/action'
import { Box, Checkbox, Select, Text } from '@chakra-ui/react'
import ProductCard from './ProductCard'
import { useLocation, useSearchParams } from 'react-router-dom'
import { VscFilter } from "react-icons/vsc";
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'

const Productlist = () => {
  const product = useSelector((store) => store.ProductReducer.products)
  const [searchparams, setsearchparams] = useSearchParams()
  const [order, setorder] = useState("")
  const intialusertype = searchparams.getAll("usertype")
  const [usertype, setusertype] = useState(intialusertype || [])
  const [visible, setvisible] = useState(false)
  const dispatch = useDispatch()
  const location = useLocation()

  useEffect(() => {
    dispatch(Get_Data)
  }, [])
  const paramsobj = {
    params: {
      _sort: "rating",
      _order: order,
      usertype: searchparams.getAll("usertype")
    }
  }

  const handlesort = (e) => {
    console.log(e.target.value)
    setorder(e.target.value)
  }
  // filter using usertype
  const handleusertype = (e) => {
    const { value } = e.target
    let newusertype = [...usertype]
    if (newusertype.includes(value)) {
      newusertype = newusertype.filter((el) => el != value)
    } else {
      newusertype.push(value)
    }
    setusertype(newusertype)
  }

  useEffect(() => {
    dispatch(Get_Data(paramsobj))
  }, [order, location.search])

  useEffect(() => {
    const param = {

    }
    usertype && (param.usertype = usertype)
    order && (param.order = order)
    setsearchparams(param)
  }, [order, usertype])

  const handlevisible = () => {
    setvisible((prev) => !prev)
  }
  const closeicon = () => {
    setvisible((prev) => !prev)
  }
  return (
    <Box>
      <Box display={'flex'} justifyContent={'space-between'} width={'90%'} margin={'2% auto'}>
        {/* sorting */}
        <Box >
          <Select  boxShadow={' rgba(0, 0, 0, 0.35) 0px 5px 15px;'} borderColor={'none'} focusBorderColor='gray.100' onChange={handlesort} border="1px solid gray" _hover={'none'} w={'100%'} placeholder='popular'>
            <option value='desc'>High Rating</option>
            <option value='asc'>Low Rating</option>
          </Select>
        </Box>
        {/* filtering */}
        <Box p={'10x 0px'} onClick={handlevisible} display={visible ? "none" : "block"} w={'12%'}>
          <Box pb={'5px'} width={'100%'} borderRadius={'10px'} border="1px solid silver" boxShadow={' rgba(0, 0, 0, 0.35) 0px 5px 15px;'} display={'flex'} justifyContent={'space-around'}>
            <Box mt={'8px'}> <VscFilter fontSize={'22px'} mt={"10px"} /></Box>
            <Box>
              <Text mt={'5px'} display={'flex'} justifyContent={'space-around'}>Filter</Text>
            </Box>
            <Box ml={'-20px'} mt={1}>
              <TriangleDownIcon />
            </Box>
          </Box>
        </Box>

        <Box display={!visible ? "none" : "block"} w={'15%'}>
          <Box borderRadius={'10px'} display={'flex'} w={'100%'} justifyContent={'space-between'} boxShadow={' rgba(0, 0, 0, 0.35) 0px 5px 15px;'} p={'1px 20px'} >
            <Box onChange={handleusertype}>
              <Text>Filter By UserType</Text>
              <lable>Pro</lable>
              <Checkbox isChecked={usertype.includes("PRO")} colorScheme='red' ml={'3px'} mr={'5px'} borderRadius={'4px'} mt={1} border="1px solid silver" value="PRO" name='usertype' />
              <label>Team</label>
              <Checkbox isChecked={usertype.includes("TEAM")} colorScheme='green' ml={'3px'} borderRadius={'4px'} mt={1} border="1px solid silver" value="TEAM" name='usertype' />
            </Box>
            {/* <Box onChange={handleusername}>
              <Text>Filter By Name</Text>
              <lable>Pro</lable>
              <Checkbox colorScheme='red' ml={'3px'} mr={'5px'} borderRadius={'4px'} mt={1} border="1px solid silver" value="PRO" />
              <label>Team</label>
              <Checkbox colorScheme='green' ml={'3px'} borderRadius={'4px'} mt={1} border="1px solid silver" value="TEAM" />
            </Box> */}
            {/* close icaon */}
            <Box onClick={closeicon} mt={2} ml={'-40px'}>
              <TriangleUpIcon />
            </Box>
          </Box>
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





