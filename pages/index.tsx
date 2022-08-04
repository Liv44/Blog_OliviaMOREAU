import type { NextPage } from "next";
import * as React from "react";
import { Box } from "@chakra-ui/react";
import Hero from "../components/general/Hero/Hero";
import { pageData } from "./api/data";
import ExperiencesList from "../components/pages/Home/ExperienceList";
import ScolariteComponent from "../components/pages/Home/ScolariteComponent";
import Hobbies from "../components/pages/Home/HobbiesComponent";

const Home: NextPage = () => {
  return (
    <Box>
      <Hero {...pageData.hero}></Hero>
      <ExperiencesList experiences={pageData.experiences}></ExperiencesList>
      <ScolariteComponent {...pageData.scolarite}></ScolariteComponent>
      <Hobbies hobbies={pageData.hobbies}></Hobbies>
    </Box>
  );
};

export default Home;
