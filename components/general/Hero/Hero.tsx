import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import { FC } from "react";

export interface HeroProps {
  subTitle?: string;
  title?: string;
  descriptions?: string[];
  buttons: { label: string; link: string }[];
  lienImage: string;
}
const Hero: FC<HeroProps> = ({
  subTitle,
  title,
  buttons,
  descriptions,
  lienImage,
}) => {
  return (
    <Container maxW={"7xl"}>
      <Stack
        align={"center"}
        // pt={0}
        margin={{ base: 5, md: 0 }}
        spacing={{ base: 4, md: 5 }}
        py={{ base: 5, md: 7 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
            color={"orange.500"}
          >
            <Text fontSize="sm">{subTitle}</Text>
            <Text>{title}</Text>
          </Heading>

          <Flex direction="column" gap={5}>
            {descriptions &&
              descriptions.map((desc, index) => (
                <Text
                  key={index}
                  color={"gray.500"}
                  textAlign={{ base: "justify" }}
                >
                  {desc}
                </Text>
              ))}
          </Flex>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            {buttons.map((button, index) => {
              return (
                <Button
                  key={index}
                  rounded={"full"}
                  size={"lg"}
                  fontWeight={"normal"}
                  px={6}
                  colorScheme={"blue"}
                  variant={"outline"}
                  as={"a"}
                  href={button.link}
                >
                  {button.label}
                </Button>
              );
            })}
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Image src={lienImage} alt="Photo de Olivia MOREAU"></Image>
        </Flex>
      </Stack>
    </Container>
  );
};

export default Hero;
