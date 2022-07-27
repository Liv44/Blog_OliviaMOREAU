import {
  Box,
  Container,
  Flex,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { FC } from "react";

export interface ExperienceCardProps {
  title: string;
  company: string;
  dates: string;
  competences: string;
  missions: string[];
}

const ExperienceCard: FC<ExperienceCardProps> = ({
  title,
  company,
  dates,
  competences,
  missions,
}) => {
  return (
    <Flex
      direction={"column"}
      justifyContent={"space-between"}
      gap={4}
      bg="white"
      w="100%"
      h="100%"
      borderRadius={25}
      p="5"
      boxShadow={"lg"}
    >
      <Container>
        <Heading size="md">{title}</Heading>
        <Text fontSize="sm">{company}</Text>
        <Text fontSize="sm" color="orange.500" fontStyle={"italic"}>
          {dates}
        </Text>
        <Text fontSize="sm">
          Missions :<Text></Text>
        </Text>
        <UnorderedList pl="4">
          {missions.map((mission, index) => (
            <ListItem fontSize="sm" key={index}>
              {mission}
            </ListItem>
          ))}
        </UnorderedList>
      </Container>
      <Text fontSize="sm">Compétences acquises : {competences}</Text>
    </Flex>
  );
};

export default ExperienceCard;
