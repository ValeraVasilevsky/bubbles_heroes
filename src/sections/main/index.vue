<template>
  <section :class="styles.container">
    <MeshBackground />

    <div :class="styles.wrapper">
      <p :class="styles.title">
        UNIQUE <strong>NFT</strong>
        <br />
        COLLECTION <br />
        ON <strong>TON</strong>
        BLOCKCHAIN
      </p>

      <VectorWrapper
        src="bubble-pink.png"
        :points="MAIN_VECTOR_POINTS"
        :class="styles.vector"
      >
        <VectorSvg />
      </VectorWrapper>

      <div :class="styles.buttons">
        <BaseButton>
          MINT BUBBLES HEROES
          <template #left-icon><ArrowUpIcon /></template>
        </BaseButton>
        <BaseButton type="flat">CONNECT WALLET</BaseButton>
      </div>
    </div>

    <VectorWrapper
      src="bubble-pink.png"
      :points="MAIN_VECTOR_POINTS"
      :class="styles.desktopVector"
    >
      <VectorSvg />
    </VectorWrapper>
  </section>
</template>

<script setup lang="ts">
import { MeshBackground, BaseButton, VectorWrapper } from "components/index";

import ArrowUpIcon from "assets/icons/arrow-up.svg";
import VectorSvg from "assets/vectors/vector-main.svg";

import { MAIN_VECTOR_POINTS } from "@/constants";

import styles from "./styles.module.scss";
</script>
