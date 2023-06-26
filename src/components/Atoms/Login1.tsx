import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  Text,
  Image,
  Link,
  Center,
  Heading,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Fade,
} from "@chakra-ui/react";
import { useMutation, gql } from "@apollo/client";
import React, { useState } from "react";
import { useRouter } from "next/router";

const REGISTER_MUTATION = gql`
  mutation Register($email: String!, $password: String!) {
    createUser(createUserInput: { email: $email, password: $password }) {
      userId
      email
      password
    }
  }
`;

const Login = () => {

  const [loginUser, { data, loading, error }] = useMutation(REGISTER_MUTATION);
  const router = useRouter();
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowAlert(false);

    try {
      const { data } = await loginUser({
        variables: {
          email: e.target.email.value,
          password: e.target.password.value,
        },
      });
      router.push("/articles");
    } catch (error) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000); // Alert will disappear after 5 seconds
    }
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
      <Fade in={showAlert}>
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>Your data is not valid!</AlertTitle>
          <AlertDescription>
            Your Email or Password may doesn't matching
          </AlertDescription>
        </Alert>
      </Fade>
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
        <Center>
          <Heading color={"#164875"} mb={4}>
            Login
          </Heading>
        </Center>
        <form onSubmit={handleSubmit}>
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
          <FormControl mb={10}>
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
          <Flex justifyContent="center" mb={4}>
            <Button
              _hover={{ bg: "#295B89" }}
              bg="#164875"
              color="white"
              type="submit"
              disabled={loading}
            >
              Sign In
            </Button>
          </Flex>
          <Center>
            <Text color={"#3182CE"}>
              <Link href="/register">Register or</Link>
              <Link href="/forgotPassword"> Forgot password</Link>
            </Text>
          </Center>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
