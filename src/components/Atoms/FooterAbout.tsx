import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  Grid,
  Link,
  Button,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box bg="#164875">
      <Container maxW={1400}>
        <SimpleGrid spacing="30px" py="30px" templateColumns="repeat(2, 1fr)">
          <Box>
            <Heading pb="15px" color="#FFFFFF">
              Get in Touch
            </Heading>

            <Button color="#164875">+62 821 2345 6789</Button>
            <Button color="#164875" fontSize={"sm"}>
              admin@oemahsolution.com
            </Button>
            <Text>
              Ruko DTA (Down Town Area) Square, Jl. Seturan Raya No. 9,
              Kledokan, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah
              Istimewa Yogyakarta 55281
            </Text>
            <Button bg="#FFB703">Show Map</Button>
          </Box>

          <Box>
            <Heading color="#FFFFFF">Let’s Collaborate with Us</Heading>
            <Grid pt="30px">
              <Text color="#F4F4F4" textAlign={"justify"}>
                Every great work is started from a nice conversation and a cup
                of coffee. Share your business problem with us and let us be
                part of the solution, because we are Oemah Solution. Feel free
                to meet us in our office.
              </Text>
            </Grid>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
