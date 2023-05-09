import { Box, Button, Heading, Input } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { Search2Icon } from '@chakra-ui/icons'
import { Get_Data } from '../../Redux/ProductReducer/action'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

const Video = () => {
    const [search, setsearch] = useState("")
    const dispatch = useDispatch()
    const [_, setsearchparams] = useSearchParams()
    const handlesearch = (e) => {
        setsearch(e.target.value)
    }
    const paramsobj = {
        params: {
            q: search && search
        }
    }

    let id = useRef()
    useEffect(() => {
        if (id.current) {
            clearTimeout(id.current)
        }
        id.current = setTimeout(() => {
            dispatch(Get_Data(paramsobj))
        }, 1000);

    }, [search])

    useEffect(() => {
        const param = {

        }
        search && (param.search = search)
        setsearchparams(param)
    }, [search])
    return (
        <Box w={{base:"940px",sm:"1075px",md:"1439px",lg:"1439px",xl:"100%","2xl":"100%"}}   h={{base:"450px",sm:"470px",md:"450px",lg:"400px",xl:"400px","2xl":"77vh"}}  overflow={'hidden'}  position={'relative'}  >
           {/* h={{base:"115vh",sm:"110vh",md:"110vh",lg:"98vh",xl:"77vh","2xl":"77vh"}} */}
            <Box position={'relative'}>
                <video style={{
                    top: 0,
                    right: 0,
                    // bottom: 0,
                    left: 0,
                    // height: " 77vh",
                    width: "100%",
                    overflow: "hidden",
                    objectFit: "cover",
                    zIndex: -99,
                    position: "relative",
                    filter: "brightness(50%)"
                }} autoPlay muted loop src="https://cdn.dribbble.com/uploads/39421/original/963b4f8739cbdf86ca3f3a23245efd18.mp4?1657824985"></video>
            </Box>

            {/* Buttons */}
            <Box  w={{base:"95%",sm:"80%",md:"80%",lg:"80%",xl:"80%","2xl":"80%"}} textAlign={'center'} marginLeft={{base:"2%",sm:"10%",md:"10%",lg:"10%",xl:"10%","2xl":"10%"}}   display={'flex'} justifyContent={'space-between'} color="white" top="8%" position={'absolute'}>
                <Button _hover={'none'} padding={'25px 20px'} color={'black'} backgroundColor={'white'} borderRadius={"25px"}>Discover</Button>

                <Button backgroundColor={'rgba(0,0,0,0.5)'} padding={'25px 20px'} borderRadius={"25px"} _hover={{ backgroundColor: "white", color: "black" }}>Animation</Button>

                <Button backgroundColor={'rgba(0,0,0,0.5)'} padding={'25px 20px'} borderRadius={"25px"} _hover={{ backgroundColor: "white", color: "black" }}>Branding</Button>

                <Button backgroundColor={'rgba(0,0,0,0.5)'} padding={'25px 20px'} borderRadius={"25px"} _hover={{ backgroundColor: "white", color: "black" }}>Illustration</Button>

                <Button backgroundColor={'rgba(0,0,0,0.5)'} padding={'25px 20px'} borderRadius={"25px"} _hover={{ backgroundColor: "white", color: "black" }}>Mobile</Button>

                <Button backgroundColor={'rgba(0,0,0,0.5)'} padding={'25px 20px'} borderRadius={"25px"} _hover={{ backgroundColor: "white", color: "black" }}>Print</Button>

                <Button backgroundColor={'rgba(0,0,0,0.5)'} padding={'25px 20px'} borderRadius={"25px"} _hover={{ backgroundColor: "white", color: "black" }}>Product Design</Button>

                <Button backgroundColor={'rgba(0,0,0,0.5)'} padding={'25px 20px'} borderRadius={"25px"} _hover={{ backgroundColor: "white", color: "black" }}>Typography</Button>

                <Button backgroundColor={'rgba(0,0,0,0.5)'} padding={'25px 20px'} borderRadius={"25px"} _hover={{ backgroundColor: "white", color: "black" }}>Web Design</Button>
            </Box>

            <Box marginLeft={{base:"17%",sm:"30%",md:"31%",lg:"33%",xl:"33%","2xl":"33%"}}  position={'absolute'} top="25%">
                <Heading width={{base:"90%",sm:"70%",md:"70%",lg:"70%",xl:"70%","2xl":"70%"}}  fontSize={{base:"33px",sm:"33px",md:"33px",lg:"33px",xl:"33px","2xl":"33px"}} color={'white'}>
                    Explore the world’s leading design portfolios
                </Heading>
            </Box>
            <Box width={{base:"60%",sm:"44%",md:"44%",lg:"44%",xl:"50%","2xl":"46%"}} mt={'1.8%'} marginLeft={{base:"19%",sm:"30%",md:"25%",lg:"28%",xl:"27%","2xl":"27%"}} position={'absolute'}  top={{base:"44%",sm:"42%",md:"42%",lg:"42%",xl:"42%","2xl":"42%"}}  >
                <Heading fontFamily={'"Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;'} color="white" fontSize={'17.5px'} fontWeight={'light'}>
                    Millions of designers and agencies around the world showcase their portfolio work on Dribbble - the home to the world’s best design and creative professionals.
                </Heading>
            </Box>
            <Box top={{base:"67%",sm:"65%",md:"62%",lg:"62%",xl:"62%","2xl":"60%"}}  borderRadius={'25px'} width={{base:"50%",sm:"41%",md:"41%",lg:"41%",xl:"41%","2xl":"41%"}}  height="55px" opacity="1"  marginLeft={{base:"25%",sm:"32%",md:"28%",lg:"28%",xl:"28%","2xl":"28%"}} backgroundColor={'white'} position={'absolute'} >
            {/* marginTop={{base:"8%",sm:"4%",md:"2%",lg:"5%",xl:"1%","2xl":"1%"}} */}
                <Input backgroundSize={'20px'}  backgroundImage={'https://tse3.mm.bing.net/th?id=OIP.RF8hdNm5eOnLDpG_GSu5NwHaHN&pid=Api&P=0'} backgroundRepeat={'no-repeat'} backgroundPosition={'25px  18px'}  value={search} onChange={handlesearch} className='inputbox' opacity="10" paddingLeft={'60px'} background={'transparent'} fontSize={'20px'} h={'55px'} border={'none'} color="gray.600" borderRadius={'25px'} placeholder='Search...' />
            </Box>
            {/* <Box position={'absolute'} marginTop={{base:"6%",sm:"3%",md:"1%",lg:"4%",xl:"0","2xl":"0"}}  top="59%" fontSize={'18px'} color={'gray.600'} marginLeft={{base:"27.5%",sm:"33.5%",md:"29.5%",lg:"29.5%",xl:"29.5%","2xl":"29.5%"}} >
                <Search2Icon />
            </Box> */}
            <Box width={{base:"80%",sm:"53%",md:"53%",lg:"53%",xl:"53%","2xl":"53%"}}   top={{base:"83%",sm:"80%",md:"78%",lg:"78%",xl:"80%","2xl":"75%"}}  backgroundColor={'none'} marginLeft={{base:"13%",sm:"23%",md:"23%",lg:"23%",xl:"23%","2xl":"23%"}} color={'white'} display={'flex'} justifyContent={'space-between'}  position={'absolute'}>
                <Heading fontSize={'15px'} fontWeight={'semibold'} marginTop={'1%'}>Trending searches</Heading>
                <Button bg="none" _hover={'none'} borderRadius={'25px'} h={'30px'} border={'1px solid white'}>landing page</Button>
                <Button bg="none" _hover={'none'} borderRadius={'25px'} h={'30px'} border={'1px solid white'}>ios</Button>
                <Button bg="none" _hover={'none'} borderRadius={'25px'} h={'30px'} border={'1px solid white'}>food</Button>
                <Button bg="none" _hover={'none'} borderRadius={'25px'} h={'30px'} border={'1px solid white'}>landingpage</Button>
                <Button bg="none" _hover={'none'} borderRadius={'25px'} h={'30px'} border={'1px solid white'}>undesign</Button>
                <Button bg="none" _hover={'none'} borderRadius={'25px'} h={'30px'} border={'1px solid white'}>app design</Button>
            </Box>
        </Box>

    )
}

export default Video;