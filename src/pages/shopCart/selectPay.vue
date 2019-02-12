<template>
  <div class="main">
    <div class="title">
      <p class="p1">订单需付金额:</p>
      <p class="p2">{{money}}元</p>
    </div>
    <div class="big">
      <div class="yue">
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      money:0,
      sss:false
    };
  },
  methods: {
    wxPay() {
      console.log(this.$route.query.id,wx.getStorageSync("openid"),this.$route.query.money);
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
          let vm = this
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
                vm.sss = true
                console.log(e,'支持技术监督局');
                wx.reLaunch({ url: "/pages/shopCart/payResult?isSuccess="+vm.sss+'&id='+vm.$route.query.id+'&money='+this.$route.query.money});
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
                  console.log(e,'支付失败')
              }
            });
          } else {
            // this.pageTo('/pages/shopCart/payResult', {isSuccess: false})
          }
        });

      
      // true为成功
    }
  },
  onShow() {
    console.log(this.$route.query, "kkk");
    this.money = this.$route.query.money
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
