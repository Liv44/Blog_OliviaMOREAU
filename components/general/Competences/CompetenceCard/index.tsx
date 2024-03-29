import { Box, Heading } from "@chakra-ui/react";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import { FC } from "react";
import ReactMarkdown from "react-markdown";

export interface CompetenceCardProps {
  content: FC<{}>;
  color?: "blue";
}

const CompetenceCard: FC<CompetenceCardProps> = ({ content, color }) => {
  return (
    <Box
      w={"100%"}
      bg={color ? "blue.600" : "green.400"}
      color={color ? "white" : "black"}
      borderRadius={30}
      pl={5}
      pb={5}
      pr={5}
    >
      {content({})}
    </Box>
  );
};

export default CompetenceCard;
