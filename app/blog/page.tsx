import { NextPage } from "next";
import { Header } from "@/src/components/Header";

const BlogPage: NextPage = () => {
	return (
		<>
			<Header />
			<main className="container">
				<div className="border-b border-zinc-800 mt-20">
					<h1 className="text-5xl font-bold">Блог</h1>
					<p className="text-gray mt-6 pb-10">
						На этой странице вы найдете мои авторские статьи на тему IT.
					</p>
				</div>
			</main>
		</>
	);
};

export default BlogPage;
