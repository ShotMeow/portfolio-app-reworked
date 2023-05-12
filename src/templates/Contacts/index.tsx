import { type FC } from "react";
import Link from "next/link";

import { Header } from "@/src/components/Header";
import { Card } from "@/src/components/Card";

import { contactsData } from "./data";

export const Contacts: FC = () => {
	return (
		<>
			<Header />
			<main className="container">
				<div className="border-b border-zinc-800 mt-20">
					<h1 className="text-5xl font-bold">Контакты</h1>
					<p className="text-gray mt-6 pb-10">
						На этой странице перечислены способы связаться со мной.
					</p>
				</div>
				<section className="grid py-10 grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-16">
					{contactsData.map((item) => (
						<Card
							key={item.label}
						>
							<Link
								href={item.href}
								target="_blank"
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48"
							>
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
									{item.icon}
								</span>
								<div className="z-10 flex flex-col items-center">
									<span className="text-xl font-medium duration-150 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
										{item.handle}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{item.label}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</section>
			</main>
		</>
	);
};
