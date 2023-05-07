import { type FC } from "react";
import { Header } from "@/app/components/Header";

export const InDevelopment: FC = () => {
	return (
		<div className="overflow-hidden w-screen h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black">
			<Header />
			<div className="h-full flex flex-col items-center justify-center gap-6 text-center">
				<h1 className="text-5xl md:text-8xl font-display">In development</h1>
				<p className="text-gray">
					Данная страница находится в разработке. Зайдите сюда позже
				</p>
			</div>
		</div>
	);
};
