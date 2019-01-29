<template>
  <!-- 帮助中心 -->
  <div class="help-template">
    <div class="box">
      <h1>联系客服</h1>
      <p class="phone">固话：020-44231214546</p>
      <p class="email">邮箱：zhangyuanhui@163.com</p>
    </div>
    <button class="row" open-type='contact' plain>
      <span>
        <i></i>
        在线客服
      </span>
      <i class="arror"></i>
    </button>
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
.help-template{
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #FFFFFF;
  padding: 0 13px;
  box-sizing: border-box;
  .box{
    padding: 17px 0 70px;
    border-bottom: 1px solid #EAEAEA;
    h1{
      font-size:14px;
      font-family:PingFang-SC-Bold;
      font-weight:bold;
      color:#000000;
    }
    p{
      font-size:14px;
      font-family:PingFang-SC-Regular;
      font-weight:400;
      color:#000000;
      margin-top: 10px;
    }
  }
  .row{
    padding: 19px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size:14px;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:#000000;
    background-color: #fff;
    outline: none;
    border-color: transparent;
    border-bottom-color: #EAEAEA;
    i.arror{
      @include bg-icon(10px)
      background-image: url('~@/assets/img/user_icon_more_2@2x.png');
    }
    span{
      display: flex;
      align-items: center;
      i{
        @include bg-icon(24px)
        background-image: url('~@/assets/img/help_icon_service@2x.png');
        margin-right: 10px;
      }
    }
  }
}
</style>
