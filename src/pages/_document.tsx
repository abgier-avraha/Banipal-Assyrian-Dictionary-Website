import { Head, Html, Main, NextScript } from "next/document";
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
          content="Banipal English and Arabic to Assyrian Dictionary"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body
        className="bg-gray-100 dark:bg-gray-900"
        style={{ minHeight: "100vh" }}
      >
        <AppHeader />
        <div className="mb-40 space-y-40">
          <div className="relative">
            <Container>
              <div className="relative ml-auto pt-20">
                <div className="mx-auto  lg:w-2/3">
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
