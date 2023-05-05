import React from 'react'
import { Box, Button, Flex, Grid, GridItem, Image, Spacer, Text } from '@chakra-ui/react'
const HomePage = () => {
  return (
    <div style={{width:"100%",margin:"auto",}}>
      <Box mt={20}>
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
      <Box mt={50} textAlign="justify" ml={410} >
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
      <Box m="auto" mt={100}>
        <Image borderRadius={100} cursor="pointer"  src="https://cdn.dribbble.com/users/2125046/avatars/small/1291e9d430548bcf8533dd5ee29daba9.jpg?1667277002" alt="err" />
        <Text as="h2"><b>Ofspace UX/UI</b></Text>
        <Text as="p">👋🏻 hello@ofspace•co</Text>
        <Button borderRadius={8} p={10} border={0} backgroundColor="#ea4c89" color="white">✉️ Hire Us</Button>
      </Box>
      <Box mt={10} m={120}>
        <Flex m={10}>
          <Box >
          <Text as="h3">More by Ofspace UX/UI</Text>
          </Box>
          <Spacer/>
          <Box>
          <Text as="p"><a style={{color:"#ec5c8d"}} href="View profile">View profile</a></Text>
          </Box>
        </Flex>
        <Grid templateColumns='repeat(4, 1fr)' gap={4}  >
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
      <hr style={{height:"1px",color:"gray"}} />
      <Box mt={10} m={120}>
        <Flex m={10}>
          <Box >
          <Text as="h3">You might also like</Text>
          </Box>
        </Flex>
        <Grid templateColumns='repeat(3, 1fr)' gap={4}  >
          <GridItem >
          <Image borderRadius={10} w={400} _hover={{ transform: "scale(1.03)", cursor:"pointer" }} transition={"0.2s ease-in-out"} src='https://cdn.dribbble.com/userupload/4879596/file/original-bf3c251d0e6105da38953395dc8fa669.png?compress=1&resize=1200x900'alt='err'/>
          </GridItem>
          <GridItem>
          <Image borderRadius={10} w={400} _hover={{ transform: "scale(1.03)", cursor:"pointer" }} transition={"0.2s ease-in-out"} src='https://cdn.dribbble.com/userupload/4254606/file/original-f789587dd96a210ec0f7502dcc08ec19.png?compress=1&resize=1200x900'alt='err'/>
          </GridItem>
        </Grid>
      </Box>
      <Box  m={120} >
      <Grid templateColumns='repeat(3, 1fr)' gap={4}  >
          <GridItem >
          <Image borderRadius={10} w={400} _hover={{ transform: "scale(1.03)", cursor:"pointer" }} transition={"0.2s ease-in-out"} src='https://cdn.dribbble.com/users/3604170/screenshots/17545262/media/480890726c614ed07426e5b90720fc84.jpg?compress=1&resize=1000x750&vertical=top'alt='err'/>
          </GridItem>
          <GridItem>
          <Image borderRadius={10} w={400} _hover={{ transform: "scale(1.03)", cursor:"pointer" }} transition={"0.2s ease-in-out"} src='https://cdn.dribbble.com/userupload/5115404/file/original-981e12de635b925516b3f19e96ba092e.png?compress=1&resize=1200x900&vertical=center'alt='err'/>
          </GridItem>
          <GridItem>
          <Image borderRadius={10} w={400} _hover={{ transform: "scale(1.03)", cursor:"pointer" }} transition={"0.2s ease-in-out"} src='https://cdn.dribbble.com/userupload/4243177/file/original-9b83daac1878ac42b7b1386f8781b363.png?compress=1&resize=1200x900'alt='err'/>
          </GridItem>
        </Grid>
      </Box>
      <Box ml={700} mb={50}>
        <Flex gap={6}> 
          <Button border={0} borderRadius={4} width={20} height={20} p={5} >L</Button>
          <Button border={0} borderRadius={4} width={20} height={20} p={5}>F</Button>
        </Flex>
      </Box>
    </div>
  )
}

export default HomePage;