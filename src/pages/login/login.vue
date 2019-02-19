<template>
  <div class="login-template">
    <!-- <headers></headers> -->
    <i class="logo"></i>
    <ul class='ul'>
      <li class="account" :class="isfocu == 0 && 'active'">
        <div>
          <i></i>
        </div>
        <input type="number" placeholder-style="color: #BBBBBB;font-weight: 400" placeholder="请输入您的手机号码" v-model="phoneNumber" @focus='focu(0)' @blur="blur">
        <!-- <button type="button" @click="send()" :disabled="isSend">{{isSend ? time + 'S' : '获取验证码'}}</button> -->
      </li>
      <li class="password" :class="isfocu == 1 && 'active'">
        <div>
          <i></i>
        </div>
        <input type="password" maxlength="8" placeholder-style="color: #BBBBBB;font-weight: 400" placeholder="请输入您的密码" v-model="code" @focus='focu(1)' @blur="blur">
      </li>
    </ul>
    <div class="btn">
      <button type="button" @click="login()" :disabled="!phoneNumber || !code">登录</button>
    </div>
    <!-- <p class="agree">登录即代表您同意我们的
      <i @click="pageTo('/pages/login/agreement')">服务协议</i> 和
      <i @click="pageTo('/pages/login/Privacy')">隐私政策</i>
    </p> -->

    <i-toast id="toast" />
    <div class="jump">
      <!-- <span @click="pageTo('/pages/login/codeLogin')">手机验证码登录</span> -->
      <span @click="pageTo('/pages/login/register')">新用户注册</span>
      <span @click="pageTo('/pages/login/forget')">忘记密码</span>
    </div>
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
      phoneNumber: "",
      code: "",
      isfocu: null,
      isSend: false,
      time: 59,
      timer: null,
      phoneRegexp: /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/
    };
  },
  methods: {
    focu(num) {
      this.isfocu = num;
    },
    blur() {
      this.isfocu = null;
    },
    send() {
      console.log(this.phoneNumber);
      if (!this.phoneRegexp.test(this.phoneNumber)) {
        this.$Toast({
          content: "手机号码格式错误",
          type: "error"
        });
        return;
      }
      this.$API
        .code({
          mobile: this.phoneNumber,
          type: 0
        })
        .then(res => {
          console.log(res, "请求验证码");
          this.isSend = true;
          this.timer = setInterval(() => {
            this.time--;
            if (this.time == 0) {
              clearInterval(this.timer);
              this.time = 59;
              this.isSend = false;
            }
          }, 1000);
        });
    },
    login() {
      if (!this.phoneRegexp.test(this.phoneNumber)) {
        this.$Toast({
          content: "手机号码格式错误",
          type: "error"
        });
        return;
      }
      this.$API
        .toLogin({
          i: 2,
          c: "entry",
          a: "wxapp",
          m: "mask",
          do: "Login",
          // do参数?
          phone: this.phoneNumber,
          psw: this.code
        })
        .then(res => {
          console.log(res);
          
          if (res.code == 1) {
            this.switchTab("/pages/home/index");
            wx.setStorageSync('is',true)
            // 成功登录 is为true
          } else {
            // this.$Toast({
            //   content: res.msg,
            //   type: "warning"
            // });
          }
        });
      // wx.request({
      //   url: "https://jin.itxiaolong.cn/app/index.php?i=8&c=entry&a=wxapp&m=mask&do=Openid", //仅为示例，并非真实的接口地址
      //   data: {
      //     code: wx.getStorageSync("code"),
      //     headerimg: wx.getStorageSync("headerimg"),
      //     nickname: wx.getStorageSync("nickname")
      //   },
      //   header: {
      //     "content-type": "application/json" // 默认值
      //   },
      //   success: function(res) {
      //     console.log(res.data);
      //   }
      // });
    },
      bang(){
          let uid=wx.getStorageSync('sessionId');
          let pid=wx.getStorageSync('pid');
          if(''!=uid&&''!=pid){
              console.log(uid, "绑定中的uid");
              console.log(pid, "绑定中的pid");
              if(uid!=pid){
                  this.$API
                      .bang({
                          i: 2,
                          c: "entry",
                          a: "wxapp",
                          m: "mask",
                          do: "Savaid",
                          uid: uid,
                          pid: pid,
                      })
                      .then(res => {
                          console.log(res, "登录里绑定用户");
                          //if (res.code == 1) {
                          this.$Toast({
                              content: res.msg,
                              type: "success"
                          });
                          //}
                      });
              }
          }else{
              console.log(uid, "为空绑定中的uid");
              console.log(pid, "为空用户中的pid");
          }

      },
    getId() {
      this.$API
        .login({
          i: 2,
          c: "entry",
          a: "wxapp",
          m: "mask",
          do: "Openid",
          // do参数?

          code: wx.getStorageSync("code"),
          headerimg: wx.getStorageSync("headerimg"),
          nickname: wx.getStorageSync("nickname")
        })
        .then(res => {
          console.log(res, "请求验证码");
          if (res.code == 1) {
            wx.setStorageSync("sessionId", res.data.id);
            wx.setStorageSync("openid", res.data.openid);
            console.log(
              res.data.id,
              wx.getStorageSync("sessionId"),
              "登录中用户uid"
            );
            // this.switchTab("/pages/home/index");
          }
        });
    }
  },
    onShow() {
        let vm = this;
        //获取openid
        vm.getId();
        //绑定用户操作
        console.log("执行绑定啊");
        setTimeout(function() {
            vm.bang();
        }, 1000);
    },
  onUnload() {
    clearInterval(this.timer);
  },
  onReady() {

  }
};
</script>

<style scoped lang="scss">
@import "~@/assets/css/_mixin";
.login-template {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #ffffff;
  .logo {
    @include bg-icon(100px);
    background-image: url("https://cssy.hn90qc.com/icon/login_logo.png");
    display: block;
    margin: 5px auto 0;
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
        button {
          width: 80px;
          height: 30px;
          line-height: 30px;
          font-size: 13px;
          font-family: PingFang-SC-Regular;
          font-weight: 400;
          color: #bbbbbb;
          border-radius: 6px;
          background-color: #fff;
          margin-bottom: 5px;
          border-color: transparent;
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
    margin-bottom: 18.5px;
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
  p.agree {
    padding-left: 38px;
    font-size: 11px;
    font-family: PingFang-SC-Medium;
    font-weight: 500;
    color: #888888;
    margin-bottom: 30px;
    i {
      color: #ed1731;
      display: inline-block;
    }
  }
  .jump {
    padding: 18px 38px 0;
    display: flex;
    justify-content: space-between;
    span {
      font-size: 12px;
      font-family: PingFang-SC-Regular;
      font-weight: 400;
      color: #242121;
    }
  }
}
</style>
