import Head from "next/head";
import { Inter } from "@next/font/google";
import Form from "../components/Form";
import Title from "../components/Title";
import Evaluation from "../components/Evaluation";

export default function Home() {
  return (
    <>
      <Head>
        <title>🎀 body blvd 🎀</title>
        <meta name="description" content="Cute health calculator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title />
      <Form />
      <Evaluation />
    </>
  );
}
