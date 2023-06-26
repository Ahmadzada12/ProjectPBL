import { Box, Center, ChakraProvider, Text, Heading } from "@chakra-ui/react";
import React from "react";

const App = () => {
  return (
    <ChakraProvider>
      <Box
        backgroundImage="https://i.ibb.co/34pTvJg/WE-ARE-HIRING.png"
        backgroundSize="cover"
        backgroundPosition="center"
        height="520px"   
      >    
      </Box>
    </ChakraProvider>
  );
};

export default App;