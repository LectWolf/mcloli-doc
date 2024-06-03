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
      {
        text: 'Gameplay Guide',
        link: '/en/guide/how-to-play',
        activeMatch: '/en/guide/'
      },
      {
        text: 'Changelog',
        link: '/update',
      },
    ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Server Introduction',
            collapsed: false,
            items: [
                {
                    text: 'Guide',
                    link: 'how-to-play'
                },
                {
                    text: 'Server Rule',
                    link: 'server-rule'
                },
                {
                    text: 'Server Contact',
                    link: 'server-contact'
                },
            ]
        }
    ]
}