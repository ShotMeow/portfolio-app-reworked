import "@/src/assets/globals.css";

import { Urbanist } from "next/font/google";
import LocalFont from "next/font/local";
import { Particles } from "@/src/components/Particles";

export const metadata = {
	title: "Данила Маврин",
	description:
		"Front-end Developer из А-БТ. Веду свой блог и помогаю другим разработчикам становиться сильнее.",
	openGraph: {
		title: "Данила Маврин",
		description:
			"Front-end Developer из А-БТ. Веду свой блог и помогаю другим разработчикам становиться сильнее.",
		url: "https://shotmeow.dev",
		siteName: "Данила Маврин",
		images: [
			{
				url: "/og.jpg",
				width: 1920,
				height: 1080,
			},
		],
		locale: "ru-RU",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		title: "Данила Маврин",
		card: "summary_large_image",
	},
	icons: {
		shortcut: "/favicon.svg",
	},
};

const urbanist = Urbanist({
	subsets: ["latin"],
	variable: "--font-urbanist",
});

const calSans = LocalFont({
	src: "../public/fonts/CalSans-SemiBold.woff2",
	variable: "--font-calsans",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ru" className={[urbanist.variable, calSans.variable].join(" ")}>
			<body>
				<Particles
					className="absolute inset-0 -z-10 animate-fade-in"
					quantity={100}
				/>
				{children}
			</body>
		</html>
	);
}
