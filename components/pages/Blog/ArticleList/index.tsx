import { Grid } from "@chakra-ui/react";
import { FC } from "react";
import PreviewArticle from "../PreviewArticle";

const ArticleList: FC = () => {
  return (
    <Grid
      templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
      gap={"20"}
      p={"20"}
    >
      <PreviewArticle></PreviewArticle>
      <PreviewArticle></PreviewArticle>

      <PreviewArticle></PreviewArticle>
      <PreviewArticle></PreviewArticle>
      <PreviewArticle></PreviewArticle>
    </Grid>
  );
};

export default ArticleList;
