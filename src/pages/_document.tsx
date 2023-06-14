import { Head, Html, Main, NextScript } from "next/document";
import Link from "next/link";
import { AppFooter } from "~/components/app-footer";
import { AppHeader } from "~/components/app-header";

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
          <Main />
        </div>
        <NextScript />
        <AppFooter />
      </body>
    </Html>
  );
}
