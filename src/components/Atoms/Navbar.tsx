import { Flex, Box, Image } from "@chakra-ui/react";

const Navbar = () => {
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
      <Box display="flex" alignItems="center">
        <Image
          borderRadius="full"
          src="https://th.bing.com/th/id/OIP.FpBTdmS425XMYJ6kJH-fVAHaHd?w=174&h=180&c=7&r=0&o=5&dpr=2&pid=1.7"
          alt="Logo"
          boxSize="40px"
          marginRight="1rem"
        />
        <Box fontSize="xl" fontWeight="bold">
          OEMAH SOLUTION INDONESIA
        </Box>
      </Box>
    </Flex>
  );
};

export default Navbar;
