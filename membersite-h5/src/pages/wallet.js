import React from "react";
import Layout from "../components/common/layout";
import SEO from "../components/common/seo";
import { Wrapper } from "../components/common/wrapper";

const IndexPage = () => (
	<Wrapper pageLangKeys={[]}>
		<Layout>
			<SEO title="wallet" />
			<h1>Wallet</h1>
		</Layout>
	</Wrapper>
);

export default IndexPage;
