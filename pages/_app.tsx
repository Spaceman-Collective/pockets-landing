import "@/styles/global.css";
import type { AppProps } from "next/app";
import { ChakraBaseProvider } from "@chakra-ui/react";
import { defaultTheme } from "@/styles/defaultStyle";
import { Montserrat } from "next/font/google";

const bodyFont = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          html {
            --body: ${bodyFont.style.fontFamily};
          }
        `}
      </style>
      <ChakraBaseProvider theme={defaultTheme}>
        <Component {...pageProps} />
      </ChakraBaseProvider>
    </>
  );
}
