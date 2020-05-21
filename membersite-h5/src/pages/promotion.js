import React, { useContext } from "react";
import Layout from "../components/common/layout";
import SEO from "../components/common/seo";
import { Wrapper } from "../components/common/wrapper";

const IndexPage = () => (
	<Wrapper pageLangKeys={[]}>
		<Layout>
			<SEO title="promotion" />
			<h1>Promotion</h1>
		</Layout>
	</Wrapper>
);

export default IndexPage;
