/*
 * @Description: 项目配置文件
 * @Author: southerly
 * @Date: 2021-02-21 11:35:58
 * @LastEditors: southerly
 * @lastEditTime: Do not edit
 */
const path = require("path");

module.exports = {
    // 站点元数据
    title: "南风逸梦",
    tagline: "提升前端开发技能",
    titleDelimiter: "-",
    url: "https://weixiaorensheng.github.io",
    baseUrl: "/",
    favicon: "img/favicon.ico",
    organizationName: "weixiaorensheng", // Usually your GitHub org/user name.
    projectName: "southerly.cn", // Usually your repo name.
    stylesheets: ["https://fonts.font.im/css?family=Raleway:500,700"],
    themeConfig: {
        // 导航栏配置
        navbar: {
            title: "南风 <前端 /> 工程师",
            logo: {
                alt: "南风",
                src: "img/logo.png",
                srcDark: "img/logo.png",
            },
            items: [
                // 中英切换
                // {
                //     type: "localeDropdown",
                //     position: "left",
                // },
                {
                    to: "/",
                    label: "博客",
                    position: "right",
                    items: [{
                            label: "前端",
                            to: "tags/前端",
                        },
                        {
                            label: "职业",
                            to: "tags/职业",
                        },
                    ],
                },
                {
                    label: "yuque",
                    position: "right",
                    to: "yuque/helloReact",
                },
                {
                    label: "笔记",
                    position: "right",
                    to: "docs/videos/videos-intro",
                },
                {
                    label: "资源导航",
                    position: "right",
                    to: "docs/resources/resources-intro",
                },
                {
                    href: "https://github.com/weixiaorensheng/southerly.cn",
                    label: "GitHub",
                    position: "right",
                },
            ],
        },
        // 页脚配置
        footer: {
            style: "dark",
            links: [{
                    title: "笔记",
                    items: [{
                            label: "语雀",
                            to: "https://www.yuque.com/southerly"
                        },
                        {
                            label: "Second Doc",
                            to: "docs/doc2"
                        }
                    ]
                },
                {
                    title: "Social",
                    items: [{
                            label: "Docusaurus 博客",
                            to: "/",
                        },
                        {
                            label: "GitHub",
                            href: "https://github.com/weixiaorensheng/southerly.cn",
                        },
                        {
                            label: "知乎",
                            href: "https://www.zhihu.com/people/xihe.doc/posts",
                        },
                    ],
                },
                // {
                //     title: "友情链接",
                //     items: [{
                //             label: "yuqing521のblog",
                //             to: "https://yuqing521.github.io/",
                //         },
                //         {
                //             label: "lookroot的个人空间",
                //             to: "https://www.lookroot.cn/",
                //         },
                //     ],
                // },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} 南风  Built with Docusaurus.<p><a href="http://beian.miit.gov.cn/">冀ICP备14007097号-3</a></p>`,
        },
        prism: {
            darkTheme: require("prism-react-renderer/themes/vsDark"),
            defaultLanguage: "javascript",
        },
        googleAnalytics: {
            trackingID: "UA-118572241-1",
            anonymizeIP: true, // Should IPs be anonymized?
        },
        gtag: {
            trackingID: "G-6PSESJX0BM",
            // Optional fields.
            anonymizeIP: true, // Should IPs be anonymized?
        },
    },
    // 预设配置
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    // Sidebars filepath relative to the site dir.
                    sidebarPath: require.resolve("./sidebars.js"),
                    editUrl: "https://github.com/weixiaorensheng/southerly.cn/tree/master/docs",
                },
                blog: {
                    path: "./blog",
                    routeBasePath: "/",
                    blogSidebarTitle: "近期文章",
                    feedOptions: {
                        type: "all",
                        title: "前端工程师",
                        copyright: `Copyright © ${new Date().getFullYear()} 南风 Built with Docusaurus.<p><a href="http://beian.miit.gov.cn/">冀ICP备14007097号-3</a></p>`,
                    },
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
                sitemap: {
                    cacheTime: 600 * 1000, // 600 sec - cache purge period
                    changefreq: "daily",
                    priority: 0.5,
                },
            },
        ],
    ],
    // 主题配置
    themes: ["@docusaurus/theme-live-codeblock"], // @docusaurus/theme-live-codeblock
    // 插件配置
    plugins: [
        path.resolve(__dirname, "./src/plugin/plugin-baidu-analytics"),
        path.resolve(__dirname, "./src/plugin/plugin-baidu-push"),
    ],
    i18n: {
        defaultLocale: "zh-CN",
        locales: ["zh-CN", "en"],
        localeConfigs: {
            "zh-CN": {
                label: "中文",
            },
            en: {
                label: "English",
            },
        },
    },
};