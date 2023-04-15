import {
  background,
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Spacer,
  Text,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import {
  MdCheckCircle,
  MdOutlineMobileFriendly,
  MdTouchApp,
} from "react-icons/md";
import { BsFillShieldLockFill } from "react-icons/bs";
import { FaVoteYea } from "react-icons/fa";
import {
  AiFillInfoCircle,
  AiFillQuestionCircle,
  AiOutlineDownload,
  AiOutlineStop,
} from "react-icons/ai";
import { GiRank3 } from "react-icons/gi";
import { GoGraph } from "react-icons/go";
import { FiUser, FiUsers } from "react-icons/fi";
import ContactForm from "../components/ContactForm";
import Link from "next/link";

const Home: NextPage = () => {
  const [scrollPos, setScrollPos] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollPos(window.scrollY / 7);
    });
  }, []);

  return (
    <Box bg="gray.800">

      <Flex justifyContent="center">
        <Flex
          h="100vh"
          flexDir={["column-reverse", "row"]}
          bg={"gray.800"}
          justifyContent="center"
          opacity={`${100 - scrollPos}%`}
          maxW="8xl"
          borderColor={"white"}
          borderBottom={"5px"}
        >
          <Box
            w="full"
            display="flex"
            justifyContent="center"
            alignItems={["center", "center"]}
            flexDir="column"
            pl={["0", "7"]}
          >
            <Box w={["full", "50%"]} p={["5", "0"]}>
              <Image src="./swftr.png" />
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Home;
