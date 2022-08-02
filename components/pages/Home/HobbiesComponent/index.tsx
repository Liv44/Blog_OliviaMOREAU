import {
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FC } from "react";

interface HobbiesProps {
  hobbies: HobbieProp[];
}
export interface HobbieProp {
  title: string;
  description: string;
  competences: string[];
}

const Hobbies: FC<HobbiesProps> = ({ hobbies }) => {
  return (
    <Stack
      h={"lg"}
      //   maxH={"70vh"}
      direction={{ base: "column", md: "row" }}
      justifyContent="space-between"
      alignItems={"space-between"}
    >
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text as={"span"} position={"relative"}>
              Mes Passions
            </Text>
          </Heading>
          {hobbies.map((hobby) => {
            console.log(hobby);
            return (
              <Stack spacing={8} key={hobby.title}>
                <Heading fontSize={"xl"}>{hobby.title}</Heading>
                <Text>{hobby.description}</Text>
                <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
                  COMPÉTENCES : {hobby.competences.join(", ")}
                </Text>
                <Divider />
              </Stack>
            );
          })}
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          h={"auto"}
          w={"full"}
          alt={"Login Image"}
          objectFit={"cover"}
          src={"./olivia_poussin.png"}
        />
      </Flex>
    </Stack>
  );
};

export default Hobbies;
