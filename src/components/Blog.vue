<template>
  <div :class="$style.message">
    <div :class="$style.inner">
      <h1>留言簿:</h1>
      <br />
      <div ref="editor" style="text-align:left"></div>
      <div :class="$style.userInfo">
        <label>
          昵称:
          <input type="text" v-model="userName" placeholder="游荡的舞者" />
        </label>
        <button v-on:click="saveContent">留言</button>
      </div>

      <ul>
        <li v-for="(item, index) in userMessage" :key="index">
          <span>{{item.attributes.name}} :</span>
          <p v-html="item.attributes.content"></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import E from "wangeditor";
var AV = require("leancloud-storage");

export default {
  name: "editor",
  data() {
    return {
      editorContent: "",
      userMessage: [],
      userName: "游荡的舞者"
    };
  },
  created() {
    console.log(12342231421)
    var APP_ID = "t7gkIMdwW5vVGKrv6PHNXlvj-gzGzoHsz";
    var APP_KEY = "O1Y30UaAAS5RxJhOD5XWTq4B";
    AV.init({
      appId: APP_ID,
      appKey: APP_KEY
    });
    let query = new AV.Query("Message");
    query.find().then(message => {
      console.log(message);
      this.userMessage = message;
    }); // Promise对象
  },
  methods: {
    saveContent: function() {
      // 声明类型
      var Message = AV.Object.extend("Message");
      // 新建对象
      var message = new Message();
      message
        .save({
          //Promise 对象
          name: this.userName,
          content: this.editorContent
        })
        .then(function(obj) {

        });
        location.reload()
    }
  },
  mounted() {
    var editor = new E(this.$refs.editor);
    editor.customConfig.colors = [
      "#000000",
      "#eeece0",
      "#1c487f",
      "#4d80bf",
      "#c24f4a",
      "#8baa4a",
      "#7b5ba1",
      "#46acc8",
      "#f9963b",
      "#ffffff"
    ];
    editor.customConfig.onchange = html => {
      this.editorContent = html;
    };
    editor.create();
  }
};
</script>

<style lang="scss" module>
.message {
  background-image: url(../assets/img/410f6d67c919a191b614af4f001182e2.jpg);
  height: 100vh;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  padding-top: 30px;
  align-items: center;
  .inner {
    max-width: 60vw;
    h1 {
      align-self: flex-start;
      color: #d1e1e1;
    }
    .userInfo {
      color: #d1e1e1;
      padding-top: 20px;
      display: flex;
      justify-content: flex-end;
      input {
        padding: 3px 0;
        margin-left: 15px;
      }
      button {
        margin-left: 25px;
        background-color: #5cc9f5;
        border-radius: 10%;
      }
    }
    ul {
      margin-top: 60px;
      li {
        // background-color: #888;
        // display: flex;
        border-bottom: 1px solid black;
        position: relative;
        span {
          display: block;
          white-space: nowrap;
          width: 200px !important;
          // border: 1px solid orange;
          padding: 10px 0 5px;
          // display: flex;
          // justify-content: center;
          align-items: center;
          color: #d1e1e1;
        }
        p {
          // float: left;
          // padding: 10px;
          // margin-left: 200px;
        }
      }
    }
  }
}
</style>
<style>
.w-e-text-container {
  height: 100px !important; /*!important是重点，因为原div是行内样式设置的高度300px*/
  /* background-color: #ccc; */
  color: #d1d1d1;
}
.user-info {
  color: #d1e1e1;
}
</style>
