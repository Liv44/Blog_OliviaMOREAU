import { Heading, HStack, Image, VStack, Text } from "@chakra-ui/react";
import { FC } from "react";

const FileZilla: FC = () => {
  return (
    <VStack p={5}>
      <HStack bg={"white"} p={1}>
        <Text color="red">Filezilla</Text>
        <Image
          src={"/competences/filezilla.png"}
          alt="logo filezilla"
          w={"8"}
        ></Image>
      </HStack>
      <Text textAlign={"justify"} fontSize={"sm"}>
        Lors de ma mission, j{"'"}ai été chargée de mettre en production des
        nouvelles versions de l{"'"}application. Pour cela, Filezilla a permis
        de créer un FTP (File Transfer Protocol) pour envoyer les fichiers
        locaux sur le serveur de la version produite.
      </Text>
    </VStack>
  );
};

export default FileZilla;
