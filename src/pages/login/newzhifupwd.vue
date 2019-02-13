<template>
  <!-- 忘记密码 -->
  <div class="forget-template">
    <!-- <headers isBack></headers> -->
    <span class="title">设置支付密码</span>
    <ul class='ul'>
      <li class="account" :class="isfocu == 0 && 'active'">
        <div>
          <i></i>
        </div>
        <input type="number" placeholder-style="color: #BBBBBB;font-weight: 400" placeholder="请输入手机号码" v-model="name" @focus='focu(0)' @blur="blur">
      </li>
      <li class="code" :class="isfocu == 1 && 'active'">
        <div>
          <i></i>
        </div>
        <input type="number" placeholder-style="color: #BBBBBB;font-weight: 400" placeholder="请输入验证码" v-model="code" @focus='focu(1)' @blur="blur">
        <button type="button" @click="getCode">{{message}}</button>
      </li>
      <li class="password" :class="isfocu == 2 && 'active'">
        <div>
          <i></i>
        </div>
        <input type="password" placeholder-style="color: #BBBBBB;font-weight: 400" placeholder="请输入新密码" v-model="password" @focus='focu(2)' @blur="blur">
      </li>
      <!-- <li class="password" :class="isfocu == 3 && 'active'">
        <div>
          <i></i>
        </div>
        <input type="password" placeholder-style="color: #BBBBBB;font-weight: 400" placeholder="请重新输入密码" v-model="repeatpass" @focus='focu(3)' @blur="blur">
      </li> -->
    </ul>
    <div class="btn">
      <button type="button" :disabled=" !name || !code || !password " @click="changePwd">设置密码</button>
    </div>
    <i-toast id="toast" />
  </div>
</template>

<script>
// import headers from '@/components/Header'

export default {
  // components: {
  //   headers
  // },
  data() {
    return {
      name: "",
      code: "",
      password: "",
      repeatpass: "",
      isfocu: null,
      phoneRegexp: /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/,
      message: "获取验证码",
      timeState: false
    };
  },
  methods: {
    focu(num) {
      this.isfocu = num;
    },
    blur() {
      this.isfocu = null;
    },
    getCode() {
      if (this.timeState == false) {
        if (!this.phoneRegexp.test(this.name)) {
          this.$Toast({
            content: "手机号码格式错误",
            type: "warning"
          });
          return;
        }
        this.$API
          .Smscode({
            i: 2,
            c: "entry",
            a: "wxapp",
            m: "mask",
            do: "Smscode",
              tel: this.name
//            uid:
//              wx.getStorageSync("sessionId") == ""
//                ? ""
//                : wx.getStorageSync("sessionId")
          })
          .then(res => {
            console.log(res, "请求验证码");
            if (res.code == 1) {
              console.log();
              let num = 60;
              this.getTime(num);
              this.$Toast({
                content: "信息已发送",
                type: "success"
              });
            } else {
              this.$Toast({
                content: res.msg,
                type: "warning"
              });
            }
          });
      } else {
        this.$Toast({
          content: "信息已发送",
          type: "warning"
        });
      }
    },
    getTime(num1) {
      let num = num1;
      this.setTime = setInterval(() => {
        if (num > 0) {
          console.log(num);

          // this.canSend = false;
          this.message = "重发(" + num + ")";
          this.timeState = true;
          num--;
        } else {
          console.log(99999);
          this.timeState = false;
          clearInterval(this.setTime);
          this.message = "重新发送";
          // this.canSend = true;
        }
      }, 1000);
    },
    changePwd() {
      if (!this.phoneRegexp.test(this.name)) {
        this.$Toast({
          content: "手机号码格式错误",
          type: "error"
        });
        return;
      }
      this.$API
        .ForgetOrAddpaypsw({
          i: 2,
          c: "entry",
          a: "wxapp",
          m: "mask",
          do: "ForgetOrAddpaypsw",
          phone: this.name,
          code: this.code,
          paypsw: this.password,
          uid:
            wx.getStorageSync("sessionId") == ""
              ? ""
              : wx.getStorageSync("sessionId")
        })
        .then(res => {
          console.log(res, "注册");
          if (res.code == 1) {
            console.log();
            this.switchTab("/pages/home/index");
          } else {
            this.$Toast({
              content: res.msg,
              type: "error"
            });
          }
        });
    }
  },
  mounted() {
    //do something after mounting vue instance
  }
};
</script>

<style scoped lang='scss'>
@import "~@/assets/css/_mixin";
.forget-template {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #ffffff;
  span.title {
    display: inline-block;
    margin-top: 24px;
    font-size: 28px;
    font-family: PingFang-SC-Bold;
    font-weight: bold;
    color: #000000;
    padding-left: 38px;
  }
  ul.ul {
    padding: 30px 38px;
    li {
      padding-top: 20px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #eaeaea;
      div {
        display: inline-block;
        height: 20px;
        padding-right: 16px;
        border-right: 1px solid #eaeaea;
        i {
          @include bg-icon(20px);
        }
      }
      input {
        display: inline-block;
        flex: 1;
        padding: 4px 15px;
        font-size: 14px;
        font-family: PingFang-SC-Regular;
        font-weight: bold;
        color: #010101;
      }
      &.account {
        i {
          background-image: url("~@/assets/img/login_icon_account@2x.png");
        }
      }
      &.code {
        i {
          background-image: url("~@/assets/img/register_icon_code@2x.png");
        }
        button {
          width: 80px;
          height: 30px;
          line-height: 30px;
          font-size: 13px;
          font-family: PingFang-SC-Regular;
          font-weight: 400;
          color: #ed1731;
          border: 1px solid #ed1731;
          border-radius: 5px;
          background-color: #fff;
          margin-bottom: 5px;
        }
      }
      &.password {
        i {
          background-image: url("~@/assets/img/login_icon_password@2x.png");
        }
      }
      &.active {
        border-color: #333333;
      }
    }
  }
  .btn {
    padding: 0 38px;
    button {
      width: 100%;
      height: 44px;
      line-height: 44px;
      font-size: 15px;
      border: 0;
      font-family: PingFang-SC-Regular;
      font-weight: 400;
      color: #ffffff;
      background-color: #ed1731;
      border-radius: 5px;
      &[disabled] {
        background-color: #dddddd;
      }
    }
  }
}
</style>
