import React, { useEffect, useState } from 'react'
import { Box, Container, Text, useToast } from '@chakra-ui/react'
import { Image, Button,FormLabel,FormControl, } from '@chakra-ui/react'
import { Link, Navigate } from 'react-router-dom'
import { Grid, ButtonGroup, GridItem, ModalOverlay, Modal, ModalBody, ModalFooter, ModalContent, ModalHeader, ModalCloseButton, useDisclosure } from '@chakra-ui/react'
import '../App.css'
import { Input } from '@chakra-ui/react'
import { MainRoutes } from '../Components/MainRoutes'
import { PhoneIcon,  AddIcon, EmailIcon,BellIcon, WarningIcon, InfoIcon, ChatIcon } from '@chakra-ui/icons'
import { Tooltip ,} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
import { Card, Stack,Heading,CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from '@chakra-ui/react'
import axios from 'axios'






function DrawerSaved() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  const products = JSON.parse(localStorage.getItem('save')) || [];

  

  return (
    <>
      <Button ref={btnRef}  onClick={onOpen}>
      <EmailIcon /> 
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Saved datas</DrawerHeader>

          <DrawerBody>
           {products.map((e)=>(


<Card width='100%' height='150'
direction={{ base: 'column', sm: 'row' }}
overflow='hidden'
variant='outline'
>
<Image 
  objectFit='cover'
  maxW={{ base: '100%', sm: '150px' }}
  src={e.image}
  alt={e.name}
/>

<Stack >
  <CardBody>
    {/* <Heading width='50%' fontSize='22' >The perfect latte</Heading> */}
    <Text>{e.name}</Text>

  
  </CardBody>

  <CardFooter>
   
  </CardFooter>
</Stack>
</Card>


           ))}
         
           
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Close
            </Button>
           
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}




function DrawerLiked() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  const products = JSON.parse(localStorage.getItem('like')) || [];

  

  return (
    <>
      <Button ref={btnRef}  onClick={onOpen}>
      <BellIcon/>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Saved datas</DrawerHeader>

          <DrawerBody>
           {products.map((e)=>(


<Card width='100%' height='150'
direction={{ base: 'column', sm: 'row' }}
overflow='hidden'
variant='outline'
>
<Image 
  objectFit='cover'
  maxW={{ base: '100%', sm: '150px' }}
  src={e.image}
  alt={e.name}
/>

<Stack >
  <CardBody>
    {/* <Heading width='50%' fontSize='22' >The perfect latte</Heading> */}
    <Text>{e.name}</Text>

  
  </CardBody>

  <CardFooter>
   
  </CardFooter>
</Stack>
</Card>


           ))}
         
           
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Close
            </Button>
           
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}


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
      <Tooltip label='Send Message to get a work Oppertunity' backgroundColor='black' width='250px' height='90px' textAlign='center' pt='5' color='white' placement='top'>
        <Button

          backgroundColor='#E91E63' color='white'
          onClick={() => {
            setOverlay(<OverlayOne />)
            onOpen()
          }}
        >



          Hire me


        </Button>
      </Tooltip>

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
            <Input size="md" textAlign='start' placeholder='Start a Conversation with Breno bitencourt' />
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


function Feedbackwriting() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  let[name,setname]=useState('')
  let[date,setdate]=useState('')
  let[feedback,setfeedback]=useState('')
  let[savefeedbackdata,setsavefeedbackdata]=useState([])

  useEffect(() => {
    const storedsave = localStorage.getItem('feedback');
    if (storedsave) {
      setsavefeedbackdata(storedsave);
    }
  }, []);

  let savefeedback=(e)=>{
e.preventDefault()
let newfeedback={
  name:name,
  date:date,
  feedback:feedback
}

const feedbackdata = JSON.parse(localStorage.getItem('feedback')) || [];

      localStorage.setItem('feedback', JSON.stringify([...feedbackdata, newfeedback]));

  }

  return (
    <>
      <Button onClick={onOpen}>Write Feedback</Button>
      {/* <Button ml={4} ref={finalRef}>
        I'll receive focus on close
      </Button> */}

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Write Your FeedBack</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              
              <Input ref={initialRef} placeholder='your name'  value={name} onChange={(e)=>{setname(e.target.value)}} />
            </FormControl>

             <FormControl mt={4}>
              <FormLabel>date</FormLabel>
              <Input type="date" id="birthday" value={date} onChange={(e)=>{setdate(e.target.value)}} name="date" />
            </FormControl> 


            <FormControl mt={4}>
              <FormLabel>feedback</FormLabel>
              <Input type="text" id="" value={feedback} onChange={(e)=>{setfeedback(e.target.value)}} name="birthday" />
            </FormControl> 

          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={savefeedback}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}


function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  const feedbackdata = JSON.parse(localStorage.getItem('feedback'))
  
console.log(feedbackdata[0].name)
  return (
    <>
      <Button ref={btnRef} onClick={onOpen}>
        <ChatIcon />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>FeedBack</DrawerHeader>

          <DrawerBody>

            <ul>


{feedbackdata.map((e)=>(
   <li style={{ listStyle: 'none', margin: '7px' }} >
   <Box display='flex' alignItems='center' padding='2'>
     <Image marginTop='-9'
       borderRadius='full'
       boxSize='50px'
       src='https://bit.ly/dan-abramov'
       alt='Dan Abramov'
     />
     <Text ml='5'>{e.name}
       <Text>{e.feedback}</Text>

       <Text color='grey'>{e.date}</Text>
     </Text>

   </Box>





 </li>
))}

           






              {/* <li style={{ listStyle: 'none', margin: '7px' }} >
                <Box display='flex' alignItems='center' padding='2'>
                  <Image marginTop='-9'
                    borderRadius='full'
                    boxSize='50px'
                    src='https://bit.ly/dan-abramov'
                    alt='Dan Abramov'
                  />
                  <Text ml='5'>Dan Abramov
                    <Text>Good</Text>

                    <Text color='grey'>4 days ago</Text>
                  </Text>

                </Box>





              </li> */}



{/* 
              <li style={{ listStyle: 'none', margin: '7px' }} >
                <Box display='flex' alignItems='center' padding='2'>
                  <Image marginTop='-9'
                    borderRadius='full'
                    boxSize='50px'
                    src='https://bit.ly/dan-abramov'
                    alt='Dan Abramov'
                  />
                  <Text ml='5'>Dan Abramov
                    <Text>Good</Text>

                    <Text color='grey'>4 days ago</Text>
                  </Text>

                </Box>





              </li>




              <li style={{ listStyle: 'none', margin: '7px' }} >
                <Box display='flex' alignItems='center' padding='2'>
                  <Image marginTop='-9'
                    borderRadius='full'
                    boxSize='50px'
                    src='https://bit.ly/dan-abramov'
                    alt='Dan Abramov'
                  />
                  <Text ml='5'>Dan Abramov
                    <Text>Good</Text>

                    <Text color='grey'>4 days ago</Text>
                  </Text>

                </Box>





              </li>




              <li style={{ listStyle: 'none', margin: '7px' }} >
                <Box display='flex' alignItems='center' padding='2'>
                  <Image marginTop='-9'
                    borderRadius='full'
                    boxSize='50px'
                    src='https://bit.ly/dan-abramov'
                    alt='Dan Abramov'
                  />
                  <Text ml='5'>Dan Abramov
                    <Text>Good</Text>

                    <Text color='grey'>4 days ago</Text>
                  </Text>

                </Box>





              </li>




              <li style={{ listStyle: 'none', margin: '7px' }} >
                <Box display='flex' alignItems='center' padding='2'>
                  <Image marginTop='-9'
                    borderRadius='full'
                    boxSize='50px'
                    src='https://bit.ly/dan-abramov'
                    alt='Dan Abramov'
                  />
                  <Text ml='5'>Dan Abramov
                    <Text>Good</Text>

                    <Text color='grey'>4 days ago</Text>
                  </Text>

                </Box>





              </li>




              <li style={{ listStyle: 'none', margin: '7px' }} >
                <Box display='flex' alignItems='center' padding='2'>
                  <Image marginTop='-9'
                    borderRadius='full'
                    boxSize='50px'
                    src='https://bit.ly/dan-abramov'
                    alt='Dan Abramov'
                  />
                  <Text ml='5'>Dan Abramov
                    <Text>Good</Text>

                    <Text color='grey'>4 days ago</Text>
                  </Text>

                </Box>





              </li> */}







            </ul>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            {/* <Button onClick={feedbackwrite} colorScheme='blue'>Write FeedBack</Button> */}
            <Feedbackwriting/>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}


const AlertMessage = () => {
  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: true })

  return isVisible ? (
    <Alert status='success'>
      <AlertIcon />
      <Box>
        <AlertTitle>Success!</AlertTitle>
        <AlertDescription>
          data saved Successfully
        </AlertDescription>
      </Box>
      <CloseButton
        alignSelf='flex-start'
        position='relative'
        // right={-1000}
        marginLeft='auto'
        top={-1}
        onClick={onClose}
      />
    </Alert>
  ) : ''
  // <Button onClick={onOpen}>Save</Button>

}





