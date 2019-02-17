<template>
  <div class="main">
    <div class="title">
      <p class="p1">订单需付金额:</p>
      <p class="p2">{{money}}元</p>
    </div>
    <div class="big">
      <div class="yue" @click="yues">
        <img src="https://cssy.hn90qc.com/icon/yuepay.png" alt="">
        <p>余额支付</p>
        <p>></p>
      </div>
      <div class="yue" @click="wxPay()">
        <img src="https://cssy.hn90qc.com/icon/wxpay.png" alt="">
        <p>微信支付</p>
        <p>></p>
      </div>
    </div>
    <div class="yues" v-if="yue == true">
      <span>余额为{{shenyu}}元</span>
      <span>需要支付{{money}}</span>
      <input type="password" placeholder="请输入支付密码" v-model="pwd">
      <div class="button">
        <div class="left" @click="yue=false">
          取消
        </div>
        <div class="right" @click="toInfo">

          支付
        </div>
      </div>
    </div>
    <i-toast id="toast" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      money: 0,
      sss: false,
      yue: false,
      pwd: "",
      shenyu: ""
    };
  },
  methods: {
    wxPay() {
      console.log(
        this.$route.query.id,
        wx.getStorageSync("openid"),
        this.$route.query.money
      );
      // 打印
      this.$API
        .doPay({
          i: 2,
          c: "entry",
          a: "wxapp",
          m: "mask",
          do: "doPay",
          orderid: this.$route.query.id,
          openid: wx.getStorageSync("openid"),
          money: this.$route.query.money
        })
        .then(res => {
          let vm = this;
          if (res.code == 1) {
            console.log("zhifu 成功");
            // this.stateList = res.data;
            wx.requestPayment({
              timeStamp: res.data.timeStamp,
              nonceStr: res.data.nonceStr,
              package: res.data.package,
              paySign: res.data.paySign,
              signType: "MD5",
              success: function(e) {
                vm.sss = true;
                console.log(e, "支持技术监督局");
                wx.reLaunch({
                  url:
                    "/pages/shopCart/payResult?isSuccess=" +
                    vm.sss +
                    "&id=" +
                    vm.$route.query.id +
                    "&money=" +
                    this.$route.query.money
                });
                //支付成功处理
                // app.util.request({
                //   url: "entry/wxapp/addmoney",
                //   cachetime: "0",
                //   data: {
                //     price: price,
                //     u_openid: wx.getStorageSync("openid")
                //   },
                //   success: function(e) {
                //     console.log(e.data);
                //     that.downs(id, url);
                //   }
                // });
              },
              fail: function(e) {
                console.log(e, "支付失败");
              }
            });
          } else {
            // this.pageTo('/pages/shopCart/payResult', {isSuccess: false})
          }
        });

      // true为成功
    },
    yues() {
      this.yue = !this.yue;
      console.log(this.yue);
    },
    toInfo() {
      console.log(this.pwd);
      
      if (this.pwd == "") {
        this.$Toast({
          content: '请输入密码',
          type: "warning"
        }); 

        
        return
      } ;
      this.$API
        .YuePay({
          i: 2,
          c: "entry",
          a: "wxapp",
          m: "mask",
          do: "YuePay",
          uid: wx.getStorageSync("sessionId"),
          money: this.$route.query.money,
          orderid: this.$route.query.id,
          paypsw: this.pwd
        })
        .then(res => {
          if (res.code == 1) {
            setTimeout(() => {
              this.goBack();
            }, 1000);
          } else {
              //这里弹出框有问题，层次问题
              this.$Toast({
                  content: res.code.msg,
                  type: "warning"
              });
            // this.pageTo('/pages/shopCart/payResult', {isSuccess: false})
          }
        });
      }
    },
    init() {
      this.$API
        .Getwallet({
          i: 2,
          c: "entry",
          a: "wxapp",
          m: "mask",
          do: "Getwallet",
          uid: wx.getStorageSync("sessionId")
        })
        .then(res => {
          if (res.code == 1) {
            this.shenyu = res.data.wallet;
          } else {
          }
        });
    }
  },
  onShow() {
    console.log(this.$route.query, "kkk");
    this.pwd = "";
    this.money = this.$route.query.money;
    this.init();
  }
};
</script>
<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100vh;
  padding: 0 5px;
  box-sizing: border-box;
  background-color: rgb(224, 224, 224);
  position: relative;
  .yues {
    z-index: 1;
    width: 300px;
    height: 150px;
    background: rgba(255, 255, 255, 1);
    border-radius: 5px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px 5px;
    input {
      width: 45%;
      margin-top: 20px;
      font-size: 15px;
    }
    input::-webkit-input-placeholder {
      font-size: 15px;
      font-family: PingFang-SC-Bold;
      font-weight: bold;
      color: rgba(204, 204, 204, 1);
    }
    span {
      font-size: 15px;
      font-family: PingFang-SC-Regular;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
    }
    .xin {
      font-size: 12px;
      font-family: PingFang-SC-Regular;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
      margin-top: 15px;
      text-align: center;
    }
    .button {
      width: 100%;
      position: fixed;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      border-top: 1px solid #eeeeee;
      .left {
        width: 50%;
        height: 53px;
        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 15px;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        border-right: 1px solid #eeeeee;
      }
      .right {
        width: 50%;
        height: 53px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 15px;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: rgba(54, 173, 255, 1);
      }
    }
  }
  .title {
    width: 100%;
    padding: 15px 10px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    .p1 {
      color: dimgrey;
    }
    .p2 {
      color: red;
    }
  }
  .big {
    margin-top: 7px;
    .yue {
      margin-top: 12px;
      background-color: rgb(254, 254, 254);
      border-radius: 5px;
      padding: 5px 50px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      box-shadow: 1px 5px 5px 0px rgba(10, 143, 246, 0.14);
      // border: 1px solid #000;
      p {
        display: flex;
        align-items: center;
      }
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
      }
    }
  }
}
</style>
