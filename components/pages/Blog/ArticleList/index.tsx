import { Grid, Heading } from "@chakra-ui/react";
import { FC } from "react";
import PreviewArticle from "../PreviewArticle";
import { blogData } from "../../../../pages/api/blog";
const ArticleList: FC = () => {
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gap={"10"}
      p={"10"}
    >
      {blogData.map((article, index) => {
        return <PreviewArticle key={index} {...article}></PreviewArticle>;
      })}
    </Grid>
  );
};

export default ArticleList;
