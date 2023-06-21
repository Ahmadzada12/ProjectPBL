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
} from "@chakra-ui/react";
import { ReactElement } from "react";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

    

export default function Features() {
  return (
    <Stack bgColor={"#164875"} zIndex={2}>
      <Container maxW={"5xl"} py={12} bgColor={"white.100"}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            {/* <Text
              textTransform={'uppercase'}
              color={'blue.400'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('blue.50', 'blue.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
              Our Story
            </Text> */}
            <Heading
              color={"white"}
              font-family={"Archivo"}
              font-size={"36px"}
              font-weight={"600"}
              line-height={"40px"}
              letter-spacing={"0em"}
              text-align={"left"}
            >
              Our Featured Project
            </Heading>
            <Text
              color={"white"}
              font-family={"Archivo"}
              font-size={"20px"}
              font-weight={"400"}
              line-height={"24px"}
              letter-spacing={"0em"}
              text-align={"left"}
              marginLeft="30px"
            >
              We are enthusiastic about using digital solutions to solve our
              clients' problems. Take a look at this satisfied customer.
            </Text>
            <Heading
              color={"white"}
              font-family={"Archivo"}
              font-size={"36px"}
              font-weight={"600"}
              line-height={"40px"}
              letter-spacing={"0em"}
              text-align={"left"}
            >
              Scoolaa School Apps
            </Heading>
            <Text color={"white"}>
              OWN PROJECT 2023 - Design, Web Apps, Mobile Apps
            </Text>
            <Text
              color={"white"}
              font-family={"Archivo"}
              font-size={"18px"}
              font-weight={"400"}
              line-height={"24px"}
              letter-spacing={"0em"}
              textAlign={"justify"}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Elit elit
              nascetur elementum neque euismod nisl arcu. Ullamcorper tortor
              augue diam egestas. Nullam sit purus sit vitae mi. Vel, dolor
              nunc, in sit tellus. A viverra nunc, quam odio condimentum natoque
              viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Elit elit nascetur elementum neque euismod nislarcu.
            </Text>
            {/* <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
              <Feature
                icon={
                  <Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={'Business Planning'}
              />
              <Feature
                icon={<Icon as={IoLogoBitcoin} color={'green.500'} w={5} h={5} />}
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={'Financial Planning'}
              />
              <Feature
                icon={
                  <Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('purple.100', 'purple.900')}
                text={'Market Analysis'}
              />
            </Stack> */}
          </Stack>

          <Flex>
            <Image
              src="https://i.ibb.co/sbZQxDQ/HP.png"
              rounded={"md"}
              alt={"feature image"}
              objectFit={"cover"}
              width="500px"
              height="500px"
            />
          </Flex>
        </SimpleGrid>
      </Container>
    </Stack>
  );
}
