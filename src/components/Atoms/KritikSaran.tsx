import {
    ChakraProvider,
    Box,
    Input,
    Flex,
    Text,
    Button,
    Heading,
    Image,
  } from "@chakra-ui/react";
  
  const App = () => {
    
    return (
      <ChakraProvider>
        <Box
          width="99vw"
          height="55vh"
          bgGradient="linear(to-r, white, blue.200)"
          padding="20px"
        >
          <Heading fontSize="50px" marginBottom="30px" color="#164875">
           Kritik & Saran
          </Heading>
          <Flex marginBottom="20px">
                  <Image src="https://i.ibb.co/bBWvFTS/Photo-1.png" />
                  <Box ml="3">
                    <Text fontWeight="bold">Hi</Text>
                    <Text fontSize="sm">Apa kritik dan saranmu?</Text>
                  </Box>
                </Flex>
          <Flex direction="row" justify="space-between" marginBottom="20px">
          
            <Box width="45%">
              <Text>Nama</Text>
              <Input
                placeholder="abc"
                borderBottom="2px"
                borderColor="#164875"
              />
            </Box>
            <Box width="45%" >
              <Text>Email</Text>
              <Input
                placeholder="abc@abc.com"
                borderBottom="2px"
                borderColor="#164875"
              />
            </Box>
          </Flex>
          <Box width="45%" marginBottom="20px">
            <Text>Kritik dan Saran</Text>
            <Input
              placeholder="tulis isi kritik dan saran"
              borderBottom=""
              borderColor="#164875"
            />
          </Box>
          <Flex justifyContent="center" >
          <Button
            variant="solid"
            borderRadius="20px"
            width="200px"
            alignSelf="center"
            bgColor="#1A2EDB"
            color="#FFFFFF"
          >
            Send to Collaborate
          </Button>
          </Flex>
        </Box>
      </ChakraProvider>
    );
  };
  
  export default App;


// import { Box, Button, ChakraProvider, Flex, FormControl, FormLabel, Input, Text, VStack } from '@chakra-ui/react';
// import React from 'react';

// function App() {
//   return (
//     <ChakraProvider>
//       <Box height="100vh" width="100%" display="flex" alignItems="center" justifyContent="center">
//         <VStack spacing={4} width="400px" p={4} borderWidth={1} borderRadius="md">
          
//             <img
//               src="https://i.ibb.co/9vBVFcV/Kishore.png" // Ganti dengan URL foto profil yang diinginkan
//               alt="Foto Profil"
//               width="100%"
//               height="100%"
             
//             />
          
//           <Text textAlign="center">Teks singkat</Text>
//           <FormControl id="name">
//             <FormLabel>Nama</FormLabel>
//             <Input type="text" placeholder="Nama" />
//           </FormControl>
//           <FormControl id="email">
//             <FormLabel>Email</FormLabel>
//             <Input type="email" placeholder="Email" />
//           </FormControl>
//           <FormControl id="feedback">
//             <FormLabel>Kritik dan Saran</FormLabel>
//             <Input type="text" placeholder="Kritik dan Saran" />
//           </FormControl>
//           <Button colorScheme="teal" width="100%">
//             Send
//           </Button>
//         </VStack>
//       </Box>
//     </ChakraProvider>
//   );
// }

// export default App;
