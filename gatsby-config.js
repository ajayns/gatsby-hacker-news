module.exports = {
  siteMetadata: {
    title: 'Gatsby Hacker News',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    /*
     * Gatsby's data processing layer begins with “source”
     * plugins.  You can source data nodes from anywhere but
     * most sites, like Gatsbygram, will include data from
     * the filesystem so we start here with
     * “gatsby-source-filesystem”.
     *
     * A site can have as many instances of
     * gatsby-source-filesystem as you need.  Each plugin
     * instance is configured with a root path where it then
     * recursively reads in files and adds them to the data
     * tree.
     */
    'gatsby-source-hacker-news',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Hacker News`,
        short_name: `Gatsby Hacker News`,
        start_url: `/`,
        background_color: `#ff6600`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
      },
    },
    // This plugin generates a service worker and AppShell
    // html file so the site works offline and is otherwise
    // resistant to bad networks. Works with almost any
    // site!
    `gatsby-plugin-offline`
  ],
};
