import { Container, Grid } from "@chakra-ui/react";
import Navbar1 from "../components/Atoms/Navbar1";
import Blog from "../components/Atoms/Blog";
import OurBlog2 from "../components/Atoms/OurBlog2";
import WeAreHiring2 from "../components/Atoms/WeAreHiring2";
import Footer from "../components/Atoms/Footer";

export default function AboutUs() {
  return (
    <>
      <Navbar1 />
      <Blog />
      <Container maxW="container.xl">
        <Grid gap={3} gridTemplateColumns="repeat(auto-fit, minmax(320px, 1fr)">
          {[...Array(5)].map((x, i) => (
            <OurBlog2 />
          ))}
        </Grid>
      </Container>
      <WeAreHiring2 />
      <Footer />
    </>
  );
}
