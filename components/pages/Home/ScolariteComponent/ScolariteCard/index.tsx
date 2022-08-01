import { Flex, Text } from "@chakra-ui/react";
import { FC } from "react";

export interface ScolariteCardProps {
  etablissement: string;
  dates: string;
  descriptions: string[];
}

const ScolariteCard: FC<ScolariteCardProps> = ({
  etablissement,
  dates,
  descriptions,
}) => {
  return (
    <Flex
      width={{ base: "xs", lg: "lg", md: "2xl" }}
      gap={3}
      direction="column"
    >
      <Text width="xs" fontSize={{ base: "sm", md: "md" }} fontWeight={"bold"}>
        {etablissement}
      </Text>
      <Text color="orange.500" fontStyle={"italic"}>
        {dates}
      </Text>
      {descriptions &&
        descriptions.map((desc, index) => (
          <>
            <Text key={index}>{desc}</Text>
          </>
        ))}
    </Flex>
  );
};

export default ScolariteCard;
