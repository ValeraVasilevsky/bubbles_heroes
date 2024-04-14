<template>
  <div id="ton-connect" @click="walletStore.openModal" />
</template>

<script setup lang="ts">
import { useWalletStore } from "./model";

import { onMounted, onUnmounted } from "vue";

// constants
const walletStore = useWalletStore();

// hooks
onMounted(() => {
  walletStore.init();
});

onUnmounted(() => {
  walletStore.onDisconnect();
});
</script>
