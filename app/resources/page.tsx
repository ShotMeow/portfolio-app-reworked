import { NextPage } from "next";
import {Header} from "@/src/components/Header";

const ResourcesPage: NextPage = () => {
	return <>
		<Header />
		<main className="container">
			<h1 className="text-5xl font-bold mt-20">Ресурсы</h1>
			<p className="text-gray mt-6 border-b border-gray/20 pb-10">На этой странице вы можете найти полезные для разработчика сайты и приложения.</p>
		</main>
	</>;
};

export default ResourcesPage;
