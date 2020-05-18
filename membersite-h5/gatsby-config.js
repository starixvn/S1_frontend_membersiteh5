module.exports = {
	siteMetadata: {
		title: `NOVA88`,
		description: `Nova88 is the world leading sportsbook offering one of the kind gambling experience in live betting covering all sports, casino, slots, keno, esports, rng casino, fantasy sports, virtual sports, lottery, live casino, live dealer, bingo, and racing.`,
		author: `@Nova88`,
		siteStylePath: "Nova88"
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `styles`,
				path: `${__dirname}/src/styles/Nova88/img`
			}
		},
		`gatsby-transformer-sharp`,
		// `gatsby-plugin-sharp`,
		// {
		// 	resolve: `gatsby-plugin-manifest`,
		// 	options: {
		// 		name: `Nova88`,
		// 		short_name: `starter`,
		// 		start_url: `/`,
		// 		background_color: `#663399`,
		// 		theme_color: `#663399`,
		// 		display: `minimal-ui`
		// 		//icon: `src/styles/Nova88/img`, // This path is relative to the root of the site.
		// 	}
		// }
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
};
