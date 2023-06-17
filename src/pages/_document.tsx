import { Head, Html, Main, NextScript } from "next/document";
import Link from "next/link";
import { AppFooter } from "~/components/app-footer";
import { AppHeader } from "~/components/app-header";
import { Container } from "~/components/container";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Template built with tailwindcss using Tailus blocks v2"
        />
        <Link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <Link
          href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body
        className="bg-white dark:bg-gray-900"
        style={{ minHeight: "100vh" }}
      >
        <AppHeader />
        <div className="mb-40 space-y-40">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
            >
              <div className="from-primary h-56 bg-gradient-to-br to-purple-400 blur-[106px] dark:from-blue-700"></div>
              <div className="h-32 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px] dark:to-indigo-600"></div>
            </div>
            <Container>
              <div className="relative ml-auto pt-36">
                <div className="mx-auto text-center lg:w-2/3">
                  <Main />
                </div>
              </div>
            </Container>
          </div>
        </div>
        <NextScript />
        <AppFooter />
      </body>
    </Html>
  );
}
