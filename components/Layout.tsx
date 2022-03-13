import { Box, Button, Heading, Image, Link } from "@chakra-ui/react";
import React, { ReactChildren } from "react";

const Layout = ({ children }: { children: ReactChildren }) => {
  return (
    <Box w="100%" display="flex" flexDir="column" alignItems="center">
      <Box h={["75px", "200px"]} w={["75px", "200px"]} mt="12">
        <Image src="/votur.png" />
      </Box>
      <Box m={["4", "24"]}>
        <Link href="/">
          <Button>Main Page</Button>
        </Link>
        {children}
      </Box>
      ;
    </Box>
  );
};

export default Layout;
