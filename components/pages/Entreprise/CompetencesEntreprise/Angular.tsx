import {
  Heading,
  Text,
  VStack,
  Image,
  List,
  ListItem,
  Link,
} from "@chakra-ui/react";
import { FC } from "react";

const Angular: FC = () => {
  return (
    <VStack p={5}>
      {/* <Heading as="h3">Angular</Heading> */}
      <Image
        alt="Angular Logo"
        src="https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white"
      />
      <Text textAlign={"justify"} fontSize={"sm"}>
        Ce poste m{"'"}a permis l{"'"}apprentissage du framwork javascript
        Angular. J{"'"}ai d{"'"}abord commencé par la réalisation des modèles de
        données en Typescript. J{"'"}ai ensuite créé les premiers composants de
        l{"'"}application. Je me suis occupée de découper le code en différents
        composants pour limiter la taille des fichiers. J{"'"}ai aussi créé des
        formulaires, récupéré les données via les points d{"'"}
        API, et <Link href="/blog">le routing</Link>
      </Text>
    </VStack>
  );
};

export default Angular;
