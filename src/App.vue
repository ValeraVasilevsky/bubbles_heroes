<template>
  <main>
    <MainHeader />
    <MainSection />
    <StatisticSection />
    <UniqueSection />
    <RoadmapSection />
  </main>
</template>

<script setup lang="ts">
import { MainHeader } from "components/index";
import {
  MainSection,
  StatisticSection,
  UniqueSection,
  RoadmapSection,
} from "sections/index";
</script>
