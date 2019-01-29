<template>
  <div class="wxLogin-template">
    <!-- <headers title="授权登录"></headers> -->

    <div class="userAvatar">
      <open-data type="userAvatarUrl"></open-data>
    </div>
    <div class="userNickName">
      <open-data type="userNickName"></open-data>
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
        wx.login({
          success(res) {
            console.log(res, "授权");

            wx.setStorageSync("code", res.code);
            // vm.$API.wxLogin({
            //   code: res.code
            // }).then(response => {
            //   wx.setStorageSync('sessionId', response.data.sessionId)
            //   wx.switchTab({url: '/pages/purchase/purchase'})
            // })
          }
        });
        vm.pageTo("/pages/login/login");
      }
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
}
</style>
