import React from 'react'
import { Box, Button, Container, Flex, Grid, GridItem, Image, Spacer, Text } from '@chakra-ui/react'
import Footer from './Footer';
import styled from 'styled-components';
const HomePage = () => {
  return (
    <DIV>
      <Container maxW="6xl" centerContent   overflow={'hidden'}>
        <Box pt={'30px'} display='flex' width='800px'ml={100} className='main' >
          <Box  >
            <Image
          borderRadius='100%'
          w={50}
          src='https://cdn.dribbble.com/users/2125046/avatars/small/1291e9d430548bcf8533dd5ee29daba9.jpg?1667277002'
          alt='Ofspace UX/UI'/>
          </Box>
          <Box   lineHeight={6} textAlign='start' ml={5}>
            <Text> <b>Foggy Clothing - ecommerce Landing Page</b> </Text>
            <Text fontSize={'14px'} fontWeight={400}>Ofspace UX/UI • Follow • <a style={{color:'#E91E63',textDecoration:'none'}}   href="">Hire Us</a></Text>
          </Box>
          <Spacer/>
          <Box display='flex'  width='30%' className='sub'>
            <Button  borderRadius='10'  backgroundColor='white' color='black' >Save</Button>
            <Button  borderRadius='10'  color='white' backgroundColor='#ec5c8d' _hover={{bg:"#ec5c8d"}}>Like</Button>
          </Box>
        </Box>
        <Box mt={10}>
          <Image 
          borderRadius={10} w={950} _hover={{ transform: "scale(1.03)", cursor:"pointer" }} transition={"0.2s ease-in-out"}  src="https://cdn.dribbble.com/userupload/2904323/file/original-6b2be32460efe237733b62d09982a91f.png?compress=1&resize=1200x900" alt="err" />
        </Box>
        <Box mt={100}>
          <Image 
          borderRadius={10} w={950} _hover={{ transform: "scale(1.03)", cursor:"pointer"}} transition={"0.2s ease-in-out"} src="https://cdn.dribbble.com/userupload/2904324/file/original-2181725bfae60bc874b638babda9cc58.png?compress=1&resize=1200x900&vertical=center" alt="err" />
        </Box>
        <Box mt={100} >
          <Image 
          borderRadius={10} w={950} _hover={{ transform: "scale(1.03)",cursor:"pointer" }} transition={"0.2s ease-in-out"} src="https://cdn.dribbble.com/userupload/2904325/file/original-bb2d7317c4c9972a8b65f12f99048088.png?compress=1&resize=1200x4896&vertical=center" alt="err" />
        </Box>
        <Box mt={50} textAlign="justify" fontSize={'20px'}fontWeight={400}  >
          <Text as="p">Enter your text here...<b>Foggy Clothing - Ecommerce Landing Page</b></Text>
          <Text><b>.</b></Text>
          <Text as="p"  >Our Website <a style={{color:"#ec5c8d"}}  href="https://ofspace.co/">https://ofspace.co/</a></Text>
          <Text><b>.</b></Text>
          <Text as="p" >⭐️⭐️⭐️⭐️⭐️ 5-star rated agency on <a style={{color:"#ec5c8d"}} href="GrabStar">GrabStar</a></Text>
          <Text><b>.</b></Text>
          <Text as="p" >🔥 We will provide a quick analysis and a free proposal for it.<br/> Don’t worry, it is secure and confidential.</Text>
          <Text><b>.</b></Text>
          <Text as="p">✉️ Available for your long term or short term partnership 👋🏻 hello@ofspace.co</Text>
          <Text><b>.</b></Text>
          <Text as="p">🌎 Follow us on <a style={{color:"#ec5c8d"}} href="Instagram ">Instagram </a> | <a style={{color:"#ec5c8d"}} href="Facebook">Facebook</a> | <a style={{color:"#ec5c8d"}} href="Behance">Behance</a></Text>
          <Text as="p"><b>See How We Work</b> <a style={{color:"#ec5c8d"}} href="At Ofspace">At Ofspace</a></Text> 
        </Box>
        <Box  mt={100} lineHeight={2}>
          <Image borderRadius={100} margin={'auto'}  cursor="pointer"  src="https://cdn.dribbble.com/users/2125046/avatars/small/1291e9d430548bcf8533dd5ee29daba9.jpg?1667277002" alt="err" />
          <Text as="h2"  fontSize={20}><b>Ofspace UX/UI</b></Text>
          <Text as="p" fontSize={14}>👋🏻 hello@ofspace•co</Text>
          <Button mt={5} borderRadius={8} p={5} border={0} backgroundColor="#ea4c89" color="white">✉️ Hire Us</Button>
        </Box>
        <Box mt={10}>
          <Flex >
            <Box >
            <Text as="h3" fontSize={'16px'} fontWeight={700}> <b>More by Ofspace UX/UI</b> </Text>
            </Box>
            <Spacer/>
            <Box>
            <Text as="p"><a style={{color:"#ec5c8d"}} href="View profile">View profile</a></Text>
            </Box>
          </Flex>
          <Grid templateColumns='repeat(4, 1fr)' gap={4} mt={5}  className='first' >
            <GridItem >
            <Image borderRadius={10} w={300} _hover={{ transform: "scale(1.03)", cursor:"pointer" }} transition={"0.2s ease-in-out"} src='https://cdn.dribbble.com/userupload/2955790/file/original-9953d712ee22b4821176714646602c8c.png?compress=1&resize=1200x900'alt='err'/>
            </GridItem>
            <GridItem>
            <Image borderRadius={10} w={300} _hover={{ transform: "scale(1.03)", cursor:"pointer" }} transition={"0.2s ease-in-out"} src='https://cdn.dribbble.com/userupload/2866869/file/original-cbb8bb47fd03f8904f375e379cdd1147.png?compress=1&resize=1200x900'alt='err'/>
            </GridItem>
            <GridItem>
            <Image borderRadius={10} w={300} _hover={{ transform: "scale(1.03)", cursor:"pointer" }} transition={"0.2s ease-in-out"} src='https://cdn.dribbble.com/userupload/2999726/file/original-046ef5bd910d7264d081e00cce538b31.png?compress=1&resize=1200x900'alt='err'/>
            </GridItem>
            <GridItem>
            <Image borderRadius={10} w={300} _hover={{ transform: "scale(1.03)", cursor:"pointer" }} transition={"0.2s ease-in-out"} src='https://cdn.dribbble.com/userupload/4705917/file/original-601312c8d2eb0d8abba0f48f1057b44f.png?compress=1&resize=1200x900'alt='err'/>
            </GridItem>
          </Grid>
        </Box>
        <hr style={{width:"135%", height:"5px",color:"black",marginTop:"50px"}} />
        <Box mt={10}>
          <Flex>
            <Box >
            <Text as="h3" fontSize={'16px'} fontWeight={700}> <b>You might also like</b> </Text>
            </Box>
          </Flex>
          <Grid templateColumns='repeat(3, 1fr)' gap={6} mt={5} className='second' >
            <GridItem >
            <Image borderRadius={10} w={400} _hover={{ transform: "scale(1.03)", cursor:"pointer" }} transition={"0.2s ease-in-out"} src='https://cdn.dribbble.com/userupload/4879596/file/original-bf3c251d0e6105da38953395dc8fa669.png?compress=1&resize=1200x900'alt='err'/>
            <Flex mt={2}>
              <Image w={6} cursor={'pointer'} borderRadius={'full'} src='https://cdn.dribbble.com/users/1667332/avatars/mini/edd45777913e5de4434a1a1b812c76cf.png?1566878129' alt='err'/>
              <Text fontSize={14} fontWeight={500} ml={2}><a href="">One Week Wonders</a></Text>
              <Button ml={'10px'} mt={'1px'} fontSize={'10px'} padding={'0px'} h={'20px'} color={'white'} backgroundColor={"#ccc"}  _hover={{backgroundColor:"#ea4c89",color:"white"}} fontWeight={'semibold'}>TEAM</Button>
            </Flex>
            </GridItem>
            <GridItem>
            <Image borderRadius={10} w={400} _hover={{ transform: "scale(1.03)", cursor:"pointer" }} transition={"0.2s ease-in-out"} src='https://cdn.dribbble.com/userupload/4254606/file/original-f789587dd96a210ec0f7502dcc08ec19.png?compress=1&resize=1200x900'alt='err'/>
            <Flex mt={2}>
              <Image w={6} cursor={'pointer'} borderRadius={'full'} src='https://cdn.dribbble.com/users/699467/avatars/mini/4b000eb73d1e7c7b2a5ef42e8d55e9e5.png?1487213160' alt='err'/>
              <Text fontSize={14} fontWeight={500} ml={2}><a href="">Awsmd</a></Text>
              <Button ml={'10px'} mt={'1px'} fontSize={'10px'} padding={'0px'} h={'20px'} color={'white'} backgroundColor={"#ccc"}  _hover={{backgroundColor:"#ea4c89",color:"white"}} fontWeight={'semibold'}>TEAM</Button>
            </Flex>
            </GridItem>
            <GridItem>
            <Image borderRadius={10} w={400} _hover={{ transform: "scale(1.03)", cursor:"pointer" }} transition={"0.2s ease-in-out"} src='https://cdn.dribbble.com/userupload/4869555/file/original-c0a8e8ac250783f3113c490370b0852c.png?compress=1&resize=1200x900'alt='err'/>
            <Flex mt={2}>
              <Image w={6} cursor={'pointer'} borderRadius={'full'} src='https://cdn.dribbble.com/users/7142728/avatars/mini/1947d79d3d7042e06db9ca3cd55d93cb.png?1615062154' alt='err'/>
              <Text fontSize={14} fontWeight={500} ml={2}><a href="">QClay</a></Text>
              <Button ml={'10px'} mt={'1px'} fontSize={'10px'} padding={'0px'} h={'20px'} color={'white'} backgroundColor={"#ccc"}  _hover={{backgroundColor:"#ea4c89",color:"white"}} fontWeight={'semibold'}>TEAM</Button>
            </Flex>
            </GridItem>
            <GridItem >
            <Image borderRadius={10} w={400} _hover={{ transform: "scale(1.03)", cursor:"pointer" }} transition={"0.2s ease-in-out"} src='https://cdn.dribbble.com/users/3604170/screenshots/17545262/media/480890726c614ed07426e5b90720fc84.jpg?compress=1&resize=1000x750&vertical=top'alt='err'/>
            <Flex mt={2}>
              <Image w={6} cursor={'pointer'} borderRadius={'full'} src='https://cdn.dribbble.com/users/10278120/avatars/mini/837ae80fb53e500246b5434f1af43351.jpeg?1657430192' alt='err'/>
              <Text fontSize={14} fontWeight={500} ml={2}><a href="">Bolddreams</a></Text>
              <Button ml={'10px'} mt={'1px'} fontSize={'10px'} padding={'0px'} h={'20px'} color={'white'} backgroundColor={"#ccc"}  _hover={{backgroundColor:"#ea4c89",color:"white"}} fontWeight={'semibold'}>TEAM</Button>
            </Flex>
            </GridItem>
            <GridItem>
            <Image borderRadius={10} w={400} _hover={{ transform: "scale(1.03)", cursor:"pointer" }} transition={"0.2s ease-in-out"} src='https://cdn.dribbble.com/userupload/5115404/file/original-981e12de635b925516b3f19e96ba092e.png?compress=1&resize=1200x900&vertical=center'alt='err'/>
            <Flex mt={2}>
              <Image w={6} cursor={'pointer'} borderRadius={'full'} src='https://cdn.dribbble.com/users/2301995/avatars/mini/a308fa2c3e07d851418eb56fcdd43598.png?1626410668' alt='err'/>
              <Text fontSize={14} fontWeight={500} ml={2}><a href="">RH</a></Text>
              <Button ml={'10px'} mt={'1px'} fontSize={'10px'} padding={'0px'} h={'20px'} color={'white'} backgroundColor={"#ccc"}  _hover={{backgroundColor:"#ea4c89",color:"white"}} fontWeight={'semibold'}>PRO</Button>
            </Flex>
            </GridItem>
            <GridItem>
            <Image borderRadius={10} w={400} _hover={{ transform: "scale(1.03)", cursor:"pointer" }} transition={"0.2s ease-in-out"} src='https://cdn.dribbble.com/userupload/4243177/file/original-9b83daac1878ac42b7b1386f8781b363.png?compress=1&resize=1200x900'alt='err'/>
            <Flex mt={2}>
              <Image w={6} cursor={'pointer'} borderRadius={'full'} src='https://cdn.dribbble.com/users/2502515/avatars/mini/82644ae0c8c786b324cf25011c0297e5.jpg?1678206316' alt='err'/>
              <Text fontSize={14} fontWeight={500} ml={2}><a href="">IKAKO®</a></Text>
              <Button ml={'10px'} mt={'1px'} fontSize={'10px'} padding={'0px'} h={'20px'} color={'white'} backgroundColor={"#ccc"}  _hover={{backgroundColor:"#ea4c89",color:"white"}} fontWeight={'semibold'}>PRO</Button>
            </Flex>
            </GridItem>
          </Grid>
        </Box>
        <Box mt={100}  mb={50}>
          <Flex gap={4}> 
            <Button border={0} borderRadius={4} backgroundColor={'white'} boxShadow={'md'}>L</Button>
            <Button border={0} borderRadius={4} backgroundColor={'white'} boxShadow={'md'}>F</Button>
            <Text pt={1.5}>Like</Text>
          </Flex>
        </Box>
      </Container>
      <Footer/>
    </DIV>
  )
}
const DIV=styled.div`
overflow-x:hidden;
width:100%;
margin: auto;

@media all and (min-width:481px) and (max-width:750px){
  .first{
    grid-template-columns: repeat(2,1fr);
  }
  .second{
    grid-template-columns: repeat(2,1fr);
  }

  .main{
    margin: auto;
    display: flex;
    margin-left:60px;
  }
  .sub>Button{
    display: none;
  }
}
@media all and (max-width:480px){
  .first{
    grid-template-columns: repeat(1,1fr);
  }
  .second{
    grid-template-columns: repeat(1,1fr);
  }
  .main{
    
    margin: auto;
    display: flex;
  }
  .sub>Button{
    display: none;
  }
}
  
`
export default HomePage;
