import { Box, Heading, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Banner from "../components/general/Banner";
import Competences from "../components/general/Competences";
import Hero from "../components/general/Hero/Hero";
import MissionsComponent from "../components/pages/Entreprise/MissionsComponent/MissionsComponent";
import { pageEntreprise } from "./api/data_entreprise";
import FinalCard from "../components/general/FinalCard";

const Entreprise: NextPage = () => {
  return (
    <VStack gap={16}>
      <Hero {...pageEntreprise.hero}></Hero>
      <Banner {...pageEntreprise.missionOuivalo}></Banner>
      <MissionsComponent {...pageEntreprise.missions}></MissionsComponent>
      <Competences
        competences={pageEntreprise.competences}
        title={"Les compétences acquises"}
      ></Competences>
      <FinalCard content={pageEntreprise.bilan}></FinalCard>
    </VStack>
  );
};

export default Entreprise;
