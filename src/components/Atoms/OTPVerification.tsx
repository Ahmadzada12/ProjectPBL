import { Center, Heading } from "@chakra-ui/react";
import {
  Button,
  FormControl,
  Flex,
  Input,
  Stack,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";
import { PinInput, PinInputField } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";

export default function OtpForm(): JSX.Element {
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "#E5E5E5")}
    >
      <Stack
        spacing={4}
        w={"full"}
        maxW={"500px"}
        h={"350px"}
        bg={useColorModeValue("white", "#FFFFFF")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={10}
      >
        <Center>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: "2xl", md: "3xl" }}
            color={"#153060"}
          >
            Verify your Email
          </Heading>
        </Center>
        <Center
          fontSize={{ base: "sm", sm: "md" }}
          color={useColorModeValue("gray.800", "gray.400")}
        >
          We have sent code to your email
        </Center>
        <Center
          fontSize={{ base: "sm", sm: "md" }}
          fontWeight="bold"
          color={useColorModeValue("gray.800", "gray.400")}
        >
          send to username@mail.com
        </Center>
        <FormControl>
          <Center>
            <HStack color={"#164875"} border={"#164875"}>
              <PinInput>
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
            </HStack>
          </Center>
        </FormControl>
        <Center
          fontSize={{ base: "sm", sm: "sm" }}
          color={useColorModeValue("gray.800", "gray.400")}
        >
          i didn't receive a code
        </Center>
        <center>
        <Link color="#3182CE" href="#">
          Resend
        </Link>
        </center>
        <Stack spacing={6}>
          <Button
            bg={"blue.600"}
            color={"white"}
            _hover={{
              bg: "blue.700",
            }}
          >
            Verify
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}
