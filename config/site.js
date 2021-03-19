module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Мозжинка', // Navigation and Site Title
  titleAlt: 'Мозжинка', // Title for JSONLD
  description: 'Поселок Мозжинка',
  url: 'https://mozhinka.netlify.app', // Domain of your site. No trailing slash!
  siteUrl: 'https://mozhinka.netlify.app', // url + pathPrefix
  siteLanguage: 'Ru', // Language Tag on <html> element
  logo: 'static/logo/logo.png', // Used for SEO
  banner: 'static/logo/banner.png',
  // JSONLD / Manifest
  favicon: 'static/logo/favicon.png', // Used for manifest favicon generation
  shortName: 'Мозжинка', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Bolshiyanov', // Author for schemaORGJSONLD
  themeColor: '#3e7bf2',
  backgroundColor: '#d3e0ff',
  twitter: '@bolshiyanov', // Twitter Username
};
