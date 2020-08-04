<template>
  <div class="cars-wrap">
    <div class="cars-swiper-wrap">
      <swiper :options="swiperOption">
        <Swiper-slide><CarsItem /></Swiper-slide>
        <Swiper-slide><CarsItem /></Swiper-slide>
        <Swiper-slide><CarsItem /></Swiper-slide>
        <Swiper-slide><CarsItem /></Swiper-slide>
        <Swiper-slide><CarsItem /></Swiper-slide>
      </swiper>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </div>
    <span @click="user">汽车列表</span>
  </div>
</template>
<script>
import CarsItem from '@c/carsList';
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
export default {
  name: "Cars",
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-button-prev',
          prevEl: '.swiper-button-prev'
        }
      }
    };
  },
  mounted() {},
  components: { Swiper, SwiperSlide, CarsItem },
  methods: {
    user() {
      this.$router.push({
        name: "User"
      });
    }
  }
};
</script>
<style lang="scss">
@import "./index.scss";
</style>
