import { Heading, VStack, Text, HStack, Image } from "@chakra-ui/react";
import { FC } from "react";

export const BackEnd: FC = () => {
  return (
    <VStack py={5} fontSize="sm">
      <Heading>
        <Text fontSize="xl">Back-End</Text>
      </Heading>
      <HStack
        flexWrap={"wrap"}
        justifyContent="center"
        gap={2}
        alignItems="center"
      >
        <Image
          src="https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white"
          alt="PHP Logo"
        />
        <Image
          alt="Laravel Logo"
          src="https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white"
        />
        <Image
          alt="Python Logo"
          src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"
        />
        <Image
          alt="Java Logo"
          src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white"
        />
        <Image
          alt="GoLang Logo"
          src="https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white"
        />
        <Image
          alt="NodeJS Logo"
          src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"
        />
      </HStack>
      <Text textAlign="justify">
        Le Bachelor Informatique m{"'"}a permis de réaliser plusieurs projets
        avec des langages de programmation dont certains orientés objet(PHP,
        Python, Java, GoLang) et des frameworks (Laravel, NodeJS). J{"'"}ai
        aussi appris à créer une API avec NodeJS lors de mon projet de fin d
        {"'"}année.
      </Text>
      <HStack
        flexWrap={"wrap"}
        justifyContent="center"
        gap={2}
        alignItems="center"
      >
        <Image
          src="https://img.shields.io/badge/strapi-%232E7EEA.svg?style=for-the-badge&logo=strapi&logoColor=white"
          alt="Strapi Logo"
        ></Image>
        <Image
          src="https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase"
          alt="Figma Logo"
        ></Image>
        <Image
          src="https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white"
          alt="SQLITE Logo"
        ></Image>
      </HStack>
      <Text textAlign="justify">
        J{"'"}ai aussi appris l{"'"}utilisation de différents outils pour le
        développement Back End. En particulier la création d{"'"}un CMS avec
        Strapi, et la gestion des données avec FireBase.
      </Text>
    </VStack>
  );
};
