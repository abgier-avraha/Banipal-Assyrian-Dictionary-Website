import { type NextPage } from "next";
import Head from "next/head";
import { HeroSection } from "~/components/hero-section";

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Banipal Assryian Dictionary</title>
        <meta name="viewport" content="width=device-width" />
      </Head>
      <HeroSection />
    </>
  );
};

export default Index;
