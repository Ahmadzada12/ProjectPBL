import { Flex, Box, Image, Button } from "@chakra-ui/react";
import { Spacer } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { MdDarkMode, MdLightbulbOutline } from "react-icons/md";



function Navbar () {
  const { colorMode, toggleColorMode } = useColorMode()
  return (

    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      bg="#7B8FA1"
      color="#164875"
    >
      <Box display="flex" alignItems="center" position="absolute">
        <Image
          borderRadius="full"
          src="https://i.ibb.co/d5Kk707/Logo-Image.png"
          alt="Logo"
          boxSize="40px"
          marginRight="1rem"
        />
       
        <Box fontSize="xl" fontWeight="bold">
          OEMAH SOLUTION INDONESIA
        </Box>
        
      </Box>
      <Spacer></Spacer>
      <Button onClick={toggleColorMode}>
        {colorMode === 'light' ? <MdDarkMode/> : <MdLightbulbOutline/>}
      </Button>
    </Flex>
  );
};


export default Navbar;
