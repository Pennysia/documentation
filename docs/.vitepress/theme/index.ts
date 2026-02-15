import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './styles/custom.css'
import { YouTubeEmbed } from '@miletorix/vitepress-youtube-embed' // [!code ++]
import '@miletorix/vitepress-youtube-embed/style.css' // [!code ++]
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCopy } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCopy)

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    ctx.app.component('YouTubeEmbed', YouTubeEmbed) // [!code ++]
    ctx.app.component('FontAwesomeIcon', FontAwesomeIcon)
  }
}


