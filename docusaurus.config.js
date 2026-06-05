// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Golden Glades Middle',
  tagline: 'Where Future Leaders Strive',
  favicon: 'img/ggms-logo.png',

  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: 'https://d4rk-kel.github.io',
  baseUrl: '/ggm-handbook/',
  organizationName: 'GoldenGladesMiddle', // Usually your GitHub org/user name.
  projectName: 'ggm-handbook', // Usually your repo name.
  trailingSlash: false,
  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
          routeBasePath: '/', // Routes documentation straight to your homepage URL
          // editUrl line has been completely removed to delete the "Edit this page" button
        },
        blog: false, // Disables the blog template functionality completely
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/ggms-logo.png',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Golden Glades Middle',
        logo: {
          alt: 'Golden Glades Middle Logo',
          src: 'img/ggms-logo.png',
        },
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/goldengladesms',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/wz44AhvSnD',
              },
            ],
          },
          {
            title: 'Careers',
            items: [
              {
                label: 'Staff',
                href: 'https://forms.gle/49WL2MwZDhPvsxy57',
              },
              {
                label: 'Counselor',
                href: 'https://forms.gle/Bzfhqzb6zu1CsPAi8',
              },
              {
                label: 'Administrator',
                href: 'https://forms.gle/uLvUbXQemCSjfWKC6',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Golden Glades Middle. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;