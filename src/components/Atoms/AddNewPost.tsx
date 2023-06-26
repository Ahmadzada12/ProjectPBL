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
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { gql, useMutation } from "@apollo/client";
const CREATE_ARTICLES = gql`
  mutation AddNewPost(
    $judul: String!
    $isi: String!
    $author: String!
    $gambar: String!
    $tanggal: String!
    $id_jenisblog: Int!
  ) {
    createBlog(
      createBlogInput: {
        judul: $judul
        isi: $isi
        author: $author
        gambar: $gambar
        tanggal: $tanggal
        id_jenisblog: $id_jenisblog
      }
    ) {
      id_blog
      judul
      isi
      author
      gambar
      tanggal
      id_jenisblog
    }
  }
`;

const AddNewPost = () => {
  const [createArticle, { data, loading, error }] =
    useMutation(CREATE_ARTICLES);
  const { register, handleSubmit, clearErrors } = useForm();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onSubmit = async (e) => {
    console.log(e);

    try {
      const result = await createArticle({
        variables: {
          judul: e.judul,
          isi: e.isi,
          author: e.author,
          gambar: e.gambar,
          tanggal: e.tanggal,
          id_jenisblog: parseInt(e.id_jenisblog),
        },
      });

      if (result) {
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid h="200px" templateColumns="repeat(5, 1fr)" gap={4}>
          <GridItem colSpan={4}>
            <FormControl isRequired>
              <FormLabel>Title</FormLabel>
              <Input
                name="judul"
                type="text"
                placeholder="Enter a title here"
                borderWidth="1px"
                borderColor="black"
                height={38}
                marginBottom={4}
                {...register("judul")}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Blog Content</FormLabel>
              <Input
                name="isi"
                type="text"
                as="textarea"
                placeholder="Enter your blog content here"
                borderWidth="1px"
                maxH={500}
                minH={500}
                borderColor="purple.500"
                height={500}
                marginBottom={4}
                {...register("isi")}
              />
            </FormControl>

            <Button
              colorScheme="green"
              marginBottom={2}
              mr={2}
              onClick={onOpen}
              type="submit"
            >
              Save
            </Button>

            {/* <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent p={5} mt={60}>
            <ModalHeader fontSize="50px">Publish Post?</ModalHeader>
            <ModalCloseButton />
            <ModalBody>This will publish this post to your blog.</ModalBody>

            <ModalFooter mt={24}>
              <Text colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Text>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal> */}
            <Button colorScheme="red" marginBottom={2}>
              Cancel
            </Button>
          </GridItem>
          <GridItem colSpan={1}>
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
                <option value="teknologi">Teknologi</option>
                <option value="pendidikan">Pendidikan</option>
                <option value="ekonomi">Ekonomi</option>
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
                <option value="name1">Zada</option>
                <option value="name2">nama2</option>
                <option value="name3">nama3</option>
                <option value="name4">nama4</option>
              </Select>
            </FormControl>
          </GridItem>
        </Grid>
      </form>
    </Box>
  );
};

export default AddNewPost;
