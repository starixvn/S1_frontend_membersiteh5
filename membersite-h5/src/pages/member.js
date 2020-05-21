import React from "react";
import Layout from "../components/common/layout";
import SEO from "../components/common/seo";
import { Wrapper } from "../components/common/wrapper";

const IndexPage = () => (
	<Wrapper pageLangKeys={[]} afterLogin={true}>
		<Layout>
			<SEO title="member" />
			<h1>Member</h1>
		</Layout>
	</Wrapper>
);

export default IndexPage;
