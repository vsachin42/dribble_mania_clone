import React from 'react'
import { Box, Container, Text } from '@chakra-ui/react'
import { Image, Button } from '@chakra-ui/react'
import { Link, Navigate } from 'react-router-dom'
import { Grid,ButtonGroup, GridItem,ModalOverlay,Modal,ModalBody,ModalFooter,ModalContent,ModalHeader,ModalCloseButton,useDisclosure } from '@chakra-ui/react'
import '../App.css'
import { Input } from '@chakra-ui/react'
import {MainRoutes} from '../Components/MainRoutes'


function HireMeModal() {

  const OverlayOne = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'
    />
  )

  

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = React.useState(<OverlayOne />)

  return (
    <>
    <Button

backgroundColor='#E91E63' color='white'
      onClick={() => {
        setOverlay(<OverlayOne />)
        onOpen()
      }}
    >
      Hire me
    </Button>
  
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      {overlay}
      <ModalContent>
        <ModalHeader display='flex' alignItems='center'>
        <Image
  borderRadius='full'
  boxSize='50px'
  src='https://bit.ly/dan-abramov'
  alt='Dan Abramov'
/>
          Message name</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
        <Input  size="md"  textAlign='start' placeholder='Start a Conversation with Breno bitencourt' />
        </ModalBody>
        <ModalFooter>
        <ButtonGroup>
        <Button onClick={onClose}>Close</Button>
          <Button bg='red' color='white' onClick={onClose}>Send</Button>
        </ButtonGroup>
          
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>
  )
}





