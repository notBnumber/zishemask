<template>
  <!-- 编辑昵称 -->
  <div class="change-template">
    <input type="text" focus />
    <p>好名字可以让更多人记住你哦~</p>
    <div class="btn">
      <button class="login-out">保存</button>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {

      }
    },
    methods: {

    },
    mounted() {
      //do something after mounting vue instance

    }
  }
</script>

<style scoped lang='scss'>
@import "~@/assets/css/_mixin";
.change-template{
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #FFFFFF;
  input{
    width: 90%;
    margin: 0 auto;
    padding: 12px 5px 5px;
    border-bottom: 1px solid #DDDDDD;
    text-align: right;
    font-size:15px;
    font-family:PingFang-SC-Bold;
    font-weight:bold;
    color:#222222;
  }
  p{
    width: 90%;
    margin: 10px auto 0;
    text-align: right;
    font-size:12px;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:#888888;
  }
  .btn{
    position: fixed;
    bottom: 20px;
    left:0;
    right: 0;
    padding: 0 13px;
    button.login-out {
      width: 100%;
      height: 40px;
      line-height: 40px;
      border-radius: 5px;
      background: #ED1731;
      color: #FFFFFF;
      font-size: 15px;
      text-align: center;
    }
  }
}
</style>
