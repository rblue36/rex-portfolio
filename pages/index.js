import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Nav from "../components/nav/Nav";
import Work from "../components/Work/Work";
import About from "../components/About/About";
import { getAllPosts } from "../lib/api";

export default function Home({ allPosts }) {
	const work = allPosts;

	return (
		<div className={styles.container}>
			<Head>
				<title>Rexs Portfolio</title>
				<meta name="description" content="A collection of my work" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Nav />
			<main className={styles.main}>
				{work.length > 0 && <Work work={work} showAll={false} />}
				<About />
			</main>

			<footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Built by Rex Richardson with Next.js
				</a>
			</footer>
		</div>
	);
}

export async function getStaticProps() {
	const allPosts = getAllPosts([
		"title",
		"date",
		"slug",
		"author",
		"coverImage",
		"tags",
		"images",
		"youtube",
	]);
	console.log(allPosts);
	return {
		props: { allPosts },
	};
}
