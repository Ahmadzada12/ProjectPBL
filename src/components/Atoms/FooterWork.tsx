import {
  Box,
  Button,
  Divider,
  Flex,
  Icon,
  Text,
  Heading,
  AspectRatio,
} from "@chakra-ui/react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="#164875" p={4}>
      <Flex justifyContent="space-between" alignItems="center" mb={4}>
        <Flex alignItems="center">
          <Heading color="#FFFFFF">Get in Touch</Heading>
          {/* <Button
            variant="link"
            colorScheme="blue"
            leftIcon={<FaMapMarkerAlt />}
          >
            Show Map
          </Button>
          <Text ml={2}>Address</Text> */}
        </Flex>
        <Flex>
          <Button variant="link" colorScheme="blue" mr={2}>
            Nomer
          </Button>
          <Button variant="link" colorScheme="blue">
            Email
          </Button>
        </Flex>
        <Flex>
          <Heading>cn,cn</Heading>
        </Flex>
        <Flex>
          <Text>
            Every great work is started from a nice conversation and a cup of
            coffee. Share your business problem with us and let us be part of
            the solution, because we are Oemah Solution. Feel free to meet us in
            our office.
          </Text>
        </Flex>
        <Flex>
          <AspectRatio ratio={16 / 9}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.1465584431844!2d110.40665597455384!3d-7.774279777123447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59f21acfe64b%3A0x18afbcc417b9f332!2sOEMAH%20SOLUTION%20INDONESIA!5e0!3m2!1sen!2sid!4v1686647605388!5m2!1sen!2sid" />
          </AspectRatio>
        </Flex>
      </Flex>
      <Text mb={4}>Text di bawahnya</Text>
      <Button colorScheme="blue" mb={4}>
        +62 821 2345 6789
      </Button>
      <Flex>
        <Button colorScheme="blue" mb={4}>
          admin@oemahsolution.com
        </Button>
      </Flex>
      <Flex>
        <Text>
          Ruko DTA (Down Town Area) Square, Jl. Seturan Raya No. 9, Kledokan,
          Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta
          55281
        </Text>
      </Flex>
      <Divider mb={4} />
      <Flex justifyContent="space-between" alignItems="center">
        <Text>About Service Project Contact</Text>
        <Flex>
          <Icon as={FaFacebook} boxSize={6} mx={2} />
          <Icon as={FaInstagram} boxSize={6} mx={2} />
          <Icon as={FaLinkedin} boxSize={6} mx={2} />
          <Icon as={FaWhatsapp} boxSize={6} mx={2} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
