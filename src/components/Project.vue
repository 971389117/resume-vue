<template>
  <div :class="$style.project">
    <el-tabs :class="$style.mainPane" v-model="activeName" type="card">
      <el-tab-pane :class="$style.mianban" label="皮卡丘" name="first">
        <img src="../assets/img/xiangmu_pikaqiu.png" alt />
        <div>
          <p>
            项目介绍:是一个使用
            <code>原生 JS</code>开发的,动态展示 CSS 画皮卡丘过程的小作品.
            <br />该作品主要思路是通过
            <code>间隔计时器遍历预先设置在 preview 标签内代码</code>,将其逐个显示在页面上,并在 style 标签上做同样处理,以使代码 CSS 生效.
            <br />此外,实现了 CSS 高亮效果及调速功能.
          </p>
          <a target="_blank" href="https://github.com/971389117/make_pikachu">项目源码</a>
          <a target="_blank" href="https://971389117.github.io/make_pikachu/">项目展示</a>
        </div>
      </el-tab-pane>
      <el-tab-pane :class="$style.mianban" label=" 画板" name="second">
        <img src="../assets/img/palette.png" alt />
        <div>
          <p>
            项目介绍:是一个使用
            <code>原生 JS</code>开发的,动态展示 CSS 画皮卡丘过程的小作品.
            <br />该作品主要思路是通过
            <code>间隔计时器遍历预先设置在 preview 标签内代码</code>,将其逐个显示在页面上,并在 style 标签上做同样处理,以使代码 CSS 生效.
            <br />此外,实现了 CSS 高亮效果及调速功能.
          </p>
          <a target="_blank" href="https://github.com/971389117/drawing-board">项目源码</a>
          <a target="_blank" href="https://971389117.github.io/drawing-board/">项目展示</a>
        </div>
      </el-tab-pane>
      <el-tab-pane :class="$style.mianban" label="键盘导航" name="third">
        <img src="../assets/img/keyboard_nav.png" alt />
        <div>
          <p>
            项目介绍:是一个使用
            <code>原生 JS</code>开发的,动态展示 CSS 画皮卡丘过程的小作品.
            <br />该作品主要思路是通过
            <code>间隔计时器遍历预先设置在 preview 标签内代码</code>,将其逐个显示在页面上,并在 style 标签上做同样处理,以使代码 CSS 生效.
            <br />此外,实现了 CSS 高亮效果及调速功能.
          </p>
          <a target="_blank" href="https://github.com/971389117/keyboard-navigation">项目源码</a>
          <a target="_blank" href="https://971389117.github.io/keyboard-navigation/">项目展示</a>
        </div>
      </el-tab-pane>
      <el-tab-pane :class="$style.mianban" label="跳动的简历" name="fourth">
        <img src="../assets/img/resume_jump.png" alt />
        <div>
          <p>
            项目介绍:是一个使用
            <code>原生 JS</code>开发的,动态展示 CSS 画皮卡丘过程的小作品.
            <br />该作品主要思路是通过
            <code>间隔计时器遍历预先设置在 preview 标签内代码</code>,将其逐个显示在页面上,并在 style 标签上做同样处理,以使代码 CSS 生效.
            <br />此外,实现了 CSS 高亮效果及调速功能.
          </p>
          <a target="_blank" href="https://github.com/971389117/jump-resume">项目源码</a>
          <a target="_blank" href="https://971389117.github.io/jump-resume/">项目展示</a>
        </div>
      </el-tab-pane>
      <el-tab-pane :class="$style.mianban" label="原生简历" name="fifth">
        <img src="../assets/img/resume_main.png" alt />
        <div>
          <p>
            项目介绍:是一个使用
            <code>原生 JS</code>开发的,动态展示 CSS 画皮卡丘过程的小作品.
            <br />该作品主要思路是通过
            <code>间隔计时器遍历预先设置在 preview 标签内代码</code>,将其逐个显示在页面上,并在 style 标签上做同样处理,以使代码 CSS 生效.
            <br />此外,实现了 CSS 高亮效果及调速功能.
          </p>
          <a target="_blank" href="https://github.com/971389117/resume-final">项目源码</a>
          <a target="_blank" href="https://971389117.github.io/resume-final/">项目展示</a>
        </div>
      </el-tab-pane>
      <el-tab-pane :class="$style.mianban" label="Vue重构cnode社区" name="sixth">
        <img src="../assets/img/cnode.png" alt />
        <div>
          <p>
            项目介绍:是一个使用
            <code>原生 JS</code>开发的,动态展示 CSS 画皮卡丘过程的小作品.
            <br />该作品主要思路是通过
            <code>间隔计时器遍历预先设置在 preview 标签内代码</code>,将其逐个显示在页面上,并在 style 标签上做同样处理,以使代码 CSS 生效.
            <br />此外,实现了 CSS 高亮效果及调速功能.
          </p>
          <a target="_blank" href="https://github.com/971389117/cnode">项目源码</a>
          <a target="_blank" href="https://971389117.github.io/cnode/dist/#/">项目展示</a>
        </div>
      </el-tab-pane>
      <el-tab-pane :class="[$style.mianban,$style.jd]" label="Vue 仿京东金融" name="seventh">
        <img :class="$style.jd1img" src="../assets/img/jd1.png" alt />
        <img src="../assets/img/jd2.png" alt />
        <div>
          <p>
            项目介绍:是一个使用
            <code>原生 JS</code>开发的,动态展示 CSS 画皮卡丘过程的小作品.
            <br />该作品主要思路是通过
            <code>间隔计时器遍历预先设置在 preview 标签内代码</code>,将其逐个显示在页面上,并在 style 标签上做同样处理,以使代码 CSS 生效.
            <br />此外,实现了 CSS 高亮效果及调速功能.
          </p>
          <a target="_blank" href="https://github.com/971389117/jdjr">项目源码</a>
          <a target="_blank" href="https://971389117.github.io/jdjr/dist/#/">项目展示</a>
        </div>
      </el-tab-pane>
      <el-tab-pane :class="$style.mianban" label="仿慕课网" name="eighth">
        <img src="../assets/img/resume_main.png" alt />
        <div>
          <p>
            项目介绍:是一个使用
            <code>原生 JS</code>开发的,动态展示 CSS 画皮卡丘过程的小作品.
            <br />该作品主要思路是通过
            <code>间隔计时器遍历预先设置在 preview 标签内代码</code>,将其逐个显示在页面上,并在 style 标签上做同样处理,以使代码 CSS 生效.
            <br />此外,实现了 CSS 高亮效果及调速功能.
          </p>
          <a target="_blank" href="https://github.com/971389117/make_pikachu">项目源码</a>
          <a target="_blank" href="https://971389117.github.io/make_pikachu/">项目展示</a>
        </div>
      </el-tab-pane>
      <el-tab-pane :class="$style.mianban" label="小程序-读读书与看电影" name="ninth">
        <img :class="$style.jd1img" src="../assets/img/wx-1.png" alt />
        <img :class="$style.jd1img" src="../assets/img/wx_2.png" alt />
        <img src="../assets/img/wx_3.png" alt />
        <div :class="$style.wx_div">
          <p>
            项目介绍:是一个使用
            <code>原生 JS</code>开发的,动态展示 CSS 画皮卡丘过程的小作品.
            <br />该作品主要思路是通过
            <code>间隔计时器遍历预先设置在 preview 标签内代码</code>,将其逐个显示在页面上,并在 style 标签上做同样处理,以使代码 CSS 生效.
            <br />此外,实现了 CSS 高亮效果及调速功能.
          </p>
          <span :class="$style.saoma">扫码预览</span>
          <img src="../assets/img/wx_erweima.png" alt="">
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
// import ProjectItem from "./ProjectItem";
export default {
  components: {
    // ProjectItem
  },
  data() {
    return {
      activeName: "first"
    };
  },
  methods: {
    handleClick(tab, event) {
    }
  }
};
</script>
<style lang="scss" module>
.project {
  height: 100vh;
  // background-repeat: no-repeat;
  // background-size: 100%;
  background-image: url(../assets/img/410f6d67c919a191b614af4f001182e2.jpg);
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  .mainPane {
    position: absolute;
    // top: 20%;
    // right: 10%;
    // left: 20%;
    // bottom: 20%;
    // height: 80%;
    // width: 80%;
    // margin: auto;
    background: rgba(0, 0, 0, 0.3);
    .mianban {
      display: flex;
      padding: 30px;
      padding-top: 10px;
      // background-color: rgba(0,0,0,.8);
      > div {
        width: 300px;
        padding: 30px;
        padding-top: 0;
        > p {
          margin-bottom: 50px;
          font-size: 16px;
          color: #f1f1f1;
          border: 1px solid #000;
          padding: 20px;
          > code {
            color: orange;
          }
        }
        a {
          color: #f1f1f1;
          background: red;
          padding: 10px 20px;
          margin: 10px;
        }
      }
      .saoma{
        display: block;
        color:#f1f1f1;
        padding-bottom: 20px;
        // margin-bottom: 20px;
      }

      .wx_div{
        padding: 0;
        padding-left: 30px;
      }
    }
  }
}
.jd1img {
  margin-right: 50px;
}
</style>
