import { NextPage } from "next";
import { Header } from "@/src/components/Header";
import {InDevelopment} from "@/src/components/InDevelopment";

const BlogPage: NextPage = () => {
	return (
		<>
			<Header />
			<main className="container">
				<InDevelopment />
			</main>
		</>
	);
};

export default BlogPage;
