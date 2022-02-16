import {
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
  AiFillProfile,
  AiFillQuestionCircle,
  AiOutlineDownload,
  AiOutlineStop,
} from "react-icons/ai";
import { GiRank3 } from "react-icons/gi";
import { GoGraph } from "react-icons/go";
import { FiUser, FiUsers } from "react-icons/fi";
import ContactForm from "../components/ContactForm";

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
      <ContactForm isOpen={isOpen} onClose={onClose} />
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
            alignItems={["center", "start"]}
            flexDir="column"
            pl={["0", "7"]}
          >
            <Heading
              size={"4xl"}
              color="gray.50"
              mb={["4", "8"]}
              mt={["2", "0"]}
              bgGradient="linear(to-r, #0BC5EA, #6B46C1)"
              bgClip={"text"}
              fontWeight="extrabold"
            >
              Votur
            </Heading>
            <Heading
              size={"xl"}
              color="gray.300"
              ml={["0", "0"]}
              p={["2", "0"]}
              textAlign={["center", "start"]}
            >
              Modern Voting Application for Schools
            </Heading>
            <Heading
              mt="4"
              size="2xl"
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontWeight="extrabold"
              py="2"
            >
              Coming Soon
            </Heading>
          </Box>
          <Box
            w="full"
            display="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
          >
            <Box w={["50%", "full"]}>
              <Image src="./votur.png" />
            </Box>
          </Box>
        </Flex>
      </Flex>
      <Box pt="2" bg="gray.900" pb="4" minH="350px">
        <Flex
          justifyContent="center"
          flexDir="column"
          alignItems="center"
          w="full"
          color="gray.200"
        >
          <Heading size="lg" mb="6" color="gray.200" mt="5">
            About
          </Heading>

          <Box maxW="3xl" textAlign="center" p={["2", "0"]}>
            <Text mb="5">
              Votur is Edu-tech software that enables schools and other
              institutions to hold elections for certain roles. Be it sports
              captains, head of house, club leaders, head of year etc.
            </Text>
            <Text>
              Moderators can create elections where people submit applications
              based on questions assigned to that election. Applications can be
              approved or denied, and from there the election can go live and
              people can vote. Applying and voting can be restricted by year
              level.
            </Text>
            <Button onClick={onOpen} colorScheme="cyan" m="5">
              Questions? Contact Us
            </Button>
          </Box>
        </Flex>
      </Box>
      <Box pt="2" bg="gray.800" pb="4" minH="350px">
        <Flex
          justifyContent="center"
          flexDir="column"
          alignItems="center"
          w="full"
          color="gray.200"
        >
          <Heading size="lg" mb="6" color="gray.200" mt="5">
            Features
          </Heading>
          <SimpleGrid spacing="40px" columns={[1, 3]}>
            <Box>
              <Icon fontSize="xl" as={BsFillShieldLockFill} mr="2" />
              OAuth2
            </Box>
            <Box>
              <Icon fontSize="xl" as={MdOutlineMobileFriendly} mr="2" />
              Responsive Design (Desktop and Mobile)
            </Box>
            <Box>
              <Icon fontSize="xl" as={FaVoteYea} mr="2" />
              Create Elections based on Roles
            </Box>
            <Box>
              <Icon fontSize="xl" as={MdCheckCircle} mr="2" />
              Approve and Deny Applications in App
            </Box>
            <Box>
              <Icon fontSize="xl" as={AiOutlineStop} mr="2" />
              Limit Applications and Voting by Year and Group
            </Box>
            <Box>
              <Icon fontSize="xl" as={MdTouchApp} mr="2" />
              Single Touch Election Management
            </Box>
            <Box>
              <Icon fontSize="xl" as={AiFillQuestionCircle} mr="2" />
              Customise Application Questions
            </Box>
            <Box>
              <Icon fontSize="xl" as={GiRank3} mr="2" />
              Ranked Voting
            </Box>
            <Box>
              <Icon fontSize="xl" as={GoGraph} mr="2" />
              Live Graph Showing Votes
            </Box>
            <Box>
              <Icon fontSize="xl" as={AiOutlineDownload} mr="2" />
              Download Election Results
            </Box>
            <Box>
              <Icon fontSize="xl" as={FiUser} mr="2" />
              User Profiles
            </Box>
            <Box>
              <Icon fontSize="xl" as={FiUsers} mr="2" />
              Bulk Upload Users
            </Box>
          </SimpleGrid>
        </Flex>
      </Box>
      <Box
        bg="gray.800"
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        pb="4"
      >
        <Heading size="lg" mb="6" mt="5" color="gray.200">
          Pricing
        </Heading>
        <Flex gap="4" flexDir={["column", "row"]}>
          <Box
            border="2px"
            borderColor={"gray.400"}
            h="350"
            w="300px"
            rounded="md"
            display="flex"
            flexDir="column"
            alignItems="center"
            p="4"
          >
            <Heading size="lg" color="gray.300">
              Early Adopters
            </Heading>{" "}
            <Heading size="md" color="green.300" mt="4">
              A$800 First Year
            </Heading>
            <List color="gray.50" mt="3" spacing="2">
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.200" />
                First 3 Schools To Sign
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.200" />
                Unlimited Users
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.200" />
                Full Managed SaaS
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.200" />
                Email Support
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.200" />
                Continuous Development
              </ListItem>
            </List>
            <Spacer></Spacer>
            <Button size="lg" colorScheme="cyan" onClick={onOpen}>
              Contact Now
            </Button>
          </Box>
          <Box
            border="2px"
            borderColor={"gray.400"}
            h="350"
            w="300px"
            rounded="md"
            display="flex"
            flexDir="column"
            alignItems="center"
            p="4"
          >
            <Heading size="lg" color="gray.300">
              Standard
            </Heading>{" "}
            <Heading size="md" color="green.300" mt="4">
              A$1,000 P/A
            </Heading>
            <List color="gray.50" mt="3" spacing="2">
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.200" />
                Unlimited Users
              </ListItem>{" "}
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.200" />
                Full Managed SaaS
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.200" />
                Email Support
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.200" />
                Continuous Development
              </ListItem>
            </List>
            <Spacer></Spacer>
            <Button size="lg" colorScheme="cyan" onClick={onOpen}>
              Contact Now
            </Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Home;