const AlertMessagePresent = () => {
  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: true })

  return isVisible ? (
    <Alert status='warning'>
      <AlertIcon />
      <Box>
        <AlertTitle>Warning!</AlertTitle>
        <AlertDescription>
          data is already present in your library
        </AlertDescription>
      </Box>
      <CloseButton
        alignSelf='flex-start'
        position='relative'
        // right={-1000}
        marginLeft='auto'
        top={-1}
        onClick={onClose}
      />
    </Alert>
  ) : ''
  // <Button onClick={onOpen}>Save</Button>

}


// function ToastLiks() {
//   const toast = useToast()
//   return (
//     <Button
//     color='white' backgroundColor='#E91E63'
//       onClick={() =>(
//         likedata,
//         toast({
//           title: 'u liked this post.',
//           description: "data will be added in to u r libary",
//           status: 'success',
//           duration: 9000,
//           isClosable: true,
//         })
//       )
        
       
//       }
//     >
//       like
//     </Button>
//   )
// }


// function ToastLiksPresent() {
//   const toast = useToast()
//   return (
//     <Button
//     color='white' backgroundColor='#E91E63'
    
//       onClick={() =>
//         toast({
//           title: 'couldnt like more than ones',
//           description: "u like this post already.",
//           status: 'warning',
//           duration: 9000,
//           isClosable: true,
//         })
//       }
//     >
//       Like
     
