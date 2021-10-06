const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'echo "Hello World ! "',
  tagline: 'Dev et autre',
  url: 'https://famillepaul.fr',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/initiales_small.png',
  organizationName: 'bastienpaulfr', // Usually your GitHub org/user name.
  projectName: 'bastienpaulfr.github.io', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/bastienpaulfr/bastienpaulfr.github.io/edit/master/docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/bastienpaulfr/bastienpaulfr.github.io/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'My Site Logo',
          src: 'img/initiales.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'treessence/index',
            position: 'left',
            label: 'Treessence',
          },
          {
            type: 'doc',
            docId: 'countries/index',
            position: 'left',
            label: 'AndroidCountries',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/bastienpaulfr/bastienpaulfr.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Treessence',
                to: '/docs/treessence/index',
              },{
                label: 'AndroidCountries',
                to: '/docs/countries/index',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/users/1442734/bipi',
              },
              {
                label: 'Github',
                href: 'https://github.com/bastienpaulfr',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Bastien PAUL, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
