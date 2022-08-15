import {
  Box,
  Heading,
  Link,
  Image,
  Stack,
  Spinner,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { FC, useEffect, useState } from "react";
import Title from "../../components/general/Title";
import { articleProp, blogData } from "../api/blog";

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
          <VStack alignItems="flex-start">
            <Link href="/blog">Retour aux articles</Link>
            <Title
              title={article.title}
              subTitle={article.description}
              width="100%"
            ></Title>
            {article.content}
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