//     </Button>
//   )
// }



const SingleProductPage = () => {
  // const [datas,setdata]=useState([])
  const {id}=useParams()
  // axios.get(`https://dribble-mania.onrender.com/products/${id}`)
  // .then((res)=>{
  //   // console.log(res.data,"dataa")
  //   setdata(res.data)
  // })
 
// console.log(datas,"daaaa")
  // const [serchparams,setsearchparams]=useSearchParams()
  
   
  console.log(id)
  const [alerts, setalert] = useState(false)
  const [present, setpresent] = useState(false)
const navigate=useNavigate()

  const[liks,setlikes]=useState(false)
  const[oldlikes,setoldlikes]=useState(false)

  const [save, setsave] = useState([]);


  let closepage = () => {
  navigate('/products')



  }

  

  useEffect(() => {
    const storedsave = localStorage.getItem('save');
    if (storedsave) {
      setsave(storedsave);
    }
  }, []);

  let savedata = () => {
    let newProduct = {
      id:1,
      name: "Random Logofolio Update v4 - 2023",
      image: "https://cdn.dribbble.com/userupload/6689959/file/original-ff36e3265e4b95a3095eb4e82bfea99d.jpg?compress=1&resize=400x300&vertical=top",
      usertype: "PRO",
      description: "Random logos from the portfolio collection 04. See below for the availability of these Which of these logos stands out the most to you? Have a lovely day everyone!",
      rating: 4.4
    }

    const products = JSON.parse(localStorage.getItem('save')) || [];

    const existingItem = products.find((i) => i.id === newProduct.id);

    if (existingItem) {
      //     <Alert status='error'>
      //   <AlertIcon />
      //   There was an error processing your request
      // </Alert>

      setalert(false)
      setpresent(true)
      console.log(present, "1")


    } else {

      // products.push(item);

      setalert(true)
      setpresent(false)

   

      localStorage.setItem('save', JSON.stringify([...products, newProduct]));





    }


  }


  useEffect(() => {
    const storedsaves = localStorage.getItem('like');
    if (storedsaves) {
      setsave(storedsaves);
    }
  }, []);

  let likedata = () => {
    let newProducts = {
      id: 17,
      name: "Random Logofolio Update v4 - 2023",
      image: "https://cdn.dribbble.com/userupload/6689959/file/original-ff36e3265e4b95a3095eb4e82bfea99d.jpg?compress=1&resize=400x300&vertical=top",
      usertype: "PRO",
      description: "Random logos from the portfolio collection 04. See below for the availability of these Which of these logos stands out the most to you? Have a lovely day everyone!",
      rating: 4.4
    }

    const productss = JSON.parse(localStorage.getItem('like')) || [];

    const existingItems = productss.find((i) => i.id === newProducts.id);

    if (existingItems) {
     
      setoldlikes(true)
      setlikes(false)


    } else {

     

      setoldlikes(false)
      setlikes(true)


      localStorage.setItem('like', JSON.stringify([...productss, newProducts]));

      // setpresent(true)



    }


  }

  function ToastLiks() {
    const toast = useToast()
    return (
      <Button
      color='white' backgroundColor='#E91E63'
        onClick={() =>(
          likedata,
          toast({
            title: 'u liked this post.',
            description: "data will be added in to u r libary",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        )
          
         
        }
      >
        like
      </Button>
    )
  }




  function ToastLiksPresent() {
    const toast = useToast()
    return (
      <Button
      color='white' backgroundColor='#E91E63'
      
      onClick={() =>(
        likedata,
        toast({
          title: 'u liked this post.',
          description: "data will be added in to u r libary",
          status: 'warning',
          duration: 9000,
          isClosable: true,
        })
      )}
      >
        Like
       
      </Button>
    )
  }


  return (
    <div>

      {alerts ? <AlertMessage /> : ''}
      {present ? <AlertMessagePresent /> : ""}
     
      <Button marginLeft='1700px' id='closebutton' onClick={closepage}>Close</Button>
      <Container marginTop='25' display='flex' id='topcontainer' maxW='16xl' mb='20'>






        {/* <Box  border='2px solid'>
</Box> */}



        <Container maxW='6xl' margin='auto'  id="sectioncontainer"  >


          <Box maxW='5xl' id="" display='flex' alignItems='center' margin='auto' justifyContent='space-around' mb='10'  >
                    {/* {data?.map((el)=>(
           console.log(el.data,"sameera")
                    )
                      
                    )} */}
            <Box  id='imagebox' >

              <Image 
              id='imageavatar'
                borderRadius='50%'
                boxSize='150px'
                src='https://bit.ly/dan-abramov'
                alt='Dan Abramov'
              />
            </Box>
            <Box height='100%' lineHeight='50px' textAlign='start'>
              <Box id='navDescription'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, accusantium?
              </Box>
              <Box id='section3' >
                <Text id='navtext'> Dan Abramov</Text>
               
               
                <Box id='followbox'>
                Follow .
                

                {/* <a href="">Hire Me</a> */}
                <a  style={{ color: '#E91E63', textDecoration: 'none' }} href=''>Hire Me</a>

                </Box>


              </Box>
            </Box>
            <Box display='flex' justifyContent='space-between' width='15%'>
              <Button borderRadius='10' padding='5' backgroundColor='white' color='black' onClick={savedata} >Save</Button>
               {/* <Button borderRadius='10' padding='5' color='white' backgroundColor='#E91E63' onClick={likedata}>Like</Button> */}
               {liks ? <ToastLiks/> :''}
      {oldlikes ? <ToastLiksPresent/>:''} 
               <ToastLiks />
              {/* </Button> */}
            </Box>

          </Box>

          <Box maxW='7xl '>


            <Box  >
              <Image width='100%' borderRadius='10px' height='800' src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
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

              <HireMeModal />

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
                    <Text fontSize='15'>namess</Text>
                    <Button bg='grey' fontSize='12' padding='0' margin='0' color='black' onClick={savedata}>save</Button>
                    <Button bg='grey' fontSize='12' padding='0' margin='0' color='black' onClick={likedata}>Like</Button>
                  </Text>



                </div>
              </div>



              <div className="container" >
                <img src="https://cdn.dribbble.com/userupload/5493775/file/original-16cd68512fceaad1384a282486df24eb.png?compress=1&crop=0x0-1600x1200&resize=320x240&vertical=top" alt="Avatar" className="image" />
                <div className="overlay">

                  <Text className="text" display='flex' justifyContent='space-between' width='90%'>
                    <Text fontSize='15'>name</Text>
                    <Button bg='grey' fontSize='12' padding='0' margin='0' onClick={savedata} color='black'>save</Button>
                    <Button bg='grey' fontSize='12' padding='0' margin='0' color='black' onClick={likedata}>Like</Button>
                  </Text>



                </div>
              </div>


              <div className="container" >
                <img src="https://cdn.dribbble.com/userupload/3285358/file/original-8f3922359ec0736cfb8f0e5d371f93b0.png?compress=1&resize=320x240&vertical=top" alt="Avatar" className="image" />
                <div className="overlay">

                  <Text className="text" display='flex' justifyContent='space-between' width='90%'>
                    <Text fontSize='15'>name</Text>
                    <Button bg='grey' fontSize='12' padding='0' margin='0' onClick={savedata} color='black'>save</Button>
                    <Button bg='grey' fontSize='12' padding='0' margin='0' color='black' onClick={likedata}>Like</Button>
                  </Text>



                </div>
              </div>

              <div className="container" >
                <img src="https://cdn.dribbble.com/userupload/4154280/file/original-12cc5e0baf28e9038e4507bdceb1b90b.png?compress=1&resize=320x240&vertical=top" alt="Avatar" className="image" />
                <div className="overlay">

                  <Text className="text" display='flex' justifyContent='space-between' width='90%'>
                    <Text fontSize='15'>name</Text>
                    <Button bg='grey' fontSize='12' padding='0' margin='0' onClick={savedata} color='black'>save</Button>
                    <Button bg='grey' fontSize='12' padding='0' margin='0' color='black' onClick={likedata}>Like</Button>
                  </Text>



                </div>
              </div>

              {/* <Image w='100% ' src='https://cdn.dribbble.com/userupload/4448970/file/original-29a45552f860393facaab4e5ee1842e3.jpg?compress=1&resize=320x240&vertical=top'></Image>
              <Image w='100%' src='https://cdn.dribbble.com/users/22136/screenshots/17373337/media/673c9e22f62486fb15a9c464f2c6996e.jpg?compress=1&resize=320x240&vertical=top'></Image>
              <Image w='100%' src='https://cdn.dribbble.com/userupload/4697706/file/original-72f08bcbefa39b259e37ca74924d59c2.jpg?compress=1&resize=320x240&vertical=top'></Image> */}

            </Grid>



          </Box>

        </Container>
        <Box flexDirection='column'>

          <Image
            borderRadius='full'
            boxSize='50px'
            src='https://bit.ly/dan-abramov'
            alt='Dan Abramov'
          />

          <br />

          <Tooltip label='Feedbacks' placement='left'>
      <Button>  <DrawerExample /></Button>
    </Tooltip> <br /> <br />

          {/* <DrawerExample /> <br /><br /> */}
           <Tooltip label='saved data' placement='left'>
      <Button><DrawerSaved/></Button>
    </Tooltip> <br /> <br />
          {/* <Button><EmailIcon /></Button> <br /> <br /> */}
          <Tooltip label='Liked data' placement='left'>
      <Button><DrawerLiked/></Button>
    </Tooltip> <br /> <br />

          {/* <Button> <InfoIcon /></Button> */}


        </Box>








      </Container>
      <hr id='hrtag' />
      <Container id='bottompart' maxW='6xl' mb='10' mt='20' padding='0' centerContent>
        <Grid templateColumns='repeat(3, 1fr)' templateRows='repeat(2, 1fr)' width='100%' gap={9}>






          <Box w='100%'>


            <div className="container" >
              <img src="https://cdn.dribbble.com/userupload/4154280/file/original-12cc5e0baf28e9038e4507bdceb1b90b.png?compress=1&resize=320x240&vertical=top" alt="Avatar" className="image" />
              <div className="overlay">

                <Text className="text" display='flex' justifyContent='space-between' width='90%'>
                  <Text fontSize='15'>name</Text>
                  <Button bg='grey' fontSize='12' padding='0' margin='0' onClick={savedata} color='black'>save</Button>
                  <Button bg='grey' fontSize='12' padding='0' margin='0' color='black ' onClick={likedata}>Like</Button>
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
                  <Button bg='grey' fontSize='12' padding='0' margin='0' onClick={savedata} color='black'>save</Button>
                  <Button bg='grey' fontSize='12' padding='0' margin='0' color='black' onClick={likedata}>Like</Button>
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
                  <Button bg='grey' fontSize='12' padding='0' margin='0' onClick={savedata} color='black'>save</Button>
                  <Button bg='grey' fontSize='12' padding='0' margin='0' color='black' onClick={likedata}>Like</Button>
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
                  <Button bg='grey' fontSize='12' padding='0' margin='0' onClick={savedata} color='black'>save</Button>
                  <Button bg='grey' fontSize='12' padding='0' margin='0' color='black' onClick={likedata}>Like</Button>
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
                  <Button bg='grey' fontSize='12' padding='0' margin='0' onClick={savedata} color='black'>save</Button>
                  <Button bg='grey' fontSize='12' padding='0' margin='0' color='black' onClick={likedata}>Like</Button>
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
                  <Button bg='grey' fontSize='12' padding='0' margin='0' onClick={savedata} color='black'>save</Button>
                  <Button bg='grey' fontSize='12' padding='0' margin='0' color='black' onClick={likedata}>Like</Button>
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



<Box width='500px' alignItems='center' margin='auto' justifyContent='space-between'  display='flex'>
<Button fontWeight='normal' fontSize='15'>Previous shot</Button>
          <Button fontWeight='normal' fontSize='15'>Next shot</Button>
          <Button fontWeight='normal' fontSize='15'>Like</Button>
          <Button fontWeight='normal' fontSize='15'>Close</Button>
       
</Box>
           </Text>
      </Container>

    </div>
  )
}

export default SingleProductPage;