import { Box, Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { FC } from "react";

interface ExperienceCardProps {
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
    <Box bg="white" w="md" borderRadius={"md"} p="5">
      <Heading size="lg">{title}</Heading>
      <Text>{company}</Text>
      <Text color="orange.500" fontStyle={"italic"}>
        {dates}
      </Text>
      <Text>
        Missions :<Text></Text>
      </Text>
      <UnorderedList pl="4">
        {missions.map((mission, index) => (
          <ListItem key={index}>{mission}</ListItem>
        ))}
      </UnorderedList>

      <Text>Compétences acquises : {competences}</Text>
    </Box>
  );
};

export default ExperienceCard;
