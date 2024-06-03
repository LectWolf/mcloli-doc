import { defineConfig, type DefaultTheme } from "vitepress";

export const zh = defineConfig({
    lang: 'zh-Hans',
    title: '次梦幻境',
    description: 'Minecraft 纯净生存服务器',

    themeConfig: {
        nav: nav(),

        sidebar: {
            '/guide/': {
                base: '/guide/',
                items: sidebarGuide(),
            }
        },


        footer: {
            message: 'Minecraft - 次梦幻境',
            copyright: `版权所有 © 2023-${new Date().getFullYear()} 次梦幻境`,
        },

        docFooter: {
            prev: '上一页',
            next: '下一页'
        },

        outline: {
            label: '页面导航'
        },

        lastUpdated: {
            text: '最后更新于',
            formatOptions: {
                dateStyle: 'short',
                timeStyle: 'medium'
            }
        },

        langMenuLabel: '多语言',
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式'
    },
})


function nav(): DefaultTheme.NavItem[] {
    return [
      {
        text: '游玩指北',
        link: '/guide/how-to-play',
        activeMatch: '/guide/'
      },
      {
        text: '更新日志',
        link: '/update'
      },
    ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: '服务器简介',
            collapsed: false,
            items: [
                {
                    text: '游玩指北',
                    link: 'how-to-play'
                },
                {
                  text: '服务器规则',
                  link: 'server-rule'
                },
                {
                  text: '联系我们',
                  link: 'server-contact'
                }
            ]
        }
    ]
}


export const search: DefaultTheme.AlgoliaSearchOptions['locales'] = {
    root: {
      placeholder: '搜索文档',
      translations: {
        button: {
          buttonText: '搜索文档',
          buttonAriaLabel: '搜索文档'
        },
        modal: {
          searchBox: {
            resetButtonTitle: '清除查询条件',
            resetButtonAriaLabel: '清除查询条件',
            cancelButtonText: '取消',
            cancelButtonAriaLabel: '取消'
          },
          startScreen: {
            recentSearchesTitle: '搜索历史',
            noRecentSearchesText: '没有搜索历史',
            saveRecentSearchButtonTitle: '保存至搜索历史',
            removeRecentSearchButtonTitle: '从搜索历史中移除',
            favoriteSearchesTitle: '收藏',
            removeFavoriteSearchButtonTitle: '从收藏中移除'
          },
          errorScreen: {
            titleText: '无法获取结果',
            helpText: '你可能需要检查你的网络连接'
          },
          footer: {
            selectText: '选择',
            navigateText: '切换',
            closeText: '关闭',
            searchByText: '搜索提供者'
          },
          noResultsScreen: {
            noResultsText: '无法找到相关结果',
            suggestedQueryText: '你可以尝试查询',
            reportMissingResultsText: '你认为该查询应该有结果？',
            reportMissingResultsLinkText: '点击反馈'
          }
        }
      }
    }
  }