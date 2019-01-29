<template>
  <!-- 发表评价 -->
  <div class="publish-template">
    <div class="box" >
      <publishEvaluate></publishEvaluate>
    </div>
    <div class="btn">
      <button class="login-out" @click="replaceTo('/pages/my/evaluateSuccess')">评价</button>
    </div>
  </div>
</template>

<script>
import publishEvaluate from '@/components/Evaluate'
export default {
  components: {
    publishEvaluate
  },
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
  .publish-template {
    width: 100%;
    height:100vh;
    overflow: hidden;
    overflow-y: scroll;
    padding-top: 12px;
    padding-bottom: 50px;
    box-sizing: border-box;
    .box{
      margin-bottom: 12px;
    }
    .btn{
      position: fixed;
      bottom: 0px;
      left:0;
      right: 0;
      padding: 0 13px;
      background-color: #fff;
      button.login-out {
        width: 100%;
        height: 40px;
        line-height: 40px;
        border-radius: 5px;
        background: #ED1731;
        color: #FFFFFF;
        font-size: 15px;
        text-align: center;
        margin: 5px 0;
      }
    }
  }

</style>
