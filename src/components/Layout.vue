<template>
  <div :class="$style.layout">
    <div :class="$style.menuPane">
       <h1>Zxx's Resume</h1>
      <a
        v-for="(menu, index) in menuList"
        :key="index"
        @click="currentPane=menu.component"
      >{{menu.name}}</a>
      <a :class="$style.pdf" href="#">查看 PDF</a>
    </div>
    <component :class="$style.mainPane" :is="currentPane"></component>
  </div>
</template>

<script>
import Introduction from "./Introduction";
import Project from "./Project";
import Blog from "./Blog";
import Technology from "./Technology";

export default {
  components: {
    Introduction,
    Project,
    Blog,
    Technology,
  },
  data() {
    return {
      menuList: [
        { name: "自我介绍 About me", component: "Introduction" },
        { name: "技能 Technology stack", component: "Technology" },
        { name: "项目展示 Portfolio", component: "Project" },
        { name: "博客 Blog", component: "Blog" }
      ],
      currentPane: "Project"
    };
  }
};
</script>
<style lang='scss' module>
    .icon {
       width: 1em; height: 1em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }
.layout {
  display: flex;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.menuPane {
  background-color: #012345;
  display: flex;
  flex-direction: column;
  min-width: 300px;
  padding: 50px;
//   justify-content: center;
  box-sizing: border-box;
//   align-items: center;
  >h1{
      color:#fff;
  }
  > a {
    color: #ecf0f1;
    padding: 20px 0;
  }
  .pdf{
    position: absolute;
    bottom: 100px;
    text-align: center;
    background: #f1c40f;
    padding:10px 20px;
    border: 1px solid #000;
    color:#7f8c8d;
}
}
.mainPane {
  width: 100%;
  /* background-image: url('../assets/img/aa.jpg'); */
  background-color: #bdc3c7;
  color: #1a2a3a;
}

</style>
