import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import {
  LinkedinFilled,
  TwitterSquareFilled,
  GithubFilled,
} from "@ant-design/icons";
import { ReactNode } from "react";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("grey.50", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      target={"_blank"}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("grey.100", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("green.400", "green.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Stack direction={"row"} spacing={6}>
          <Link href={"/"}>Accueil</Link>
          <Link href={"/projets"}>Projets</Link>
          <Link href={"/entreprise"}>Entreprise</Link>
          <Link href={"/blog"}>Blog</Link>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.700", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>© 2022 Olivia MOREAU. All rights reserved</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton
              label={"Linkedin"}
              href={"https://www.linkedin.com/in/oliviamoreau/"}
            >
              <LinkedinFilled />
            </SocialButton>
            <SocialButton
              label={"Twitter"}
              href={"https://twitter.com/liivDev"}
            >
              <TwitterSquareFilled />
            </SocialButton>
            <SocialButton label={"Github"} href={"https://github.com/liv44"}>
              <GithubFilled />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
