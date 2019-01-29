<template>
  <!-- 关于我们 -->
  <div class="about-template">
    <div class="box">
      <i></i>
    </div>
    <div class="row" @click="pageTo('/pages/my/Agreement')">
      <span>服务协议</span>
      <i></i>
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
.about-template{
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #FFFFFF;
  .box{
    text-align: center;
    padding: 42px 0;
    border-bottom: 1px solid #EAEAEA;
    i{
      width: 200px;
      height: 42px;
      display: inline-block;
      @include bg-img('about_logo@2x.png')
    }
  }
  .row{
    padding: 24px 13px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #EAEAEA;
    font-size:14px;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:#000000;
    i{
      @include bg-icon(10px)
      background-image: url('~@/assets/img/user_icon_more_2@2x.png');
    }
  }

}
</style>
