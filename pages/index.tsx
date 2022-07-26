import type { NextPage } from "next";
import * as React from "react";
import { Box } from "@chakra-ui/react";
import Hero from "../components/general/Hero/Hero";
import { pageData } from "./api/data";
import ExperiencesList from "../components/pages/Home/ExperienceList";

const Home: NextPage = () => {
  return (
    <Box>
      <Hero {...pageData.hero}></Hero>
      <ExperiencesList experiences={pageData.experiences}></ExperiencesList>
    </Box>
  );
};

export default Home;
