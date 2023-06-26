import { Box, Center, ChakraProvider, Text, Heading } from "@chakra-ui/react";
import React from "react";

const App = () => {
  return (
    <ChakraProvider>
      <Box
        backgroundImage="https://i.ibb.co/bXTc3kG/unsplash-CZ9-Aj-MGKIFI.png"
        backgroundSize="cover"
        backgroundPosition="center"
        height="80vh"
      >
        <Center height="100%">
          <Box p={4} >
            <Heading color="#FFFFFF" textAlign="center">BLOG</Heading>
            <Text fontSize="xl" color="#FFFFFF"  textAlign={"justify"}>We professionally deliver digital solutions using agile
               methodology to help established companies and startups perform by
              providing high-quality software development services.</Text>
          </Box>
        </Center>
      </Box>
    </ChakraProvider>
  );
};

export default App;

// import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react";

// export default function OurBlog1() {
//   return (
//     // <Flex w="100%" h="30vh">
//     //   <bgImage w="100%" h="100%"  src="https://i.ibb.co/SKdszBK/unsplash-CZ9-Aj-MGKIFI-1.png">

//     //   </bgImage>

//     // </Flex>

//     <Box
//       width="100%"
//       height="30vh"
//       bgImage="https://i.ibb.co/SKdszBK/unsplash-CZ9-Aj-MGKIFI-1.png"
//     >
//       <Container>
//         <Flex>
//           <Box>
//             <Heading textAlign="center" color="#FFFFFF">
//               BLOG
//             </Heading>
//             <Text pt="10px" color="#FFFFFF" textAlign="center">
//               We professionally deliver digital solutions using agile
//               methodology to help established companies and startups perform by
//               providing high-quality software development services.
//             </Text>
//           </Box>
//         </Flex>
//       </Container>
//     </Box>
//   );
// }
