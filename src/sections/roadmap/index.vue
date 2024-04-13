<template>
  <section :class="styles.container">
    <h2 :class="styles.title">Roadmap</h2>

    <Roadmap />
  </section>
</template>

<script setup lang="ts">
import { Roadmap } from "components/index";

import styles from "./styles.module.scss";
</script>
