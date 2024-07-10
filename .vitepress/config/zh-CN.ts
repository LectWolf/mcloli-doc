import { defineConfig, type DefaultTheme } from "vitepress";

export const zh_CN = defineConfig({
  title: "次梦幻境",
  description: "Minecraft 纯净生存服务器",

  themeConfig: {
    nav: nav(),

    sidebar: {
      "/zh-CN/guide/": {
        base: "/zh-CN/guide/",
        items: sidebarGuide(),
      },
      "/zh-CN/playstyle/": {
        base: "/zh-CN/playstyle/",
        items: sidebarStyle(),
      },
    },

    footer: {
      message: "Minecraft - 次梦幻境",
      copyright: `版权所有 © 2023-${new Date().getFullYear()} 次梦幻境`,
    },

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    outline: {
      label: "页面导航",
    },

    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
  },
});

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: "游玩指北",
      link: "/zh-CN/guide/how-to-play",
      activeMatch: "/zh-CN/guide/",
    },
    {
      text: "玩法",
      link: "/zh-CN/playstyle/server-terminal",
      activeMatch: "/zh-CN/playstyle/",
    },
    { text: "更新日志", link: "/zh-CN/update" },
  ];
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "服务器简介",
      collapsed: false,
      items: [
        { text: "游玩指北", link: "how-to-play" },
        { text: "服务器规则", link: "server-rule" },
        { text: "常用命令", link: "common-command" },
        { text: "皮肤设置", link: "skin-setup" },
        { text: "联系我们", link: "server-contact" },
      ],
    },
    {
      text: "游玩指南",
      collapsed: false,
      items: [
        { text: "萌新教程", link: "newbie-tutorial" },
        { text: "手机端教程", link: "mobile-tutorial" },
      ],
    },
    { text: "服务器玩法", base: "zh-CN/playstyle/", link: "server-terminal" },
  ];
}

function sidebarStyle(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "系统模块",
      collapsed: false,
      items: [{ text: "幻境终端", link: "server-terminal" }],
    },
    {
      text: "福利",
      collapsed: false,
      items: [{ text: "每日商店", link: "daily-shop" }],
    },
    {
      text: "实用功能",
      collapsed: false,
      items: [{ text: "领地系统", link: "residence" }],
    },
  ];
}

export const search: DefaultTheme.AlgoliaSearchOptions["locales"] = {
  "zh-CN": {
    placeholder: "搜索文档",
    translations: {
      button: {
        buttonText: "搜索文档",
        buttonAriaLabel: "搜索文档",
      },
      modal: {
        searchBox: {
          resetButtonTitle: "清除查询条件",
          resetButtonAriaLabel: "清除查询条件",
          cancelButtonText: "取消",
          cancelButtonAriaLabel: "取消",
        },
        startScreen: {
          recentSearchesTitle: "搜索历史",
          noRecentSearchesText: "没有搜索历史",
          saveRecentSearchButtonTitle: "保存至搜索历史",
          removeRecentSearchButtonTitle: "从搜索历史中移除",
          favoriteSearchesTitle: "收藏",
          removeFavoriteSearchButtonTitle: "从收藏中移除",
        },
        errorScreen: {
          titleText: "无法获取结果",
          helpText: "你可能需要检查你的网络连接",
        },
        footer: {
          selectText: "选择",
          navigateText: "切换",
          closeText: "关闭",
          searchByText: "搜索提供者",
        },
        noResultsScreen: {
          noResultsText: "无法找到相关结果",
          suggestedQueryText: "你可以尝试查询",
          reportMissingResultsText: "你认为该查询应该有结果？",
          reportMissingResultsLinkText: "点击反馈",
        },
      },
    },
  },
};
