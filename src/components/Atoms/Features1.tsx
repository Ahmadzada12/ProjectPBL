import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
  } from '@chakra-ui/react';
  import {
    IoAnalyticsSharp,
    IoLogoBitcoin,
    IoSearchSharp,
  } from 'react-icons/io5';
  import { ReactElement } from 'react';
import { relative } from 'path';
  
  // interface FeatureProps {
  //   text: string;
  //   iconBg: string;
  //   icon?: ReactElement;
  // }
  
  // const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  //   return (
  //     <Stack direction={'row'} align={'center'}>
  //       <Flex
  //         w={8}
  //         h={8}
  //         align={'center'}
  //         justify={'center'}
  //         rounded={'full'}
  //         bg={useColorModeValue('blue.50', 'blue.900')}>
  //         {icon}
  //       </Flex>
  //       <Text fontWeight={600}>{text}</Text>
  //     </Stack>
  //   );
  // };
  
  export default function Features1() {
    return (
      <Stack bgColor={'#164875'}>
      <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }}>
        <Flex>
            <Image
              src="https://i.ibb.co/GM2Rc8n/01-Mockup-2.png" 
              rounded={'md'}
              alt={'feature image'}
              objectFit={'cover'}
              width="500px"
              height="500px"
              
            />
          </Flex>
          <Stack>
            <Heading color={'white'}>UPL Sales Tracking Apps</Heading>
            <Text color={'white'} fontSize={'lg'}>
            UPL INDONESIA 2022 - Design, Web Apps, Mobile Apps
            </Text>
            <Text  textAlign={'justify'} color={'white'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit
            elit nascetur elementum neque euismod nisl arcu.
            Ullamcorper tortor augue diam egestas. Nullam sit purus sit
            vitae mi. Vel, dolor nunc, in sit tellus. A viverra nunc, quam odio
            condimentum natoque viverra. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Elit elit nascetur elementum neque
            euismod nislarcu.
            </Text>
          </Stack>
        </SimpleGrid>
      </Container>
      </Stack>
    );
  }