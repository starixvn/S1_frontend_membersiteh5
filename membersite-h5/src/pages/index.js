import React from "react";
import Layout from "../components/common/layout";
import SEO from "../components/common/seo";
import Slider from "../components/home/slider";
import Marquee from "../components/home/marquee";
import Category from "../components/home/category";
import ShortcutBar from "../components/home/shortcutBar";

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<Slider />
		<Marquee />
		<Category />
		<ShortcutBar />
	</Layout>
);

export default IndexPage;
