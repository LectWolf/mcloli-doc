import { defineConfig } from 'vitepress'
import { search as zhSearch } from './zh.mjs'

export const shared = defineConfig({
    lastUpdated: true,
    cleanUrls: true,
    metaChunk: true,

    head: [
        ['link',{rel: 'icon',type: 'image/svg+xml',href: '/dream-logo-mini.svg'}],
        ['link',{rel: 'icon',type: 'image/png', href: '/dream-logo-mini.png'}],
        ['meta',{name: 'theme-color', content: '#5f67ee'}],
        ['meta',{property: 'og:type',content: 'website'}],
        ['meta',{property: 'og:locale',content: 'en'}],
        ['meta',{property: 'og:title',content: 'DreamCloud | A Minecraft Server'}],
        ['meta',{property: 'og:site_name',content: 'DreamCloud'}],
        ['meta',{property: 'og:image',content: 'https://mcloli.cn/dream-og.jpg'}],
        ['meta',{property: 'og:url',content: 'https://mcloli.cn/'}]

    ],

    themeConfig: {
        logo: { src: '/dream-logo-mini.svg',width: 24, height: 24},

        search: {
            provider: 'local',
            options: {
              locales: { ...zhSearch}
            }
          }
    }
})