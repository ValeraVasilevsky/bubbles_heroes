<template>
  <div :class="styles.container">
    <div :class="styles.wrapper">
      <img :src="props.src" :class="styles.img" />
    </div>

    <div :class="styles.vector">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import anime from "animejs";
import { onMounted } from "vue";

import styles from "./styles.module.scss";

interface IVectorsWrapperProps {
  src: string;
  points?: { value: string[] };
}

// constants
const props = defineProps<IVectorsWrapperProps>();

// methods
const animateVector = () => {
  if (!props.points) return;

  anime({
    targets: `.${styles.vector} svg path`,
    d: props.points,
    duration: 8000,
    direction: "alternate",
    easing: "linear",
    elasticity: 10000,
    loop: true,
    autoplay: true,
  });
};

// hooks
onMounted(() => {
  animateVector();
});
</script>
