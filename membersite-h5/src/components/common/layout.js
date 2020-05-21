import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Footer from "./footer";
import Header from "./header";
import "../../styles/Nova88/css/style-dark.css";
import "../../styles/Nova88/css/style.css";
import "../../styles/Nova88/css/font.css";

const Layout = ({ children }) => {
	const { allSiteInfo } = useStaticQuery(
		graphql`
			query {
				allSiteInfo(filter: { siteName: { eq: "Nova88" } }) {
					nodes {
						title
						siteName
						description
					}
				}
			}
		`
	);

	let site = allSiteInfo.nodes[0];

	return (
		<div>
			<Header siteTitle={site.title} />
			<Header siteTitle="Nova88" />
			<main style={{ position: "fixed" }}>{children}</main>
			<Footer />
		</div>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
