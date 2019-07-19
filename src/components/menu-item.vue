<template>
  <span class="menu-item"       @click="$emit('togglec')">
    <svg class="icon" aria-hidden="true">
      <use :xlink:href="icon" />
    </svg>
    {{title}}
  </span>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: "项目-A"
    },
    iconName: {
      type: String,
      required: true,
    //   default: "项目-A"
    }
  },
  computed: {
      icon(){
          return `#icon-${this.iconName}`
      }
  },
};
</script>
<style lang="scss">
.menu-item {
  // margin: 18px 0;
  cursor: pointer;
  padding: 15px 0;
  padding-left: 30px;
  width: 100%;
  // padding:0 30px 0 30px ;
  // display: block;

}
</style>
