<template>
  <div class="confirmOrder-template">
    <div class="address-has" @click="pageTo('/pages/my/myAddress')">
      <div class="address-body">
        <div class="connect">
          <span>收货人: {{address==''?'':address.name}}</span>
          <!-- <span>联系电话:{{defaults.}}</span> -->
        </div>
        <div class="address-info">
          收货地址：{{address==''?'':address.detailadd}}
        </div>
      </div>
      <i class="more-icon"></i>
    </div>
    <div class="address-nohas" v-if="address == ''">
      <button class="add-address" @click="pageTo('/pages/my/addAddress')">添加收货地址</button>
    </div>

    <div class="order">
      <ul class="order-list">
        <li class="order-item" v-for="(item, index) in detail" :key="index">
          <orderGoodsItem :message='item'></orderGoodsItem>
        </li>
      </ul>
      <div class="order-footer">
        <div class="freight">运费&nbsp;&nbsp;¥{{freight}}</div>
        <div class="total">共{{detail.length}}件商品&nbsp;&nbsp;&nbsp;&nbsp;小计&nbsp;
          <span>¥{{fuckPrice}}</span>
        </div>
      </div>
    </div>

    <div class="footer">
      <span class="total">合计：
        <span>¥{{fuckPrice}}</span>
      </span>
      <button class="goPay" @click="goPay">立即支付</button>
    </div>
    <i-toast id="toast" />
  </div>
</template>

<script>
import orderGoodsItem from "@/components/OrderGoodsItem";

export default {
  components: {
    orderGoodsItem
  },
  data() {
    return {
      defaults: "",
      address: "",
      detail: [],
      obj: {},
      allPrice: 0,
      goodDetail: [],
      freight: 0,
      fuckPrice:0
    };
  },
  props: {},
  methods: {
    init() {
      // this.address = wx.getStorageSync("address");
      this.$API
        .GetDefaultaddress({
          i: 2,
          c: "entry",
          a: "wxapp",
          m: "mask",
          do: "GetDefaultaddress",
          uid: wx.getStorageSync("sessionId"),
        })
        .then(res => {
          console.log(res, "是否默认地址");
          this.defaults = res.data.Result;
          this.address = res.data.addre;
          this.addId = res.data.addre.aid
          
        });

      // 商品详情
      // this.$API
      //   .Onegood({
      //     i: 2,
      //     c: "entry",
      //     a: "wxapp",
      //     m: "mask",
      //     do: "Onegood",
      //     gid:this.$route.query.id
      //   })
      //   .then(res => {
      //     console.log(res, "");
      //       this.goodDetail = res.data

      //       console.log(this.goodDetail,'山沟');
      //       for (let item of this.goodDetail) {
      //         console.log(item ,'想百年好合');
      //         item.num = this.$route.query.num
      //       }
      //   });
    },
    goPay() {
      let vm = this;

      if (vm.address == "") {
        wx.showModal({
          title: "无收货地址",
          content: "请选择收货地址",
          cancelText: "取消",
          cancelColor: "#ED1731",
          confirmText: "确认",
          confirmColor: "#19be6b",
          success(res) {
            if (res.confirm) {
              vm.pageTo("/pages/my/addAddress", { isSuccess: true });
            } else if (res.cancel) {
              // vm.pageTo("/pages/shopCart/payResult", { isSuccess: false });
            }
          }
        });
      } else {
        this.$API
          .AddMyOrder({
            i: 2,
            c: "entry",
            a: "wxapp",
            m: "mask",
            do: "AddMyOrder",
            uid: wx.getStorageSync("sessionId"),
            aid:this.addId,
            money:Number(this.allPrice) + Number(this.freight),
            totalfreght:this.freight,
            arr:JSON.stringify(this.detail),
            type:1
          })
          .then(res => {
            if (res.code == 1) {
              console.log('提交成功');
              vm.pageTo("/pages/shopCart/selectPay",{money:Number(this.allPrice) + Number(this.freight),id:res.data})
            } else {
                this.$Toast({
                    content: res.msg,
                    type: "warning"
                });
              // this.pageTo('/pages/shopCart/payResult', {isSuccess: false})
            }
          });
      }
      // wx.showModal({
      //   title: '模拟支付结果',
      //   content: '请选择支付结果',
      //   cancelText: '失败',
      //   cancelColor: '#ED1731',
      //   confirmText: '成功',
      //   confirmColor: '#19be6b',
      //   success(res) {
      //     if (res.confirm) {
      //       vm.pageTo('/pages/shopCart/payResult', {isSuccess: true})
      //     } else if (res.cancel) {
      //       vm.pageTo('/pages/shopCart/payResult', {isSuccess: false})
      //     }
      //   }
      // })
    }
  },
  onShow() {
    // this.obj = {};
    console.log(this.$route.query, "参数对象");
    this.detail = this.$route.query.obj;
    this.detail = JSON.parse(this.detail);
    // this.detail.push(this.$route.query.value);
    console.log(this.detail, "数组");
    this.allPrice = 0;
    this.freight = 0;
    for (let item of this.detail) {
      // this.allPrice = this.detail.price * this.detail.num;
      this.allPrice += item.price * item.num;
      this.freight += item.freight * item.num;
    }
    this.fuckPrice = this.allPrice+this.freight
    this.init();
  },
  onReady() {
    // this.getFields();
    // this.obj = {
    //   price: this.$route.query.price,
    //   img: this.$route.query.img,
    //   title: this.$route.query.value,
    //   num: this.$route.query.num
    // };
    // console.log(this.allPrice);
  },
  onUnload() {}
};
</script>

<style lang="scss" scoped>
@import "~@/assets/css/_mixin";
.confirmOrder-template {
  width: 100%;
  padding-bottom: 26px;
  .address-has {
    margin: 12px 13px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    background: #ffffff;
    .address-body {
      padding: 10px 20px;
      .connect {
        width: 100%;
        display: flex;
        justify-content: space-between;
        color: #222222;
        font-weight: bold;
        font-size: 14px;
        line-height: 28px;
      }
      .address-info {
        width: 100%;
        @include moreLine(2);
        color: #222222;
        font-size: 13px;
        line-height: 26px;
        text-align: justify;
      }
    }
    i.more-icon {
      @include bg-icon(20px);
      background-image: url("~@/assets/img/qrdd_bg_more@2x.png");
      position: absolute;
      right: 18px;
    }
  }
  .address-nohas {
    margin: 12px 13px;
    height: 100px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    button.add-address {
      display: block;
      width: 120px;
      height: 40px;
      border-radius: 5px;
      background: #242121;
      text-align: center;
      line-height: 40px;
      color: #ffffff;
      font-size: 14px;
      margin: auto;
    }
  }
  .order {
    background: #ffffff;
    padding: 0 13px;
    ul.order-list {
      li.order-item {
      }
    }
    .order-footer {
      width: 100%;
      padding: 10px 0;
      text-align: right;
      color: #242121;
      font-size: 13px;
      line-height: 26px;
      .freight {
        width: 100%;
      }
      .total {
        width: 100%;
        span {
          color: #ed1731;
        }
      }
    }
  }
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 5px 12px;
    background: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #eaeaea;
    box-sizing: border-box;
    z-index: 10;
    span.total {
      font-size: 15px;
      color: #242121;
      font-weight: bold;
      span {
        color: #ed1731;
      }
    }
    button.goPay {
      display: inline-block;
      width: 100px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border-radius: 5px;
      background: #ed1731;
      font-size: 13px;
      font-weight: bold;
      color: #ffffff;
    }
  }
}
</style>
