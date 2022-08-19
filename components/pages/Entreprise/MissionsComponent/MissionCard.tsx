import { Flex, Heading, Text } from "@chakra-ui/react";
import { FC } from "react";

export interface MissionCardProps {
  title: string;
  mission: string;
  descriptions: string[];
}
// Créer des formulaires pour récupérer des informations et les renvoyer à l'API
// Gérer les cas d'erreur en renvoyant un message à l'utilisateur
// Créer les Router Link pour permettre à l'utilisateur de naviguer entre différentes pages

// Personnaliser les composants
// Sélectionner les bons composants utiles à la maquette
// Utilisation de Figma pour la maquette

// Compréhension de Docker
// Lien avec le développeur Back End pour quelques rectification sur les besoins en front et discussions autour des données de l'API
// utilisation de la commande docker-compose pour créer l'image et le conteneur
// Mise en production grâce à FileZilla, avec création d'un dossier de déploiement
// Vérification que les modifications en prod ont bien été effectuées et qu'il n'y a pas d'erreur, le cas échéant les corriger

// Opération lavage tous les mercredis :
// Vidange des seaux de bio-déchets dans des grands bacs
// Nettoyage de chaque seau et couvercle
// Rangement des seaux, bacs de nettoyage

const MissionCard: FC<MissionCardProps> = ({
  title,
  mission,
  descriptions,
}) => {
  return (
    <Flex gap={3} direction="column" fontSize="sm">
      <Heading fontWeight={"bold"} as="h2" fontSize="md" textAlign="center">
        {title}
      </Heading>
      <Flex direction={{ base: "column" }}>
        <Text color="gray.600" fontStyle={"italic"}>
          {mission}
        </Text>
      </Flex>
      {descriptions &&
        descriptions.map((desc, index) => (
          <Text textAlign={"justify"} key={index}>
            {desc}
          </Text>
        ))}
    </Flex>
  );
};

export default MissionCard;
