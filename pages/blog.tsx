import { Box, Heading, Stack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Title from "../components/general/Title";
import ArticleList from "../components/pages/Blog/ArticleList";

const Blog: NextPage = () => {
  return (
    <Stack>
      <Title
        title="Mon Blog"
        subTitle="Vous retrouverez ici mes articles réalisés dans le cadre de mon rendu de 2ème année de Bachelor Informatique."
      ></Title>
      <ArticleList></ArticleList>
    </Stack>
  );
};

export default Blog;
