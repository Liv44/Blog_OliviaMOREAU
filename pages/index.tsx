import type { NextPage } from "next";
import * as React from "react";
import { Box } from "@chakra-ui/react";
import Hero from "../components/general/Hero/Hero";
import { pageData } from "./api/data";

const Home: NextPage = () => {
  return (
    <Box>
      <Hero
        subTitle={pageData.hero.subtitle}
        title={pageData.hero.title}
        descriptions={pageData.hero.descriptions}
        buttons={pageData.hero.buttons}
        vector={pageData.hero.vector}
      ></Hero>
    </Box>
  );
};

export default Home;
