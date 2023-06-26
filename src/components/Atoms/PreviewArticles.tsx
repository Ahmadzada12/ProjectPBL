import {
    Heading,
    Text,
    Button,
    VStack,
    Flex,
    Box,
  } from "@chakra-ui/react";
  import { MdArrowBackIos } from "react-icons/md";
  import { Icon } from "@chakra-ui/react";
  import { useBreakpointValue } from "@chakra-ui/react";
  
  const PreviewArt = () => {
    return (
      <Flex
      pl="200px"
      pr="200px"
        height="90.9vh"
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <VStack  alignItems="start">
          <Heading>Tips Manajemen Waktu sebagai Seorang Developer</Heading>
          <Text>
            Oleh: Della Intan Kania, diposting pada : 22/02/2023 10:30 AM
          </Text>
          <Text as="b"> Atur Tingkat Kepentingan suatu pekerjaan</Text>
          <Text>
          Atur Tingkat Kepentingan suatu pekerjaan Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quisquam aspernatur ad expedita non iste vitae ducimus at, sunt, deserunt sit labore ipsam laudantium vero porro ipsum incidunt suscipit natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora soluta quia ex in aliquid sed laboriosam ducimus sapiente reprehenderit eaque, animi quibusdam harum fugit assumenda ipsa commodi! Dignissimos, consequuntur rem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione debitis esse quas quasi, iste vitae fugit quaerat, aperiam ea voluptas soluta, id neque dignissimos. Dolorum dolorem iusto asperiores minus ut.
          </Text>
          <Text as="b"> Atur Tingkat Kepentingan suatu pekerjaan</Text>
          <Text>
          Atur Tingkat Kepentingan suatu pekerjaan Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quisquam aspernatur ad expedita non iste vitae ducimus at, sunt, deserunt sit labore ipsam laudantium vero porro ipsum incidunt suscipit natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora soluta quia ex in aliquid sed laboriosam ducimus sapiente reprehenderit eaque, animi quibusdam harum fugit assumenda ipsa commodi! Dignissimos, consequuntur rem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione debitis esse quas quasi, iste vitae fugit quaerat, aperiam ea voluptas soluta, id neque dignissimos. Dolorum dolorem iusto asperiores minus ut.
          </Text>
          <Text as="b"> Atur Tingkat Kepentingan suatu pekerjaan</Text>
          <Text>
          Atur Tingkat Kepentingan suatu pekerjaan Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quisquam aspernatur ad expedita non iste vitae ducimus at, sunt, deserunt sit labore ipsam laudantium vero porro ipsum incidunt suscipit natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora soluta quia ex in aliquid sed laboriosam ducimus sapiente reprehenderit eaque, animi quibusdam harum fugit assumenda ipsa commodi! Dignissimos, consequuntur rem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione debitis esse quas quasi, iste vitae fugit quaerat, aperiam ea voluptas soluta, id neque dignissimos. Dolorum dolorem iusto asperiores minus ut.
          </Text>
        </VStack>
        <Box mt="auto" alignSelf="flex-end">
          <Button leftIcon={<MdArrowBackIos />} bottom={10} right={0}>Back</Button>
        </Box>
      </Flex>
    );
  };
  
  export default PreviewArt;
  