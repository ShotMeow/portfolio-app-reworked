import {type FC, type HTMLAttributes} from "react";
import { Arrow } from "@/app/components/Header/Arrow";
import { Navigation } from "@/app/components/Navigation";
import Link from "next/link";

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const Header: FC<Props> = ({className = "", ...props}) => {
	return (
		<header className={`fixed left-0 top-0 w-full my-42 ${className}`} {...props}>
			<div className="flex items-center justify-between container mx-auto">
				<Link className="hover:scale-110 active:scale-90 transition-transform duration-500" href="/"><Arrow /></Link>
				<Navigation />
			</div>
		</header>
	);
};
