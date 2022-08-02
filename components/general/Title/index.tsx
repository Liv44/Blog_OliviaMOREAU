import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import { FC } from "react";

interface TitleProps {
  title: string;
  subTitle?: string;
}

const Title: FC<TitleProps> = ({ title, subTitle }) => {
  return (
    <Stack alignItems={"center"}>
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