const SingleProductPage = () => {


  let closepage=()=>{
   <Navigate to="/products" />
   
   
  }



  return (
    <div>
    

<Button marginLeft='1700px' onClick={closepage}>Close</Button>
      <Container marginTop='25' border='2px solid ' display='flex'  maxW='16xl' mb='20'>
      
     
     

     
       
        {/* <Box  border='2px solid'>
</Box> */}



        <Container maxW='6xl'  margin='auto'   border='2px solid red '>
        
        
          <Box maxW='5xl' display='flex' alignItems='center' margin='auto' justifyContent='space-around' mb='10'  >
         
            <Box >

              <Image
                borderRadius='50%'
                boxSize='150px'
                src='https://bit.ly/dan-abramov'
                alt='Dan Abramov'
              />
            </Box>
            <Box height='100%' lineHeight='50px' textAlign='start'>
              <Box>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, accusantium?
              </Box>
              <Box>
                Dan Abramov
                •
                Follow
                •

                {/* <a href="">Hire Me</a> */}
                <a style={{ color: '#E91E63', textDecoration: 'none' }} href=''>Hire Me</a>
            
               


              </Box>
            </Box>
            <Box display='flex' justifyContent='space-between' width='15%'>
              <Button borderRadius='10' padding='5' backgroundColor='white' color='black' >Save</Button>
              <Button borderRadius='10' padding='5' color='white' backgroundColor='#E91E63'>Like</Button>
            </Box>

          </Box>

          <Box maxW='7xl '>


            <Box  >
              <Image width='100%' height='800' src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
            </Box>
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolores, culpa reprehenderit fugiat, eveniet vitae, eaque eos libero non temporibus ex eligendi voluptas repellat. Nulla eveniet minus quisquam obcaecati aut. */}

            <Box marginTop='20' fontSize='20px' mb='20'>
              <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur aliquam incidunt iste rem obcaecati earum ut dolores excepturi quisquam animi.</Text>
            </Box>

            <hr />

            <Box fontSize='20' width='50%' textAlign='start' marginLeft='30' lineHeight='3.5' marginTop='20' marginBottom='40'>
              👇 CONTACT US FOR NEW PROJECT <br />



              <a style={{ color: '#E91E63', textDecoration: 'none' }} href="">📧 fixdpark@gmail.com</a> <br />
              <a style={{ color: '#E91E63', textDecoration: 'none' }} href="">💬 Telegram</a> <br />
              <a style={{ color: '#E91E63', textDecoration: 'none' }} href=""><span style={{ color: 'black' }}>Website:</span> fixdpark.com </a> <br />

              <a style={{ color: '#E91E63', textDecoration: 'none' }} href="">Facebook | Instagram | Pinterest | Linkedin</a>



            </Box>
            <hr />

            <Box lineHeight='9' marginTop='20' marginBottom='40'>
              <Text fontSize='20' fontWeight='bold'>
                Type08 (Alen Pavlovic)
              </Text>
              <Text>
                Logo designer. Author of 850 logos worldwide. Let's work!

              </Text>
              {/* <Button padding='5' backgroundColor='#E91E63' color='white'>Hire Me</Button> */}

              <HireMeModal/>

            </Box>


            <Box display='flex' justifyContent='space-between'>
              <Text marginBottom='10' textAlign='start' fontWeight='bold'>More by Type08 (Alen Pavlovic)</Text>
              <Text>
                <a style={{ color: '#E91E63', textDecoration: 'none' }} href="">View Profile</a> <br />

              </Text>

            </Box>

            <Grid templateColumns='repeat(4, 1fr)' gap={7}>


              <div className="container" >
                <img src="https://cdn.dribbble.com/userupload/4154280/file/original-12cc5e0baf28e9038e4507bdceb1b90b.png?compress=1&resize=320x240&vertical=top" alt="Avatar" className="image" />
                <div className="overlay">

                  <Text className="text" display='flex' justifyContent='space-between' width='90%'>
                    <Text fontSize='15'>name</Text>
                    <Button bg='grey' fontSize='12' padding='0' margin='0' color='black'>save</Button>
                    <Button bg='grey' fontSize='12' padding='0' margin='0' color='black'>Like</Button>
                  </Text>



                </div>
              </div>



              <div className="container" >
                <img src="https://cdn.dribbble.com/userupload/5493775/file/original-16cd68512fceaad1384a282486df24eb.png?compress=1&crop=0x0-1600x1200&resize=320x240&vertical=top" alt="Avatar" className="image" />
                <div className="overlay">

                  <Text className="text" display='flex' justifyContent='space-between' width='90%'>
                    <Text fontSize='15'>name</Text>
                    <Button bg='grey' fontSize='12' padding='0' margin='0' color='black'>save</Button>
                    <Button bg='grey' fontSize='12' padding='0' margin='0' color='black'>Like</Button>
                  </Text>



                </div>
              </div>


              <div className="container" >
                <img src="https://cdn.dribbble.com/userupload/3285358/file/original-8f3922359ec0736cfb8f0e5d371f93b0.png?compress=1&resize=320x240&vertical=top" alt="Avatar" className="image" />
                <div className="overlay">

                  <Text className="text" display='flex' justifyContent='space-between' width='90%'>
                    <Text fontSize='15'>name</Text>
                    <Button bg='grey' fontSize='12' padding='0' margin='0' color='black'>save</Button>
                    <Button bg='grey' fontSize='12' padding='0' margin='0' color='black'>Like</Button>
                  </Text>



                </div>
              </div>

              <div className="container" >
                <img src="https://cdn.dribbble.com/userupload/4154280/file/original-12cc5e0baf28e9038e4507bdceb1b90b.png?compress=1&resize=320x240&vertical=top" alt="Avatar" className="image" />
                <div className="overlay">

                  <Text className="text" display='flex' justifyContent='space-between' width='90%'>
                    <Text fontSize='15'>name</Text>
                    <Button bg='grey' fontSize='12' padding='0' margin='0' color='black'>save</Button>
                    <Button bg='grey' fontSize='12' padding='0' margin='0' color='black'>Like</Button>
                  </Text>



                </div>
              </div>

              {/* <Image w='100% ' src='https://cdn.dribbble.com/userupload/4448970/file/original-29a45552f860393facaab4e5ee1842e3.jpg?compress=1&resize=320x240&vertical=top'></Image>
              <Image w='100%' src='https://cdn.dribbble.com/users/22136/screenshots/17373337/media/673c9e22f62486fb15a9c464f2c6996e.jpg?compress=1&resize=320x240&vertical=top'></Image>
              <Image w='100%' src='https://cdn.dribbble.com/userupload/4697706/file/original-72f08bcbefa39b259e37ca74924d59c2.jpg?compress=1&resize=320x240&vertical=top'></Image> */}

            </Grid>



          </Box>

        </Container>
        <Box>
         <Button></Button>
        </Box>

        
        



      </Container>
      <hr />
      <Container maxW='6xl' mb='10' mt='20' padding='0' centerContent>
        <Grid templateColumns='repeat(3, 1fr)' templateRows='repeat(2, 1fr)' width='100%' gap={9}>






          <Box w='100%'>
         

          <div className="container" >
                <img src="https://cdn.dribbble.com/userupload/4154280/file/original-12cc5e0baf28e9038e4507bdceb1b90b.png?compress=1&resize=320x240&vertical=top" alt="Avatar" className="image" />
                <div className="overlay">

                  <Text className="text" display='flex' justifyContent='space-between' width='90%'>
                    <Text fontSize='15'>name</Text>
                    <Button bg='grey' fontSize='12' padding='0' margin='0' color='black'>save</Button>
                    <Button bg='grey' fontSize='12' padding='0' margin='0' color='black'>Like</Button>
                  </Text>



                </div>
              </div>



            <Box display='flex' alignItems='center' mt='5'>
              <Image
                borderRadius='full'
                boxSize='40px'
                src='https://bit.ly/dan-abramov'
                alt='Dan Abramov'
              />
              <Text pl='3' pr='3'>lorem</Text>
              <Button width='20%'>Team</Button>
            </Box>


          </Box>







          <Box w='100%'>
         

         <div className="container" >
               <img src="https://cdn.dribbble.com/userupload/4154280/file/original-12cc5e0baf28e9038e4507bdceb1b90b.png?compress=1&resize=320x240&vertical=top" alt="Avatar" className="image" />
               <div className="overlay">

                 <Text className="text" display='flex' justifyContent='space-between' width='90%'>
                   <Text fontSize='15'>name</Text>
                   <Button bg='grey' fontSize='12' padding='0' margin='0' color='black'>save</Button>
                   <Button bg='grey' fontSize='12' padding='0' margin='0' color='black'>Like</Button>
                 </Text>



               </div>
             </div>



           <Box display='flex' alignItems='center' mt='5'>
             <Image
               borderRadius='full'
               boxSize='40px'
               src='https://bit.ly/dan-abramov'
               alt='Dan Abramov'
             />
             <Text pl='3' pr='3'>lorem</Text>
             <Button width='20%'>Team</Button>
           </Box>


         </Box>


         <Box w='100%'>
         

         <div className="container" >
               <img src="https://cdn.dribbble.com/userupload/4154280/file/original-12cc5e0baf28e9038e4507bdceb1b90b.png?compress=1&resize=320x240&vertical=top" alt="Avatar" className="image" />
               <div className="overlay">

                 <Text className="text" display='flex' justifyContent='space-between' width='90%'>
                   <Text fontSize='15'>name</Text>
                   <Button bg='grey' fontSize='12' padding='0' margin='0' color='black'>save</Button>
                   <Button bg='grey' fontSize='12' padding='0' margin='0' color='black'>Like</Button>
                 </Text>



               </div>
             </div>



           <Box display='flex' alignItems='center' mt='5'>
             <Image
               borderRadius='full'
               boxSize='40px'
               src='https://bit.ly/dan-abramov'
               alt='Dan Abramov'
             />
             <Text pl='3' pr='3'>lorem</Text>
             <Button width='20%'>Team</Button>
           </Box>


         </Box>




         <Box w='100%'>
         

         <div className="container" >
               <img src="https://cdn.dribbble.com/userupload/4154280/file/original-12cc5e0baf28e9038e4507bdceb1b90b.png?compress=1&resize=320x240&vertical=top" alt="Avatar" className="image" />
               <div className="overlay">

                 <Text className="text" display='flex' justifyContent='space-between' width='90%'>
                   <Text fontSize='15'>name</Text>
                   <Button bg='grey' fontSize='12' padding='0' margin='0' color='black'>save</Button>
                   <Button bg='grey' fontSize='12' padding='0' margin='0' color='black'>Like</Button>
                 </Text>



               </div>
             </div>



           <Box display='flex' alignItems='center' mt='5'>
             <Image
               borderRadius='full'
               boxSize='40px'
               src='https://bit.ly/dan-abramov'
               alt='Dan Abramov'
             />
             <Text pl='3' pr='3'>lorem</Text>
             <Button width='20%'>Team</Button>
           </Box>


         </Box>




         <Box w='100%'>
         

         <div className="container" >
               <img src="https://cdn.dribbble.com/userupload/4154280/file/original-12cc5e0baf28e9038e4507bdceb1b90b.png?compress=1&resize=320x240&vertical=top" alt="Avatar" className="image" />
               <div className="overlay">

                 <Text className="text" display='flex' justifyContent='space-between' width='90%'>
                   <Text fontSize='15'>name</Text>
                   <Button bg='grey' fontSize='12' padding='0' margin='0' color='black'>save</Button>
                   <Button bg='grey' fontSize='12' padding='0' margin='0' color='black'>Like</Button>
                 </Text>



               </div>
             </div>



           <Box display='flex' alignItems='center' mt='5'>
             <Image
               borderRadius='full'
               boxSize='40px'
               src='https://bit.ly/dan-abramov'
               alt='Dan Abramov'
             />
             <Text pl='3' pr='3'>lorem</Text>
             <Button width='20%'>Team</Button>
           </Box>


         </Box>





         <Box w='100%'>
         

         <div className="container" >
               <img src="https://cdn.dribbble.com/userupload/4154280/file/original-12cc5e0baf28e9038e4507bdceb1b90b.png?compress=1&resize=320x240&vertical=top" alt="Avatar" className="image" />
               <div className="overlay">

                 <Text className="text" display='flex' justifyContent='space-between' width='90%'>
                   <Text fontSize='15'>name</Text>
                   <Button bg='grey' fontSize='12' padding='0' margin='0' color='black'>save</Button>
                   <Button bg='grey' fontSize='12' padding='0' margin='0' color='black'>Like</Button>
                 </Text>



               </div>
             </div>



           <Box display='flex' alignItems='center' mt='5'>
             <Image
               borderRadius='full'
               boxSize='40px'
               src='https://bit.ly/dan-abramov'
               alt='Dan Abramov'
             />
             <Text pl='3' pr='3'>lorem</Text>
             <Button width='20%'>Team</Button>
           </Box>


         </Box>
















          {/* <Box w='100%'>
            <Image src="https://cdn.dribbble.com/userupload/4147916/file/original-0b5b843cf7db40ec5a70e42ff68caa8c.jpg?compress=1&resize=320x240&vertical=top">
            </Image>
            <Box display='flex' alignItems='center' mt='5'>
              <Image
                borderRadius='full'
                boxSize='40px'
                src='https://bit.ly/dan-abramov'
                alt='Dan Abramov'
              />
              <Text pl='3' pr='3'>lorem</Text>
              <Button width='20%'>Team</Button>
            </Box>


          </Box> */}



          {/* <Box w='100%'>
            <Image src="https://cdn.dribbble.com/userupload/4147916/file/original-0b5b843cf7db40ec5a70e42ff68caa8c.jpg?compress=1&resize=320x240&vertical=top">
            </Image>
            <Box display='flex' alignItems='center' mt='5'>
              <Image
                borderRadius='full'
                boxSize='40px'
                src='https://bit.ly/dan-abramov'
                alt='Dan Abramov'
              />
              <Text pl='3' pr='3'>lorem</Text>
              <Button width='20%'>Team</Button>
            </Box>


          </Box>
 */}


          {/* <Box w='100%'>
            <Image src="https://cdn.dribbble.com/userupload/4147916/file/original-0b5b843cf7db40ec5a70e42ff68caa8c.jpg?compress=1&resize=320x240&vertical=top">
            </Image>
            <Box display='flex' alignItems='center' mt='5'>
              <Image
                borderRadius='full'
                boxSize='40px'
                src='https://bit.ly/dan-abramov'
                alt='Dan Abramov'
              />
              <Text pl='3' pr='3'>lorem</Text>
              <Button width='20%'>Team</Button>
            </Box>


          </Box> */}



          {/* <Box w='100%'>
            <Image src="https://cdn.dribbble.com/userupload/4147916/file/original-0b5b843cf7db40ec5a70e42ff68caa8c.jpg?compress=1&resize=320x240&vertical=top">
            </Image>
            <Box display='flex' alignItems='center' mt='5'>
              <Image
                borderRadius='full'
                boxSize='40px'
                src='https://bit.ly/dan-abramov'
                alt='Dan Abramov'
              />
              <Text pl='3' pr='3'>lorem</Text>
              <Button width='20%'>Team</Button>
            </Box>


          </Box> */}



          {/* <Box w='100%'>
            <Image src="https://cdn.dribbble.com/userupload/4147916/file/original-0b5b843cf7db40ec5a70e42ff68caa8c.jpg?compress=1&resize=320x240&vertical=top">
            </Image>
            <Box display='flex' alignItems='center' mt='5'>
              <Image
                borderRadius='full'
                boxSize='40px'
                src='https://bit.ly/dan-abramov'
                alt='Dan Abramov'
              />
              <Text pl='3' pr='3'>lorem</Text>
              <Button width='20%'>Team</Button>
            </Box>


          </Box> */}











        </Grid>
        <Text padding={20} justifyContent='space-between' width='50%' display='flex' >




          <Button fontWeight='normal' fontSize='15'>Previous shot</Button>
          <Button fontWeight='normal' fontSize='15'>Next shot</Button>
          <Button fontWeight='normal' fontSize='15'>Like</Button>
          <Button fontWeight='normal' fontSize='15'>Close</Button>
        </Text>
      </Container>

    </div>
  )
}

export default SingleProductPage;