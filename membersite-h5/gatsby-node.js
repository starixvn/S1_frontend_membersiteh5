/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
	const config = getConfig();
	if (stage.startsWith("develop") && config.resolve) {
		config.resolve.alias = {
			...config.resolve.alias,
			"react-dom": "@hot-loader/react-dom"
		};
	}
};

// const path = require("path");
// const fs = require("fs");

// const sites = ["Nova88", "Bwing"];

// exports.onPostBuild = () => {
// 	sites.forEach(siteName => {
// 		const outputDir = path.join(__dirname, "build", `${siteName}`);
// 		if (!fs.existsSync(path.join(__dirname, "build"))) {
// 			fs.mkdirSync(path.join(__dirname, "build"));
// 			fs.mkdirSync(path.join(__dirname, "build", `${siteName}`));
// 		} else if (!fs.existsSync(outputDir)) {
// 			fs.mkdirSync(outputDir);
// 		}

// 		fs.renameSync(path.join(__dirname, "public"), outputDir);
// 	});
// };
