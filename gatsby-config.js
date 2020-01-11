require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `Tirth Suthar | Portfolio`,
    siteTitleAlt: `Tirth Suthar | Portfolio`,
    siteHeadline: `Tirth Suthar`,
    siteUrl: `https://tirth.netlify.com`,
    siteDescription: `Tirth Suthar's portfolio. Calligraphy, Fonts, Design and much more.`,
    siteLanguage: `en`,
    siteImage: 'lol',
    author: 'Parth'
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia`,
      options: {
        name: 'TirthSuthar',
        location: 'Ahmedabad, India',
        showThemeAuthor: false,
        socialMedia: [
          {
            title: 'Instagram',
            href: 'https://instagram.com/artistrixx?igshid=lk841slb7lok'
          },
          {
            title: 'Twitter',
            href: 'https://twitter.com/Tirthsutharr'
          }
        ]
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tirth Suthar | Portfolio`,
        short_name: `Tirth`,
        description: `Tirth Suthar's portfolio. Calligraphy, Fonts, Design and much more.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3182ce`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
