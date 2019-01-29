<template>
  <!-- 设置 -->
  <div class="setting-template">
    <div class="box">
      <ul>
        <li @click="pageTo('/pages/my/setphone')">
          <span>更改手机号码</span>
          <i></i>
        </li>
        <!-- <li >
          <span>更改密码</span>
          <i></i>
        </li> -->
        <li @click="pageTo('/pages/my/aboutUser')">
          <span>关于我们</span>
          <i></i>
        </li>
      </ul>
    </div>
    <div class="btn">
      <button class="login-out">退出登录</button>
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
.setting-template{
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #F8F8F8;
  .box{
    margin-top: 12px;
    ul{
      padding: 0 13px;
      background-color: #fff;
      li{
        padding: 24px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size:14px;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:#000000;
        border-bottom: 1px solid #EAEAEA;
        i{
          @include bg-icon(10px)
          background-image: url('~@/assets/img/user_icon_more_2@2x.png');
        }
        &:last-of-type{
          border: none
        }
      }
    }
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
