import { type NextPage } from "next";
import { HeroSection } from "~/components/HeroSection";
import { Layout } from "~/layouts/Layout";
import { api } from "~/utils/api";

const Index: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <Layout title={"test"}>
      <HeroSection />
    </Layout>
  );
};

export default Index;
