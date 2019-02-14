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
            <span v-if="level==0">普通用户</span>
            <span v-if="level==1">代理会员</span>
            <span v-if="level==2">银卡会员</span>
            <span v-if="level==3">金卡会员</span>
            <span v-if="level==4">市代会员</span>
            <span v-if="level==5">省代会员</span>
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
      <div class="main_title" @click="pageTo('/pages/login/Privacy')">
        查看用户协议
      </div>
      <div class="bigDiv">
        <div class="bigTwo">
          <div class="one">
            <h2>区代</h2>
            <progress :percent="tgbili" show-info />
            <div class="jb">
              <p>推广成交量</p>
              <p>{{vipinfo.tgchengjiaocount}}/{{vipinfo.tgalltotal}}人</p>
            </div>
          </div>
          <div class="one">
            <progress :percent="100" show-info />
            <div class="jb">
              <p>个人累积消费</p>
              <p>{{vipinfo.Personalconsumption}}/0元</p>
            </div>
          </div>
          <div class="one">
            <progress :percent="100" show-info />
            <div class="jb">
              <p>推广销售额</p>
              <p>{{vipinfo.tgmoenycount}}/0元</p>
            </div>
          </div>
          <button type="warn" class="btn"  @click="pageTo('/pages/my/shenqing')">申请</button>
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
      isLogin: true,
        vipinfo:{},
        level:0,
        tgbili:0,
        mybili:0,
        tgmoneybili:0
    };
  },
  methods: {
    jjjj(index) {
      console.log(index, "子传的值");
    },
      getinfo(){
          let that=this
          this.$API
              .AreaIndexinfo({
                  i: 2,
                  c: "entry",
                  a: "wxapp",
                  m: "mask",
                  do: "AreaIndexinfo",
                  uid: wx.getStorageSync("sessionId")
              })
              .then(res => {
                  console.log(res, "vip信息");
                  if (res.code == 1) {
                      that.vipinfo = res.data;
                      that.tgbili = (res.data.tgchengjiaocount/res.data.tgalltotal).toFixed(2)*100;
                      that.mybili = (res.data.Personalconsumption/0).toFixed(2)*100;
                      that.tgmoneybili = (res.data.tgmoenycount/0).toFixed(2)*100;
                      console.log(that.tgbili, "推广比例");
                      console.log(that.mybili, "个人累积销售比例");
                      console.log(that.tgmoneybili, "推广销售金额比例");
                  }
              });
      }
  },
    onShow(){
        this.getinfo();
        console.log(this.$route.query.level,'携带参数')
        this.level=this.$route.query.level
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
    .bigDiv {
      width: 100%;
      margin-top: 10px;
      border-radius: 10px;
      background-color: #f6f6f6;
      padding: 15px;
      box-sizing: border-box;
      .bigTwo {
        background-color: #fff;
        border-radius: 10px;
        padding: 10px;
        box-sizing: border-box;
        .btn {
          width: 30%;
          margin: auto;
          border-radius: 5px;
          font-size: 15px;
          padding: 5px 2px;
        }
        .one {
          margin-top: 10px;
          .jb {
            display: flex;
            justify-content: space-between;
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
