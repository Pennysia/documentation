<template>
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
        loading="lazy"
        decoding="async"
      />
      <span class="exchange-logos__name">{{ item.name }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
/** Unique logo tiles from webapp-interface/public/aggregators (shared brand assets). */
const exchanges = [
  { id: "uniswap", name: "Uniswap", logo: "/aggregators/uniswap.svg" },
  { id: "uniswapx", name: "UniswapX", logo: "/aggregators/uniswap.svg" },
  { id: "zerox", name: "0x", logo: "/aggregators/zerox.svg" },
  { id: "cowswap", name: "CoW Protocol", logo: "/aggregators/cowswap.svg" },
  { id: "velora", name: "Velora", logo: "/aggregators/velora.svg" },
  { id: "velora-delta", name: "Velora Delta", logo: "/aggregators/velora.svg" },
  { id: "bebop", name: "Bebop RFQ", logo: "/aggregators/bebop.svg" },
  { id: "bebop_aggregation", name: "Bebop Aggregation", logo: "/aggregators/bebop.svg" },
  { id: "kyberswap", name: "KyberSwap", logo: "/aggregators/kyberswap.svg" },
  { id: "openocean", name: "De1", logo: "/aggregators/openocean.svg" },
  { id: "dodo", name: "DODO", logo: "/aggregators/dodo.svg" },
  { id: "portals", name: "Portals", logo: "/aggregators/portals.svg" },
  { id: "lifi", name: "LI.FI", logo: "/aggregators/lifi.svg" },
  { id: "rango", name: "Rango", logo: "/aggregators/rango.svg" },
  { id: "squid", name: "Squid", logo: "/aggregators/squid.svg" },
  { id: "enso", name: "Enso", logo: "/aggregators/enso.svg" },
  { id: "nordstern", name: "Nordstern", logo: "/aggregators/nordstern.svg" },
  { id: "liquidmesh", name: "LiquidMesh", logo: "/aggregators/liquidmesh.svg" },
  { id: "okx_dex", name: "OKX DEX", logo: "/aggregators/okx_dex.svg" },
  { id: "bitget_swap", name: "Bitget Swap", logo: "/aggregators/bitget_swap.svg" },
  { id: "rubic", name: "Rubic", logo: "/aggregators/rubic.svg" },
  { id: "sushi", name: "Sushi", logo: "/aggregators/sushi.svg" },
  { id: "sodax", name: "SODAX", logo: "/aggregators/sodax.svg" },
  { id: "fabric", name: "Fabric", logo: "/aggregators/fabric.svg" },
] as const
</script>

<style scoped>
.exchange-logos {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(8.5rem, 1fr));
  gap: 0.65rem 0.5rem;
  margin: 1.1rem 0 1.5rem;
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
