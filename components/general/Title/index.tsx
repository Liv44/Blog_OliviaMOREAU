import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import { FC } from "react";

interface TitleProps {
  title: string;
  subTitle?: string;
  width?: string;
}

const Title: FC<TitleProps> = ({ title, subTitle, width }) => {
  return (
    <Stack alignItems={"center"} width={width}>
      <Heading textAlign={"center"}>{title}</Heading>
      <Text
        fontSize={"lg"}
        textAlign={"center"}
        color={"orange.500"}
        w={{ base: "xs", lg: "xl" }}
      >
        {subTitle}
      </Text>
    </Stack>
  );
};

export default Title;
