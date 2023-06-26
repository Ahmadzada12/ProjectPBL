import { format } from "date-fns";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Flex,
} from "@chakra-ui/react";
import {
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  Link,
  Input,
  Box,
  HStack,
  Spacer,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  Button,
  MenuItem,
  Center,
} from "@chakra-ui/react";
import {
  AiOutlineEye,
  AiOutlineArrowUp,
  AiFillCaretDown,
  AiFillCalendar,
} from "react-icons/ai";
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
import { ChevronDownIcon } from "@chakra-ui/icons";
import { TbEdit } from "react-icons/tb";
import { FaUserAlt } from "react-icons/fa";
import { BiNotepad, BiFilterAlt, BiBarChartAlt2 } from "react-icons/bi";
import { BsFillSearchHeartFill, BsTrash } from "react-icons/bs";
import { Icon } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";

const LIST_ARTICLES = gql`
  query Blog {
    blogs {
      id_blog
      author
      isi
      tanggal
      judul
      gambar
      jenisblog {
        id_jenisblog
        bidang_jenisblog
      }
      id_jenisblog
    }
  }
`;
const DELETE_ARTICLES = gql`
  mutation DeleteBlog($id_blog: String!) {
    removeBlog(id_blog: $id_blog) {
      id_blog
    }
  }
`;

