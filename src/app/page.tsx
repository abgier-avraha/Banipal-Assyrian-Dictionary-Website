import type { Metadata } from "next";
import Head from "next/head";
import { HeroSection } from "./components/hero-section";

export const metadata: Metadata = {
	title: "Banipal Assyrian Dictionary",
	description: "Banipal English and Arabic to Assyrian Dictionary",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function Home() {
	return (
		<>
			<Head>
				<title>Banipal Assryian Dictionary</title>
			</Head>
			<HeroSection />
		</>
	);
}
