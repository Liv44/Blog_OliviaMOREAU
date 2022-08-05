import { Flex, HStack, Image, VStack, Text, Heading } from "@chakra-ui/react";
import { FC } from "react";

export const FrontEnd: FC = () => {
  return (
    <VStack py={5} fontSize="sm">
      <Heading>
        <Text fontSize="xl">Front-End</Text>
      </Heading>
      <HStack
        flexWrap={"wrap"}
        justifyContent="center"
        gap={2}
        alignItems="center"
      >
        <Image
          src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
          alt="HTML5Logo"
        />
        <Image
          alt="CSS3Logo"
          src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
        />
        <Image
          alt="JS Logo"
          src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
        />
        <Image
          alt="React Logo"
          src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
        />
        <Image
          alt="VueJS Logo"
          src="https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D"
        />
        <Image
          alt="Angular Logo"
          src="https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white"
        />
      </HStack>
      <Text textAlign="justify">
        Lors de ma licence, j{"'"}ai appris les langages de base (HTML, CSS,
        JS). Puis, grâce aux projets réalisés durant mon Bachelor informatique
        et ma première expérience professionnelle, je maîtrise maintenant
        quelques frameworks JS.
      </Text>
      <HStack
        flexWrap={"wrap"}
        justifyContent="center"
        gap={2}
        alignItems="center"
      >
        <Image
          src="https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white"
          alt="ChakraUI Logo"
        ></Image>
        <Image
          src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white"
          alt="Figma Logo"
        ></Image>
        <Image
          src="https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white"
          alt="StoryBook Logo"
        ></Image>
      </HStack>
      <Text textAlign="justify">
        J{"'"}ai appris l{"'"}utilisation de différents outils pour le
        développement Front End. En particulier l{"'"}intégration de maquettes
        Figma, l{"'"}utilisation de composants grâce à une librairie (ici Chakra
        UI) ou encore la visualisation des composants créés grâce à StoryBook.
      </Text>
    </VStack>
  );
};
