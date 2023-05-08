import { type FC } from "react";
import { Header } from "@/src/components/Header";

export const InDevelopment: FC = () => {
	return (
		<div className="fixed left-0 top-0 overflow-hidden w-screen h-screen">
			<Header />
			<div className="h-full flex flex-col items-center justify-center gap-6 text-center container">
				<h1 className="text-5xl md:text-8xl font-display">In development</h1>
				<p className="text-gray">
					Данная страница находится в разработке. Зайдите сюда позже
				</p>
			</div>
		</div>
	);
};
