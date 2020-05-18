import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Footer from "./footer";
import Header from "./header";
import "../../styles/Nova88/css/style.css";
import "../../styles/Nova88/css/font.css";

const Layout = ({ children }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return (
		<div>
			<Header siteTitle={data.site.siteMetadata.title} />
			<main style={{ position: "fixed" }}>{children}</main>
			<Footer />
		</div>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
