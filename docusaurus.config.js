// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Root Game Engine Documentation',
  tagline: 'Documentation of the Root Game Engine. A Beginner-friendly game engine',
  favicon: 'img/favicon.ico',
  projectName: "Root-Documentation",
  organizationName: "Root",

  // Set the production url of your site here
  url: 'https://root-doc.pages.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

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
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo_optimized.png',
      navbar: {
        title: 'Root Game Engine',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'Documentation',
            position: 'left',
            label: 'Documentation',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Root Game Engine, Inc. Built with Docusaurus!`,
      },
      metadata: [
        { name: 'google-site-verification', content: 'y8kBlJMCqCFe1PUbWNLR5i_O4p9ViMiYM1F0wr74MMM' },
        { name: 'description', content: 'Documentation of the Root Game Engine. A Beginner-friendly game engine' },
        { name: 'keywords', content: 'documentation, game engine, open source, easy game engine, roblox studio alternative, engines, 2d game engine, wii game engine, cross-platform game engine' },
        { property: 'og:title', content: 'Documentation of the Root Game Engine. A Beginner-friendly game engine' },
        { property: 'og:description', content: 'The best game engine for beginners' },
        { property: 'og:image', content: 'img/logo_optimized.png' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://root-doc.pages.dev' },
      ],
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
