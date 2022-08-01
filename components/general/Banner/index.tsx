import { Heading, Text, VStack, Stack } from "@chakra-ui/react";
import { FC } from "react";

interface BannerProps {
  title: string;
  blocs: { title: string; description: string }[];
  color: "orange.500" | "blue.500" | "green.500" | "red.500";
}

const Banner: FC<BannerProps> = ({ title, blocs, color }) => {
  return (
    <Stack
      bg={color}
      spacing={{ base: 8, md: 4, lg: 8 }}
      p={{ base: 8, md: 4, lg: 8 }}
      color={"white"}
    >
      <Heading textAlign={"center"} as="h1" size="xl">
        {title}
      </Heading>
      <Stack
        direction={{ base: "column", md: "row" }}
        align={{ base: "center", md: "flex-start" }}
        spacing={{ base: 8, md: 4, lg: 8 }}
        justify={{ base: "center", md: "space-around" }}
      >
        {blocs.map((bloc, index) => (
          <VStack key={index} w={"md"}>
            <Heading size="md">{bloc.title}</Heading>
            <Text textAlign="center">{bloc.description}</Text>
          </VStack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Banner;
