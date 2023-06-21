import {
  FormControl,
  Flex,
  Stack,
  useColorModeValue,
  Input,
  FormLabel,
  Button,
  Box,
  Text,
} from "@chakra-ui/react";

export default function ForgotPassword(): JSX.Element {
  return (
    <Flex
      minH={"90vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "#E5E5E5")}
    >
      <Stack
        spacing={6}
        w={"full"}
        maxW={"500px"}
        maxH={"500px"}
        bg={useColorModeValue("white", "#FFFFFF")}
        rounded={"md"}
        boxShadow={"sm"}
        p={10}
        my={10}
      >
        <Text lineHeight={1.1} fontSize={"4xl"} color={"#153060"}>
          Forgot Password
        </Text>
        <Flex
          fontSize={{ base: "sm", sm: "sm" }}
          color={useColorModeValue("gray.800", "#828282")}
        >
          Enter your email for the verification proccess,we will send 4 digits
          code to your email.
        </Flex>

        <Stack>
          <FormControl>
            <FormLabel color="#164875">E-Mail</FormLabel>
            <Input
              type="email"
              name="email"
              placeholder="Enter email"
              color="#164875"
              bg="#EDF2F7"
              border="1px"
              borderColor="#164875"
            />
          </FormControl>
        </Stack>
        <Box w="full">
          <Button colorScheme="blue" w="full">Continue</Button>
        </Box>
      </Stack>
    </Flex>
  );
}
