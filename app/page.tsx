import { NextPage } from "next";
import { Navigation } from "@/app/components/Navigation";
import Link from "next/link";
import {Particles} from "@/app/components/Particles";

const HomePage: NextPage = () => {
	return (
		<main className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden text-center bg-gradient-to-tl from-black via-zinc-600/20 to-black">
			<Navigation />
			<Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
				<Link href="https://t.me/shotmeow" target="_blank">@shotmeow</Link>
			</h1>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<p className="text-gray animate-fade-in my-16">
				Front-end Developer из А-БТ. Веду свой блог и помогаю другим <br />
				разработчикам становиться сильнее.
			</p>
		</main>
	);
};

export default HomePage;
