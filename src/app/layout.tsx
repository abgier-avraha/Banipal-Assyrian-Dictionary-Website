import "~/styles/globals.css";

import { TRPCReactProvider } from "~/trpc/react";
import { AppFooter } from "./components/app-footer";
import { AppHeader } from "./components/app-header";
import { Container } from "./components/container";
import AnalyticsScripts from "./components/analytics-scripts";

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<meta name="viewport" content="width=device-width" />
			<AnalyticsScripts />

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
