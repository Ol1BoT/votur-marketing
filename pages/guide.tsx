import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function Guide() {
  return (
    <Flex flexDir="column" h="full" alignItems="center" p="3">
      <Box h="90px" w="90px">
        <Image src="./votur.png" />
      </Box>
      <Heading>Getting Started</Heading>
      <Heading>Creating a Role</Heading>
      <Heading>Create an Election</Heading>
      <Heading size="sm">Modifying Election Settings</Heading>
      <Heading>Approving Applications</Heading>

      <Text></Text>
    </Flex>
  );
}
