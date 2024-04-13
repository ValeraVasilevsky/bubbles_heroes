<template>
  <div :class="styles.container">
    <Vector :class="[styles.one, styles.opacity, styles.blur]" />
  </div>
</template>

<script setup lang="ts">
import Vector from "./vector.svg";

import styles from "./styles.module.scss";
</script>
