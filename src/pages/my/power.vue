<template>
  <!-- 我的销   template > div第一级需要div-->
  <div class="my-template">
    <div class="head">
      <div class="head-left" v-if="isLogin">
        <div class="head-left-div">
          <i class="photo-img">
            <open-data type="userAvatarUrl"></open-data>
            <span>(商家)</span>
          </i>

        </div>
        <div class="head-left-img-right">
          <span>
            <open-data type="userNickName"></open-data>
          </span>

        </div>
        <div class="headBottom">
          <!--<div class="shenfen">-->
            <!--<img src="https://cssy.hn90qc.com/icon/vip2.png" alt="">-->
            <!--<span>:合伙人</span>-->
          <!--</div>-->
          <div class="shenfen">
            <img src="https://cssy.hn90qc.com/icon/leve_icon.png" alt="">
            <span v-if="userinfo.level==0">:普通用户</span>
            <span v-if="userinfo.level==1">:合伙人</span>
            <span v-if="userinfo.level==2">:银卡合伙人</span>
            <span v-if="userinfo.level==3">:金卡合伙人</span>
            <span v-if="userinfo.level==4">:市代合伙人</span>
            <span v-if="userinfo.level==5">:省代合伙人</span>
          </div>
        </div>
        <!-- <img src="https://cssy.hn90qc.com/icon/leve_icon.png" alt=""> -->
      </div>
      <!-- <button class="login" @click="goLogin('/pages/login/login')" v-if="!isLogin">登录/注册</button> -->
      <!-- <div class="head-pic" @click="pageTo('/pages/my/noticeCenter')" v-if="isLogin">
        <i>8</i>
      </div> -->
    </div>
    <!-- 使用  :xxx = xxx 传值给子组件      @toggleSelect="toggleSelect 接收  toggleSelect子组件的事件   jjjj父组件的事件-->
    <!-- <newpower :info='isDownRefresh' @toggleSelect="jjjj"></newpower> -->
    <div class="main">
      <div class="one" @click="gotovip()">
        <div class="leftImg">
          <img src="https://cssy.hn90qc.com/icon/togeticon.png" alt="">
        </div>
        <div class="rightDiv" >
          <p class="p1">合伙人</p>
          <p class="p2" v-if="userinfo.level==0">非合伙人</p>
          <p class="p2" v-if="userinfo.level>0">您已成为合伙人</p>
        </div>
        <p>></p>
      </div>
      <div class="one" @click="pageTo('/pages/my/fuckvip', {level: userinfo.level})">
        <div class="leftImg">
          <img src="https://cssy.hn90qc.com/icon/vipicon.png" alt="">
        </div>
        <div class="rightDiv">
          <p class="p1">会员卡</p>
          <p class="p2">银卡合伙人</p>
        </div>
        <p>></p>
      </div>
      <div class="one"  @click="pageTo('/pages/my/quyu', {level: userinfo.level})">
        <div class="leftImg">
          <img src="https://cssy.hn90qc.com/icon/quyuicon.png" alt="">
        </div>
        <div class="rightDiv">
          <p class="p1">区域商</p>
          <p class="p2">申请成为区域商</p>
        </div>
        <p>></p>
      </div>
    </div>
    <i-toast id="toast" />
  </div>

</template>

<script>
import newpower from "@/components/newPower";
// 引入 newpower组件名字
export default {
  // 注册
  components: {
    newpower
  },
  data() {
    return {
      addList: [],
      isLogin: true,
        userinfo:{}
    };
  },
  methods: {
    jjjj(index) {
      console.log(index, "子传的值");
    },
      gotovip(){
        if (this.userinfo.level>0){
            console.log(this.userinfo.level, "身份值");
            this.pageTo('/pages/my/toge', {level: this.userinfo.level})
        }else{
            this.$Toast({
                content: "你还不是合伙人",
                type: "warning"
            });
        }
      },
    getuserinfo(){
        let that=this
        this.$API
            .VipindexInfo({
                i: 2,
                c: "entry",
                a: "wxapp",
                m: "mask",
                do: "VipindexInfo",
                uid: wx.getStorageSync("sessionId")
            })
            .then(res => {
                console.log(res, "我的特权页");
                if (res.code == 1) {
                    that.userinfo = res.data;
                }
            });
    }
  },
  onShow(){
      this.getuserinfo();
      console.log('onshow我的特权');
  }
};
</script>

<style scoped lang="scss">
@import "~@/assets/css/_mixin";
.my-template {
  width: 100%;
  background-color: #f8f8f8;
  overflow-y: scroll;
  height: 100vh;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
  .head {
    // height: 80px;
    background-color: #e9323c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10 12px;
    position: relative;
    .head-left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-top: 50px;
      padding-bottom: 10px;
      box-sizing: border-box;
      .head-left-div {
        display: flex;
        justify-content: center;
        align-items: center;
        i.photo-img {
          width: 65px;
          height: 65px;
          border-radius: 50%;
          overflow: hidden;
          @include bg;
          // margin-right: 13px;
        }
      }
      .head-left-img-right {
        margin-top: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        span {
          font-size: 17px;
          font-family: PingFang-SC-Medium;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
        }
      }
      .headBottom {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 5px;
        .shenfen {
          // margin-left: 10px;
          display: flex;
          justify-content: flex-start;
          font-size: 15px;
          color: rgba(255, 255, 255, 1);
          img {
            width: 22px;
            height: 22px;
            border-radius: 50%;
            overflow: hidden;
          }
        }
      }
    }
    button.login {
      position: absolute;
      margin: auto;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      width: 120px;
      height: 37px;
      background: transparent;
      color: #ffffff;
      font-size: 14px;
      text-align: center;
      line-height: 35px;
      border: 1px solid #ffffff;
      border-radius: 5px;
    }
    .head-pic {
      @include bg-icon(24px);
      background-image: url("~@/assets/img/nav_message_white@2x.png");
      position: relative;
      i {
        @include bg-icon(15px);
        background-image: url("~@/assets/img/nav_icon_red@2x.png");
        line-height: 15px;
        text-align: center;
        position: absolute;
        right: -5px;
        top: -8px;
        font-size: 11px;
        font-family: PingFang-SC-Bold;
        font-weight: bold;
        color: #ffffff;
      }
    }
  }
  .main {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    background-color: #f6f6f6;
    .one {
      width: 100%;
      margin-top: 10px;
      border-radius: 5px;
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 68px;
      padding-left: 15px;
      padding-right: 15px;
      box-sizing: border-box;
      .leftImg {
        width: 30px;
          height: 30px;
        img {
          display: inline-block;
          // width: 30px;
          // height: 30px;
        }
      }
      .rightDiv {
        width: 60%;
        text-align: left;
        .p1 {
          font-size: 18px;
          margin-bottom: 10px;
        }
        .p2 {
          font-size: 14px;
          color: #666;
          margin-top: 10px;
        }
      }
    }
  }
}
</style>
