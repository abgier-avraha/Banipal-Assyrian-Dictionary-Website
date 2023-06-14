import Head from "next/head";
import Link from "next/link";
import React from "react";
import { AppFooter } from "~/components/app-footer";
import { AppHeader } from "~/components/app-header";

export function Layout(props: { title: string; children: React.ReactNode }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width" />
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
      <div className="bg-white dark:bg-gray-900" style={{ minHeight: "100vh" }}>
        <AppHeader />
        <main className="mb-40 space-y-40">{props.children}</main>
        <AppFooter />
      </div>
    </>
  );
}
