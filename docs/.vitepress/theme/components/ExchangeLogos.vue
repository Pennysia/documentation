<template>
  <div class="exchange-logos-block">
    <div class="exchange-logos" role="list" aria-label="Connected exchanges">
      <div
        v-for="item in exchanges"
        :key="item.id"
        class="exchange-logos__item"
        role="listitem"
        :title="item.name"
      >
        <img
          :src="item.logo"
          :alt="item.name"
          width="28"
          height="28"
          decoding="async"
          fetchpriority="low"
        />
        <span class="exchange-logos__name">{{ item.name }}</span>
      </div>
    </div>
    <p class="exchange-logos__note">Exchanges are listed in alphabetical order.</p>
  </div>
</template>

<script setup lang="ts">
/**
 * Logo tiles from webapp aggregator brands.
 * Served as small 64px PNGs (not the original SVGs — several were 100KB–500KB
 * with embedded bitmaps and made Overview feel slow).
 * Display order is alphabetical by name.
 */
const exchanges = [
  { id: "zerox", name: "0x", logo: "/aggregators/zerox.png" },
  { id: "bebop_aggregation", name: "Bebop Aggregation", logo: "/aggregators/bebop.png" },
  { id: "bebop", name: "Bebop RFQ", logo: "/aggregators/bebop.png" },
  { id: "bitget_swap", name: "Bitget Swap", logo: "/aggregators/bitget_swap.png" },
  { id: "cowswap", name: "CoW Protocol", logo: "/aggregators/cowswap.png" },
  { id: "openocean", name: "De1", logo: "/aggregators/openocean.png" },
  { id: "dodo", name: "DODO", logo: "/aggregators/dodo.png" },
  { id: "enso", name: "Enso", logo: "/aggregators/enso.png" },
  { id: "fabric", name: "Fabric", logo: "/aggregators/fabric.png" },
  { id: "kyberswap", name: "KyberSwap", logo: "/aggregators/kyberswap.png" },
  { id: "lifi", name: "LI.FI", logo: "/aggregators/lifi.png" },
  { id: "liquidmesh", name: "LiquidMesh", logo: "/aggregators/liquidmesh.png" },
  { id: "nordstern", name: "Nordstern", logo: "/aggregators/nordstern.png" },
  { id: "okx_dex", name: "OKX DEX", logo: "/aggregators/okx_dex.png" },
  { id: "portals", name: "Portals", logo: "/aggregators/portals.png" },
  { id: "rango", name: "Rango", logo: "/aggregators/rango.png" },
  { id: "rubic", name: "Rubic", logo: "/aggregators/rubic.png" },
  { id: "sodax", name: "SODAX", logo: "/aggregators/sodax.png" },
  { id: "squid", name: "Squid", logo: "/aggregators/squid.png" },
  { id: "sushi", name: "Sushi", logo: "/aggregators/sushi.png" },
  { id: "uniswap", name: "Uniswap", logo: "/aggregators/uniswap.png" },
  { id: "uniswapx", name: "UniswapX", logo: "/aggregators/uniswap.png" },
  { id: "velora", name: "Velora", logo: "/aggregators/velora.png" },
  { id: "velora-delta", name: "Velora Delta", logo: "/aggregators/velora.png" },
] as const
</script>

<style scoped>
.exchange-logos-block {
  margin: 1.1rem 0 1.5rem;
}

.exchange-logos {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(8.5rem, 1fr));
  gap: 0.65rem 0.5rem;
  margin: 0;
  padding: 0;
}

.exchange-logos__item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 0;
  padding: 0.35rem 0.45rem;
  border-radius: 8px;
  color: var(--vp-c-text-1);
  transition: background-color 0.15s ease;
}

.exchange-logos__item:hover {
  background-color: var(--vp-c-bg-soft);
}

.exchange-logos__item img {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  object-fit: contain;
  border-radius: 6px;
  background: var(--vp-c-bg-alt);
}

.exchange-logos__name {
  font-family: "Poppins", sans-serif;
  font-size: 0.72rem;
  font-weight: 500;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.exchange-logos__note {
  margin: 1.75rem 0 0;
  padding: 0;
  font-family: "Inter", sans-serif;
  font-size: 0.7rem;
  font-weight: 400;
  font-style: italic;
  line-height: 1.45;
  color: var(--vp-c-text-3);
}

@media (max-width: 640px) {
  .exchange-logos {
    grid-template-columns: repeat(auto-fill, minmax(6.5rem, 1fr));
    gap: 0.45rem 0.35rem;
  }

  .exchange-logos__item {
    padding: 0.3rem 0.35rem;
  }

  .exchange-logos__item img {
    width: 24px;
    height: 24px;
  }

  .exchange-logos__name {
    font-size: 0.68rem;
  }
}
</style>
