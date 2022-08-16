import {
  GithubFilled,
  LinkedinFilled,
  MailOutlined,
  TwitterCircleFilled,
} from "@ant-design/icons";
import { Link, VStack, Text, Icon, Flex, Image, Stack } from "@chakra-ui/react";
import { FC } from "react";
import Title from "../../general/Title";

const ContactCard: FC = () => {
  return (
    <VStack p={5}>
      <Title
        title="Me contacter"
        subTitle="Vous pouvez me contacter sur mes réseaux sociaux ou par mail."
      ></Title>
      <Stack direction={{ base: "column", md: "row" }} alignItems={"center"}>
        <Stack
          alignItems={{ base: "center", md: "flex-start" }}
          gap={3}
          justifyContent={{ base: "center", md: "flex-start" }}
          direction={{ base: "column", md: "column" }}
        >
          <ItemContact
            link="https://github.com/liv44"
            text="Liv44"
            icon={GithubFilled}
          ></ItemContact>
          <ItemContact
            link="https://www.linkedin.com/in/oliviamoreau/"
            text="Olivia MOREAU"
            icon={LinkedinFilled}
          ></ItemContact>
          <ItemContact
            link="https://twitter.com/liivDev"
            text="@liivDev"
            icon={TwitterCircleFilled}
          ></ItemContact>
          <ItemContact
            link="mailto:moreauolivia49@gmail.com"
            text="moreauolivia49@gmail.com"
            icon={MailOutlined}
          ></ItemContact>
        </Stack>
        <Image
          height={"xs"}
          alt={"Contact Image"}
          objectFit={"cover"}
          src={"./contact.png"}
        />
      </Stack>
    </VStack>
  );
};
export default ContactCard;

interface ItemContactProps {
  icon: any;
  text: string;
  link: string;
}

const ItemContact: FC<ItemContactProps> = ({ icon, text, link }) => {
  return (
    <Link
      href={link}
      width={"100%"}
      isExternal
      display="flex"
      alignItems={"center"}
      gap={3}
      padding={3}
      borderRadius={20}
      bg="white"
      color="blue"
      size={"lg"}
      fontSize={"xl"}
      _hover={{
        textDecoration: "none",
        color: "orange.500",
        transform: "scale(1.05)",
      }}
      transition="0.2s ease-in-out"
      transform="scale(1.0)"
    >
      <Icon as={icon} color={"blue"}></Icon>
      <Text>{text}</Text>
    </Link>
  );
};
