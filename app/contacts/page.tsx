import { NextPage } from "next";
import { Card } from "@/src/components/Card";
import { Header } from "@/src/components/Header";
import Link from "next/link";
import { FaTelegramPlane, FaMailchimp, FaGithub } from "react-icons/fa";

const socials = [
	{
		icon: <FaTelegramPlane size={20} />,
		href: "https://t.me/shotmeow",
		label: "Telegram",
		handle: "@shotmeow",
	},
	{
		icon: <FaMailchimp size={20} />,
		href: "mailto:shotmeow@gmail.com",
		label: "E-mail",
		handle: "shotmeow@gmail.com",
	},
	{
		icon: <FaGithub size={20} />,
		href: "https://github.com/shotmeow",
		label: "Github",
		handle: "shotmeow",
	},
];

const ContactsPage: NextPage = () => {
	return (
		<>
			<Header />
			<main className="container h-full grid w-full mb-20 grid-cols-1 gap-8 mx-auto sm:grid-cols-2 xl:grid-cols-3 lg:gap-16">
				{socials.map((socialItem) => (
					<Card
						className="sm:last:col-start-1 sm:last:col-end-3 xl:last:col-auto bg-gradient-to-tl from-black/10 to-black/0"
						key={socialItem.label}
					>
						<Link
							href={socialItem.href}
							target="_blank"
							className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48"
						>
							<span
								className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
								aria-hidden="true"
							/>
							<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
								{socialItem.icon}
							</span>
							<div className="z-10 flex flex-col items-center">
								<span className="text-xl font-medium duration-150 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
									{socialItem.handle}
								</span>
								<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
									{socialItem.label}
								</span>
							</div>
						</Link>
					</Card>
				))}
			</main>
		</>
	);
};

export default ContactsPage;
