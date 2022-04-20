module.exports = {
  lang: 'zh-CN',
  title: '腾讯地图 vue 组件',
  description: '腾讯地图 vue 组件 tmap',
  themeConfig: {
    lastUpdated: 'Last Updated',
    nav: [
      { text: '文档', link: '/guide/', activeMatch: '^/$|^/guide|^/api/' },
      {
        text: '仓库地址',
        link: '',
      },
    ],

    sidebar: {
      '/guide/': getGuideSidebar(),
      '/api/': getGuideSidebar(),
      '/config/': getConfigSidebar(),
    },
  },
};

function getGuideSidebar() {
  return [
    {
      text: '基础',
      children: [
        { text: 'demo', link: '/guide/' },
        { text: '安装', link: '/guide/install' },
        { text: '快速上手', link: '/guide/getting-started' },
        { text: '常见问题', link: '/guide/qa' },
      ],
    },
    {
      text: '组件',
      children: [
        { text: '地图', link: '/api/map' },
        { text: '矢量图形事件', link: '/api/vector-events' },
        { text: '折线', link: '/api/multi-polyline' },
        { text: '多边形', link: '/api/multi-polygon' },
        { text: '多边形编辑', link: '/api/polygon-editor' },
        { text: '圆形标记', link: '/api/multi-circle' },
        { text: '点标记', link: '/api/multi-marker' },
        { text: '点聚合', link: '/api/marker-cluster' },
        { text: '文本标注', link: '/api/multi-label' },
        { text: 'DOM覆盖物', link: '/api/dom-overlay' },
        { text: '信息提示窗', link: '/api/info-window' },
      ],
    },
  ];
}

function getConfigSidebar() {
  return [
    {
      text: 'App Config',
      children: [{ text: 'Basics', link: '/config/basics' }],
    },
    {
      text: 'Theme Config',
      children: [
        { text: 'Homepage', link: '/config/homepage' },
        { text: 'Algolia Search', link: '/config/algolia-search' },
        { text: 'Carbon Ads', link: '/config/carbon-ads' },
      ],
    },
  ];
}
