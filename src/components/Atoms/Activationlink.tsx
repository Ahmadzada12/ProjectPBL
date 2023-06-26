import { Center, Heading } from "@chakra-ui/react";
import { Button, Flex, Stack, useColorModeValue } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

export default function ActivationLink(): JSX.Element {
  return (
    <Flex
      minH={"89vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "#E5E5E5")}
    >
      <Stack
        spacing={6}
        // w={"full"}
        maxW={"500px"}
        h={"300px"}
        bg={useColorModeValue("white", "#FFFFFF")}
        rounded={"md"}
        boxShadow={"sm"}
        p={6}
        my={10}
      >
        <Center>
          <Text
            lineHeight={1.1}
            fontSize={'4xl'}
            color={"#153060"}
          >
            Link Activation Has Been Sent!{" "}
          </Text>
        </Center>

        <Flex
          fontSize={{ base: "sm", sm: "sm" }}
          color={useColorModeValue("gray.800", "#828282")}
        >
          Please check your email for activation your account.
        </Flex>

        <Stack>
          <Link href="/">
          <Button
            w={120}
            marginRight={1000}
            color={"#164875"}
            colorScheme={"white"}
            border={"1px"}
            borderColor={"#164875"}
            ml="auto"
            _hover={{
              bg: "gray.100",
            }}
          >
            Sign In
          </Button>
          </Link>
        </Stack>
      </Stack>
    </Flex>
  );
}
