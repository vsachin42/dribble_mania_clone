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
        <Box position={'relative'}>
            <Box position={'relative'}>
                <video style={{
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    height: " 77vh",
                    width: "100%",
                    overflow: "hidden",
                    objectFit: "cover",
                    zIndex: -99,
                    position: "relative",
                    filter: "brightness(50%)"
                }} autoPlay muted loop src="https://cdn.dribbble.com/uploads/39421/original/963b4f8739cbdf86ca3f3a23245efd18.mp4?1657824985" width={'100%'}></video>
            </Box>

            {/* Buttons */}
            <Box w={'80%'} textAlign={'center'} marginLeft={'10%'} display={'flex'} justifyContent={'space-between'} color="white" top="8%" position={'absolute'}>
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

            <Box marginLeft={'33%'} position={'absolute'} top="25%">
                <Heading width={'70%'} fontSize={'33px'} color={'white'}>
                    Explore the world’s leading design portfolios
                </Heading>
            </Box>
            <Box w={'44%'} mt={'1.8%'} marginLeft={'27%'} position={'absolute'} top="38%">
                <Heading fontFamily={'"Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;'} color="white" fontSize={'17.5px'} fontWeight={'light'}>
                    Millions of designers and agencies around the world showcase their portfolio work on Dribbble - the home to the world’s best design and creative professionals.
                </Heading>
            </Box>
            <Box mt={'1%'} borderRadius={'25px'} width="41%" height="55px" opacity="1" marginLeft={'28%'} backgroundColor={'white'} position={'absolute'} top="54%">

                <Input value={search} onChange={handlesearch} className='inputbox' opacity="10" paddingLeft={'60px'} background={'transparent'} fontSize={'20px'} h={'55px'} border={'none'} color="gray.600" borderRadius={'25px'} placeholder='Search...' />
            </Box>
            <Box position={'absolute'} top="59%" fontSize={'18px'} color={'gray.600'} marginLeft={'29.5%'}>
                <Search2Icon />
            </Box>
            <Box width={'53%'} backgroundColor={'none'} marginLeft={'23%'} color={'white'} display={'flex'} justifyContent={'space-between'} top={'75%'} position={'absolute'}>
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

export default Video

