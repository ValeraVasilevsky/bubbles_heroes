<template>
  <div id="ton-connect" @click="openModal" />
</template>

<script setup lang="ts">
import { TonConnectUI } from "@tonconnect/ui";

import { onMounted, ref } from "vue";

// constants
const tonConnectUi = ref<TonConnectUI | null>(null);

// methods
const initWallet = async (): Promise<void> => {
  tonConnectUi.value = new TonConnectUI({
    manifestUrl:
      "https://valeravasilevsky.github.io/bubbles_heroes/tonconnect-manifest.json",
    buttonRootId: "ton-connect",
  });
};

const openModal = (): void => {
  if (!tonConnectUi.value) return;

  tonConnectUi.value.openModal();
};

onMounted(() => {
  initWallet();
});
</script>
