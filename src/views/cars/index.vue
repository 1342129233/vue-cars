<template>
  <div class="index-wrap">
    <section class="cars-item">
      <header>
        <h4 class="cars-logo">
          <img src="../../assets/cars-logo.png" alt="Mustang 2019款">
          <span class="name">Mustang 2019款</span>
        </h4>
        <p class="cars-attr">
          <span>新能源汽车 5座</span>
        </p>
      </header>
      <div class="cars-content">
        <div class="info">
          <div>
            <h4 class="cars-number">粤 B745N8</h4>
            <div>
              <ul class="cars-electric">
                <li class="active"></li>
                <li class="active"></li>
                <li class="active"></li>
                <li class="active"></li>
                <li class="active"></li>
                <li class="active"></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <p class="distance">
                <span>约</span>
               <strong>600</strong>
                <sub>KM</sub>
              </p>
            </div>
          </div>
        </div>
        <img src="../../assets/pic001.jpg" alt="">
      </div>
      <footer></footer>
    </section>
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
        name: "User"
      });
    }
  }
};
</script>
<style lang="scss">
@import "./index.scss";
</style>
