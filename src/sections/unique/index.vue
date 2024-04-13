<template>
  <section :class="styles.container">
    <h2 :class="styles.title">Unique bubbles</h2>

    <Carousel :slides="UNIQUE_BUBBLES" />
  </section>
</template>

<script setup lang="ts">
import { Carousel } from "components/index";

import { UNIQUE_BUBBLES } from "@/constants";

import styles from "./styles.module.scss";
</script>
