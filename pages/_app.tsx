import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/fraunces";
import "@fontsource/open-sans";
import { theme } from "../theme/index";
import Layout from "../components/general/layout/layout";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Olivia MOREAU - Développeuse Web</title>
        <meta
          name="description"
          content="Blog/portfolio d'une développeuse web, créé avec Next.js et Chakra-ui"
        />
        <link rel="icon" href="/profile_picture.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
