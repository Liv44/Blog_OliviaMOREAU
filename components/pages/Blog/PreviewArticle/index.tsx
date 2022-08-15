import {
  Box,
  Link,
  Wrap,
  WrapItem,
  Image,
  Text,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { FC } from "react";
import { articleProp } from "../../../../pages/api/blog";

const PreviewArticle: FC<articleProp> = ({ title, description, id, photo }) => {
  return (
    <Link
      w="100%"
      href={"/blog/" + id}
      textDecoration="none"
      color="black"
      _hover={{
        textDecoration: "none",
        color: "orange.500",
        transform: "scale(1.05)",
      }}
      bg={"white"}
      borderRadius={20}
      transform="scale(1.0)"
      transition="0.3s"
    >
      <Box borderTopRadius={20} overflow="hidden">
        <Image
          transform="scale(1.0)"
          transition="0.3s ease-in-out"
          _hover={{
            transform: "scale(1.05)",
          }}
          src={photo}
          alt="some text"
          objectFit="cover"
          boxSize={"200px"}
          width="100%"
          fallbackSrc="https://via.placeholder.com/200"
        />
      </Box>
      <Box p={5}>
        <Heading
          fontSize="xl"
          marginTop="2"
          textDecoration="none"
          _hover={{ textDecoration: "none" }}
        >
          {title}
        </Heading>
        <Text fontSize="sm">{description}</Text>
      </Box>
    </Link>
  );
};

export default PreviewArticle;
