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
        icon: `src/images/js-logo.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './src',
        aliases: {
          '@graphql': './graphql',
          '@components': './components',
          '@layouts': './layouts',
          '@redux': './redux',
          '@utils': './utils',
          static: {
            root: './public',
            alias: './static',
          },
        },
      },
    },
  ],
};
