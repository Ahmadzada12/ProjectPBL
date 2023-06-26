import {
  Box,
  Heading,
  Image,
  Text,
  HStack,
  SimpleGrid,
} from "@chakra-ui/react";
// import HP from '../components/image/HP.png'

export const WorkMethodCard = ({
  imagePath,
}: // heading,
// description,
{
  imagePath: string;
  // heading:string;
  // description: string;
}) => {
  return (
    <Box w="full">
      <Image src={imagePath} />
      {/* <Heading fontSize={20} color="#273B4A">{heading}</Heading>
    <Text textAlign={'justify'} color="#273B4A">{description}</Text> */}
    </Box>
  );
};

export default function OurVision() {
  return (
    <Box w="full" px="200px" py="60px">
      <Heading
        fontSize={43}
        letterSpacing="2px"
        color="#164875"
        pb=""
        alignItems="center"
      >
        PT. Oemah Solution Indonesia
      </Heading>
      <Text pb="20px" color="#757575">
        Oemah Solution is an IT consulting services, web design, and mobile
        developer company founded in April 2016 by experienced IT practitioners
        in their respective fields. We value each and every collaboration formed
        with partners. As a result, we are fully committed to always delivering
        the best, most timely, and most effective results.
      </Text>
      <Heading color="#273B4A">Our Mission</Heading>
      <HStack w="full" alignItems="flex-start" spacing="60px">
        <WorkMethodCard
          imagePath="https://i.ibb.co/PQrp9FF/Frame-25436.png"
          // heading="Wade Warren"
          // description="Lorem ipsum dolor sit amet consectetur.Duis placeratfacilisis ultrices nulla massa"
        />
        <WorkMethodCard
          imagePath="https://i.ibb.co/6FsyZhN/Frame-25437.png"
          // heading="Muhammad Ariffudin"
          // description="Next.js adalah framework berbasis bahasa pemrograman JavaScript yang kini banyak"
        />
        <WorkMethodCard
          imagePath="https://i.ibb.co/vPr9pMd/Frame-25438.png"
          // heading="Minlab 2"
          // description="Vue.js adalah framework JavaScript yang bisa digunakan untuk mengembangkan aplikasi "
        />
        {/* <WorkMethodCard 
          imagePath="https://i.ibb.co/yNMf000/Rectangle-198-2.png"
          heading="Ahmad Arif Zain"
          description="Desain Visual adalah hal yang penting pada pembuatan produk karena hal yang biasa dilihat"
          /> */}
        {/* <WorkMethodCard 
          imagePath="https://i.ibb.co/yNMf000/Rectangle-198-2.png"
          heading="Ahmad Arif Zain"
          description="Desain Visual adalah hal yang penting pada pembuatan produk karena hal yang biasa dilihat"
          />
          <WorkMethodCard 
          imagePath="https://i.ibb.co/yNMf000/Rectangle-198-2.png"
          heading="Ahmad Arif Zain"
          description="Desain Visual adalah hal yang penting pada pembuatan produk karena hal yang biasa dilihat"
          /> */}
      </HStack>
    </Box>
  );
}

// import { ReactElement } from 'react';
// import { StaticImageData } from 'next/image';
// import { Box, SimpleGrid, Icon, Text, Stack, Flex, Heading, Container, Image, Center} from '@chakra-ui/react';
// // import * as Gambar1 from '/image/gambar1.png';

// import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';

// interface FeatureProps {
//   title: string;
//   text: string;
//   // icon: ReactElement;
//   // image: StaticImageData;
// }

// const Feature = ({ title, text }: FeatureProps) => {
//   return (
//     <Stack>
//       {/* <Flex
//         w={16}
//         h={16}
//         align={'center'}
//         justify={'center'}
//         color={'white'}
//         rounded={'full'}
//         bg={'gray.100'}
//         mb={1}>
//       </Flex> */}
//       <Text fontWeight={600}>{title}</Text>
//       <Text color={'gray.600'}>{text}</Text>
//     </Stack>
//   );
// };

