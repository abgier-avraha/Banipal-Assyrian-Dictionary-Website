// components/AnalyticsScripts.tsx
"use client";

import Script from "next/script";

const structuredData = `{
  "@context" : "https://schema.org",
  "@type" : "WebSite",
  "name" : "Banipal Assyrian Dictionary",
  "url" : "https://banipal.app/"
}`;

export default function AnalyticsScripts() {
	return (
		<>
			<Script
				src="https://www.googletagmanager.com/gtag/js?id=G-1E0SCBB8X1"
				strategy="afterInteractive"
			/>
			<Script id="google-analytics" strategy="afterInteractive">
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
				strategy="afterInteractive"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
				dangerouslySetInnerHTML={{
					__html: structuredData,
				}}
			/>
		</>
	);
}
