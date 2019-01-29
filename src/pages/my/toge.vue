<template>
  <!-- 我的销   template > div第一级需要div-->
  <div class="my-template">
    <div class="head">
      <div class="head-left" v-if="isLogin">
        <div class="head-left-div">
          <i class="photo-img">
            <open-data type="userAvatarUrl"></open-data>
            <span>(商ss家)</span>
          </i>

        </div>
        <div class="head-left-img-right">
          <span>
            <open-data type="userNickName"></open-data>
          </span>

        </div>
        <div class="headBottom">
          <div class="shenfen">
            <span>合伙人</span>
          </div>

        </div>
        <!-- <img src="https://jin.itxiaolong.cn/icon/leve_icon.png" alt=""> -->
      </div>
      <!-- <button class="login" @click="goLogin('/pages/login/login')" v-if="!isLogin">登录/注册</button> -->
      <!-- <div class="head-pic" @click="pageTo('/pages/my/noticeCenter')" v-if="isLogin">
        <i>8</i>
      </div> -->
    </div>
    <!-- 使用  :xxx = xxx 传值给子组件      @toggleSelect="toggleSelect 接收  toggleSelect子组件的事件   jjjj父组件的事件-->
    <!-- <newpower :info='isDownRefresh' @toggleSelect="jjjj"></newpower> -->
    <div class="main">
      <div class="main_title">
        查看用户协议
      </div>
      <div class="imgDiv">
        <img src="https://jin.itxiaolong.cn/icon/jiangicon.png" alt="">
      </div>
      <div class="imgDiv1">
        <p>恭喜你</p>
        <p>你现在已经是举世无双的高手了</p>
        <p>赶紧去享受一下您的权益吧</p>
      </div>
    </div>
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
      isLogin: true
    };
  },
  methods: {
    jjjj(index) {
      console.log(index, "子传的值");
    }
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
      margin: auto;
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
          display: flex;
          justify-content: flex-start;
          font-size: 15px;
          // color: rgba(255, 255, 255, 1);
          padding: 5px 5px;
          box-sizing: border-box;
          border-radius: 5px;
          background-color: #fff;
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
    background-color: #f6f6f6;
    .main_title {
      width: 100%;
      text-align: center;
      padding-top: 8px;
      padding-bottom: 8px;
      background-color: #fff;
      font-size: 14px;
    }
    img {
      width: 200px;
      height: 200px;
    }
    .imgDiv {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .imgDiv1 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      p {
        margin-top: 15px;
        font-size: 15px;
      }
      p:nth-child(1) {
        margin-top: 25px;
      }
    }
  }
}
</style>
