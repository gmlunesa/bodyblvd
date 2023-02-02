import { Inter } from "@next/font/google";
import { CalcContextProvider } from "../context/CalcContext";
import Layout from "../components/Layout";

import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --inter-font: ${inter.style.fontFamily};
          }
        `}
      </style>
      <CalcContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CalcContextProvider>
    </>
  );
}
