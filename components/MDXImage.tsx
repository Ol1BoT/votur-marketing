import { Box, Image } from "@chakra-ui/react";
import React from "react";

export default function MDXImages({
  src,
  alt,
  size,
}: {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
}) {
  let width = "";

  switch (size) {
    case "sm":
      width = "20%";
    case "md":
      width = "50%";
    case "lg":
      width = "70%";
    default:
      width = "70%";
  }

  return (
    <Box w={["100%", width]}>
      <Image src={src} alt={alt} />
    </Box>
  );
}
