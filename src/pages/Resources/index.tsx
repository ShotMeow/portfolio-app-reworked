import { type FC } from "react";
import { Header } from "@/src/components/Header";
import { resourcesData } from "@/src/pages/Resources/data";
import { Card } from "@/src/components/Card";
import Link from "next/link";
import {BsArrowRight} from "react-icons/bs";

export const Resources: FC = () => {
	return (
		<>
			<Header />
			<main className="container">
				<div className="border-b border-zinc-800 mt-20">
					<h1 className="text-5xl font-bold">Ресурсы</h1>
					<p className="text-gray mt-6 pb-10">
						На этой странице вы можете найти полезные для разработчика сайты и
						приложения.
					</p>
				</div>
				<section className="grid grid-cols-3 gap-16 py-10">
					{resourcesData.map((item) => (
						<Card className="first:col-start-1 first:col-end-3 first:row-start-1 first:row-end-3 last:col-start-2 last:col-end-4" key={item.label}>
							<Link
								href={item.href}
								target="_blank"
								className="p-8 relative flex flex-col justify-between h-full gap-4 duration-700 group md:gap-8"
							>
								<div className="z-10 flex flex-col">
									<span className="text-xl font-medium duration-150 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
										{item.label}
									</span>
									<span className="mt-4 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{item.description}
									</span>
								</div>
                                <button className="flex items-center gap-3 hover:gap-6 duration-300">Перейти <BsArrowRight /></button>
							</Link>
						</Card>
					))}
				</section>
			</main>
		</>
	);
};
