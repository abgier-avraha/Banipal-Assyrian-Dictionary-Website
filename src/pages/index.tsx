import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { AppFooter } from "~/components/AppFooter";
import { AppHeader } from "~/components/AppHeader";
import { Blog } from "~/components/Blog";
import { CallToAction } from "~/components/CallToAction";
import { Features } from "~/components/Features";
import { HeroSection } from "~/components/HeroSection";
import { Stats } from "~/components/Stats";
import { Testimonials } from "~/components/Testimonials";
import { Layout } from "~/layouts/Layout";
import { api } from "~/utils/api";

const Index: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <Link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta
          name="description"
          content="Template built with tailwindcss using Tailus blocks v2"
        />
        <title>sdfsdf</title>

        <Link
          href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="bg-white dark:bg-gray-900">
        <AppHeader />
        <main className="mb-40 space-y-40">
          <HeroSection />
          <Features />
          <Stats />
          <Testimonials />
          <CallToAction />
          <Blog />
        </main>
        <AppFooter />
      </div>
    </>
  );
};

export default Index;
