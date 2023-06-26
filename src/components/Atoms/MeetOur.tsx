// import Carousel from "react-multi-carousel";
// import { Box, Heading} from "@chakra-ui/react"
// export default function Our() {
// const responsive = {
//   superLargeDesktop: {
//     // the naming can be any, depends on you.
//     breakpoint: { max: 4000, min: 3000 },
//     items: 5
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1
//   }
// };
// return (
//   <Box>
// }

import { Box, Text , Heading} from '@chakra-ui/react';

const Carousel = () => {
  const carouselItems = [
    {
      image: "https://i.ibb.co/VLLGHdm/001-1.png",
      description: 'Yani Aji Susilo',
      ket: 'Prime Commisarry'
    },
    {
      image: "https://i.ibb.co/4JGNVny/Frame-25454.png",
      description: 'Dhony Hendriyan',
      ket: 'CEO'
    },
    {
      image: "https://i.ibb.co/4JGNVny/Frame-25454.png",
      description: 'Martin N.Mamanua',
      ket: 'CTO'
    },
    {
      image: "https://i.ibb.co/4JGNVny/Frame-25454.png",
      description: 'Firman Handiga',
      ket: 'Marketing Manager'
    },
  ];

  return (
    <Box bg="#164875" p={4}>
      <Heading color="white">Meet Our</Heading>
      <Heading color="white">Experinces & Amazing Teams</Heading>
      <Box display="flex">
        {carouselItems.map((item, index) => (
          <Box key={index} mr="40">
            <img src={item.image} alt={`Gambar ${index + 1}`} /> 
            <Text color="white" mt={2}>{item.description}</Text>
            <Text color="#6C6C6C" mt={2}>{item.ket}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Carousel;





// import { Box, Center, ChakraProvider, extendTheme, Slide, SlideFade } from "@chakra-ui/react";
// import { useState } from "react";

// // Data dummy untuk carousel
// const carouselData = [
//   {
//     id: 1,
//     image: "https://i.ibb.co/r6WNVS7/001.png",
//     caption: "Gambar 1",
//   },
//   {
//     id: 2,
//     image: "https://i.ibb.co/r6WNVS7/001.png",
//     caption: "Gambar 2",
//   },
//   {
//     id: 3,
//     image: "https://i.ibb.co/r6WNVS7/001.png",
//     caption: "Gambar 3",
//   },
// ];

// const theme = extendTheme({
//   components: {
//     Slide,
//     SlideFade,
//   },
// });

// export default function MeetOur() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const nextSlide = () => {
//     setCurrentSlide((prevSlide) => (prevSlide === carouselData.length - 1 ? 0 : prevSlide + 1));
//   };

//   const previousSlide = () => {
//     setCurrentSlide((prevSlide) => (prevSlide === 0 ? carouselData.length - 1 : prevSlide - 1));
//   };

//   return (
//     <Center>
//       <Box w="500px" h="300px" overflow="hidden" position="relative">
//         {carouselData.map((slide, index) => (
//           <Slide key={slide.id} in={index === currentSlide} style={{ zIndex: index === currentSlide ? 1 : 0 }}>
//             <Box
//               w="100%"
//               h="100%"
//               bg={`url(${slide.image})`}
//               bgSize="cover"
//               bgPosition="center"
//               position="absolute"
//               top="0"
//               left="0"
//             >
//               <Center h="100%" color="white" fontSize="xl" fontWeight="bold">
//                 <SlideFade in={index === currentSlide} offsetY="30px">
//                   {slide.caption}
//                 </SlideFade>
//               </Center>
//             </Box>
//           </Slide>
//         ))}
//       </Box>
//       <button onClick={previousSlide}>Previous</button>
//       <button onClick={nextSlide}>Next</button>
//     </Center>
//   );
// }

// function App() {
//   return (
//     <ChakraProvider theme={theme}>
//       <Carousel />
//     </ChakraProvider>
//   );
// }

// export default App;
