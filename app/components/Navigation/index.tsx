import { type FC } from "react";
import { navigationData } from "./utils/data";
import Link from "next/link";

export const Navigation: FC = () => {
	return (
		<nav className="my-16 animate-fade-in">
			<ul className="flex items-center gap-6 md:gap-10 text-gray">
				{navigationData.map((navItem) => (
					<li key={navItem.title}>
						<Link href={navItem.href}>{navItem.title}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
