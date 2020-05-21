/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path");
const fs = require("fs");

const siteName = process.env.SiteName || "Nova88";

const siteDefaultDatas = {
	Nova88: {
		siteName: "Nova88",
		title: `NOVA88`,
		description: `Nova88 is the world leading sportsbook offering one of the kind gambling experience in live betting covering all sports, casino, slots, keno, esports, rng casino, fantasy sports, virtual sports, lottery, live casino, live dealer, bingo, and racing.`,
		author: `@Nova88`,
		siteStylePath: "Nova88",
		defLangId: "en",
		langList: ["en", "cs", "ch", "th", "id"]
	},
	Bwing: {
		siteName: "Bwing",
		title: `Bwing`,
		description: `Bwing is the world leading sportsbook offering one of the kind gambling experience in live betting covering all sports, casino, slots, keno, esports, rng casino, fantasy sports, virtual sports, lottery, live casino, live dealer, bingo, and racing.`,
		author: `@Bwing`,
		siteStylePath: "Bwing",
		defLangId: "en",
		langList: ["en", "vn"]
	}
};

exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
	const config = getConfig();
	if (stage.startsWith("develop") && config.resolve) {
		config.resolve.alias = {
			...config.resolve.alias,
			"react-dom": "@hot-loader/react-dom"
		};
	}
};

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
	let site = siteDefaultDatas[siteName];
	const node = {
		siteName: site.siteName,
		defLangId: site.defLangId,
		title: site.title,
		description: site.description,
		siteStylePath: site.siteStylePath,
		langList: site.langList,
		author: site.author,
		id: createNodeId(`site-${site.siteName}`),
		internal: {
			type: `SiteInfo`,
			contentDigest: createContentDigest(site)
		}
	};
	actions.createNode(node);
};

// exports.onPostBuild = () => {
// 	const outputDir = path.join(__dirname, "build", `${siteName}`);
// 	fs.renameSync(path.join(__dirname, "public"), outputDir);
// };
