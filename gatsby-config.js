module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `adrw // Andrew Alexander`,
    // Default title of the page
    siteTitleAlt: `adrw // Andrew Alexander`,
    // Can be used for e.g. JSONLD
    siteHeadline: `adrw // Andrew Alexander`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://adrw.xyz`,
    // Used for SEO
    siteDescription: `adrw // Andrew Alexander`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/img/logos/h.png`,
    // Twitter Handle
    author: `Andrew Alexander`
  },
  plugins: [
    {
      resolve: "@lekoarts/gatsby-theme-minimal-blog",
      options: {
        // Date format
        formatString: "YYYY-MM-DD",
        // Links displayed in the header on the right side
        externalLinks: [
          {
            name: `Kitchen Alexander`,
            url: `https://kitchen.alxdr.ca`
          }
        ],
        // Navigation links
        navigation: [
          {
            title: `Now`,
            slug: `/now`
          },
          {
            title: `Blog`,
            slug: `/blog`
          },
          {
            title: `Tags`,
            slug: `/tags`
          },
        ],
        // Title for RSS feed
        feedTitle: `adrw // Andrew Alexander`
      }
    },
    {
      resolve: "gatsby-plugin-ackee-tracker",
      options: {
          // Domain ID found when adding a domain in the admin panel.
          domainId: "ddd760a2-069f-48f7-8d22-c8eed4476493",
          // URL to Server eg: "https://analytics.test.com".
          server: "https://ackee.adrw.xyz",
          // Disabled analytic tracking when running locally
          // IMPORTANT: Set this back to false when you are done testing
          ignoreLocalhost: true,
          // If enabled it will collect info on OS, BrowserInfo, Device  & ScreenSize
          // False due to detailed information being personalized:
          // https://github.com/electerious/Ackee/blob/master/docs/Anonymization.md#personal-data
          detailed: false
      }
    },
    {
      resolve: "gatsby-plugin-matomo",
      options: {
        siteId: "1",
        matomoUrl: "https://matomo.adrw.xyz",
        siteUrl: "https://adrw.xyz"
      }
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `adrw // Andrew Alexander`,
        short_name: `adrw`,
        description: `adrw // Andrew Alexander`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`
          }
        ]
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`
  ]
}
