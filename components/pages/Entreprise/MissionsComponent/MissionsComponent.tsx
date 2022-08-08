import { Flex, Image, Stack } from "@chakra-ui/react";
import { FC } from "react";
import TabsComponent, { TabsProps } from "../../../general/Tabs";
import Title from "../../../general/Title";

const MissionsComponent: FC<TabsProps> = ({ tabs }) => {
  return (
    <Stack w="100%" p={{ base: "8", md: "5", lg: "5" }}>
      <Title title="Mes missions"></Title>
      <Flex
        direction={{ base: "column", md: "column", lg: "row" }}
        justifyContent="space-around"
        alignItems="center"
        gap={4}
      >
        <Image
          width={{ base: "300px", md: "400px", lg: "450px" }}
          src="/development.png"
          alt="education—Image"
        ></Image>

        <TabsComponent tabs={tabs}></TabsComponent>
      </Flex>
    </Stack>
  );
};

export default MissionsComponent;
