<template>
  <div>
    <!-- cars data渲染 -->
    <Cars />
    <!-- 地图 -->
    <Map />
    <!-- 导航 -->
    <Navbar />
    <!-- 会员 -->
    <div id="children-view" :class="{ open: show === 'true' }">
      <router-view />
    </div>
  </div>
</template>
<script>
import Map from "../amap/index";
import Cars from "../cars/index";
import Navbar from "@c/navbar";
export default {
  name: "Index",
  components: { Map, Cars, Navbar },
  data() {
    return {};
  },
  computed: {
    show() {
      const router = this.$route;
      return router.name === "Index" ? "false" : "true";
    }
  }
};
</script>
<style lang="scss">
#children-view {
  position: fixed;
  top: 0;
  bottom: 0;
  right: -600px;
  z-index: 101;
  width: 418px;
  background-color: #34393f;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -ms-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  &.open {
    right: 0;
  }
}
</style>
