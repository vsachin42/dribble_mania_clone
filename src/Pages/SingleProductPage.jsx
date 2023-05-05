import React from 'react'
import {Box, Container,Text } from '@chakra-ui/react'
import { Image,Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const SingleProductPage = () => {
  return (
    <div>SingleProductPage
  <Container marginTop='25' border='2px solid'  display='flex' maxW='2xl'  centerContent>
{/* <Box  border='2px solid'>
</Box> */}
<Container border='2px solid' width='1300px'  margin='auto' >
  <Box  display='flex' alignItems='center'  margin='auto' justifyContent='space-around' border='2px solid yellow' width='1000px' >
  <Box >
   
    <Image
  borderRadius='50%'
  boxSize='150px'
  src='https://bit.ly/dan-abramov'
  alt='Dan Abramov'
/>
  </Box>
  <Box  height='100%' lineHeight='50px' textAlign='start'>
  <Box>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, accusantium?
  </Box>
  <Box>
  Dan Abramov
•
Follow
•

{/* <a href="">Hire Me</a> */}
<a style={{color:'#E91E63',textDecoration:'none'}}   href="">Hire Me</a>


  </Box>
  </Box>
  <Box display='flex' justifyContent='space-between' width='15%'>
 <Button  borderRadius='10'  padding='10'   backgroundColor='white' color='black' >Save</Button>
 <Button  borderRadius='10'  padding='10'  color='white' backgroundColor='#E91E63'>Like</Button>
  </Box>

  </Box>

<Box padding='20'>


 <Box  >
  <Image width='100%' height='800' src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
</Box>
{/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolores, culpa reprehenderit fugiat, eveniet vitae, eaque eos libero non temporibus ex eligendi voluptas repellat. Nulla eveniet minus quisquam obcaecati aut. */}

 <Box>
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed dolorem autem modi! Dolore, quibusdam nulla veniam vero incidunt, voluptas ut inventore tenetur blanditiis omnis perspiciatis eaque dolorum ducimus placeat doloribus earum fugiat dolor vel, praesentium fugit est. Facilis, ipsum debitis! Veritatis enim saepe ab commodi maxime consectetur corporis hic inventore.
 </Box>
 <Box  >
  <Image width='100%' height='800' src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
</Box>
 <Box border='2px solid green' width='50%' textAlign='start' marginLeft='30' lineHeight='3.5' marginTop='20' marginBottom='100'>
 👇 CONTACT US FOR NEW PROJECT <br />



<a style={{color:'#E91E63',textDecoration:'none'}}   href="">📧 fixdpark@gmail.com</a> <br />
<a style={{color:'#E91E63',textDecoration:'none'}}   href="">💬 Telegram</a> <br />
<a style={{color:'#E91E63',textDecoration:'none'}}   href=""><span style={{color:'black'}}>Website:</span> fixdpark.com </a> <br />

<a style={{color:'#E91E63',textDecoration:'none'}}   href="">Facebook | Instagram | Pinterest | Linkedin</a>



</Box>
 <hr  />
 </Box>

</Container>



</Container>
</div>
  )
}

export default SingleProductPage;