// export default function OurBlog() {
//   return (
//     <Box p={4}>
//         <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
//           <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
//           Our Blog
//           </Heading>
//           <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
//           We are enthusiastic about using digital solutions to solve our client’s
//         problems by developing outstanding projects. Take a look at this satisfied customer.
//           </Text>
//         </Stack>

//     <Box p={4}>
//       <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>

//         <Flex>
//         <Image
//           h={'120px'}
//           w={'full'}
//           src={"https://i.ibb.co/yQWQBqN/Rectangle-198-1.png"}
//           borderRadius={'2xl'}
//           align={'center'}
//         />
//         <br />
//         <Feature
//           // icon={<Icon as={FcDonate} w={10} h={10} />}
//           title={'Wade Warren'}
//           text={
//             'Lorem ipsum dolor sit amet consectetur. Duis placerat facilisis ultrices nulla massa.'
//           }
//         />
//         </Flex>

//         <Flex>
//         <Image
//           h={'120px'}
//           w={'full'}
//           src={
//             "https://i.ibb.co/VCp5PZy/Rectangle-199.png"
//           }
//         />
//         <Feature
//           // image={Gambar1}
//           // icon={<Icon as={FcInTransit} w={10} h={10} />}
//           title={'Muhammad Ariffudin'}
//           text={
//             'Next.js adalah framework berbasis bahasa pemrograman JavaScript yang kini banyak.'
//           }
//         />
//         </Flex>

//         <Flex>
//         <Image
//           h={'120px'}
//           w={'full'}
//           src={
//             "https://i.ibb.co/KGXdmRz/Rectangle-200.png"
//           }
//         />
//         <br />
//         <Feature
//           // image={Gambar1}
//           // icon={<Icon as={FcInTransit} w={10} h={10} />}
//           title={'Minlab 2'}
//           text={
//             'Vue.js adalah framework JavaScript  yang bisa digunakan untuk mengembangkan aplikasi.'
//           }
//         />
//         </Flex>

//         <Flex>
//         <Image
//           h={'120px'}
//           w={'full'}
//           src={
//             "https://i.ibb.co/yNMf000/Rectangle-198-2.png"
//           }
//         />
//         <br />
//         <Feature
//           // image={Gambar1}
//           // icon={<Icon as={FcInTransit} w={10} h={10} />}
//           title={'Ahmad Arif Zain'}
//           text={
//             'Desain Visual adalah hal yang penting pada pembuatan produk karena hal yang biasa dilihat.'
//           }
//         />
//         </Flex>

//         <Flex>
//         <Image
//           h={'120px'}
//           w={'full'}
//           src={"https://i.ibb.co/gVZBph2/Rectangle-199-2.png"}
//           align={'center'}
//           borderRadius={'2'}
//         />
//         <br />
//         <Feature
//           // image={Gambar1}
//           // icon={<Icon as={FcInTransit} w={10} h={10} />}
//           title={'Esther Howard'}
//           text={
//             'Lorem ipsum dolor sit amet consectetur. Duis placerat facilisis ultrices nulla massa'
//           }
//         />
//         </Flex>

//         <Flex>
//         <Image
//           h={'120px'}
//           w={'full'}
//           src={
//             "https://i.ibb.co/zxjypws/Rectangle-200-1.png"
//           }
//         />
//         <br />
//         <Feature
//           // image={Gambar1}
//           // icon={<Icon as={FcInTransit} w={10} h={10} />}
//           title={'Leonanta Pramudya'}
//           text={
//             'UI/UX memiliki peranan yang sangat penting dalam pembuatan sebuah aplikasi UI berfokus pada antarmuka pengguna.'
//           }
//         />
//         </Flex>

//       </SimpleGrid>
//     </Box>
//     </Box>
//   );
// }
