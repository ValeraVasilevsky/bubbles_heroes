<template>
  <div id="ton-connect" @click="openModal" />
</template>

<script setup lang="ts">
import { TonConnectUI, TonConnectUIError } from "@tonconnect/ui";

import { onMounted, ref } from "vue";

// constants
const tonConnectUi = ref<TonConnectUI | null>(null);
const tonConnectUiError = ref<TonConnectUIError | null>(null);

// methods
const initWallet = async (): Promise<void> => {
  tonConnectUi.value = new TonConnectUI({
    manifestUrl: "http://locahost:3000/manifest", //`https://eager-eagles-guess.loca.lt/wallet/manifest`,
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
