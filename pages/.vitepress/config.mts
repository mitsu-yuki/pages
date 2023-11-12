import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "mitsu-yuki's page",
  description: "mitsu-yuki's page",
  lang: 'ja-JP',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: {
      '/': [
        {
          text: 'Home',
          items: [
            { text: 'profile', link: '/profile' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mitsu-yuki' }
    ]
  }
})
