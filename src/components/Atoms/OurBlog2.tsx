import {
  HStack,
  Image,
  Stack,
  Text,
  Icon,
  VStack,
  Heading,
  Flex,
  Box,
  Button,
  Container,
  SimpleGrid,
} from "@chakra-ui/react";
// import { ArrowForwardIcon } from "react-icons/md"
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsCalendarDate } from "react-icons/bs";
import { GrLike } from "react-icons/gr";
import { FaRegCommentDots } from "react-icons/fa";

export default function OurBlog2() {
  return (
    // <Container maxW=''  height="300" bg='blue'>
    // <Box bg='blue.400'>
    <Flex bg="">
      <Stack height="235px" boxShadow="lg" borderRadius="lg">
        <Container maxW={""} py={25}>
          <SimpleGrid columns={{ base: 1, lg: 2 }}>
            <Flex>
              <Image
                src="https://i.ibb.co/R9SGg04/Rectangle-200-2.png"
                rounded={"md"}
                alt={"feature image"}
                objectFit={"cover"}
                width="500px"
                height="200px"
              />
            </Flex>
            <Stack p="2">
              <HStack>
                <Flex>
                  <Icon as={BsCalendarDate}></Icon>
                  <Text>March 08, 2023</Text>
                </Flex>
                <Flex>
                  <Icon as={GrLike}></Icon>
                  <Text>2,729 Like</Text>
                </Flex>
                <Flex>
                  <Icon as={FaRegCommentDots}></Icon>
                  <Text>273 Comments</Text>
                </Flex>
              </HStack>
              <Heading fontSize="20" color={"#061C3D"}>
                6 Tools UI/UX Design yang Sering Dipakai Designer
              </Heading>
              <Text textAlign={"justify"} color={"#42526B"}>
                UI/UX memiliki peranan yang sangat penting dalam pembuatan
                sebuah aplikasi. UI berfokus pada antarmuka pengguna dan
                berhubungan dengan sisi estetika suatu desain, sedangkan UX
              </Text>
              <HStack>
                <Button
                  w="150px"
                  color="#FFFFFF"
                  bg="#0B63E5"
                  rightIcon={<AiOutlineArrowRight />}
                >
                  Read more
                </Button>
                <Flex>
                  <Image src="https://i.ibb.co/bBWvFTS/Photo-1.png" />
                  <Box ml="3">
                    <Text fontWeight="bold">Segun Adebayo</Text>
                    <Text fontSize="sm">UI Engineer</Text>
                  </Box>
                </Flex>
                {/* <Flex>
                
                </Image>
                <Text>Ahmad Arif Zain</Text>
              </Flex>
              <Text>UI/UX Designer</Text> */}
              </HStack>
            </Stack>
          </SimpleGrid>
        </Container>
      </Stack>
    </Flex>
    // </Box>
    // </Container>
  );
}

//     <Box w="full" px="200px" py="60px">
//     <Flex justify="center" align="center">
//     <Stack width="320px" boxShadow="md" borderRadius="xl">
//     <Container maxW={'700'} py={12}>
//     <SimpleGrid columns={{ base: 1, md: 2 }}>
//     <Flex>
//     <Image src="https://i.ibb.co/R9SGg04/Rectangle-200-2.png" />
//     </Flex>

//     <Stack>
//     <Stack p="2"></Stack>
//          <HStack>
//             <Text>March 08, 2023</Text>
//             <Text>2,729 Like</Text>
//             <Text>273 Comments</Text>
//         </HStack>
//          <VStack align="flex-start">
//             <Heading fontSize="lg">6 Tools UI/UX Design yang Sering Dipakai Designer</Heading>
//             <Text fontSize="sm">UI/UX memiliki peranan yang sangat penting dalam pembuatan sebuah aplikasi. UI berfokus pada antarmuka pengguna dan berhubungan dengan sisi estetika suatu desain, sedangkan UX
//             </Text>
//             <Button alignSelf="flex-start" size="sm" bg="#0B63E5">
//                 Read more
//             </Button>
//         </VStack>
//     </Stack>
//     </SimpleGrid>
//     </Container>

//         </Stack>
//         </Flex>
//     </Box>
// )
// }

// import {
//     Container,
//     SimpleGrid,
//     Image,
//     Flex,
//     Heading,
//     Text,
//     Stack,
//     Button,
// } from '@chakra-ui/react';

// export default function Features1() {
//     return (
//       <Stack bgColor={'#F4F4F4'}>
//       <Container maxW={'5xl'} py={12}>
//         <SimpleGrid columns={{ base: 1, md: 2 }}>
//         <Flex>
//             <Image
//               src="https://i.ibb.co/R9SGg04/Rectangle-200-2.png"
//   rounded={'md'}
//   alt={'feature image'}
//   objectFit={'cover'}
//   width="500px"
//   height="500px"

//             />
//           </Flex>
//           <Stack>
//             <Heading color={'#061C3D'}>6 Tools UI/UX Design yang Sering Dipakai Designer</Heading>
//             <Text  textAlign={'justify'} color={'#42526B'}>
//             UI/UX memiliki peranan yang sangat penting dalam pembuatan sebuah aplikasi. UI berfokus pada antarmuka pengguna dan berhubungan dengan sisi estetika suatu desain, sedangkan UX
//             </Text>
//             <Button color="#FFFFFF" bg="#0B63E5">Read more</Button>
//           </Stack>
//         </SimpleGrid>
//       </Container>
//       </Stack>
//     );
//   }
