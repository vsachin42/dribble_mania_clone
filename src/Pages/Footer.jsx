import { Box, Container, Flex, Link,Image, Text, Spacer } from "@chakra-ui/react"
import React from "react";

const Footer=()=>{
    return <div  >
        <Container maxW={'5xl'} centerContent mt={20}>
            <Box w={'1400px'}  h={'500px'} shadow={'xs'} fontFamily={'"Haas Grot Text R Web'} margin={'auto'}  >
                <Flex gap={10}  pt={10} p={10} >
                    <Box className="first">
                        <Link to='/'><Image w={150}  src='./dribbble-mania.jpg'/></Link>
                        <Box textAlign={'start'} mt={5}  fontSize={16} fontWeight={400} color={'rgb(61, 61, 78)'}  lineHeight={'20px'}>
                            <Text>Dribbble is the world’s leading</Text>
                            <Text>community for creatives to share, grow,</Text>
                            <Text>and get hired.</Text>
                        </Box>
                        <Box mt={5}>
                            <Flex  m={'auto'} gap={4}>
                                <Image h={6}  cursor={'pointer'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy9cYF3x2Gb-W8ZEHBly5gYLUCD9kikrRR3A&usqp=CAU" alt="err"/>
                                <Image h={6}  cursor={'pointer'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlk3NtAdG9Wzh6AOgavg3LJ8qpNkErx392oQ&usqp=CAU" alt="err"/>
                                <Image cursor={'pointer'}  h={6} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRET8RhZv5q-Yqw3Yb09MaZv0MvYjfFwZUzDQ&usqp=CAU" alt="err"/>
                                <Image h={6} cursor={'pointer'}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDrDDe8-cDYIgJ-vaFFuEYk1cKE5n8hRcFrn3t6Z5XHN4qiHWD0TfncMeL2KQAJ1vENko&usqp=CAU" alt="err"/>
                                <Image h={6} cursor={'pointer'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_GOmwWLWMJpvx4ATfO1m7Oee98nudVryosQ&usqp=CAU" alt="err"/>
                            </Flex>
                        </Box>
                    </Box>
                    <Box fontSize={16} fontWeight={500} textAlign={'start'}  lineHeight={8}className="second" >
                        <Text><b>For designers</b></Text>
                        <Box color={'rgb(61, 61, 78)'}>
                            <Text cursor={'pointer'}>Go Pro!</Text>
                            <Text cursor={'pointer'}>Explore design work</Text>
                            <Text cursor={'pointer'}>Design blog</Text>
                            <Text cursor={'pointer'}>Overtime podcast</Text>
                            <Text cursor={'pointer'}>Playoffs</Text>
                            <Text cursor={'pointer'}>Code of conduct</Text>
                        </Box>
                    </Box>
                    <Box fontSize={16} fontWeight={500} textAlign={'start'} lineHeight={8} >
                        <Text><b>Hire designers</b></Text>
                        <Box color={'rgb(61, 61, 78)'}>
                            <Text cursor={'pointer'}>Post a job opening</Text>
                            <Text cursor={'pointer'}>Post a freelance project</Text>
                            <Text cursor={'pointer'}>Search for designers</Text>
                        </Box>
                        <Text ><b>Brands</b></Text>
                        <Text color={'rgb(61, 61, 78)'} cursor={'pointer'}>Advertise with us</Text>
                    </Box>
                    <Box fontSize={16} fontWeight={500} textAlign={'start'} lineHeight={8} >
                        <Text><b>Company</b></Text>
                        <Box color={'rgb(61, 61, 78)'} >
                            <Text cursor={'pointer'}>About</Text>
                            <Text cursor={'pointer'}>Careers</Text>
                            <Text cursor={'pointer'}>Support</Text>
                            <Text cursor={'pointer'}>Media kit</Text>
                            <Text cursor={'pointer'}>Testimonials</Text>
                            <Text cursor={'pointer'}>API</Text>
                            <Text cursor={'pointer'}>Terms of service</Text>
                            <Text cursor={'pointer'}>Privacy policy</Text>
                            <Text cursor={'pointer'}>Cookie policy</Text>
                        </Box>
                    </Box>
                    <Box fontSize={16} fontWeight={500} textAlign={'start'} lineHeight={8} >
                        <Text><b>Directories</b></Text>
                        <Box color={'rgb(61, 61, 78)'}>
                            <Text cursor={'pointer'}>Design jobs</Text>
                            <Text cursor={'pointer'}>Designers for hire</Text>
                            <Text cursor={'pointer'}>Freelance designers for hire</Text>
                            <Text cursor={'pointer'}>Tags</Text>
                            <Text cursor={'pointer'}>Places</Text>
                        </Box>
                        <Text><b>Design assets</b></Text>
                        <Box color={'rgb(61, 61, 78)'}>
                            <Text cursor={'pointer'}>Dribbble Marketplace</Text>
                            <Text cursor={'pointer'}>Creative Market</Text>
                            <Text cursor={'pointer'}>Fontspring</Text>
                            <Text cursor={'pointer'}>Font Squirrel</Text>
                        </Box>
                    </Box>
                    <Box fontSize={16} fontWeight={500} textAlign={'start'}  lineHeight={8} >
                        <Text><b>Design Resources</b></Text>
                        <Box color={'rgb(61, 61, 78)'}>
                            <Text cursor={'pointer'}>Freelancing</Text>
                            <Text cursor={'pointer'}>Design Hiring</Text>
                            <Text cursor={'pointer'}>Design Portfolio</Text>
                            <Text cursor={'pointer'}>Design Education</Text>
                            <Text cursor={'pointer'}>Creative Process</Text>
                            <Text cursor={'pointer'}>Design Industry Trends</Text>
                        </Box>
                    </Box>
                </Flex>
            </Box>
            <Box w={'1400px'} mt={10}  mb={10} fontFamily={'"Haas Grot Text R Web'}>
                <Flex >
                    <Box color={'rgb(61, 61, 78)'}>
                        <Text>© 2023 Dribbble. All rights reserved.</Text>
                    </Box>
                    <Spacer/>   
                    <Box >
                        <Flex gap={2}>
                            <Text color={'rgb(61, 61, 78)'}><b>21,386,761</b> shots dribbbled</Text>
                            <Image h={6}  src="https://cdn.dribbble.com/users/39/avatars/normal/f342d2c8d6677c536875e7de73e481ee.png?1582211833" alt="err"/>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
        </Container>
            
            
        
    </div>
}

export default Footer;
