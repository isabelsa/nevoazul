const path = require('path')
const siteConfig = require('./content/site-config')

module.exports = {
  siteMetadata: {
    ...siteConfig,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-webpack-size`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./content/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-images`],
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@': path.resolve(__dirname, 'src/'),
        },
        extensions: [],
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /images\/.*\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'nevoazul',
        accessToken:
          'MC5YZkZJY1JFQUFDQUE4MHZq.QT_vv71kE2Dvv70p77-9bifvv73vv70HFAszZwnvv70l77-9fxHvv71bZu-_vXUSJnI',
        schemas: {
          homepage: require('./src/schemas/homepage.json'),
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteConfig.title,
        short_name: siteConfig.shortName,
        start_url: `/`,
        background_color: siteConfig.themeColor,
        theme_color: siteConfig.themeColor,
        display: `minimal-ui`,
        icon: siteConfig.logo,
      },
    },
  ],
}
