import { format } from "date-fns";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
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

interface TableData {
  id: number;
  title: string;
  creator: string;
  status: string;
  publishTime: string;
  views: number;
}

const data: TableData[] = [
  {
    id: 1,
    title: "Pengaplikasian acara",
    creator: "Ahmad Alim zada",
    status: "scheduled",
    publishTime: "2023-05-25 15:30",
    views: 23,
  },
  {
    id: 0,
    title: "Pengaplikasian acara",
    creator: "Ahmad Alim zada",
    status: "published",
    publishTime: "2023-05-25 15:30",
    views: 23,
  },
  {
    id: 2,
    title: "Pengaplikasian acara",
    creator: "Ahmad Alim zada",
    status: "scheduled",
    publishTime: "2023-05-25 15:30",
    views: 23,
  },
  {
    id: 3,
    title: "Pengaplikasian acara",
    creator: "Ahmad Alim zada",
    status: "scheduled",
    publishTime: "2023-05-25 15:30",
    views: 23,
  },
  {
    id: 4,
    title: "Pengaplikasian acara",
    creator: "Ahmad Alim zada",
    status: "published",
    publishTime: "2023-05-25 15:30",
    views: 23,
  },
  {
    id: 5,
    title: "Pengaplikasian acara",
    creator: "Ahmad Alim zada",
    status: "scheduled",
    publishTime: "2023-05-25 15:30",
    views: 23,
  },
  {
    id: 6,
    title: "Pengaplikasian acara",
    creator: "Ahmad Alim zada",
    status: "scheduled",
    publishTime: "2023-05-25 15:30",
    views: 23,
  },
  {
    id: 7,
    title: "Pengaplikasian acara",
    creator: "Ahmad Alim zada",
    status: "published",
    publishTime: "2023-05-25 15:30",
    views: 23,
  },
  {
    id: 8,
    title: "Pengaplikasian acara",
    creator: "Ahmad Alim zada",
    status: "scheduled",
    publishTime: "2023-05-25 15:30",
    views: 23,
  },
  {
    id: 9,
    title: "Pengaplikasian acara",
    creator: "Ahmad Alim zada",
    status: "scheduled",
    publishTime: "2023-05-25 15:30",
    views: 23,
  },
];

const Articles1 = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [tableData, setTableData] = useState(data); // Gunakan state untuk memanipulasi data
  const [activeData, setActiveData] = useState<TableData | null>(null);
  const [showAlert, setShowAlert] = useState(false);
  useEffect(() => {
    if (showAlert) {
      const timeout = setTimeout(() => {
        setShowAlert(false);
      }, 2000); // Waktu penampilan alert (dalam milidetik), dalam contoh ini adalah 3 detik

      return () => clearTimeout(timeout); // Membersihkan timeout saat komponen dibongkar
    }
  }, [showAlert]);

  const handleDelete = () => {
    if (activeData) {
      setTableData(tableData.filter((item) => item.id !== activeData.id));
      setActiveData(null);
      onClose();
      setShowAlert(true);
    }
  };

  const toggleStatus = (id: number) => {
    // Fungsi untuk mengubah status
    setTableData(
      tableData.map((item) =>
        item.id === id
          ? {
              ...item,
              status: item.status === "published" ? "scheduled" : "published",
            }
          : item
      )
    );
  };

  return (
    <Box
      mr={7}
      display="flex"
      justifyContent="center"
      height="85vh"
      w="1000px"
      flexDirection="column"
      position="absolute"
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
      <Table
        variant="unstyled"
        colorScheme="teal"
        size="10"
        h={"960"}
        borderWidth="2px"
        maxH="960px"
        borderColor={"teal.400"}
        mt={3}
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
            <Tr key={item.id}>
              <Td>{item.title}</Td>
              <Td>
                <Icon as={FaUserAlt} /> {item.creator}
              </Td>
              <Td>
                <Box
                  borderRadius="full"
                  borderWidth={2}
                  borderColor={
                    item.status == "published" ? "#9AE6B4" : "#FBD38D"
                  }
                  color={item.status == "published" ? "#9AE6B4" : "#FBD38D"}
                  onClick={() => toggleStatus(item.id)} // Tambahkan onClick handler
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
                  {format(new Date(item.publishTime), "dd MMMM yyyy HH:mm")}
                </Text>
              </Td>
              <Td>
                {item.views} <Icon as={AiOutlineArrowUp} boxSize="5" />
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
                    <ModalFooter mt={10} justifyContent="center" fontSize={20}>
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
  );
};

export default Articles1;
