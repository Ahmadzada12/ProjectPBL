import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  Image,
  Link
} from "@chakra-ui/react";
import { useMutation, gql } from "@apollo/client";
import React from "react";

const REGISTER_MUTATION = gql`
  mutation Register(
    $username: String!
    $nohp: Int!
    $email: String!
    $password: String!
  ) {
    createUser(
      createUserInput: {
        username: $username
        email: $email
        nohp: $nohp
        password: $password
      }
    ) {
      userId
      username
      email
      nohp
      password
    }
  }
`;

const Register = () => {
  const [registerUser, { data, loading, error }] =
    useMutation(REGISTER_MUTATION);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await registerUser({
        variables: {
          username: e.target.username.value,
          nohp: parseInt(e.target.nohp.value),
          email: e.target.email.value,
          password: e.target.password.value,
        },
      });
    } catch (error) {}
  };

  return (
    <Box
      backgroundColor="#E5E5E5"
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="90.8vh"
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
        <form onSubmit={handleSubmit}>
          <FormControl mb={4}>
            <FormLabel color="#164875">Full Name</FormLabel>
            <Input
              type="text"
              name="username"
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
              name="nohp"
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
              name="email"
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
              name="password"
              placeholder="Enter your password"
              color="#164875"
              bg="#EDF2F7"
              border="1px"
              borderColor="#164875"
            />
          </FormControl>
          <Flex justify="space-between" mb={4}>
            <Button
              _hover={{ bg: "#295B89" }}
              bg="#164875"
              ml="auto"
              color="white"
              type="submit"
              disabled={loading}
            >
              Register
            </Button>
          </Flex>
        </form>
        <Flex justify="right">
          <Link href="/">
          <Button
            bg="#FFFFFF"
            ml="auto"
            border="1px"
            borderColor="#164875"
            color="#164875"
          >
            Sign In
          </Button>
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};

export default Register;