const Articles1 = () => {
  const { error, data, loading, refetch } = useQuery(LIST_ARTICLES);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [tableData, setTableData] = useState(data?.blogs || []); // Gunakan state untuk memanipulasi data
  const [activeData, setActiveData] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (loading) {
      console.log("Data is loading...");
    } else if (data) {
      setTableData(data.blogs);
      console.log(data.blogs);
    } else {
      console.log("Error retrieving data:", error);
    }
  }, [loading, data, error]);
  useEffect(() => {
    if (showAlert) {
      const timeout = setTimeout(() => {
        setShowAlert(false);
      }, 2000); // Waktu penampilan alert (dalam milidetik), dalam contoh ini adalah 3 detik

      return () => clearTimeout(timeout); // Membersihkan timeout saat komponen dibongkar
    }
  }, [showAlert]);

  useEffect(() => {}, [activeData]);

  const [deleteArticles] = useMutation(DELETE_ARTICLES);

  const handleDelete = async () => {
    if (activeData) {
      try {
        await deleteArticles({
          variables: {
            id_blog: activeData.id_blog.toString(),
          },
        });
        refetch();
      } catch (error) {}
      setActiveData(null);
      onClose();
      setShowAlert(true);

      //   try {
      //     const { data } = await deleteArticles({
      //       variables: {
      // id_blog:activeData
      //       },
      //     });
      //   } catch (error) {}
      //     // useMutation(DELETE_ARTICLES);
      //     setActiveData(null);
      //     onClose();
      //     setShowAlert(true);
      //   }
    }
  };

  const toggleStatus = (id_blog: number) => {
    // Fungsi untuk mengubah status
    setTableData(
      tableData.map((item) =>
        item.id_blog === id_blog
          ? {
              ...item,
              status: item.status === "published" ? "scheduled" : "published",
            }
          : item
      )
    );
  };

  return (
    <Flex
      mr={7}
      display="flex"
      justifyContent="flex-start"
      // height="600px"
      maxH="88.96vh"
      // w="1000px"
      flexDirection="column"
      position="relative"
    >
      <HStack>
        <Text>Blog</Text>
        <Text>/ Articles</Text>
        <Spacer />
        <Menu>
          <MenuButton
            as={Button}
            leftIcon={<BiFilterAlt />}
            rightIcon={<AiFillCaretDown />}
            borderRadius="full"
          >
            Option
          </MenuButton>
          <MenuList>
            <Menu>
              <MenuButton
                as={Button}
                leftIcon={<AiFillCalendar />}
                rightIcon={<ChevronDownIcon />}
                mb={2}
                ml={2}
                w={40}
              >
                Date
              </MenuButton>
              <MenuList>
                <MenuItem icon={<AiFillCalendar />}>Date</MenuItem>
                <MenuItem icon={<FaUserAlt />}>Publisher</MenuItem>
                <MenuItem icon={<AiFillCalendar />}>Status</MenuItem>
              </MenuList>
              <p />
              <MenuButton
                as={Button}
                leftIcon={<FaUserAlt />}
                rightIcon={<ChevronDownIcon />}
                mb={2}
                w={40}
                ml={2}
              >
                Publisher
              </MenuButton>
              <p />
              <MenuButton
                as={Button}
                leftIcon={<BiBarChartAlt2 />}
                rightIcon={<ChevronDownIcon />}
                mb={2}
                w={40}
                ml={2}
              >
                Status
              </MenuButton>
              <MenuList>
                <MenuItem icon={<AiFillCalendar />}>Date</MenuItem>
                <MenuItem icon={<FaUserAlt />}>Publisher</MenuItem>
                <MenuItem icon={<AiFillCalendar />}>Status</MenuItem>
              </MenuList>
            </Menu>
          </MenuList>
        </Menu>
        <Input
          placeholder="Search Here"
          htmlSize={10}
          width="auto"
          borderRadius={"full"}
        />
        <Icon as={BsFillSearchHeartFill} boxSize={7} />
      </HStack>
      {showAlert && (
        <Alert status="info">
          <AlertIcon />
          Your articles has been deleted
        </Alert>
      )}
      <Box borderWidth="2px" borderColor={"teal.400"} height="610px" mt={2}>
        <Table
          variant="unstyled"
          // colorScheme="teal"
          size="10"
          // height="600px"
          w="1000px"
          mt={3}
          ml={2}
        >
          <Thead>
            <tr>
              <Th>Title</Th>
              <Th>Creator</Th>
              <Th>Status</Th>
              <Th>Publish Time</Th>
              <Th>Views</Th>
              <Th>Action</Th>
            </tr>
          </Thead>
          <Tbody>
            {tableData.map((item) => (
              <Tr>
                <Td>{item.judul}</Td>
                <Td>
                  <Icon as={FaUserAlt} />
                  {item.author}
                </Td>
                <Td>
                  <Box
                    borderRadius="full"
                    borderWidth={2}
                    borderColor={
                      item.status == "published" ? "#9AE6B4" : "#FBD38D"
                    }
                    color={item.status == "published" ? "#9AE6B4" : "#FBD38D"}
                    onClick={() => toggleStatus(null)} // Tambahkan onClick handler
                    cursor="pointer" // Tambahkan cursor pointer untuk indikasi bahwa ini dapat diklik
                    textAlign="center"
                    mr={4}
                    display="inline-block"
                    p={1}
                    minW={24}
                  >
                    {item.status}
                  </Box>
                </Td>
                <Td>
                  <Text>
                    <Icon as={BiNotepad} boxSize="5" />
                    {item.tanggal}
                  </Text>
                </Td>
                <Td>
                  <Icon as={AiOutlineArrowUp} boxSize="5" />
                  {item.views}
                </Td>
                <Td>
                  <IconButton
                    aria-label="See"
                    colorScheme={"teal"}
                    size={"xs"}
                    icon={<AiOutlineEye />}
                  />
                  <IconButton
                    aria-label="Edit"
                    colorScheme={"red"}
                    size={"xs"}
                    icon={<TbEdit />}
                    ml={2}
                  />
                  <br />
                  <IconButton
                    onClick={() => {
                      setActiveData(item); // set data aktif saat tombol delete diklik
                      onOpen();
                    }}
                    aria-label="Delete"
                    colorScheme="blue"
                    size={"xs"}
                    ml={4}
                    icon={<BsTrash />}
                  />
                  <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent p={5} mt={60}>
                      <ModalHeader fontSize="50px">Delete Post?</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        This will delete this post from your blog.
                      </ModalBody>
                      <ModalFooter
                        mt={10}
                        justifyContent="center"
                        fontSize={20}
                      >
                        <Link colorScheme="black" mr={3} onClick={onClose}>
                          Cancel
                        </Link>
                        <Link color="red" onClick={handleDelete}>
                          Confirm
                        </Link>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Flex>
  );
};

export default Articles1;
