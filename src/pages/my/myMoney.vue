<template>
  <!-- 我的销   template > div第一级需要div-->
  <div class="my-template">
    <div class="head">
      <div class="head-left" v-if="isLogin">
        <div class="leftDiv" @click="pageTo('/pages/my/mynote')">记录</div>
        <div class="monDiv">
          <img src="https://jin.itxiaolong.cn/icon/mymoneyicon.png" alt="">
          <p>大米</p>
          <p>￥80.00</p>
        </div>
        <div class="rightDiv">提现</div>
      </div>
      <!-- <button class="login" @click="goLogin('/pages/login/login')" v-if="!isLogin">登录/注册</button> -->
      <!-- <div class="head-pic" @click="pageTo('/pages/my/noticeCenter')" v-if="isLogin">
        <i>8</i>
      </div> -->
    </div>
    <!-- 使用  :xxx = xxx 传值给子组件      @toggleSelect="toggleSelect 接收  toggleSelect子组件的事件   jjjj父组件的事件-->
    <!-- <newpower :info='isDownRefresh' @toggleSelect="jjjj"></newpower> -->
    <div class="main">
      <div class="maintitle">
        功能
      </div>
      <div class="mainContent">
        <div class="contentOne" @click="pageTo('/pages/my/vipcard')">
          <img src="https://jin.itxiaolong.cn/icon/teamicon.png" alt="">

          <div class="cao">

            <p>会员卡</p>
            <p>1张</p>
          </div>
        </div>

        <div class="contentTwo" @click="pageTo('/pages/my/setpsw')">
          <img src="https://jin.itxiaolong.cn/icon/teamicon.png" alt="">
          <div class="cao">
            <p>支付密码</p>
            <p>设置/修改</p>
          </div>
        </div>
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
    jjjj(index) {}
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
    padding: 10px 12px;
    .head-left {
      width: 100%;
      display: flex;
      justify-content: space-around;
      padding-top: 50px;
      padding-bottom: 20px;
      box-sizing: border-box;
      .leftDiv {
        height: 26px;
        font-size: 14px;
        padding: 0 18px 0 18px;
        line-height: 26px;
        box-sizing: border-box;
        border-radius: 15px;
        overflow: hidden;
        background-color: #fff;
        margin-top: 30px;
      }
      .monDiv {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        img {
          width: 40px;
          height: 45px;
          margin-bottom: 10px;
        }
        p {
          margin-top: 5px;
          font-size: 16px;
          color: #fff;
        }
        p:nth-child(1) {
          font-size: 14px;
        }
      }
      .rightDiv {
        font-size: 14px;
        height: 26px;
        padding: 0 18px 0 18px;
        line-height: 26px;
        box-sizing: border-box;
        border-radius: 15px;
        overflow: hidden;
        background-color: #fff;
        margin-top: 30px;
      }
    }
  }
  .main {
    width: 100%;
    // padding: 10px;
    box-sizing: border-box;
    background-color: #f6f6f6;
    .maintitle {
      height: 40px;
      line-height: 40px;
      padding-left: 10px;
      font-size: 16px;
      background-color: #fff;
    }
    .mainContent {
      width: 100%;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      .contentOne {
        width: 50%;
        padding-left: 10px;
        box-sizing: border-box;
        height: 70px;
        border: 1px solid #E5E5E5;
        border-left: none;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 30px;
          height: 30px;
          border-radius: 50%;
        }
        .cao {
          height: 70px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-left: 10px;
          p:nth-child(1) {
            font-size: 16px;
          }
          p:nth-child(2) {
            font-size: 14px;
            color: #666;
          }
        }
      }
      .contentTwo {
        width: 50%;
        height: 70px;
        padding-left: 10px;
        box-sizing: border-box;
        border: 1px solid #E5E5E5;
        border-left: none;
        border-right: none;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 30px;
          height: 30px;
          border-radius: 50%;
        }
        .cao {
          margin-left: 20px;
          height: 70px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-left: 20px;
          p:nth-child(1) {
            font-size: 16px;
          }
          p:nth-child(2) {
            font-size: 14px;
            color: #666;
          }
        }
      }
    }
  }
}
</style>
