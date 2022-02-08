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

const Home: NextPage = () => {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollPos(window.scrollY / 7);
    });
  }, []);

  return (
    <Box bg="gray.800">
      <Flex
        h="100vh"
        flexDir={["column-reverse", "row"]}
        bg={"gray.800"}
        justifyContent="center"
        opacity={`${100 - scrollPos}%`}
      >
        <Box
          w="full"
          display="flex"
          justifyContent="center"
          alignItems={["center", "start"]}
          flexDir="column"
          pl={["0", "7"]}
        >
          <Heading size={"4xl"} color="gray.50" mb={["4", "8"]}>
            Votur
          </Heading>
          <Heading
            size={"xl"}
            color="gray.300"
            ml={["0", "2"]}
            p={["2", "0"]}
            textAlign={["center", "start"]}
          >
            Modern Voting Application for Schools
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
      <Box pt="2" bg="gray.900" pb="4" minH="350px">
        <Flex
          justifyContent="center"
          flexDir="column"
          alignItems="center"
          w="full"
          color="gray.200"
        >
          <Heading size="lg" mb="6" color="gray.200">
            About
          </Heading>

          <Box maxW="3xl" textAlign="center" p={["2", "0"]}>
            <Text mb="5">
              Votur is Edu-tech software that enables schools and other
              institutions to hold elections for certain roles. Be it captains,
              head of house, head of a club etc.
            </Text>
            <Text>
              Admins can create elections where people submit applications based
              on questions assigned to that election. Applications can be
              approved or denied, and from there the election can go live and
              people can vote. Applying and Voting can be restricted by year
              level.
            </Text>
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
          <Heading size="lg" mb="6" color="gray.200">
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
              Limit Applications and Voting by Year
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
            </Box>{" "}
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
          <Button size="lg" bgColor="blue.400">
            Contact Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
