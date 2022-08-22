import {
  Box,
  Heading,
  Link,
  Image,
  Stack,
  Spinner,
  VStack,
  Divider,
  Button,
} from "@chakra-ui/react";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import { useRouter } from "next/router";
import React from "react";
import { FC, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import Title from "../../components/general/Title";
import { articleProp, blogData } from "../api/blog";
import { Text } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

const newTheme = {
  p: (props: { children: any }) => {
    const { children } = props;
    return (
      <Text mb={5} fontSize={"md"} textAlign="justify">
        {children}
      </Text>
    );
  },
  h1: (props: { children: any }) => {
    const { children } = props;
    return (
      <Heading as={"h2"} mb={2} fontSize={"lg"} marginTop={{ base: 5, md: 20 }}>
        {children}
      </Heading>
    );
  },
  h2: (props: { children: any }) => {
    const { children } = props;
    return (
      <Heading as={"h2"} mb={2} fontSize={"md"}>
        {children}
      </Heading>
    );
  },
  a: (props: { href?: string | undefined; children: any }) => {
    const { children } = props;
    return (
      <Link textDecoration={"underline"} href={props.href} target="_blank">
        {children}
      </Link>
    );
  },
  hr: (props: { children: any }) => {
    const { children } = props;
    return <Divider my={5} />;
  },
};

const ArticlePage: FC = () => {
  const router = useRouter();
  const articleID = router.query.article;

  const [article, setArticle] = useState<articleProp>();
  const [loading, setLoading] = useState(true);
  const [found, setFound] = useState(false);

  useEffect(() => {
    const articleFound = blogData.find(
      (article) => article.id.toString() === articleID
    );
    setArticle(articleFound);
    if (article) {
      setLoading(false);
    } else {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [article, articleID]);

  if (loading) {
    return (
      <Spinner m={5} size="xl" justifyContent={"center"} color="blue.500" />
    );
  } else {
    return (
      <Box p={5}>
        {article && (
          <VStack alignItems="flex-start" marginX={{ base: 5, md: 16 }}>
            <Button
              as="a"
              colorScheme={"blue"}
              rightIcon={<ArrowBackIcon />}
              variant="outline"
              href="/blog"
            >
              Retour aux articles
            </Button>
            <Title
              title={article.title}
              subTitle={article.description}
              width="100%"
            ></Title>
            {article.content && typeof article.content === "string" && (
              <Stack p={{ base: 5, md: 16 }} bgColor="white" borderRadius={20}>
                <ReactMarkdown components={ChakraUIRenderer(newTheme)}>
                  {article.content}
                </ReactMarkdown>
              </Stack>
            )}
          </VStack>
        )}
        {!article && (
          <Stack alignItems={"center"} gap="5">
            <Heading>Cet article n{"'"}existe pas.</Heading>
            <Image src="/error.png" alt="404 error" w={"50vh"}></Image>

            <Link href="/blog">Retour aux articles</Link>
          </Stack>
        )}
      </Box>
    );
  }
};

export default ArticlePage;
