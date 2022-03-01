import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
        <title>Votur - Coming Soon!</title>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@OllieMignot" />
        <meta property="og:url" content="https://votur.app" />
        <meta property="og:title" content="Votur - Voting Application" />

        <meta
          property="og:description"
          content="A modern voting application for schools."
        />
        <meta property="og:image" content="" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
