"use client";

import { type FC, HTMLAttributes } from "react";
import { navigationData } from "./utils/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const Navigation: FC<Props> = ({ ...props }) => {
	const pathname = usePathname();

	return (
		<nav {...props}>
			<ul className="flex items-center gap-10 md:gap-8 text-gray text-sm">
				{navigationData.map((navItem) => (
					<li
						className={`hover:text-blue-500 active:scale-90 transition-transform duration-500 ${
							navItem.href === pathname ? "text-blue-500" : ""
						}`}
						key={navItem.title}
					>
						<Link href={navItem.href}>{navItem.title}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
