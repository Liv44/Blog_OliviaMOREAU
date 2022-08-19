import { Heading, VStack, Text, Image, HStack } from "@chakra-ui/react";
import { FC } from "react";

const PrimeNG: FC = () => {
  return (
    <VStack p={5}>
      <HStack bg={"white"} p={1}>
        <Text color="red">PrimeNG</Text>
        <Image
          src={"/competences/primeng.png"}
          alt="logo primeng"
          w={"8"}
        ></Image>
      </HStack>
      <Text textAlign={"justify"} fontSize={"sm"}>
        Pour certains des composants créés pour l{"'"}application, j{"'"}ai
        utilisé la librairie de composants Primeng. Primeng propose différents
        composants, tels que des boutons, inputs, icones, cartes, ou encore des
        tableaux. L{"'"}application développée demandait de créer plusieurs
        tableaux. J{"'"}ai donc utilisé le tableau disponible sur Primeng pour
        plus de facilité de développement.
      </Text>
    </VStack>
  );
};

export default PrimeNG;
