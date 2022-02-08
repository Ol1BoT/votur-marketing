import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";

export default function Guide() {
  return (
    <Flex flexDir="column" h="full" alignItems="center" p="3">
      <Box w="50%">
        <Image src="./votur.png" />
      </Box>
      <Heading>Getting Started</Heading>
    </Flex>
  );
}
