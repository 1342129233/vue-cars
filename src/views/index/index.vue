<template>
  <div class="amap-wrap">
    <el-amap
      vid="amapContainer"
      :zoom="zoom"
      :center="center"
      :events="events"
    ></el-amap>
  </div>
</template>
<script>
// import { AMapManager, lazyAMapApiLoaderInstance } from "vue-amap";
import { lazyAMapApiLoaderInstance, AMap } from "vue-amap";
export default {
  name: "Index",
  data() {
    return {
      map: null,
      zoom: 12,
      center: [116.404765, 39.918052],
      events: {}
    };
  },
  mounted() {
    lazyAMapApiLoaderInstance.load().then(() => {
      // your code ...
      this.map = new AMap.Map("amapContainer", {
        center: new AMap.LngLat(116.404765, 39.918052)
      });
    });
  }
};
</script>
<style lang="scss">
.amap-wrap {
  height: 100vh;
}
</style>
