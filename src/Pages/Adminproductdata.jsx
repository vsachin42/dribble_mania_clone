import { Box,Button,Center,Img,SimpleGrid,Text,VStack,Spinner,} from "@chakra-ui/react";
import {useState,useReducer,useEffect} from "react"

import axios from "axios";


const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const reducer = (state,{type,payload}) => {

switch(type){

  case 'REQUEST_MADE':return{...state, isLoading:true}
case'REQUEST_SUCESS':return{...state, isLoading:false, data:payload}
case'REQUEST_ERROR':return{...state, isLoading:false}
default:return state
};

}

function Product ({updated}){
 
const [order,setOrder]=useState("asc")

const [state,dispatch]=useReducer(reducer,initialState)

const [filterBreed,setBreed]=useState("")



const getData=async(url)=>{

try{
  dispatch({type:'REQUEST_MADE'})
let res=await axios(url);

dispatch({type:'REQUEST_SUCESS',payload:res.data})

}
catch(err) {
  dispatch({type:'REQUEST_ERROR'})

}
}




useEffect(()=>{
const url=`https://dribble-mania.onrender.com/products?_sort=price&_order=${order}`



  getData(url)  
  
  },[order,updated])





// delete-----------------
const handleDelete =async (id)=>{
const url=`https://dribble-mania.onrender.com/products/${id}`


let res= await axios.delete(url)

const url2=`https://dribble-mania.onrender.com/products?`

getData(url2)

}


  return (
    <div>
     
     
  
    
      {/* Map the below container against your data */}

      {state.isLoading?
      <Center><Spinner
      thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
      color='blue.500'
      size='xl'
    /></Center>:
      <SimpleGrid  gap='20px' columns={{ base: '1', md: '2', lg: '4' }} className="main_container" m="20px" >

        {
          state.data?.map((el)=>{


         
        return <Box mt="25px"  key={el.id} boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;"  >
          <Center>
            <Img height="300px" w="100%" src={el.image}/>
          </Center>

          <VStack spacing={2} p={2}>
            <Text fontSize={"20px"} fontWeight="bold">{el.name}</Text>
            
          
            <Text >{el.usertype}</Text>
            <Text >{el.description}</Text>
            <Text >{el.rating}</Text>
            <Button onClick={()=>{handleDelete(el.id)}} className="delete">Delete</Button>
          </VStack>
        </Box>


            })}
      </SimpleGrid>
}
    </div>
  );
}
// const initial_state = {
       
//   name: "",
//   image: "",
//   usertype:"",
//   description:"",
//   rating: "",
// }
export default Product