<template>
  <section :class="styles.container">
    <h2 :class="styles.title">{{ title }}</h2>

    <div :class="styles.wrapper">
      <StatisticItem
        v-for="item of STATISTICS"
        :key="item.description"
        :title="item.title"
        :description="item.description"
        :class="styles.item"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { StatisticItem } from "components/index";

import { STATISTICS } from "@/constants";

import styles from "./styles.module.scss";

// constants
const title = `Little bubble heroes \nwith big heart inside`;
</script>
