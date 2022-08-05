import { Heading, VStack, Text, HStack, Image } from "@chakra-ui/react";
import { FC } from "react";

export const Organisation: FC = () => {
  return (
    <VStack py={5} fontSize="sm">
      <Heading>
        <Text fontSize="xl">Organisation du travail</Text>
      </Heading>
      <HStack
        flexWrap={"wrap"}
        justifyContent="center"
        gap={2}
        alignItems="center"
      >
        <Image
          src="https://img.shields.io/badge/Trello-%23026AA7.svg?style=for-the-badge&logo=Trello&logoColor=white"
          alt="Trello Logo"
        />
        <Image
          alt="Jira Logo"
          src="https://img.shields.io/badge/jira-%230A0FFF.svg?style=for-the-badge&logo=jira&logoColor=white"
        />
        <Image
          alt="Github Logo"
          src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"
        />
        <Image
          alt="VS Code Logo"
          src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white"
        />
      </HStack>
      <Text textAlign="justify">
        Pour la réalisation de tous ces projets, j{"'"}ai utilisé des outils de
        gestion de projets tels que Trello ou Jira. Pour le versioning de mon
        code, je sais utiliser Github.
      </Text>
    </VStack>
  );
};
