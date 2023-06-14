import { type NextPage } from "next";
import Head from "next/head";
import { HeroSection } from "~/components/hero-section";
import { api } from "~/utils/api";

const Index: NextPage = () => {
  const dictResults = api.dictionary.search.useQuery({ query: "access" });

  return (
    <>
      <Head>
        <title>Banpial</title>
        <meta name="viewport" content="width=device-width" />
      </Head>
      <HeroSection />
    </>
  );
};

export default Index;
