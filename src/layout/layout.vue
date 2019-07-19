<template>
  <div class="layout">
    <div class="main-menu">
      <MenuItem
        :class="{active:active==item.component}"
        @click.native="xuanzhong(item.component)"
        v-for="(item, index) in menuList"
        :key="index"
        :icon-name="item.iconName"
        :title="item.title"
        :component="item.component"
        @togglec="currentPane=item.component"
      ></MenuItem>
    </div>
    <div class="main-panel">
      <keep-alive>
        <component :is="currentPane" keep-alive></component>
      </keep-alive>

      <!-- <component :class="$style.mainPane" :is="currentPane"></component> -->
    </div>
  </div>
</template>

<script>
import MenuItem from "../components/menu-item";
import Introduction from "../components/Introduction";
import Project from "../components/Project";
import Technology from "../components/Technology";
import Blog from "../components/Blog";
export default {
  components: {
    MenuItem,
    Introduction,
    Project,
    Technology,
    Blog
  },
  data() {
    return {
      active:"Introduction",
      menuList: [
        {
          title: "自我介绍 About me",
          iconName: "geren",
          component: "Introduction"
        },
        {
          title: "技能 Technology stack",
          iconName: "jineng",
          component: "Technology"
        },
        {
          title: "项目展示 Portfolio",
          iconName: "xiangmu",
          component: "Project"
        },
        { title: "留言板 Message", iconName: "ego-blog", component: "Blog" }
      ],
      currentPane: "Introduction"
    };
  },
  computed: {},
  methods: {
    xuanzhong(name) {
      this.active=name
      // console.log(, 11);
    }
  }
};
</script>
<style lang="scss">
.layout {
  display: flex;
  .main-menu {
    background: #757c8e;
    max-width: 20vw;
    min-width: 13vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    // padding: 30px;
    // white-space: nowrap;
  }
  .main-panel {
    flex:1;
    // display: flex;
    // min-width: 85vw;
    height: 100vh;
  }
  .active{
    background-color: #fff;
  }
}
</style>
