import { ChakraProvider,} from "@chakra-ui/react";
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { ColorModeScript } from "@chakra-ui/react"
import React from "react";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "../../lib/apolloClient";

import { AppProps } from "next/app";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

const theme = extendTheme({ config })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ApolloProvider client={apolloClient}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Component {...pageProps} />
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default MyApp;
