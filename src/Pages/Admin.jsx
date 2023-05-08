
import {Button,FormControl,Input,Center} from "@chakra-ui/react"
 import axios from "axios"

 import{useState} from "react"
import { Container } from "@chakra-ui/react";
import Product from "./Adminproductdata";
import Footer from "./Footer";

// "id": 1,
// "name": "Random Logofolio Update v4 - 2023",
// "image": "https://cdn.dribbble.com/userupload/6689959/file/original-ff36e3265e4b95a3095eb4e82bfea99d.jpg?compress=1&resize=400x300&vertical=top",
// "usertype": "PRO",
// "description": "Random logos from the portfolio collection 04. See below for the availability of these Which of these logos stands out the most to you? Have a lovely day everyone!",
// "rating": 4.4


function Admin (){
    const initial_state = {
       
        name: "",
        image: "",
        usertype:"",
        description:"",
        rating: "",
      }
    
    const [updated,setUpdated]=useState(false)

    const[input_data,setData]=useState(initial_state);


    
    
    const handleChange =(e)=>{
    let name=e.target.name
    let value=e.target.value
    setData({...input_data,[name]:value})
    
    }


    const Add_cat=async ()=>{
      const url=`https://dribble-mania.onrender.com/products?`
      let res=await axios.post(url,input_data);
      setUpdated(!updated)
      
    }
    
    const handleSubmit=(e)=>{
      e.preventDefault();
      Add_cat();
    
    }


    
      return (
        <div>
          <Container >
      
        <div className="addCatContainer" >
          <form className="form" >
            <FormControl m="20px">

                             

              <Input onChange={handleChange} name ="name"  placeholder="Name" />

              <Input onChange={handleChange} name ="image"  placeholder="Image" />
    
              <Input onChange={handleChange} name ="usertype"  placeholder="usertype" type="text" />

              <Input onChange={handleChange}  name ="description" placeholder="Description" />

             

              <Input onChange={handleChange} name ="rating"  className="likes" placeholder="rating" type="number" />
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
        <Footer/>
        </div>
       
      );
}

export default Admin