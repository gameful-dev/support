// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Gameful Developements',
  tagline: 'Troubleshooting and FAQs',
  url: 'https://support.gameful.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'gameful-dev', // Usually your GitHub org/user name.
  projectName: 'support', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/gameful-dev/support/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/gameful-dev/support/tree/main/',
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
        title: 'Gameful Support',
        // logo: {
        //   alt: 'Gameful Developments',
        //   src: 'img/logo.svg',
        // },
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/blog', label: 'Dev logs', position: 'left'},
          {
            href: 'https://www.gameful.dev/',
            label: 'Main website',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs by game',
            items: [
              {
                label: 'Tonalities (2023)',
                to: '/docs/category/tonalities',
              },
            ],
          },
          {
            title: 'Community links',
            items: [
              {
                label: 'Our Games on Steam',
                href: 'https://store.steampowered.com/search/?publisher=Gameful%20Developments',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/BypB7jMRWW',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/gameful-dev',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Dev Logs',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/gameful-dev',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Gameful Developments.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
