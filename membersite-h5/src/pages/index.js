import React, { useContext } from "react";
import Layout from "../components/common/layout";
import SEO from "../components/common/seo";
import Slider from "../components/home/slider";
import Marquee from "../components/home/marquee";
import Category from "../components/home/category";
import ShortcutBar from "../components/home/shortcutBar";
import langKeys_Home from "../datas/langKeys_Home";
import { Wrapper } from "../components/common/wrapper";
import PopBox from "../components/common/popbox";

const IndexPage = () => {
	return (
		<Wrapper pageLangKeys={langKeys_Home}>
			<Layout>
				<SEO title="Home" />
				<Slider />
				<Marquee />
				<Category />
				<ShortcutBar />
			</Layout>
			<PopBox />
		</Wrapper>
	);
};

export default IndexPage;
