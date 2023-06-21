import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Select,
  Grid,
  GridItem,
  Heading,
  Text
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'

const AddNewPost = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Grid
    h='200px'
    templateColumns='repeat(5, 1fr)'
    gap={4}
  >
    <GridItem colSpan={4} >
        <FormControl isRequired>
          <FormLabel>Title</FormLabel>
          <Input
            type="text"
            placeholder="Enter a title here"
            borderWidth="1px"
            borderColor="black"
            height={38}
            marginBottom={4}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Blog Content</FormLabel>
          <Input
            as="textarea"
            placeholder="Enter your blog content here"
            borderWidth="1px"
            maxH={500}
            minH={500}
            borderColor="purple.500"
            height={500}
            marginBottom={4}
          />
        </FormControl>
       
        <Button colorScheme="green" marginBottom={2} mr={2} onClick={onOpen}>
          Save
        </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent p={5} mt={60}>
          <ModalHeader fontSize="50px">Publish Post?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            This will publish this post to your blog.
          </ModalBody>

          <ModalFooter mt={24}>
            <Text colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Text>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        <Button colorScheme="red" marginBottom={2}>
          Cancel
        </Button>
        </GridItem>
    <GridItem colSpan={1} >
      <FormControl>
        <FormLabel>Status</FormLabel>
        <RadioGroup marginBottom={4}>
          <Radio value="published">Published</Radio>
          <Radio value="scheduled">Scheduled</Radio>
        </RadioGroup>
      </FormControl>

      <FormControl>
        <FormLabel>Category</FormLabel>
        <Select marginBottom={4}>
          <option value="personal">Blog Pribadi</option>
          <option value="niche">Niche Blog</option>
          <option value="business">Blog Bisnis</option>
          <option value="affiliate">Blog Afiliasi</option>
          <option value="uncategorized">Uncategorised</option>
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel>Published on</FormLabel>
        <Select marginBottom={4}>
          <option value="automatic">Automatic</option>
          <option value="setDateTime">Set date and time</option>
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel>Publisher</FormLabel>
        <Select marginBottom={4}>
          <option value="name1">nama1</option>
          <option value="name2">nama2</option>
          <option value="name3">nama3</option>
          <option value="name4">nama4</option>
        </Select>
      </FormControl>
      </GridItem>
  </Grid>
    
  );
};

export default AddNewPost;
