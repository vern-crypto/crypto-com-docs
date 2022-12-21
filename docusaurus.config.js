// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Crypto.com Docs",
  tagline: "Developer Documentation Center",
  url: "https://vern-crypto.github.io",
  baseUrl: "/crypto-com-docs",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon-32x32.png",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "vern-crypt", // Usually your GitHub org/user name.
  projectName: "crypto-com-docs", // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Crypto.com Docs",
        logo: {
          alt: "Crypto.com Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            label: "Development",
            type: "dropdown",
            position: "left",
            items: [
              {
                type: "doc",
                docId: "tutorial/intro",
                label: "Tutorial",
              },
              {
                label: "DeFi Connect SDK",
                type: "doc",
                docId: "deficonnect/deficonnect-overview",
              },
              //   {
              //     label: "APIs",
              //     type: "doc",
              //     docId: "accessibilityinfo",
              //   },
              //   {
              //     label: "Architecture",
              //     type: "doc",
              //     docId: "architecture-overview",
              //     docsPluginId: "architecture",
              //   },
            ],
          },
          //   {
          //     type: "doc",
          //     docId: "intro",
          //     position: "left",
          //     label: "Tutorial",
          //   },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/vern-crypto/crypto-com-docs",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/vern-crypto/crypto-com-docs",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Crypto.com, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
