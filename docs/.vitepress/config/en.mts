import { defineConfig, type DefaultTheme } from "vitepress";

export const en = defineConfig({
    lang: 'en-US',
    title: 'DreamCloud',
    description: 'Minecraft Pure Survival Server',

    themeConfig: {
        nav: nav(),

        sidebar: {
            '/en/guide/': {
                base: '/en/guide/',
                items: sidebarGuide(),
            },
            '/en/playstyle/': {
                base: '/en/playstyle/',
                items: sidebarStyle(),
            }
        },


        footer: {
            message: 'Minecraft - DreamCloud',
            copyright: `Copyright © 2023-${new Date().getFullYear()} DreamCloud`,
        }
    },
})


function nav(): DefaultTheme.NavItem[] {
    return [
      {text: 'Gameplay Guide',link: '/en/guide/how-to-play',activeMatch: '/en/guide/'},
      {text: 'PlayStyle',link: '/en/playstyle/server-terminal',activeMatch: '/en/playstyle/'},
      {text: 'Changelog',link: '/update',},
    ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Server Introduction',
            collapsed: false,
            items: [
                {text: 'Guide',link: 'how-to-play'},
                {text: 'Server Rule',link: 'server-rule'},
                {text: 'Server Contact',link: 'server-contact'},
            ]
        },
        {
            text: 'Guide',
            collapsed: false,
            items: [
            {text: "Newcomer's Guide", link: "newbie-tutorial"},
            {text: "Mobile Tutorial", link: "mobile-tutorial"}
            ]
        },
        {text: "Server Gameplay",base: "/playstyle/",link: "server-terminal"
        }
        
          
    ]
}

function sidebarStyle(): DefaultTheme.SidebarItem[] {
    return [
      {
        text: 'System Modules',
        collapsed: false,
        items: [
          { text: 'Server Terminal', link: 'server-terminal' },
          { text: 'Residence System', link: 'residence' },
          { text: 'Daily Shop', link: 'daily-shop' }
        ]
      }
    ];
  }
  