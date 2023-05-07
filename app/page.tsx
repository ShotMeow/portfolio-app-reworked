import { NextPage } from "next";
import { Navigation } from "@/src/components/Navigation";
import Link from "next/link";

const HomePage: NextPage = () => {
	return (
		<main className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden text-center bg-gradient-to-tl from-black via-zinc-600/20 to-black">
			<Navigation className="animate-fade-in my-16 gap-10" />
			<h1 className="z-10 text-4xl text-transparent duration-1000 animate-title font-display sm:text-6xl md:text-9xl hover:scale-105 active:scale-90">
				<Link
					className="bg-white hover:bg-gradient-to-r from-blue-500 via-red-500 to-orange-500 bg-clip-text"
					href="https://github.com/ShotMeow"
					target="_blank"
				>
					@shotmeow
				</Link>
			</h1>
			<p className="text-gray animate-fade-in my-16">
				Front-end Developer из А-БТ. Веду свой блог и помогаю другим <br />
				разработчикам становиться сильнее.
			</p>
		</main>
	);
};

export default HomePage;
