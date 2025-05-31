import "~/styles/globals.css";

import type { Metadata } from "next";
import { Geist } from "next/font/google";

import Script from "next/script";
import { TRPCReactProvider } from "~/trpc/react";
import { AppFooter } from "./components/app-footer";
import { AppHeader } from "./components/app-header";
import { Container } from "./components/container";

const geist = Geist({
	subsets: ["latin"],
	variable: "--font-geist-sans",
});

const structuredData = `{
  "@context" : "https://schema.org",
  "@type" : "WebSite",
  "name" : "Banipal Assyrian Dictionary",
  "url" : "https://banipal.app/"
}`;

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<meta name="viewport" content="width=device-width" />
			<Script src="https://www.googletagmanager.com/gtag/js?id=G-1E0SCBB8X1" />
			<Script id="google-analytics">
				{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-1E0SCBB8X1');
        `}
			</Script>

			<Script
				id="ld-tag"
				type="application/ld+json"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
				dangerouslySetInnerHTML={{
					__html: structuredData,
				}}
				key="product-jsonld"
			/>

			<body
				className="bg-gray-100 dark:bg-gray-900"
				style={{ minHeight: "100vh" }}
			>
				<AppHeader />
				<div className="mb-40 space-y-40">
					<div className="relative">
						<Container>
							<div className="relative ml-auto pt-20">
								<div className="mx-auto lg:w-2/3">
									<TRPCReactProvider>{children}</TRPCReactProvider>
								</div>
							</div>
						</Container>
					</div>
				</div>
				<AppFooter />
			</body>
		</html>
	);
}
