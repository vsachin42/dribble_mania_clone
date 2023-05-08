import React, { useEffect, useState } from 'react'


import { Link, Navigate } from 'react-router-dom'

import '../App.css'


import { EmailIcon, BellIcon, ChatIcon } from '@chakra-ui/icons'

import { useNavigate, useParams, useSearchParams } from 'react-router-dom'


import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box, Container, Text, useToast,
  Image, Button, FormLabel, FormControl,
  Grid, ButtonGroup, GridItem, ModalOverlay, Modal, ModalBody, ModalFooter, ModalContent, ModalHeader, ModalCloseButton, useDisclosure,
  Input,
  Tooltip,
  Card, Stack, Heading, CardHeader, CardBody, CardFooter,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,

} from '@chakra-ui/react'

import axios from 'axios'
import Footer from './Footer'

function DrawerSaved() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  const products = JSON.parse(localStorage.getItem('save')) || [];



  return (
    <>
      <Button ref={btnRef} onClick={onOpen}>
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
            {products.map((e) => (


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
      <Button ref={btnRef} onClick={onOpen}>
        <BellIcon />
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
            {products.map((e) => (


              <Card key={e.id} width='100%' height='150'
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
  let [name, setname] = useState('')
  let [date, setdate] = useState('')
  let [feedback, setfeedback] = useState('')
  let [savefeedbackdata, setsavefeedbackdata] = useState([])

  useEffect(() => {
    const storedsave = localStorage.getItem('feedback');
    if (storedsave) {
      setsavefeedbackdata(storedsave);
    }
  }, []);

  let savefeedback = (e) => {
    e.preventDefault()
    let newfeedback = {
      name: name,
      date: date,
      feedback: feedback
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

              <Input ref={initialRef} placeholder='your name' value={name} onChange={(e) => { setname(e.target.value) }} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>date</FormLabel>
              <Input type="date" id="birthday" value={date} onChange={(e) => { setdate(e.target.value) }} name="date" />
            </FormControl>


            <FormControl mt={4}>
              <FormLabel>feedback</FormLabel>
              <Input type="text" id="" value={feedback} onChange={(e) => { setfeedback(e.target.value) }} name="birthday" />
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

  // console.log(feedbackdata[0].name)
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

              
               {/* {feedbackdata.map((e) => (
                // console.log(e,"sameera")
              
                <li key={e.id} style={{ listStyle: 'none', margin: '7px' }} >
                  <Box  display='flex' alignItems='center' padding='2'>
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
              ))}  */}













            </ul>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            {/* <Button onClick={feedbackwrite} colorScheme='blue'>Write FeedBack</Button> */}
            <Feedbackwriting />
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






const SingleProductPage = () => {
  const [data, setdata] = useState("")
  const [post, setpost] = useState([])
  const { id } = useParams()
  console.log(id)
  useEffect(() => {
    axios.get(`https://dribble-mania.onrender.com/products/${id}`)
      .then((res) => {
        // console.log(res.data)
        setdata(res.data)
      })
  }, [])

  useEffect(() => {
    axios.get(`https://dribble-mania.onrender.com/products/`)
      .then((res) => {
        // console.log(res.data)
        setpost(res.data)
      })
  }, [])

  
  const [alerts, setalert] = useState(false)
  const [present, setpresent] = useState(false)
  const navigate = useNavigate()

  const [liks, setlikes] = useState(false)
  const [oldlikes, setoldlikes] = useState(false)

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
      id: id,
      name: data.name,
      image: data.image,
      usertype: data.usertype,
      description: data.description,
      rating: data.rating
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
      id: id,
      name: data.name,
      image: data.image,
      usertype: data.usertype,
      description: data.description,
      rating: data.rating
    }

    const productss = JSON.parse(localStorage.getItem('like')) || [];

    const existingItems = productss.find((i) => i.id === newProducts.id);

    if (existingItems) {
alert("you are Ready like this post")
      setoldlikes(true)
      setlikes(false)


    } else {
alert("You Like This Post")


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
        onClick={() => (
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

        onClick={() => (
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

 
  const filterdata=post.filter((e)=>{
    if( e.rating==data.rating){
      return  e
    }
  
  })

  console.log(filterdata,"filter")


  return (
    <div>

      {alerts ? <AlertMessage /> : ''}
      {present ? <AlertMessagePresent /> : ""}

      <Button marginLeft='1700px' id='closebutton' onClick={closepage}>Close</Button>
      <Container marginTop='25' display='flex' id='topcontainer' maxW='16xl' mb='20'>






        {/* <Box  border='2px solid'>
</Box> */}



        <Container maxW='6xl' margin='auto' id="sectioncontainer"  >


          <Box maxW='5xl' id="" display='flex' alignItems='center' margin='auto' justifyContent='space-around' mb='10'  >
            {/* {data?.map((el)=>(
           console.log(el.data,"sameera")
                    )
                      
                    )} */}
            <Box id='imagebox' >

              <Image
                id='imageavatar'
                borderRadius='50%'
                boxSize='150px'
                src={data.image}
                alt='Dan Abramov'
              />
            </Box>
            <Box height='100%' lineHeight='50px' textAlign='start'>
              <Box id='navDescription'>
                {data.description}
              </Box>
              <Box id='section3' >
                <Text id='navtext'>{data.name}</Text>


                <Box id='followbox'>
                  Follow .


                  {/* <a href="">Hire Me</a> */}
                  <a style={{ color: '#E91E63', textDecoration: 'none' }} href=''>Hire Me</a>

                </Box>


              </Box>
            </Box>
            <Box display='flex' justifyContent='space-between' width='15%'>
              <Button borderRadius='10' padding='5' backgroundColor='white' color='black' onClick={savedata} >Save</Button>
              <Button borderRadius='10' padding='5' color='white' backgroundColor='#E91E63' onClick={likedata}>Like</Button>
              {/* {liks ? <ToastLiks /> : ''}
              {oldlikes ? <ToastLiksPresent /> : ''}
              <ToastLiks /> */}
              {/* </Button> */}
            </Box>

          </Box>

          <Box maxW='7xl '>


            <Box  >
              <Image width='100%' borderRadius='10px' height='800' src={data.image} alt='Dan Abramov' />
            </Box>
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolores, culpa reprehenderit fugiat, eveniet vitae, eaque eos libero non temporibus ex eligendi voluptas repellat. Nulla eveniet minus quisquam obcaecati aut. */}

            <Box marginTop='20' fontSize='20px' mb='20'>

              <Text>{data.description}</Text>
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
             {data.name}
              </Text>
              <Text>
               {data.usertype}

              </Text>
              {/* <Button padding='5' backgroundColor='#E91E63' color='white'>Hire Me</Button> */}

              <HireMeModal />

            </Box>


            <Box display='flex' justifyContent='space-between'>
              <Text marginBottom='10' textAlign='start' fontWeight='bold'>More by rating ({data.rating})</Text>
              <Text>
                <a style={{ color: '#E91E63', textDecoration: 'none' }} href="">View Profile</a> <br />

              </Text>

            </Box>



            <Grid templateRows='repeat(2, 1fr)'
              templateColumns='repeat(2, 1fr)'
              gap={2} >


              { filterdata.map((e)  => (

                <div key={e.id} className="container" >
                  <img src={e.image} alt="Avatar" className="image" />
                  <div className="overlay">

                    <Text className="text" display='flex' justifyContent='space-between' width='90%'>
                      <Text fontSize='15'>{e.name}</Text>
                      <Button bg='grey' fontSize='12' padding='0' margin='0' color='black' onClick={savedata}>save</Button>
                      <Button bg='grey' fontSize='12' padding='0' margin='0' color='black' onClick={likedata}>Like</Button>
                    </Text>



                  </div>
                </div>

              ))}





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
            <Button><DrawerSaved /></Button>
          </Tooltip> <br /> <br />
          {/* <Button><EmailIcon /></Button> <br /> <br /> */}
          <Tooltip label='Liked data' placement='left'>
            <Button><DrawerLiked /></Button>
          </Tooltip> <br /> <br />

          {/* <Button> <InfoIcon /></Button> */}


        </Box>








      </Container>
      <hr id='hrtag' />
      <Container id='bottompart' maxW='6xl' mb='10' mt='20' padding='0' centerContent>
        <Grid templateColumns='repeat(4, 1fr)' gap={4}   >

{post.map((e)=>(


<Box w='100%'>


<div key={e.id} className="container" >
  <img src={e.image} alt="Avatar" className="image" />
  <div className="overlay">

    <Text className="text" display='flex' justifyContent='space-between' width='90%'>
      <Text fontSize='15'>{e.name}</Text>
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
  <Text pl='3' pr='3'>{e.name}</Text>
  <Button width='20%'>{e.usertype}</Button>
</Box>


</Box>

))}
     </Grid>
        <Text padding={20} justifyContent='space-between' width='50%' display='flex' >



          <Box width='500px' alignItems='center' margin='auto' justifyContent='space-between' display='flex'>
            <Button fontWeight='normal' fontSize='15'>Previous shot</Button>
            <Button fontWeight='normal' fontSize='15'>Next shot</Button>
            <Button fontWeight='normal' fontSize='15'>Like</Button>
            <Button fontWeight='normal' fontSize='15'>Close</Button>

          </Box>
        </Text>
      </Container>
       <Footer />
    </div>
  )
}

export default SingleProductPage;