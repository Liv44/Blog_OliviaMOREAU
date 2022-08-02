import { Flex, Heading, Text } from "@chakra-ui/react";
import { FC } from "react";

export interface ScolariteCardProps {
  formation: string;
  etablissement: string;
  dates: string;
  descriptions: string[];
}

const ScolariteCard: FC<ScolariteCardProps> = ({
  formation,
  etablissement,
  dates,
  descriptions,
}) => {
  return (
    <Flex gap={3} direction="column" fontSize="sm">
      <Heading fontWeight={"bold"} as="h2" fontSize="md" textAlign="center">
        {formation}
      </Heading>
      <Flex direction={{ base: "column" }}>
        <Text color="gray.600" fontStyle={"italic"}>
          {etablissement}
        </Text>
        <Text color="orange.500" fontStyle={"italic"}>
          {dates}
        </Text>
      </Flex>
      {descriptions &&
        descriptions.map((desc, index) => (
          <Text textAlign={"justify"} key={index}>
            {desc}
          </Text>
        ))}
    </Flex>
  );
};

export default ScolariteCard;
