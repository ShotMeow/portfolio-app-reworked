import { FaGithub, FaTelegramPlane } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

import { ContactType } from "../types";

export const contactsData: ContactType[] = [
	{
		icon: <FaTelegramPlane size={20} />,
		href: "https://t.me/shotmeow",
		label: "Telegram",
		handle: "@shotmeow",
	},
	{
		icon: <CiMail size={20} />,
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
