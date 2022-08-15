import { Box, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FC } from "react";

const paragraphe1 = `Lorem ipsum dolor sit amet. Nam voluptates harum eos ipsum iure ipsam At veritatis nihil aut magnam dolores quo sunt modi ut architecto asperiores. Eos autem ratione sit magni dolor et doloremque tempore aut consequatur nobis in labore unde?`;

const paragraphe2 = `
Quo harum repellendus et nulla quam qui eaque rerum aut dicta libero cum galisum minus qui similique necessitatibus? Et soluta provident in odit voluptatem est consequatur dolores est ullam sequi sit nisi quibusdam et atque rerum ea ipsam perspiciatis. Est sint laboriosam eos perspiciatis consequuntur et voluptatem saepe quo ullam voluptatem in consequatur quaerat ab accusantium nihil.`;

const paragraphe3 = `
Ut quae tempore qui dolore sunt ad voluptatem quam. Ea quos aliquid 33 cumque porro aut sint numquam aut quos sapiente non aperiam dicta in voluptatum eligendi ab deserunt molestiae.`;

const Web2Day: FC = () => {
  return (
    <VStack textAlign={"justify"} fontSize={"sm"}>
      <Flex
        direction={{ base: "column", md: "row" }}
        alignItems={{ base: "center", md: "flex-start" }}
        w={"100%"}
        gap={5}
      >
        <VStack alignItems="flex-start" w={{ base: "auto" }}>
          <Text>{paragraphe1}</Text>
          <Text>{paragraphe2}</Text>
          <Text>{paragraphe3}</Text>
        </VStack>
        <Image
          src="/articles/web2day.png"
          alt="Web 2 day"
          w={{ base: "sm", md: "sm" }}
        ></Image>
      </Flex>
    </VStack>
  );
};
export default Web2Day;
