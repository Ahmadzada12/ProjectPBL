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

export default function NewPassword(): JSX.Element {
  return (
    <Flex
      minH={"90.8vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("#E5E5E5", "#E5E5E5")}
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
          New Password
        </Text>
        <Flex
          fontSize={{ base: "sm", sm: "sm" }}
          color={useColorModeValue("#828282", "#828282")}
        >
          Set the new password for your account so you can login and access all featuress.
        </Flex>

        <Stack>
          <form>
          <FormControl mb={4}>
            <FormLabel color="#153060" >Enter new password</FormLabel>
            <Input
              type="password"
              name="email"
              placeholder="8 symbls at least"
              color="#164875"
              bg="#EDF2F7"
              border="1px"
              borderColor="#164875"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#153060">Confirm password</FormLabel>
            <Input
              type="password"
              name="email"
              placeholder="8 symbls at least"
              color="#164875"
              bg="#EDF2F7"
              border="1px"
              borderColor="#164875"
            />
          </FormControl>
          </form>
        </Stack>
        <Box w="full">
          <Button colorScheme="blue" bgColor="#164875" color="white" w="full">Update Password</Button>
        </Box>
      </Stack>
    </Flex>
  );
}
