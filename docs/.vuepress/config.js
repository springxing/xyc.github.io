module.exports = {
  title: '小洋葱',
  description: '描述',
  base: '/', // 这是部署到github相关的配置 下面会讲
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', { rel: 'icon', href: '/assets/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    logo: '/assets/user-logo.jpeg',
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    navbar: true,
    nav:[
      { text: 'Home', link: '/' }, // 内部链接 以docs为根目录
      { text: '博客', link: 'https://blog.csdn.net/u013791936?spm=1000.2115.3001.5343' }, // 外部链接
      // 下拉列表
      {
        text: '前端技术',
        path:'/front-end/',
        items: [
          { text: 'Vue', link: '/front-end/vue/' },
        ]
      },
      {
        text: '后端技术',
        items: [
          {text: 'Java', link: '/back-end/java' },
          {text: 'Python',link: '/back-end/python'},
        ]
      },
      { text: '架构', link: '/architecture' },
    ],//导航栏
    sidebar: 'auto', // 侧边栏配置
    sidebar:{
      // docs文件夹下面的accumulate文件夹 文档中md文件 书写的位置(命名随意)
      '/front-end/': [
        {
          title: '前端技术',
          path:'/front-end/',
          collapsable: true,
          children: [
            {
              title: 'vue',
              path:'/front-end/vue/',
              collapsable: true,
              children: [
                {title: 'vue概述',path:'/front-end/vue/'},
                {title: 'vue.js基础',path:'/front-end/vue/01.basic'},
                {title: 'vue-cli相关',path:'/front-end/vue/02.vue-cli'},
                {title: 'html/css相关',path:'/front-end/vue/03.html-css'},
                {title: 'js/es6相关',path:'/front-end/vue/04.js'},
                {title: '插件扩展',path:'/front-end/vue/05.plugs'},
              ]
            },
            {
              title: 'react',
              path:'/front-end/react/',
              collapsable: true,
              children: [
                {title: 'react概述',path:'/front-end/react/'},
              ],
            },
            {
              title: 'ES6',
              path:'/front-end/es6/',
              collapsable: true,
              children: [
                {title: 'es6概述',path:'/front-end/es6/'},
              ]
            },
            {
              title: 'echart',
              path:'/front-end/echart/',
              collapsable: true,
              children: [
                {title: 'echart概述',path:'/front-end/echart/'},
              ]
            },
          ],
        },

      ],
    },//侧边栏

    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    // displayAllHeaders: true, // 默认值：false
    // search: false, //搜索  tag
    // searchMaxSuggestions: 10,

    nextLinks: true,
    prevLinks: true,
  },
};