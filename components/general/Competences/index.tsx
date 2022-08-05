import { Box, Grid } from "@chakra-ui/react";
import { FC } from "react";
import Title from "../Title";
import CompetenceCard, { CompetenceCardProps } from "./CompetenceCard";
const markdown: string = `
##### ANGULAR
\
    "name": "John Doe",
    "age": 42,
\
![image info](./cuate.png)
[LIEN](https://angularjs.org/)
`;

export interface CompetencesProps {
  competences: CompetenceCardProps[];
}
const Competences: FC<CompetencesProps> = ({ competences }) => {
  return (
    <Box m={10}>
      <Title title="Mes compétences"></Title>
      <Grid
        m={{ base: 5, md: 12, lg: 12 }}
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(2, 1fr)",
        }}
        justifyContent="center"
        justifyItems={"center"}
        gap={10}
      >
        {competences.map((competence, index) => (
          <CompetenceCard
            key={index}
            content={competence.content}
            color="blue"
          ></CompetenceCard>
        ))}
      </Grid>
    </Box>
  );
};

export default Competences;
