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
      <Text fontSize={"md"}>{description}</Text>
      <Text fontSize={"sm"} color={"gray.500"}>
        COMPÉTENCES: {competences.join(", ")}
      </Text>
    </Stack>
  );
};

const Hobbies: FC<HobbiesProps> = ({ hobbies }) => {
  return (
    <Container maxW={"6xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
        <Stack spacing={4}>
          <Heading>Mes passions</Heading>
          <Stack
            spacing={4}
            divider={<StackDivider borderColor={"green.500"} />}
          >
            {hobbies.map((hobby, index) => {
              return <Hobby key={index} {...hobby}></Hobby>;
            })}
          </Stack>
        </Stack>
        <Flex alignItems={"center"} justifyContent="center">
          <Image
            width={useBreakpointValue({ base: "75%", md: "100%" })}
            alignSelf="center"
            rounded={"md"}
            alt={"feature image"}
            src={"./olivia_poussin.png"}
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
};

export default Hobbies;
