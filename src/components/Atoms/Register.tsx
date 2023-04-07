import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  Image,
} from "@chakra-ui/react";

export default function Register() {
  return (
    <Box
      backgroundColor="#E5E5E5"
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      flexDirection="column"
    >
      <Box
        maxWidth="375px"
        maxHeight="662px"
        boxShadow="sm"
        backgroundColor="#FFFFFF"
        borderWidth="1px"
        borderRadius="lg"
        p={8}
        width={{ base: "100%", sm: "80%", md: "50%" }}
      >
        <FormControl mb={4}>
          <FormLabel color="#164875">Full Name</FormLabel>
          <Input
            type="text"
            placeholder="Enter your full name"
            bg="#EDF2F7"
            border="1px"
            borderColor="#164875"
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel color="#164875">Phone Number</FormLabel>
          <Input
            type="number"
            placeholder="Enter your phone number"
            color="#164875"
            bg="#EDF2F7"
            border="1px"
            borderColor="#164875"
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel color="#164875">Email Address</FormLabel>
          <Input
            type="email"
            placeholder="Enter your email address"
            color="#164875"
            bg="#EDF2F7"
            border="1px"
            borderColor="#164875"
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel color="#164875">Password</FormLabel>
          <Input
            type="password"
            placeholder="Enter your password"
            color="#164875"
            bg="#EDF2F7"
            border="1px"
            borderColor="#164875"
          />
        </FormControl>
        <Flex justify="space-between" mb={4}>
          <Button _hover={{ bg: "#295B89" }} bg="#164875" ml="auto">
            Register
          </Button>
        </Flex>
        <Flex justify="space-between">
          <Button
            bg="#FFFFFF"
            ml="auto"
            border="1px"
            borderColor="#164875"
            color="#164875"
          >
            Sign In
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}
