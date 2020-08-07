<template>
  <div>
    <section class="cars-item">
      <header>
        <h4 class="cars-logo">
            <img src="../../assets/cars-logo.png" alt="Mustang 2019款" />
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
              <ul class="cars-electric active-li-5">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
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
      <img src="../../assets/pic001.jpg" alt="" />
      </div>
      <div class="cars-content"></div>
      <footer>
      <a href="javascript: void(0)" class="Parking-link">某某停车场</a>
      </footer>
    </section>
    <section class="cars-item cars-detailed" :style="'height:' + height">
      <h4 class="column">
        某某停车场
        <i class="close"></i>
      </h4>
      <header>
        <h4 class="cars-logo">
            <img src="../../assets/cars-logo.png" alt="Mustang 2019款" />
            <span class="name">Mustang 2019款</span>
        </h4>
        <p class="cars-attr">
            <span>新能源汽车 5座</span>
        </p>
      </header>
      <img src="../../assets/pic001.jpg" alt="" />
      <div class="clearfix">
        <div></div>
        <p class="distance pull-right">
          <span>约</span>
          <strong>600</strong>
          <sub>KM</sub>
        </p>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'carslist',
  props: {
    height: {
      type: String,
      default: '275px'
    }
  },
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
