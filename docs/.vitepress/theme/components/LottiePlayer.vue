<template>
  <div class="lottie-wrapper" :style="{ maxWidth: maxWidth, backgroundColor: bgColor, borderRadius: '8px' }">
    <canvas ref="canvas" style="width: 100%; height: auto; display: block; border-radius: 8px;"></canvas>
    <button class="lottie-fullscreen-btn" @click="openFullscreen" title="Fullscreen">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/>
        <line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/>
      </svg>
    </button>
  </div>

  <Teleport to="body">
    <div v-if="isFullscreen" class="lottie-overlay" @click.self="closeFullscreen">
      <div class="lottie-overlay-inner">
        <canvas ref="canvasFullscreen" style="width: 100%; height: auto; display: block; border-radius: 8px;"></canvas>
        <button class="lottie-close-btn" @click="closeFullscreen" title="Close">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch, nextTick } from "vue";
import { DotLottie } from "@lottiefiles/dotlottie-web";

const props = withDefaults(
  defineProps<{
    src?: string;
    srcLight?: string;
    srcDark?: string;
    aspectRatio?: number;
    maxWidth?: string;
    bgColor?: string;
    loop?: boolean;
    autoplay?: boolean;
  }>(),
  {
    src: "",
    srcLight: "",
    srcDark: "",
    aspectRatio: 382.81 / 600,
    maxWidth: "100%",
    bgColor: "transparent",
    loop: true,
    autoplay: true,
  }
);

const canvas = ref<HTMLCanvasElement | null>(null);
const canvasFullscreen = ref<HTMLCanvasElement | null>(null);
const isFullscreen = ref(false);
let dotLottie: DotLottie | null = null;
let dotLottieFullscreen: DotLottie | null = null;
let observer: MutationObserver | null = null;

function getActiveSrc(): string {
  if (props.srcLight || props.srcDark) {
    const isDark = document.documentElement.classList.contains("dark");
    return isDark ? props.srcDark : props.srcLight;
  }
  return props.src;
}

function initCanvas(el: HTMLCanvasElement, width: number) {
  const dpr = window.devicePixelRatio || 1;
  el.width = width * dpr;
  el.height = width * dpr * props.aspectRatio;
}

function loadAnimation(el: HTMLCanvasElement, src: string): DotLottie {
  return new DotLottie({
    canvas: el,
    src,
    loop: props.loop,
    autoplay: props.autoplay,
  });
}

onMounted(() => {
  if (!canvas.value) return;
  const containerWidth = canvas.value.parentElement?.clientWidth ?? 1000;
  initCanvas(canvas.value, containerWidth);
  dotLottie = loadAnimation(canvas.value, getActiveSrc());

  if (props.srcLight || props.srcDark) {
    observer = new MutationObserver(() => {
      if (!canvas.value) return;
      dotLottie?.destroy();
      const containerWidth = canvas.value.parentElement?.clientWidth ?? 1000;
      initCanvas(canvas.value, containerWidth);
      dotLottie = loadAnimation(canvas.value, getActiveSrc());
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
  }
});

async function openFullscreen() {
  isFullscreen.value = true;
  await nextTick();
  if (!canvasFullscreen.value) return;
  const width = window.innerWidth * 0.9;
  initCanvas(canvasFullscreen.value, width);
  dotLottieFullscreen = new DotLottie({
    canvas: canvasFullscreen.value,
    src: getActiveSrc(),
    loop: props.loop,
    autoplay: true,
  });
  document.body.style.overflow = "hidden";
}

function closeFullscreen() {
  isFullscreen.value = false;
  dotLottieFullscreen?.destroy();
  dotLottieFullscreen = null;
  document.body.style.overflow = "";
}

onBeforeUnmount(() => {
  observer?.disconnect();
  dotLottie?.destroy();
  dotLottieFullscreen?.destroy();
  document.body.style.overflow = "";
});
</script>

<style scoped>
.lottie-wrapper {
  position: relative;
  width: 100%;
}

.lottie-fullscreen-btn {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 6px;
  padding: 6px 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  opacity: 0;
  transition: opacity 0.2s;
}

.lottie-wrapper:hover .lottie-fullscreen-btn {
  opacity: 1;
}

.lottie-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lottie-overlay-inner {
  position: relative;
  width: 90vw;
  max-width: 1200px;
}

.lottie-close-btn {
  position: absolute;
  top: -40px;
  right: 0;
  background: rgba(255, 255, 255, 0.15);
  color: white;
  border: none;
  border-radius: 6px;
  padding: 6px 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background 0.2s;
}

.lottie-close-btn:hover {
  background: rgba(255, 255, 255, 0.3);
}
</style>
