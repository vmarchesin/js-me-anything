module.exports = {
  pathPrefix: '/js-me-anything',
  siteMetadata: {
    title: 'JS Me Anything',
    description:
      'A place to test your JavaScript skills. Prepare yourself for the next interview.',
    author: '@devmarchesin',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#f9ce00',
        theme_color: '#f9ce00',
        display: 'minimal-ui',
        icon: 'src/images/js-logo.png',
      },
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [
          'UA-141323871-1', // Google Analytics / GA
        ],
        gtagConfig: {
          anonymize_ip: true,
          send_page_view: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: true,
          respectDNT: true,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './src',
        aliases: {
          '@components': './components',
          '@events': './events',
          '@layouts': './layouts',
          '@graphql': './graphql',
          '@pages': './pages',
          '@redux': './redux',
          '@utils': './utils',
          static: {
            root: './public',
            alias: './static',
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
  ],
};
