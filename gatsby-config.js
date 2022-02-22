module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                "name": "pages",
                "path": "./src/pages/"
            },
            __key: "pages"
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                "name": "images",
                "path": `${__dirname}/src/images`
            }
        },
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                defaults: {
                    placeholder: "blurred"
                }
            }
        },
        `gatsby-transformer-sharp`,
    ]
};