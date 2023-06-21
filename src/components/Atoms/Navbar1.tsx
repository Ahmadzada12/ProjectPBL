import {Spacer, Flex, Heading, HStack, Link, Icon, Button, Image, Box } from "@chakra-ui/react"
import { useColorMode } from "@chakra-ui/react";
import { MdDarkMode, MdLightbulbOutline } from "react-icons/md";



const handleClick = () => {
  console.log("Link clicked");
};


export default function Navbar1() {
    const { colorMode, toggleColorMode } = useColorMode()
  return (
   
    <Flex
    zIndex={3}
      // position="fixed"
      backgroundColor={"white"}
      position="fixed"
      px="50px"
      py="20px"
      width= "full"
      bg="withe.500"
      alignItems="flex-end"
      justifyContent="space-between"
      borderBottom="6px solid #164875"
    >
      <Flex alignItems="flex-end" >
        <Image src="https://i.ibb.co/d5Kk707/Logo-Image.png"></Image>
        <Heading
          color="#164875"
          mr="50px"
          fontSize="30"
          letterSpacing="1,5px">
        Oemah Solution Indonesia
        </Heading>
        <HStack color="#164875" spacing="40px">
          <Link color="#FFB703" href="/" onClick={handleClick}>Home</Link>
          <Link>Service</Link>
          <Link>Work</Link>
          <Link href="/aboutUs" onClick={handleClick} >About Us</Link>
          <Link href="/blog" onClick={handleClick}>Blog</Link>
          <Link>Careers</Link>
        </HStack>
      </Flex>
      <Spacer/>
        <Button
        mr={5}
        display={{ base: 'none', md: 'inline-flex' }}
        fontSize={'sm'}
        fontWeight={600}
        colorScheme={"blue"}
        bg={'#164875'}>
          Get In Touch
        </Button>
        {/* <Spacer></Spacer> */}
      <Button onClick={toggleColorMode}>
        {colorMode === 'light' ? <MdDarkMode/> : <MdLightbulbOutline/>}
      </Button>
      </Flex>
  );
};


