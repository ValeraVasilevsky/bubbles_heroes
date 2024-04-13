<template>
  <div :class="styles.container">
    <h4 :class="styles.title">{{ props.title }}</h4>
    <p :class="styles.description">{{ props.description }}</p>
  </div>
</template>

<script setup lang="ts">
import styles from "./styles.module.scss";

interface StatisticItemProps {
  title: string;
  description: string;
}

// constants
const props = defineProps<StatisticItemProps>();
</script>
