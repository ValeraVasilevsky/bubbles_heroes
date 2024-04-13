<template>
  <div :class="styles.container">
    <div :class="styles.item">
      <div :class="styles.wrapper">
        <span :class="[styles.circle, styles.done]" />
        <h5 :class="styles.percent">0 %</h5>
      </div>

      <div :class="[styles.texts, styles.done]">
        <p :class="styles.description">
          Mint Bubble Heroes collection on

          <a :class="styles.link" href="https://getgems.io/" target="_blank">
            getgems.io
          </a>
        </p>
      </div>
    </div>

    <div :class="styles.item">
      <div :class="styles.wrapper">
        <span :class="styles.circle" />
        <h5 :class="styles.percent">10 %</h5>
      </div>

      <div :class="styles.texts">
        <p :class="styles.description">Create own metaverse</p>
      </div>
    </div>

    <div :class="styles.item">
      <div :class="styles.wrapper">
        <span :class="styles.circle" />
        <h5 :class="styles.percent">20 %</h5>
      </div>

      <div :class="styles.texts">
        <p :class="styles.description">
          Mint Bubble Heroes collection on getgems.io
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import styles from "./styles.module.scss";
</script>
