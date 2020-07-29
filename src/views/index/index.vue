<template>
  <div class="amap-wrap">
    <!-- 地图 -->
    <Map />
    <!-- dom渲染 -->
    <!-- 会员 -->
  </div>
</template>
<script>
import Map from "../amap/index";
export default {
  name: "Index",
  components: { Map },
  data() {
    return {};
  },
  mounted() {}
};
</script>
<style lang="scss">
.amap-wrap {
  height: 100vh;
}
</style>
