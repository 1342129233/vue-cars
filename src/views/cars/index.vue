<template>
  <div class="index-wrap">
    <div class="cars-item">

    </div>
    <span @click="user">汽车列表</span>
  </div>
</template>
<script>
export default {
  name: "Cars",
  data() {
    return {};
  },
  mounted() {},
  methods: {
    user() {
      this.$router.push({
        name: 'User'
      })
    }
  }
};
</script>
<style lang="scss">
@import './index.scss'
</style>
