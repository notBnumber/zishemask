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
            console.log(res, "授权信息");
            wx.setStorageSync("code", res.code);
            t.$API
                    .GetUnionID({
                      i: 3,
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
                      console.log(res.data.unionId,'返回UnionID')
                      if (res.code == 1) {
                        vm.getId(res.data.unionId)
                      }
                    });
          }
        });

      }
    },
      bang(uid) {
          let pid = wx.getStorageSync("pid");
          if ("" != uid && "" != pid) {
              console.log(uid, "绑定中的uid");
              console.log(pid, "绑定中的pid");
              if (uid != pid) {
                  this.$API
                      .bang({
                          i: 3,
                          c: "entry",
                          a: "wxapp",
                          m: "mask",
                          do: "Savaid",
                          uid: uid,
                          pid: pid
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
          } else {
              console.log(uid, "为空绑定中的uid");
              console.log(pid, "为空用户中的pid");
          }
      },
    // 保存
    saveInfo() {
      this.$API
        .nicknameorheaderimg({
          i: 3,
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
    getId(unionId) {
        let vm = this;
        wx.login({
          success(res) { 
            wx.setStorageSync("code", res.code);
vm.$API
        .login({
          i: 3,
          c: "entry",
          a: "wxapp",
          m: "mask",
          do: "Openid",
          // do参数?

          code: res.code,
          unionId: unionId,
          headerimg: wx.getStorageSync("headerimg"),
          nickname: wx.getStorageSync("nickname")
        })
        .then(res => {
          console.log(res, "请求验证码");
          if (res.code == 1) {
            wx.setStorageSync("sessionId", res.data.id);
            wx.setStorageSync("openid", res.data.openid);
            //绑定关系
            vm.bang(res.data.id);
            console.log(
              res.data.id,
              wx.getStorageSync("sessionId"),
              "登录中用户uid"
            );
             vm.switchTab("/pages/home/index");
          }
        });
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
