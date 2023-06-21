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
        height="90.9vh"
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        
      >
        <VStack  alignItems="start">
          <Heading>Tips Manajemen Waktu sebagai Seorang Developer</Heading>
          <Text>
            Oleh: Della Intan Kania, diposting pada : 22/02/2023 10:30 AM
          </Text>
          <Text as="b">
          Atur Tingkat Kepentingan suatu pekerjaan
          </Text>
        </VStack>
        <Box mt="auto" alignSelf="flex-end">
          <Button leftIcon={<MdArrowBackIos />} bottom={10} right={20}>Back to edit</Button>
        </Box>
      </Flex>
    );
  };
  
  export default PreviewArt;
  