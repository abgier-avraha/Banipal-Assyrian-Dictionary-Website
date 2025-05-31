import type React from "react";

export function Container(props: { children: React.ReactNode }) {
	return (
		<div className="mx-auto max-w-7xl px-6 md:px-12 xl:px-6">
			{props.children}
		</div>
	);
}
