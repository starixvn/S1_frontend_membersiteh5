import React from "react";
import Layout from "../components/common/layout";
import SEO from "../components/common/seo";
import { Wrapper } from "../components/common/wrapper";

const IndexPage = () => {
	return (
		<Wrapper pageLangKeys={[]}>
			<Layout>
				<SEO title="livechat" />
				<h1>Live Chat</h1>
			</Layout>
		</Wrapper>
	);
};

export default IndexPage;
