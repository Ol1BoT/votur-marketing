import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Textarea,
  useDisclosure,
  Image,
  CircularProgress,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";

export default function ContactForm({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const emailRef = React.createRef<HTMLInputElement>();
  const nameRef = React.createRef<HTMLInputElement>();
  const enqRef = React.createRef<HTMLSelectElement>();
  const schoolRef = React.createRef<HTMLInputElement>();
  const msgRef = React.createRef<HTMLTextAreaElement>();
  const [sending, setSending] = useState(false);

  const sendForm = async () => {
    const pl = {
      email: emailRef?.current?.value,
      name: nameRef?.current?.value,
      enquiry: enqRef?.current?.value,
      school: schoolRef?.current?.value,
      message: msgRef?.current?.value,
    };

    if (pl.email != "" && pl.name != "" && pl.school != "") {
      setSending(true);
      const resp = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(pl),
        headers: {
          "Content-Type": "application/json",
        },
      }).catch((err) => console.log(err));

      resp!.json().then((data) => console.log(data));
      setSending(false);
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Flex pr="9">
            <Box h="40px" w="40px" mr="4">
              <Image src="./votur.png" />
            </Box>
            Contact Us
          </Flex>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex flexDir={"column"} gap="3">
            <FormControl>
              <FormLabel htmlFor="enquiry-type">Enquiry</FormLabel>
              <Select id="enquiry-type" ref={enqRef}>
                <option>General Enquiry</option>
                <option>Request Demo Access</option>
                <option>Purchase</option>
              </Select>
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                id="name"
                placeholder="Name"
                type="text"
                isRequired
                ref={nameRef}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                placeholder="Email"
                type="email"
                isRequired
                ref={emailRef}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="email">School</FormLabel>
              <Input
                id="email"
                placeholder="Enter School Name"
                type="text"
                isRequired
                ref={schoolRef}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="msg">Message</FormLabel>
              <Textarea
                id="msg"
                placeholder="Write your message here"
                ref={msgRef}
              ></Textarea>
            </FormControl>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Flex gap="2" alignItems={"center"}>
            {sending && <CircularProgress isIndeterminate size={"25"} />}
            <Button onClick={sendForm}>Send</Button>
            <Button onClick={onClose}>Close</Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
