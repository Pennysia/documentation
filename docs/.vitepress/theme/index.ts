import type { Theme, EnhanceAppContext } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./styles/custom.css";
// @ts-ignore - No declaration file for module
import { YouTubeEmbed } from "@miletorix/vitepress-youtube-embed";
import "@miletorix/vitepress-youtube-embed/style.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faCopy, faCheck);

export default {
  extends: DefaultTheme,
  enhanceApp(ctx: EnhanceAppContext) {
    ctx.app.component("YouTubeEmbed", YouTubeEmbed);
    ctx.app.component("FontAwesomeIcon", FontAwesomeIcon);
  },
};
