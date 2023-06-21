import {
  Box,
  Flex,
  Grid,
  Heading,
  Button,
  Avatar,
  AvatarBadge,
  AvatarGroup,
} from "@chakra-ui/react";
import Image from "next/image";
import rocket from "../../img/Rocket.png";
import astro from "../../img/Astro.png";
import bolt from "../../img/Bolt.png";
import satelit from "../../img/Satelit.png";
import awan from "../../img/Awan.png";
import wa from "../../img/WA.png";
import bulan from "../../img/Bulan.png";
import tabel from "../../img/Tabel.png";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

const Rocket = () => {
  return (
    <Box
      // backgroundImage="url(https://th.bing.com/th/id/OIP.FpBTdmS425XMYJ6kJH-fVAHaHd?w=174&h=180&c=7&r=0&o=5&dpr=2&pid=1.7)"
      display="flex"
      justifyContent="center"
      // alignItems="center"
      height="110vh"
      flexDirection="column"
      position="relative"
      // overflow="hidden"
    >
      <Box>
        <Image alt="satelit" src={satelit} width={130} height={100} />
      </Box>
      <Box
        position="relative" // Mengubah posisi kotak menjadi relatif
        mb="200px"
        ml={20}
        backdropFilter="blur(10px)" // Efek blur
        w="615px"
        borderRadius={40} // Mengatur sudut melengkung pada kotak
        maxWidth="fit-content" // Membatasi lebar kotak sesuai dengan isi teks
        bg="rgba(255, 255, 255, 0.5)" // Mengatur latar belakang dengan transparansi
        zIndex={1} // Menentukan urutan tampilan kotak dan teks
      >
        <Box
          position="absolute" // Mengubah posisi gambar Astro menjadi absolut
          top="-130px" // Menyesuaikan posisi vertikal gambar
          left="400px"
          // left="50%" // Menyesuaikan posisi horizontal gambar
          // transform="translateX(-50%)" // Memindahkan gambar ke tengah secara horizontal
          zIndex={1} // Menentukan urutan tampilan gambar Astro
        >
          <Image src={bulan} alt="bulan" />
          <Box position="absolute" top={0} left={0}>
            <Image alt="Astro" src={astro} width={200} height={300} />
          </Box>
        </Box>
        <Box
          p={4} // Padding untuk menjaga jarak dengan konten dalam
          zIndex={2}
          position="relative" // Mengubah posisi kotak menjadi relatif
        >
          <Flex alignItems="center">
            <AvatarGroup size="sm" max={2}>
              <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
              <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
              <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
              <Avatar
                name="Prosper Otemuyiwa"
                src="https://bit.ly/prosper-baba"
              />
              <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
            </AvatarGroup>
            <Heading ml={2} size="xs">Happy Customer</Heading>
          </Flex>
          <Heading color="#FFD95A" size="2xl">
            Let's Start Something New Together
          </Heading>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            beatae necessitatibus excepturi, veritatis fuga ipsum illo ab eaque
            iure pariatur tempora dolore et non soluta similique corporis vero
            qui. Voluptates.
          </span>
        </Box>
      </Box>
      <Box zIndex={2} left={710} position="absolute" bottom="100px">
        <Image alt="Bolt" src={bolt} width={200} />
      </Box>
      <Flex
        zIndex={1}
        justify="center" // Menyusun item ke tengah secara horizontal
        position="relative" // Menambahkan posisi absolut ke Flex container
        // bottom={1} // Menyesuaikan jarak dari bawah
        width="100%" // Menyimpan lebar penuh
      >
        <Button
          _hover={{
            borderRightWidth: "20px", // atau berapapun panjang yang kamu mau
            borderColor: "#164875",
            transition: "borderRightWidth 0.6s", // ubah durasi animasi sesuai keinginan
          }}
          size="lg"
          borderRadius={"full"}
          colorScheme="blue"
          // fontWeight={600}
          width="60"
          position="absolute"
          backgroundColor={"#164875"}
          bottom={-2}
          fontSize={20}
        >
          Start Collaborate
        </Button>
      </Flex>
      <Box bottom={-230} position="absolute" zIndex={0}>
        <Image src={rocket} alt="Rocket" width={780} height={300} />
      </Box>
      <Box position="absolute" right={0} bottom={-150}>
        <Image src={awan} alt="Awan" width={350} />
      </Box>
      <Box position="absolute" right="180px" bottom={70}>
        <Image src={wa} alt="Awan" width={150} />
      </Box>
      <Box position="absolute" right={50} top={10}>
        <Image src={tabel} alt="Tabel" width={530} />
      </Box>
    </Box>
  );
};

export default Rocket;
