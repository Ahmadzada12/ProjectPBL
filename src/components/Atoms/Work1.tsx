// import { Box, Center, ChakraProvider, Text, Heading } from "@chakra-ui/react";
// import React from "react";

// const App = () => {
//   return (
//     <ChakraProvider>
//       <Box
//         backgroundImage="https://i.ibb.co/x6N2rw3/AMAZING-TEAMS.png"
//         rounded={'md'}
//    alt={'feature image'}
//    objectFit={'cover'}

//    height="500px"
//         backgroundPosition="center"

//         width="500px"
//       >
//       </Box>
//     </ChakraProvider>
//   );
// };

// export default App;

// import {Box, Image, Text, Heading} from "@chakra-ui/react"
// export default function Work1() {
//     return (
//         <Box w="full" px="200px" py="100px">
//         <Image
//               src="https://i.ibb.co/x6N2rw3/AMAZING-TEAMS.png"
//             //   rounded={'md'}
//             //   alt={'feature image'}
//             //   objectFit={'cover'}
//             //   width="500px"
//             //   height="500px"
//             />
//       {/* <Heading
//         fontSize={43}
//         letterSpacing="2px"
//         color="#273B4A"
//         pb=""
//         alignItems="center"
//       >
//         Our Blog
//       </Heading>
//       <Text pb="20px" color="#757575">
//         We are enthusiastic about using digital solutions to solve our client’s
//         problems by developing outstanding projects. Take a look at this
//         satisfied customer.
//       </Text> */}
//       </Box>
//     );
//     }

import { Box } from "@chakra-ui/react";

const App = () => {
  return (
    <Box
      justifyContent="center"
      alignItems="center"
      height="2000px"
      width="1440px"
    >
      <Box
        width="1440px"
        top="10"
        height="2000px"
        backgroundImage="https://i.ibb.co/x6N2rw3/AMAZING-TEAMS.png"
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
      />
    </Box>
  );
};

export default App;
