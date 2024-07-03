import { defineConfig, type DefaultTheme } from "vitepress";

export const en_US = defineConfig({
  title: "DreamCloud",
  description: "Minecraft Pure Survival Server",

  themeConfig: {
    nav: nav(),

    sidebar: {
      "/en-US/guide/": {
        base: "/en-US/guide/",
        items: sidebarGuide(),
      },
      "/en-US/playstyle/": {
        base: "/en-US/playstyle/",
        items: sidebarStyle(),
      },
    },

    footer: {
      message: "Minecraft - DreamCloud",
      copyright: `Copyright © 2023-${new Date().getFullYear()} DreamCloud`,
    },
  },
});

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: "Gameplay Guide",
      link: "/en-US/guide/how-to-play",
      activeMatch: "/en-US/guide/",
    },
    {
      text: "PlayStyle",
      link: "/en-US/playstyle/server-terminal",
      activeMatch: "/en-US/playstyle/",
    },
    { text: "Changelog", link: "/update" },
  ];
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Server Introduction",
      collapsed: false,
      items: [
        { text: "Guide", link: "how-to-play" },
        { text: "Server Rule", link: "server-rule" },
        { text: "Server Contact", link: "server-contact" },
      ],
    },
    {
      text: "Guide",
      collapsed: false,
      items: [
        { text: "Newcomer's Guide", link: "newbie-tutorial" },
        { text: "Mobile Tutorial", link: "mobile-tutorial" },
      ],
    },
    {
      text: "Server Gameplay",
      base: "/en-US/playstyle/",
      link: "server-terminal",
    },
  ];
}

function sidebarStyle(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "System Modules",
      collapsed: false,
      items: [{ text: "Server Terminal", link: "server-terminal" }],
    },
    {
      text: "Benefits",
      collapsed: false,
      items: [{ text: "Daily Shop", link: "daily-shop" }],
    },
    {
      text: "Utility Functions",
      collapsed: false,
      items: [{ text: "Residence System", link: "residence" }],
    },
  ];
}
