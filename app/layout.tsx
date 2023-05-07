import "./globals.css";
import { Urbanist } from "next/font/google";
import LocalFont from "next/font/local";

export const metadata = {
	title: {
		default: "shotmeow.dev",
		template: "%s | shotmeow.dev",
	},
	description:
		"Front-end Developer из А-БТ. Веду свой блог и помогаю другим разработчикам становиться сильнее.",
	openGraph: {
		title: "shotmeow.dev",
		description:
			"Front-end Developer из А-БТ. Веду свой блог и помогаю другим разработчикам становиться сильнее.",
		url: "https://shotmeow.dev",
		siteName: "shotmeow.dev",
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
		title: "ShotMeow",
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
	src: "../public/fonts/CalSans-SemiBold.ttf",
	variable: "--font-calsans",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ru" className={[urbanist.variable, calSans.variable].join(" ")}>
			<body>{children}</body>
		</html>
	);
}
