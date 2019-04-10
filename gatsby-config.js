module.exports = {
  pathPrefix: "/js-me-anything",
  siteMetadata: {
    title: `JS Me Anything`,
    description: `A place to test your JavaScript skills. Prepare yourself for the next interview.`,
    author: `@devmarchesin`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#f9ce00`,
        theme_color: `#f9ce00`,
        display: `minimal-ui`,
        icon: `src/images/js-logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './src', // <- will be used as a root dir
        aliases: {
          '@components': './components', // <- will become ./src/components
          '@layouts': './layouts', // <- will become ./src/layouts
          '@context': './context', // <- will become ./src/context
          '@utils': './utils', // <- will become ./src/utils
          static: {
            root: './public', // <- will used as this alias' root dir
            alias: './static' // <- will become ./public/static
          }
        }
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
