<template>
  <div :class="$style.introduction">
    <div :class="$style.main">
      <img :class="$style.photo" height="300px" src="../assets/img/me.jpg" alt />
      <div :class="$style.card">
        <div :class="$style.lefttop">
          <div :class="$style.hello">欢迎你,来参观我的主页!</div>
          <h1>我是郑昕</h1>
          <p>
          一个喜欢网络世界,站在年轻的尾巴上的年轻人.
          </p>
          <!-- <p>一个喜欢网络世界的年轻人.虽然很早就对网络世界充满好奇心,但是下决心入行却很晚,也可能与自己的晚熟有关系.</p> -->
          <!-- <p>最初于 09 年对编程起了好奇心,用易语言写了一个简单的计算器后,不知道怎么继续,于是蹉跎岁月.直到 18 年初,反思过往,痛定思痛,决定向计算机的世界正式前进.</p> -->
        </div>
        <div :class="$style.leftbottom" class="clearfix">
          <ul>
            <li>
              <span>应聘职位</span>
              <span>前端工程师</span>
            </li>
            <li>
              <span>年龄</span>
              <span>28(只愿永远 17 岁)</span>
            </li>
            <li>
              <span>祖籍</span>
              <span>河北省张家口市某县城</span>
            </li>
            <li>
              <span>现居</span>
              <span>北京市昌平区天通苑</span>
            </li>
            <li>
              <span>手机</span>
              <span>18500208602</span>
            </li>
            <li>
              <span>邮箱</span>
              <span>qq971389117@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div :class="$style.social">
        <div :class="$style.div"></div>
        <div :class="$style.div"></div>
        <div :class="$style.div"></div>
        <div :class="$style.div"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" module>
p {
  text-indent: 2em;
}
.introduction {
  border: 10px solid #000;
  height: 100vh;
  display: flex;
  background-image: url(../assets/img/e9bc46996d6d6353a779827a6d0e3ba4.jpg);
}
.main {
  padding: 40px;
  height: 58%;
  width: 70%;
  margin: auto;
  display: flex;

  > .card {
    position: relative;
    border: 1px solid #000;
    position: fixed;
    left: 60%;
    top: 40%;
    max-width: 400px;
    padding: 20px;
    color: #f1f0fc;
    background-color: #34495e;
    border: 10px solid #012345;
    border-bottom-color: #000;
    border-right-color: #000;
    .hello {
      color: #cfcfcf;
    }
    h1 {
      color: #fff;
    }
    p {
      color: #95a5a6;
    }
    ul {
      padding: 0;
      li {
        color: #ccc;
        list-style-type: none;
        margin: 20px 40px 0 0;
        span {
          &:first-child {
            display: inline-block;
            min-width: 80px;
            // position: relative;
            // left: 50px;
          }
        }
      }
    }
  }
  .right {
  }
}
</style>
