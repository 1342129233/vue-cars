import Vue from "vue";
// 高德地图
// 引入vue-amap
import AMap from "vue-amap";
Vue.use(AMap);

// 初始化vue-amap
AMap.initAMapApiLoader({
  // 高德的key
  key: "3d627d81a151f0c1ebf4e4c17e7847c0",
  // 插件集合 （插件按需引入）
  plugin: [
    "AMap.Autocomplete",
    "AMap.PlaceSearch",
    "AMap.Scale",
    "AMap.OverView",
    "AMap.ToolBar",
    "AMap.MapType",
    "AMap.PolyEditor",
    "AMap.CircleEditor"
  ],
  v: "1.4.15",
  uiVersion: "1.0.11" // ui版本号
});
