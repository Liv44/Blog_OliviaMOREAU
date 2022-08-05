import {
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

import { StarFilled, StarOutlined } from "@ant-design/icons";

import { FC } from "react";

interface HobbiesProps {
  hobbies: HobbieProp[];
}
export interface HobbieProp {
  title: string;
  description: string;
  competences: string[];
}

const Hobby: FC<HobbieProp> = ({ title, description, competences }) => {
  return (
    <Stack spacing={4}>
      <Flex gap={3} alignItems="center">
        <Icon as={StarFilled} color={"green.400"}></Icon>
        <Heading fontSize={"xl"}>{title}</Heading>
      </Flex>
      <Text fontSize={"md"} textAlign="justify">
        {description}
      </Text>
      <Text fontSize={"sm"} color={"gray.500"}>
        COMPÉTENCES: {competences.join(", ")}
      </Text>
    </Stack>
  );
};

const Hobbies: FC<HobbiesProps> = ({ hobbies }) => {
  return (
    <Flex
      p={5}
      mb={5}
      bg="white"
      w={"100%"}
      direction={{ base: "column", md: "row" }}
      alignItems="center"
      justifyContent="space-around"
      margin={{ base: 5 }}
      gap={5}
    >
      <Stack spacing={4} width={{ base: "90%", md: "50%" }}>
        <Heading textAlign="center">Mes passions</Heading>
        <Stack spacing={4} divider={<StackDivider borderColor={"green.500"} />}>
          {hobbies.map((hobby, index) => {
            return <Hobby key={index} {...hobby}></Hobby>;
          })}
        </Stack>
      </Stack>
      <Image
        width={useBreakpointValue({ base: "60%", md: "sm", lg: "md" })}
        alignSelf="center"
        rounded={"md"}
        alt={"feature image"}
        src={"./hobbies.png"}
        objectFit={"cover"}
      />
    </Flex>
  );
};

export default Hobbies;
