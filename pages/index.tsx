import type { NextPage } from "next";
import * as React from "react";
import { Box } from "@chakra-ui/react";
import Hero from "../components/general/Hero/Hero";
import { pageData } from "./api/data";
import ExperiencesList from "../components/pages/Home/ExperienceList";
import ScolariteComponent from "../components/pages/Home/ScolariteComponent";
import Hobbies from "../components/pages/Home/HobbiesComponent";
import Competences from "../components/general/Competences";

const competence1 = `
##### ANGULAR
\
    "name": "John Doe",
    "age": 42,
\
![image info](./cuate.png)
[LIEN](https://angularjs.org/)
`;

const test = [
  {
    content: competence1,
  },
  {
    content: competence1,
  },
  {
    content: competence1,
  },
];

const Home: NextPage = () => {
  return (
    <Box>
      <Hero {...pageData.hero}></Hero>
      <ExperiencesList experiences={pageData.experiences}></ExperiencesList>
      <ScolariteComponent {...pageData.scolarite}></ScolariteComponent>
      <Competences competences={pageData.competences}></Competences>
      <Hobbies hobbies={pageData.hobbies}></Hobbies>
    </Box>
  );
};

export default Home;
