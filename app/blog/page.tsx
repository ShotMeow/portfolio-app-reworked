import { NextPage } from "next";
import {Header} from "@/src/components/Header";

const BlogPage: NextPage = () => {
	return <>
		<Header />
		<main className="container">
			<h1 className="text-5xl font-bold mt-20">Блог</h1>
			<p className="text-gray mt-6 border-b border-gray/20 pb-10">На этой странице вы найдете мои авторские статьи на тему IT.</p>
		</main>
	</>;
};

export default BlogPage;
