import { Box, Flex, HStack, Image, Stack } from "@chakra-ui/react";
import { FC } from "react";
import TabsComponent, { TabsProps } from "../../../general/Tabs";
import Title from "../../../general/Title";

const ScolariteComponent: FC<TabsProps> = ({ tabs }) => {
  return (
    <Stack bg={"blue.100"} w="100%" p={{ base: "8", md: "5", lg: "5" }}>
      <Title title="Ma scolarité"></Title>
      <Flex
        direction={{ base: "column", md: "column", lg: "row" }}
        justifyContent="space-around"
        alignItems="center"
        gap={4}
      >
        <Image
          width={{ base: "300px", md: "400px", lg: "450px" }}
          src="/cuate.png"
          alt="education—Image"
        ></Image>

        <TabsComponent tabs={tabs}></TabsComponent>
      </Flex>
    </Stack>
  );
};

export default ScolariteComponent;
