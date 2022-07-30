import { Box, Flex, Heading, Text } from "@chakra-ui/react";
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
    <Box>
      <Flex fontSize="md" gap={"1"}>
        <Text fontWeight={"bold"}>Établissement : </Text>
        <Text> {etablissement}</Text>
      </Flex>
      <Text color="orange.500" fontStyle={"italic"}>
        {dates}
      </Text>
      {descriptions &&
        descriptions.map((desc, index) => (
          <>
            <Text key={index}>{desc}</Text>
            <br />
          </>
        ))}
    </Box>
  );
};

export default ScolariteCard;
