import Navbar from "../Navbar/Navbar";

import {Button,FormControl,Input,Center} from "@chakra-ui/react"
 import axios from "axios"

 import{useState} from "react"
import { Container } from "@chakra-ui/react";
import Product from "./Adminproductdata";


function Admin (){
    const initial_state = {
        image: "",
        name: "",
        rating: "",
        desc:"",
        price:""
      }
    
    const [updated,setUpdated]=useState(false)

    const[input_data,setData]=useState(initial_state);


    
    
    const handleChange =(e)=>{
    let name=e.target.name
    let value=e.target.value
    setData({...input_data,[name]:value})
    
    }


    const Add_cat=async ()=>{
      const url=`https://products-v7vr.onrender.com/products?`
      let res=await axios.post(url,input_data);
      setUpdated(!updated)
      
    }
    
    const handleSubmit=(e)=>{
      e.preventDefault();
      Add_cat();
    
    }


    
      return (
        <div>
          <Navbar/>
          <Container >
      
        <div className="addCatContainer" >
          <form className="form" >
            <FormControl m="20px">

                              <Input onChange={handleChange} name ="image" className="image" placeholder="Image" />

              <Input onChange={handleChange} name ="name" className="name" placeholder="Name" />

            
    
              <Input onChange={handleChange} name ="rating"  className="likes" placeholder="rating" type="number" />

              <Input onChange={handleChange}  name ="desc"  className="description" placeholder="Description" />

              <Input onChange={handleChange} name ="price"  className="cost" placeholder="price" type="number" />

              {/* <Input onChange={handleChange} name ="id"  className="id" placeholder="id" type="number" /> */}
<Center>
              <Button onClick={handleSubmit} colorScheme={"green"} className="submitBtn" mt="20px"   p={4}
  color='white'
  fontWeight='bold'
  borderRadius='md'
  bgGradient='linear(to-r, teal.500, green.500)'
  _hover={{
    bgGradient: 'linear(to-r, red.500, yellow.500)',
  }}>
                Submit 
              </Button></Center>
            </FormControl>
          </form>
        </div>
       
        </Container>
        <Product updated={updated}  />
        </div>
       
      );
}

export default Admin