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
      events: {}
    };
  },
  mounted() {
    lazyAMapApiLoaderInstance.load().then(() => {
      // your code ...
      this.map = new AMap.Map("amapContainer", {
        center: [116.404765, 39.918052],
        zoom: this.zoom // 初始化地图层级
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
