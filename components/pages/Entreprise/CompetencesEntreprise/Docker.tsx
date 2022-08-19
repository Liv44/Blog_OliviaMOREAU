import { Heading, VStack, Image, Text } from "@chakra-ui/react";
import { FC } from "react";

const Docker: FC = () => {
  return (
    <VStack p={5}>
      <Image
        src={
          "https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white"
        }
        alt="logo Docker"
      ></Image>
      <Text textAlign={"justify"} fontSize={"sm"}>
        Docker est un logiciel de déploiement de conteneurs. Ne l{"'"}ayant
        jamais utilisé, ce projet m{"'"}a permis de découvrir son utilisation. J
        {"'"}ai appris les notions essentielles de Docker. Je sais maintenant
        lancer un projet grâce aux commandes docker-compose build et
        docker-compose up -d.
      </Text>
    </VStack>
  );
};

export default Docker;
