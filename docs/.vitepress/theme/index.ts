import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './styles/custom.css'
import { YouTubeEmbed } from '@miletorix/vitepress-youtube-embed' // [!code ++]
import '@miletorix/vitepress-youtube-embed/style.css' // [!code ++]

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    ctx.app.component('YouTubeEmbed', YouTubeEmbed) // [!code ++]
  }
}


