import {
  Flex,
  Heading,
  Icon,
  Image,
  Stack,
  StackDivider,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

import { FC } from "react";

interface FinalCardProps {
  content: FinalContentProp[];
  title: string;
  img: string;
}
export interface FinalContentProp {
  title: string;
  description: string;
  competences?: string[];
  icon?: any;
}

const FinalContent: FC<FinalContentProp> = ({
  title,
  description,
  competences,
  icon,
}) => {
  return (
    <Stack spacing={4}>
      <Flex gap={3} alignItems="center">
        {icon && <Icon as={icon} color={"green.400"}></Icon>}
        <Heading fontSize={"xl"}>{title}</Heading>
      </Flex>
      <Text fontSize={"md"} textAlign="justify">
        {description}
      </Text>
      {competences && (
        <Text fontSize={"sm"} color={"gray.500"}>
          COMPÉTENCES: {competences.join(", ")}
        </Text>
      )}
    </Stack>
  );
};

const FinalCard: FC<FinalCardProps> = ({ content, title, img }) => {
  return (
    <Flex
      p={5}
      mb={5}
      bg="white"
      w={"100%"}
      direction={{ base: "column", md: "row" }}
      alignItems="center"
      justifyContent="space-around"
      margin={{ base: 5 }}
      gap={5}
    >
      <Stack spacing={4} width={{ base: "90%", md: "50%" }}>
        <Heading textAlign="center">{title}</Heading>
        <Stack spacing={4} divider={<StackDivider borderColor={"green.500"} />}>
          {content.map((oneContent, index) => {
            return <FinalContent key={index} {...oneContent}></FinalContent>;
          })}
        </Stack>
      </Stack>
      <Image
        width={useBreakpointValue({ base: "60%", md: "sm", lg: "md" })}
        alignSelf="center"
        rounded={"md"}
        alt={"feature image"}
        src={img}
        objectFit={"cover"}
      />
    </Flex>
  );
};

export default FinalCard;
