<template>
  <div id="app">
    <Layout></Layout>
  </div>
</template>

<script>
import Layout from "./layout/layout";

export default {
  name: "app",
  components: {
    Layout
  }
};

</script>

<style lang='scss'>
@import "scss/base.scss";
@import "assets/font_1273212_pcnqr8vc37/iconfont.css";

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
