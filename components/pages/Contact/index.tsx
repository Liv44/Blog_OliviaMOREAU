import {
  GithubFilled,
  LinkedinFilled,
  MailOutlined,
  PropertySafetyOutlined,
  TwitterOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { EmailIcon } from "@chakra-ui/icons";
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import { FC, useState } from "react";

const ContactCard: FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: any) => {
    const formData = { name, email, message };
    console.log(name, email, message);
    await fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify(formData),
    });
  };

  return (
    <Container maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          bg={"orange.600"}
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 10, sm: 3, md: 5, lg: 10 }}>
              <WrapItem>
                <Box>
                  <Heading>Contact</Heading>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 5 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        variant={"outline"}
                        height="48px"
                        width="250px"
                        colorScheme="white"
                        as="a"
                        href="mailto:moreauolivia49@gmail.com"
                        target="_blank"
                        _hover={{
                          bg: "white",
                          borderColor: "blue",
                          color: "blue",
                        }}
                        leftIcon={<MailOutlined color="#1970F1" />}
                      >
                        moreauolivia49@gmail.com
                      </Button>
                      <Button
                        size="md"
                        variant={"outline"}
                        height="48px"
                        width="150px"
                        colorScheme="white"
                        as="a"
                        href="https://linkedin.com/in/oliviamoreau"
                        target="_blank"
                        _hover={{
                          bg: "white",
                          borderColor: "blue",
                          color: "blue",
                        }}
                        leftIcon={<LinkedinFilled color="#1970F1" />}
                      >
                        Olivia Moreau
                      </Button>
                      <Button
                        size="md"
                        variant={"outline"}
                        height="48px"
                        width="100px"
                        colorScheme="white"
                        as="a"
                        href="https://github.com/liv44"
                        target="_blank"
                        _hover={{
                          bg: "white",
                          borderColor: "blue",
                          color: "blue",
                        }}
                        leftIcon={<GithubFilled color="#1970F1" />}
                      >
                        Liv44
                      </Button>
                      <Button
                        size="md"
                        variant={"outline"}
                        height="48px"
                        width="100px"
                        colorScheme="white"
                        as="a"
                        href="https://twitter.com/liivDev"
                        target="_blank"
                        _hover={{
                          bg: "white",
                          borderColor: "blue",
                          color: "blue",
                        }}
                        leftIcon={<TwitterOutlined />}
                      >
                        @liivDev
                      </Button>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="grey.700">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Votre nom</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <UserOutlined></UserOutlined>
                          </InputLeftElement>
                          <Input
                            type="text"
                            size="md"
                            fontSize="sm"
                            onChange={(e) => {
                              setName(e.target.value);
                            }}
                            name="name"
                          />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7" size="lg">
                          <InputLeftElement pointerEvents="none">
                            <EmailIcon></EmailIcon>
                          </InputLeftElement>
                          <Input
                            fontSize="sm"
                            type="text"
                            size="md"
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                            name="email"
                          />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          fontSize="sm"
                          placeholder="Votre message"
                          borderColor="gray.300"
                          p={2}
                          _hover={{
                            borderRadius: "gray.300",
                          }}
                          onChange={(e) => {
                            setMessage(e.target.value);
                          }}
                          name="message"
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button
                          variant="solid"
                          colorScheme="blue"
                          _hover={{}}
                          onClick={(e) => handleSubmit(e.target)}
                        >
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};
export default ContactCard;
