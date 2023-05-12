"use client";

import {type FC, type HTMLAttributes, useEffect, useRef, useState} from "react";
import { Arrow } from "./Arrow";
import { Navigation } from "@/src/components/Navigation";
import Link from "next/link";

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const Header: FC<Props> = ({ className = "", ...props }) => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header
			ref={ref}
			{...props}
		>
			<div className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b  ${
				isIntersecting
					? "bg-zinc-900/0 border-transparent"
					: "bg-zinc-900/500 border-zinc-800"
			}`}>
				<div className={`flex container justify-between py-6 ${className}`}>
					<Link
						className="hover:scale-110 active:scale-90 transition-transform duration-500"
						href="/"
					>
						<Arrow />
					</Link>
					<Navigation className="gap-4 md:gap-10" />
				</div>
			</div>
		</header>
	);
};
