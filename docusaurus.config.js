const path = require("path");

module.exports = {
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
        navbar: {
            title: "南风<前端/>工程师",
            logo: {
                alt: "南风",
                src: "img/logo.png",
                srcDark: "img/logo.png",
            },
            items: [{
                    type: "localeDropdown",
                    position: "left",
                },
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
                        {
                            label: "健康",
                            to: "tags/健康",
                        },
                    ],
                },
                {
                    label: "语雀",
                    position: "right",
                    to: "https://www.yuque.com/southerly/",
                },
                {
                    label: "笔记",
                    position: "right",
                    to: "docs/videos/videos-intro",
                },
                {
                    label: "课程",
                    position: "right",
                    items: [{
                        label: "React 即时通信 UI 开发实战",
                        to: "docs/course/react-chat-ui/react-chat-ui",
                    }, ],
                },
                {
                    label: "教程",
                    position: "right",
                    items: [{
                        label: "CSS",
                        to: "docs/css/box-model/box-model",
                    }, ],
                },
                {
                    label: "资源导航",
                    position: "right",
                    to: "docs/resources/resources-intro",
                },
                {
                    href: "https://www.itnanls.cn",
                    label: "后端学习",
                    position: "right",
                },
                {
                    href: "https://github.com/weixiaorensheng/southerly.cn",
                    label: "GitHub",
                    position: "right",
                },
            ],
        },
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
                // {
                //   title: "Community",
                //   items: [
                //     {
                //       label: "Stack Overflow",
                //       href: "https://stackoverflow.com/questions/tagged/docusaurus"
                //     },
                //     {
                //       label: "Discord",
                //       href: "https://discordapp.com/invite/docusaurus"
                //     }
                //   ]
                // },
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
                            label: "Bilibili 哔哩哔哩",
                            href: "https://space.bilibili.com/302954484",
                        },
                        {
                            label: "知乎",
                            href: "https://www.zhihu.com/people/xihe.doc/posts",
                        },
                        {
                            label: "腾讯课堂",
                            href: "https://ke.qq.com/course/2839093?tuin=3850fdc6",
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
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    editUrl: "https://github.com/zxuqian/zxuqian.cn/tree/master/docs",
                },
                blog: {
                    path: "./blog",
                    routeBasePath: "/",
                    blogSidebarTitle: "近期文章",
                    feedOptions: {
                        type: "all",
                        title: "峰华前端工程师",
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
    themes: ["@docusaurus/theme-live-codeblock"],
    plugins: [
        path.resolve(__dirname, "./src/plugin/plugin-baidu-analytics"),
        path.resolve(__dirname, "./src/plugin/plugin-baidu-push"),
        // "@docusaurus/plugin-ideal-image",
        // path.resolve(__dirname, "./src/plugin/plugin-google-adsense"),
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