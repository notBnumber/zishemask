<template>
  <!-- 我的销   template > div第一级需要div-->
  <div class="address-template">
    <div class="head" :style="{justifyContent: [isLogin ? 'space-between' : 'flex-end']}">
      <div class="head-left" @click="pageTo('/pages/my/mydata')" v-if="isLogin">
        <div class="head-left-div">
          <i class="photo-img">
            <open-data type="userAvatarUrl"></open-data>
          </i>

        </div>
        <div class="head-left-img-right">
          <span>
            <open-data type="userNickName"></open-data>
          </span>
          <div class="shenfen">
            <img src="https://jin.itxiaolong.cn/icon/leve_icon.png" alt="">
            <span>:游客</span>
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
    height: 80px;
    background-color: #242121;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 12px;
    position: relative;
    .head-left {
      display: flex;
      // align-items: center;
      justify-content: flex-start;
      .head-left-div {
        i.photo-img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          overflow: hidden;
          @include bg;
          margin-right: 13px;
        }
      }
      .head-left-img-right {
        display: flex;
        flex-direction: column;
        justify-content: center;
        span {
          font-size: 17px;
          font-family: PingFang-SC-Medium;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
        }
        .shenfen {
          display: flex;
          justify-content: flex-start;
          img {
            width: 25px;
            height: 25px;
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

}
</style>
