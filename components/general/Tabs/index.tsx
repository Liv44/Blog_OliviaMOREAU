import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { FC } from "react";

export interface TabsProps {
  tabs: TabProps[];
}
export interface TabProps {
  headerTitle: string;
  content: React.ReactNode;
}

const TabsComponent: FC<TabsProps> = ({ tabs }) => {
  return (
    <Tabs
      m={3}
      colorScheme={"blue.500"}
      variant="enclosed"
      isFitted
      border={"1px"}
      borderColor="blue.500"
      borderRadius={20}
      bg={"white"}
      boxShadow="lg"
      width={{ base: "xs", lg: "lg", md: "2xl" }}
    >
      <TabList>
        {tabs.map((tab) => (
          <Tab
            _selected={{
              color: "white",
              bg: "blue.500",
            }}
            borderTopLeftRadius={18}
            borderTopRightRadius={18}
            key={tab.headerTitle}
            fontSize={"xs"}
          >
            {tab.headerTitle}
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        {tabs.map((tab) => (
          <TabPanel key={tab.headerTitle}>{tab.content}</TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default TabsComponent;
