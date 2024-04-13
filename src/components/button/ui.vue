<template>
  <button :class="[styles.button, styles[props.type]]">
    <slot> {{ props.text }}</slot>

    <slot name="left-icon" />
  </button>
</template>

<script setup lang="ts">
import styles from "./styles.module.scss";

type BaseButtonTypes = "primary" | "flat" | "accent";
interface IBaseButtonProps {
  text?: string;
  type?: BaseButtonTypes;
}

const props = withDefaults(defineProps<IBaseButtonProps>(), {
  type: "primary",
});
</script>
