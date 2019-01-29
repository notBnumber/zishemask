<template>
  <div class="register-template">
    <!-- <headers isBack></headers> -->
    <span class="title">注册</span>
    <ul class='ul'>
      <li class="account" :class="isfocu == 0 && 'active'">
        <div><i></i></div>
        <input type="text" placeholder-style="color: #BBBBBB;font-weight: 400" placeholder="请输入手机号"v-model="name" @focus='focu(0)' @blur="blur">
      </li>
      <li class="code" :class="isfocu == 1 && 'active'">
        <div><i></i></div>
        <input type="text" placeholder-style="color: #BBBBBB;font-weight: 400" placeholder="请输入验证码" v-model="code"
        @focus='focu(1)' @blur="blur">
        <button type="button">发送验证码</button>
      </li>
      <li class="password" :class="isfocu == 2 && 'active'">
        <div><i></i></div>
        <input type="text" placeholder-style="color: #BBBBBB;font-weight: 400" placeholder="请输入手机号"v-model="password" @focus='focu(2)' @blur="blur">
      </li>
    </ul>
    <p class="agree">登录即代表您同意我们的
      <i @click="pageTo('/pages/login/agreement')">服务协议</i> 和
      <i @click="pageTo('/pages/login/Privacy')">隐私政策</i>
    </p>
    <div class="btn">
      <button type="button" :disabled=" !name || !code || !password ">同意协议并注册</button>
    </div>
  </div>
</template>

<script>
// import headers from '@/components/Header'
  export default {
    // components: {
    //   headers
    // },
    data(){
      return {
        name:'',
        code:'',
        isfocu: null,
        password:''
      }
    },
    methods: {
      focu(num){
        this.isfocu = num;
      },
      blur(){
        this.isfocu = null;
      }
    },
    mounted() {
      //do something after mounting vue instance

    }
  }
</script>

<style scoped lang="scss">
  @import "~@/assets/css/_mixin";
  .register-template {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: #ffffff;
    span.title {
      display: inline-block;
      margin-top: 24px;
      font-size:28px;
      font-family:PingFang-SC-Bold;
      font-weight:bold;
      color:#000000;
      padding-left: 38px;
    }
    ul.ul{
      padding: 15px 38px;
      li{
        padding-top: 20px;
        display: flex;
        align-items: center;
        border-bottom:1px solid #EAEAEA;
        div{
          display: inline-block;
          height: 20px;
          padding-right: 16px;
          border-right: 1px solid #EAEAEA;
          i{
            @include bg-icon(20px);
          }
        }
        input{
          display: inline-block;
          flex: 1;
          padding: 4px 15px;
          font-size:14px;
          font-family:PingFang-SC-Regular;
          font-weight:bold;
          color: #010101;
        }
        &.account{
          i{
            background-image: url('~@/assets/img/bangding_icon_phone@2x.png');
          }
        }
        &.password{
          i{
            background-image: url('~@/assets/img/login_icon_password@2x.png');
          }
        }
        &.code{
          i{
            background-image: url('~@/assets/img/register_icon_code@2x.png');
          }
          button{
            width: 80px;
            height: 30px;
            line-height: 30px;
            font-size:13px;
            font-family:PingFang-SC-Regular;
            font-weight:400;
            color:#ED1731;
            border: 1px solid #ED1731;
            border-radius:6px;
            background-color: #FFF;
            margin-bottom: 5px;
          }
        }
        &.active{
          border-color: #333333;
        }
      }
    }
    p.agree{
      padding-left: 38px;
      font-size:11px;
      font-family:PingFang-SC-Medium;
      font-weight:500;
      color:#888888;
      margin-bottom: 30px;
      i{
        color: #ED1731;
        display: inline-block;
      }
    }
    .btn{
      padding:  0 38px;
      button{
        width: 100%;
        height: 44px;
        line-height: 44px;
        font-size:15px;
        border: 0;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:#FFFFFF;
        background-color: #ED1731;
        border-radius: 5px;
        &[disabled]{
          background-color: #DDDDDD;
        }
      }
    }
  }

</style>
