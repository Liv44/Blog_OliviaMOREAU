import { Box, Flex, HStack, Image, Stack } from "@chakra-ui/react";
import { FC } from "react";
import TabsComponent, { TabsProps } from "../../../general/Tabs";

const ScolariteComponent: FC<TabsProps> = ({ tabs }) => {
  return (
    <Flex
      direction={{ base: "column", md: "column", lg: "row" }}
      justifyContent="space-around"
      p={{ base: "8", md: "5", lg: "5" }}
      alignItems="center"
      bg={"blue.100"}
      gap={4}
      w="100%"
    >
      <Image
        width={{ base: "300px", md: "400px", lg: "450px" }}
        src="/cuate.png"
        alt="education—Image"
      ></Image>

      <TabsComponent tabs={tabs}></TabsComponent>
    </Flex>
  );
};

export default ScolariteComponent;
