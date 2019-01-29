<template>
  <div class="my-template">
    <!-- iView挂载 -->
    <!-- <i-modal title="未获取权限" :visible="modal1" @ok="goSetting()" @cancel="modalClose('modal1')">
      <view>是否前往授权设置页开放授权?</view>
    </i-modal> -->

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
      <button class="login" @click="goLogin('/pages/login/login')" v-if="!isLogin">登录/注册</button>
      <!-- <div class="head-pic" @click="pageTo('/pages/my/noticeCenter')" v-if="isLogin">
        <i>8</i>
      </div> -->
    </div>

    <div class="body">
      <p class="body-row">
        <span>我的订单</span>
        <span @click="pageTo('/pages/my/orderCenter')">查看全部订单
          <i></i>
        </span>
      </p>
      <div class="body-bot">
        <span class="body-item" @click="pageTo('/pages/my/orderCenter', {tabIndex: 1})">
          <i class="payment"></i>
          <span>待支付</span>
        </span>
        <span class="body-item" @click="pageTo('/pages/my/orderCenter', {tabIndex: 2})">
          <i class="hair"></i>
          <span>待发货</span>
        </span>
        <span class="body-item" @click="pageTo('/pages/my/orderCenter', {tabIndex: 3})">
          <i class="Receiving"></i>
          <span>待收货</span>
        </span>
        <span class="body-item" @click="pageTo('/pages/my/orderCenter', {tabIndex: 4})">
          <i class="evaluate"></i>
          <span>待评价</span>
        </span>
        <span class="body-item" @click="pageTo('/pages/my/orderAfterSale')">
          <i class="refund"></i>
          <span>退货/退款</span>
        </span>
      </div>
    </div>

    <div class="box">
      <ul>
        <li @click="pageTo('/pages/my/myEvaluate')">
          <span>
            <i class="evaluate"></i>我的足迹</span>
          <i class="arrow"></i>
        </li>
        <li @click="pageTo('/pages/my/myCollection')">
          <span>
            <i class="Collection"></i>收藏商品</span>
          <i class="arrow"></i>
        </li>
        <li @click="pageTo('/pages/my/myAddress')">
          <span>
            <i class="address"></i>收货地址</span>
          <i class="arrow"></i>
        </li>
        <li @click="pageTo('/pages/my/helpCenter')">
          <span>
            <i class="Help"></i>我的资产</span>
          <i class="arrow"></i>
        </li>
        <li @click="pageTo('/pages/my/setting')">
          <span>
            <i class="setting"></i>编辑资料</span>
          <i class="arrow"></i>
        </li>
        <li @click="pageTo('/pages/my/power')">
          <span>
            <i class="myRight"></i>我的特权</span>
          <i class="arrow"></i>
        </li>
        <li @click="pageTo('/pages/my/pyramid')">
          <span>
            <i class="distribution"></i>分销中心</span>
          <i class="arrow"></i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { modal } from "@/mixins/modal";

export default {
  mixins: [modal],
  data() {
    return {
      avatarUrl: "",
      nickName: "",
      modal1: false,
      timer: null,
      isLogin: false
    };
  },
  methods: {
    getUserInfo() {
      let vm = this;
      wx.getUserInfo({
        success(res) {
          vm.avatarUrl = res.userInfo.avatarUrl;
          vm.nickName = res.userInfo.nickName;
        },
        fail(err) {
          wx.showToast({
            title: "获取用户信息失败",
            icon: "none"
          });
          vm.timer = setTimeout(() => {
            vm.modalOpen("modal1");
          }, 1500);
        }
      });
    },
    getSetting() {
      let vm = this;
      wx.getSetting({
        success(res) {
          console.log(res, "是否授权");
          if (!res.authSetting["scope.userInfo"]) {
            vm.getUserInfo();
          }
        }
      });
    },
    goSetting(name) {
      let vm = this;
      wx.openSetting({
        success(res) {
          if (!res.authSetting["scope.userInfo"]) {
            vm.modalOpen(name);
          }
        }
      });
    },
    goLogin(url) {
      wx.reLaunch({ url });
    }
  },
  onShow() {
    if (wx.getStorageSync("sessionId")) {
      this.isLogin = true;
    }
    this.getSetting();
  },
  onUnload() {
    clearTimeout(this.timer);
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
  .body {
    background-color: #fff;
    margin-bottom: 17px;
    p.body-row {
      padding: 18px 13px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #eaeaea;
      span:first-child {
        font-size: 15px;
        font-family: PingFang-SC-Bold;
        font-weight: bold;
        color: #333333;
      }
      span:last-child {
        font-size: 13px;
        font-family: PingFang-SC-Regular;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        i {
          @include bg-icon(10px);
          margin-left: 5px;
          background-image: url("~@/assets/img/user_icon_more_2@2x.png");
        }
      }
    }
    .body-bot {
      display: flex;
      padding: 18px 0;
      justify-content: space-around;
      span.body-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        i {
          @include bg-icon(44px);
          &.payment {
            background-image: url("~@/assets/img/user_icon_1@2x.png");
          }
          &.hair {
            background-image: url("~@/assets/img/user_icon_2@2x.png");
          }
          &.Receiving {
            background-image: url("~@/assets/img/user_icon_3@2x.png");
          }
          &.evaluate {
            background-image: url("~@/assets/img/user_icon_4@2x.png");
          }
          &.refund {
            background-image: url("~@/assets/img/user_icon_5@2x.png");
          }
        }
        span {
          font-size: 12px;
          font-family: PingFang-SC-Regular;
          font-weight: 400;
          color: #333333;
        }
      }
    }
  }
  .box {
    // margin-top: 12px;

    ul {
      padding: 0 12px;
      box-sizing: border-box;
      background-color: #fff;
      li {
        padding: 18px 0;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        font-family: PingFang-SC-Regular;
        font-weight: 400;
        color: #000000;
        border-bottom: 1px solid #eaeaea;
        i.arrow {
          @include bg-icon(10px) background-image:
            url("~@/assets/img/user_icon_more_2@2x.png");
        }
        &:last-of-type {
          border: none;
        }
        span {
          display: flex;
          align-items: center;
          i {
            margin-right: 5px;
            @include bg-icon(20px);
            &.evaluate {
              background-image: url("https://jin.itxiaolong.cn/icon/icon9.png");
            }
            &.Collection {
              background-image: url("https://jin.itxiaolong.cn/icon/icon6.png");
            }
            &.address {
              background-image: url("https://jin.itxiaolong.cn/icon/icon4.png");
            }
            &.Help {
              background-image: url("https://jin.itxiaolong.cn/icon/icon8.png");
            }
            &.setting {
              background-image: url("https://jin.itxiaolong.cn/icon/icon1.png");
            }
            &.myRight {
              background-image: url("https://jin.itxiaolong.cn/icon/icon7.png");
            }
            &.distribution {
              background-image: url("https://jin.itxiaolong.cn/icon/icon2.png");
            }
          }
        }
      }
    }
  }
}
</style>
