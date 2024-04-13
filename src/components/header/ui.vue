<template>
  <header :class="styles.header">
    <TonWallet :class="styles.wallet" />
  </header>
</template>

<script setup lang="ts">
import { TonWallet } from "components/index";

import styles from "./styles.module.scss";
</script>
