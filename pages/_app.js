import "../styles/globals.css";
import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
	Router.events.on("routeChangeStart", () => NProgress.start());
	Router.events.on("routeChangeComplete", () => NProgress.done());
	Router.events.on("routeChangeError", () => NProgress.done());

	useEffect(() => {
		Aos.init();
	}, []);

	return <Component {...pageProps} />;
}

export default MyApp;
