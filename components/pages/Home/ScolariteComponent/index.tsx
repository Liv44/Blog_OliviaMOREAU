import { Box, Flex, HStack, Image, Stack } from "@chakra-ui/react";
import { FC } from "react";
import TabsComponent from "../../../general/Tabs";
import ScolariteCard from "./ScolariteCard";

const data = [
  {
    headerTitle: "Licence Information Communication",
    content: ScolariteCard({
      etablissement: "Université catholique de l'Ouest - Angers (49)",
      dates: "septembre 2018 - janvier 2020",
      descriptions: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
    }),
  },
  {
    headerTitle: "Bachelor Informatique",
    content: ScolariteCard({
      etablissement: "Nantes Ynov Campus - Nantes (44)",
      dates: "septembre 2020 - septembre 2023",
      descriptions: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
    }),
  },
];

const ScolariteComponent: FC = () => {
  return (
    <Flex
      direction={{ base: "column", md: "column", lg: "row" }}
      justifyContent="space-around"
      p={{ base: "0", md: "5", lg: "5" }}
      alignItems="center"
      bg={"blue.100"}
      gap={4}
    >
      <Image
        width={{ base: "200px", md: "400px", lg: "450px" }}
        src="/cuate.png"
        alt="education—Image"
      ></Image>

      <TabsComponent tabs={data}></TabsComponent>
    </Flex>
  );
};

export default ScolariteComponent;
