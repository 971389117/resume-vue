<template>
  <div :class="$style.technology">˝
      <h2>技能</h2>

    <div :class="$style.center">
      <pre>
熟练 HTML,了解HTML5 语义化标签，能根据设计图 <code>像素级</code>完成页面制作；
熟悉 HTML5 语义化，了解 <code>Canvas</code> 动画制作，掌握 <code>CSS 3</code> 动画、过渡效果`等常用技术
熟悉原生 JavaScript，了解常规概念如<code>原型，闭包，this</code>，会使用<code>ES6+ </code>常用规范，了解 <code> TypeScript </code>，了解 jQuery 常用 API 及思想。
熟悉 Vue 常用功能，理解如<code> 组件、虚拟 DOM、双向绑定 </code>等概念，能够使用 Vue 全家桶开发项目
熟悉<code> 模块化、工程化开发 </code>流程，能够配置 Webpack
有移动端开发经验，会使用<code> REM、vw/vh、响应式 </code>等技术制作适配手机设备的页面
了解<code> HTTP`相关知识，了解常见的`Web 性能优化 </code>方案
了解<code> 微信小程序 </code>，能够进行基本业务的开发。
了解 Node.js，能够开发简单的后台服务器。
熟练使用<code> VsCode、WebStorm、Sass、Git </code>等开发工具。</pre>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" module>
.technology {
  // background-color:
  background-image: url(../assets/img/410f6d67c919a191b614af4f001182e2.jpg);

  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
//   transform: translateX(-200);
    // padding: 20% 40%;
  .center {
    background-color: rgba(0, 0, 0, 0.3);
    // height: 700px;
    // width: 900px;
    color: #f1f1f1;
    padding: 30px 50px ;
    transform: translateX(-12%)
  }
  h2{
    // align-self: flex-start;-
    transform: translateX(-31vw);
    color:#d1e1e1;
  }
  code{
      color:orange;
  }
  &::after{
    content:"";
    display: block;
    height: 100vh;
    width: inherit;
    // background: #000;
    position: absolute;
    top: 0;
    left:0;
  }
}
</style>
