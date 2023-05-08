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
    <Box w={{base:"940px",sm:"1075px",md:"150%",lg:"1439px",xl:"100%","2xl":"100%"}}  position={'relative'}>
      <Box display={{base:"",sm:"flex",md:"flex",lg:"flex",xl:"flex","2xl":"flex"}}  justifyContent={'space-between'}  width={'90%'}  margin={'2% auto'}>
        {/* sorting */}
        <Box ml={{base:'80px',sm:'0',md:'0',lg:'0',xl:'0',"2xl":'0'}}>
          <Select  boxShadow={' rgba(0, 0, 0, 0.35) 0px 5px 15px;'} borderColor={'none'} focusBorderColor='gray.100' onChange={handlesort} border="1px solid gray" _hover={'none'} w={{base:"100%",sm:"100%",md:"100%",lg:"100%",xl:"100%","2xl":"100%"}} mb={{base:"20px",sm:"",md:"",lg:"",xl:"","2xl":""}} placeholder='popular'>
            <option value='desc'>High Rating</option>
            <option value='asc'>Low Rating</option>
          </Select>
        </Box>
        {/* filtering */}
        <Box p={'10x 0px'} onClick={handlevisible} display={visible ? "none" : "block"} ml={{base:"80px",sm:"0",md:"0",lg:"0",xl:"0","2xl":"0"}} w={{base:"90%",sm:"35%",md:"27%",lg:"14%",xl:"12%","2xl":"12%"}}>
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

        <Box display={!visible ? "none" : "block"}  w={{base:"90%",sm:"45%",md:"35%",lg:"20%",xl:"15%","2xl":"15%"}}  ml={{base:'80px',sm:'0px',md:'40px',lg:'0',xl:'0',"2xl":'0'}} >
          <Box borderRadius={'10px'} display={{base:"",sm:"flex",md:"flex",lg:"flex",xl:"flex","2xl":"flex"}} w={'100%'}  justifyContent={'space-between'} boxShadow={' rgba(0, 0, 0, 0.35) 0px 5px 15px;'} p={'1px 20px'} >
            <Box mr={{base:"5",sm:"6",md:"5",lg:"",xl:"","2xl":""}} onChange={handleusertype}>
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
            <Box onClick={closeicon} display={{base:"block",sm:'block',md:'block',lg:'block',xl:'block',"2xl":'block'}} h={{base:'80px',sm:'40px',md:'40x',lg:'40px',xl:'40px',"2xl":'40px'}} mt={{base:'-50px',sm:2,md:2,lg:2,xl:2,"2xl":2}}  ml={{base:"130px",sm:"-125px",md:"-105px",lg:"-60px",xl:"-40px","2xl":"-40px"}}>
              <TriangleUpIcon />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box w={'90%'} margin={'0px auto'} display={'grid'} gridTemplateColumns={{base:"auto",sm:"auto auto",md:"auto auto",lg:"auto auto auto",xl:"auto auto auto auto","2xl":"auto auto auto auto"}} gap={'40px'}>
        {product.map((el) => {
          return <ProductCard key={el.id} {...el} />
        })}
      </Box>
    </Box>
  )
}

export default Productlist