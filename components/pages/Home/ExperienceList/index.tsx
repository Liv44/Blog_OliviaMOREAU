import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import { FC } from "react";
import Title from "../../../general/Title";
import ExperienceCard, {
  ExperienceCardProps,
} from "./ExperienceCard/ExperienceCard";

interface ExperiencesListProps {
  experiences: ExperienceCardProps[];
}

const ExperiencesList: FC<ExperiencesListProps> = ({ experiences }) => {
  return (
    <Flex justifyContent={"center"} gap={5} direction="column">
      <Title
        title="Expériences professionnelles"
        subTitle="D'animatrice à développeuse, voici un aperçu des différents postes que j'ai exercé."
      ></Title>
      <Grid
        m={12}
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          sm: "repeat(1, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={12}
      >
        {experiences.map((experience, index) => (
          <GridItem w="100%" h="100%" key={index}>
            <ExperienceCard {...experience}></ExperienceCard>
          </GridItem>
        ))}
      </Grid>
    </Flex>
  );
};

export default ExperiencesList;
