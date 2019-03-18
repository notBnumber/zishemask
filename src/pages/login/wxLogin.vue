<template>
  <div class="wxLogin-template">
    <!-- <headers title="授权登录"></headers> -->

    <div class="userAvatar">
      <open-data type="userAvatarUrl"></open-data>
    </div>
    <div class="userNickName">
      <open-data type="userNickName"></open-data>
    </div>
    <div class="desc">
      <ul>
        <li class="t1">小程序所需信息，请确认授权以下信息</li>
        <li class="t2">获得你的公开信息（昵称、头像等）</li>
      </ul>
    </div>
    <div class="button">
      <i-button type="error" size="large" open-type="getUserInfo" @getuserinfo="getUserInfo">
        授权登录
      </i-button>

    </div>

    <!-- iView -->
    <i-toast id="toast" />
  </div>
</template>

<script>
// import headers from '@/components/Header'
import { $Toast } from "@/iView/base/index";

export default {
  // components: {
  //   headers
  // },
  data() {
    return {
      avatarUrl: "",
      nickName: ""
    };
  },
  methods: {
    getUserInfo({ mp: { detail } }) {
      console.log(detail, "授权登录");
      wx.setStorageSync("nickname", detail.userInfo.nickName);
      wx.setStorageSync("headerimg", detail.userInfo.avatarUrl);
      let vm = this;
      if (detail.errMsg === "getUserInfo:fail auth deny") {
        $Toast({
          content: "抱歉, 使用本小程序前需要授权",
          type: "error",
          duration: 2,
          mask: false
        });
      } else {
        let t=this;
        wx.login({
          success(res) {
            console.log(res, "授权");
            wx.setStorageSync("code", res.code);
            t.$API
                    .GetUnionID({
                      i: 2,
                      c: "entry",
                      a: "wxapp",
                      m: "mask",
                      do: "GetUnionID",
                      encryptedData: detail.encryptedData,
                      iv: detail.iv,
                      code: res.code
                    })
                    .then(res => {
                      console.log(res,'返回的个人隐私信息')
                      if (res.code == 1) {
                        // this.switchTab("/pages/home/index");
                      }
                    });
            // vm.getId()

            // vm.$API.wxLogin({
            //   code: res.code
            // }).then(response => {
            //   wx.setStorageSync('sessionId', response.data.sessionId)
            //   wx.switchTab({url: '/pages/purchase/purchase'})
            // })
            vm.switchTab("/pages/home/index");
          }
        });
        this.saveInfo()

      }
    },
    // 保存
    saveInfo() {
      this.$API
        .nicknameorheaderimg({
          i: 2,
          c: "entry",
          a: "wxapp",
          m: "mask",
          do: "nicknameorheaderimg",
          // do参数?

          uid: wx.getStorageSync("sessionId"),
          headerimg: wx.getStorageSync("headerimg"),
          nickname: wx.getStorageSync("nickname")
        })
        .then(res => {
          if (res.code == 1) {
            // this.switchTab("/pages/home/index");
          }
        });
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
  onUnload() {
    // clearTimeout(this.timer);
  }
};
</script>

<style scoped lang="scss">
@import "~@/assets/css/_mixin";
.wxLogin-template {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  text-align: center;
  background: #ffffff;
  .userAvatar {
    margin-top: 10vh;
    @include bg-icon(100px);
    border-radius: 50%;
    overflow: hidden;
  }
  .userNickName {
    margin-top: 5vh;
  }
  .button {
    margin-top: 25vh;
  }
  .desc {
    margin: 20px auto;
  }
  .t1 {
    font-size: 16px;
    color: #000;
    margin-bottom: 10px;
  }
  .t2 {
    font-size: 16px;
    color: #999;
  }
}
</style>
