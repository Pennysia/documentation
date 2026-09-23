<script setup lang="ts">
import { computed, onMounted, onBeforeUnmount, ref, watch } from "vue";
import { useData } from "vitepress";

type AppearanceMode = "auto" | "light" | "dark";
type Preference = "system" | "light" | "dark";

const VP_STORAGE_KEY = "vitepress-theme-appearance";
const APP_STORAGE_KEY = "pennysia-theme";

const { isDark } = useData();
const preference = ref<Preference>("system");

const options: { value: Preference; label: string; mode: AppearanceMode }[] = [
  { value: "system", label: "Auto", mode: "auto" },
  { value: "light", label: "Light mode", mode: "light" },
  { value: "dark", label: "Dark mode", mode: "dark" },
];

const activeIndex = computed(() => {
  const index = options.findIndex((option) => option.value === preference.value);
  return index < 0 ? 0 : index;
});

function systemPrefersDark() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function resolveDark(pref: Preference) {
  if (pref === "system") return systemPrefersDark();
  return pref === "dark";
}

function readPreference(): Preference {
  try {
    const vp = localStorage.getItem(VP_STORAGE_KEY);
    if (vp === "auto") return "system";
    if (vp === "light" || vp === "dark") return vp;

    const app = localStorage.getItem(APP_STORAGE_KEY);
    if (app === "system" || app === "light" || app === "dark") return app;
  } catch {
    /* ignore */
  }
  return "system";
}

function persist(pref: Preference) {
  const mode: AppearanceMode = pref === "system" ? "auto" : pref;
  try {
    localStorage.setItem(VP_STORAGE_KEY, mode);
    localStorage.setItem(APP_STORAGE_KEY, pref);
  } catch {
    /* ignore */
  }
}

function apply(pref: Preference) {
  preference.value = pref;
  persist(pref);
  const dark = resolveDark(pref);
  document.documentElement.classList.toggle("dark", dark);
  // Keep VitePress reactive isDark aligned for any consumers.
  if (isDark.value !== dark) {
    isDark.value = dark;
  }
  // useDark may coerce matching system color to "auto"; re-assert storage.
  persist(pref);
}

function setPreference(pref: Preference) {
  apply(pref);
}

let media: MediaQueryList | null = null;
function onSystemChange() {
  if (preference.value === "system") apply("system");
}

onMounted(() => {
  apply(readPreference());
  media = window.matchMedia("(prefers-color-scheme: dark)");
  media.addEventListener("change", onSystemChange);
});

onBeforeUnmount(() => {
  media?.removeEventListener("change", onSystemChange);
});

watch(
  () => isDark.value,
  (dark) => {
    // External toggles (if any) — keep segment label honest for forced modes.
    if (preference.value === "system") return;
    const expected = preference.value === "dark";
    if (dark !== expected) {
      preference.value = dark ? "dark" : "light";
      persist(preference.value);
    }
  },
);
</script>

<template>
  <div class="appearance-segment" role="group" aria-label="Appearance">
    <span
      class="appearance-segment__thumb"
      aria-hidden="true"
      :style="{ transform: `translateX(calc(${activeIndex} * (100% + 0.25rem)))` }"
    />
    <button
      v-for="option in options"
      :key="option.value"
      type="button"
      class="appearance-segment__btn"
      :class="{ 'appearance-segment__btn--active': preference === option.value }"
      :aria-label="option.label"
      :aria-pressed="preference === option.value"
      @click="setPreference(option.value)"
    >
      <!-- Laptop (system) -->
      <svg
        v-if="option.value === 'system'"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <rect width="18" height="12" x="3" y="4" rx="2" ry="2" />
        <line x1="2" x2="22" y1="20" y2="20" />
      </svg>
      <!-- Sun (light) -->
      <svg
        v-else-if="option.value === 'light'"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path
          d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
      <!-- Moon (dark) -->
      <svg
        v-else
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
    </button>
  </div>
</template>

<style scoped>
.appearance-segment {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.125rem;
  border-radius: 999px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
}

.appearance-segment__thumb {
  pointer-events: none;
  position: absolute;
  top: 0.125rem;
  left: 0.125rem;
  width: 1.375rem;
  height: 1.375rem;
  border-radius: 999px;
  background: var(--vp-c-text-1);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12);
  transition: transform 200ms ease-out;
}

.appearance-segment__btn {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.375rem;
  height: 1.375rem;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: color 200ms ease;
}

.appearance-segment__btn:hover {
  color: var(--vp-c-text-1);
}

.appearance-segment__btn--active {
  color: var(--vp-c-bg);
}

.appearance-segment__btn--active:hover {
  color: var(--vp-c-bg);
}

.appearance-segment__btn svg {
  width: 0.8125rem;
  height: 0.8125rem;
  display: block;
}
</style>
