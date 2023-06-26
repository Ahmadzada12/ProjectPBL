<Tbody>
           
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
          </Tbody>