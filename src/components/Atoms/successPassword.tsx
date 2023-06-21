import { Box, Button, Flex, Link } from "@chakra-ui/react";
import { VStack, Stack } from "@chakra-ui/react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Icon } from "@chakra-ui/react";
import { Text } from '@chakra-ui/react'
import React from "react";
const SuccessPassword = () => {
  return (
    <Box
      backgroundColor="#E5E5E5"
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="90.5vh"
      flexDirection="column"
    >
      <Box
        maxWidth="575px"
        maxHeight="662px"
        h={400}
        boxShadow="sm"
        backgroundColor="#FFFFFF"
        borderWidth="1px"
        borderRadius="sm"
        p={8}
        width={{ base: "100%", sm: "80%", md: "50%" }}
      >
        <VStack justify={"center"} mb={9}>
            <Icon 
              mb={10}
              as={AiOutlineCheckCircle}
              boxSize={100}
              color={"#244A84"}
            />
           <Text color={'#153060'} fontSize='3xl'>Successfully</Text>
           <br></br>
           <Text color={'#828282'} fontSize='xs'>Your password has been reset successfully</Text>

        </VStack>
        <Stack justify="space-between">
          <Link href="/" >
          <Button
          width="100%"
            bg="#164875"
            border="1px"
            borderColor="#164875"
            color="#FFFFFF"
            _hover={{bg:"blue.700"}}
          >
            Continue
          </Button>
          </Link>
        </Stack>
      </Box>
    </Box>
  );
};

export default SuccessPassword;
