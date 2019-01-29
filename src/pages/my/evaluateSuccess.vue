<template>
  <!-- 我的评价 -->
  <div class="myEvaluate-template">
    <div class="box" >
      <i></i>
      <h1>评价完成！</h1>
      <p>感谢您为其他用户购物提供决策依据！</p>
    </div>
    <div class="btn">
      <button class="login-out" @click="replaceTo('/pages/my/myEvaluate')">查看评价</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  props: {

  },
  methods: {
  },
  onReady() {

  },
  onUnload() {
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/css/_mixin";
  .myEvaluate-template {
    width: 100%;
    height:100vh;
    overflow: hidden;
    overflow-y: scroll;
    background-color: #fff;
    .box{
      padding-top: 20px;
      text-align: center;
      i{
        @include bg-icon(120px)
        background-image: url('~@/assets/img/pjcg_icon@2x.png');
      }
      h1{
        margin-top: 30px;
        font-size:18px;
        font-family:PingFang-SC-Bold;
        font-weight:bold;
        color:#242121;
      }
      p{
        margin-top: 10px;
        font-size:14px;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:#444444;
      }
    }
    .btn{
      padding: 0 13px;
      margin-top: 50px;
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
