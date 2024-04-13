<template>
  <div :class="styles.container">
    <Swiper
      ref="swiperRef"
      :class="styles.carousel"
      loop
      @before-init="onBeforeInit"
      :breakpoints="{
        '1024': {
          slidesPerView: 2,
          spaceBetween: 16,
          centeredSlides: false,
        },
        '768': {
          slidesPerView: 2,
          spaceBetween: 16,
          centeredSlides: false,
        },
        '320': {
          slidesPerView: 1,
          spaceBetween: 8,
          centeredSlides: true,
        },
      }"
    >
      <SwiperSlide v-for="slide of props.slides" :key="slide.id">
        <div :class="styles.img">
          <img :src="slide.img" />
        </div>
        <div :class="styles.wrapper">
          <div :class="styles.texts">
            <h5 :class="styles.title">{{ slide.title }}</h5>
            <p :class="styles.description">{{ slide.description }}</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>

    <div :class="styles.navigation">
      <ArrowRight :class="styles.prev" @click="handlePrev" />
      <ArrowRight :class="styles.next" @click="handleNext" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import ArrowRight from "assets/icons/arrow-left.svg";

import { ref } from "vue";

import { Swiper as SwiperType } from "swiper/types";

import styles from "./styles.module.scss";
import "swiper/css";

interface CarouselProps {
  slides: {
    title: string;
    description: string;
    img: string;
    id: string;
  }[];
}

// constants
const props = defineProps<CarouselProps>();
const swiperRef = ref<SwiperType | null>(null);

// methods
const handlePrev = (): void => {
  swiperRef.value && swiperRef.value.slidePrev();
};

const handleNext = (): void => {
  swiperRef.value && swiperRef.value.slideNext();
};

const onBeforeInit = (swiper: SwiperType) => {
  swiperRef.value = swiper;
};
</script>
