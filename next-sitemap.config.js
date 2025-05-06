/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.mrbubbles-src.dev',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/api/*'],
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};
