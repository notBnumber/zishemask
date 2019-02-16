<template>
  <!-- 订单详情 -->
  <div class="orderDetail-template">
    <div class="header">
      <div class="main">
        <span class="type">
          {{stateList.state == 1 ? '等待买家付款' : stateList.state == 2 ? '等待商家发货' : stateList.state == 3 ? '商家已发货' : stateList.state == 4 ? '交易完成':''}}
        </span>
      </div>
      <div class="tips" v-if="state == 1">还剩
        <span>1天 23小时</span>自动关闭订单</div>
      <div class="tips" v-else-if="state == 3">还剩
        <span>6天 23小时</span>自动确认收货</div>
      <div class="tips" v-else></div>
    </div>

    <div class="goods">
      <div class="address-body">
        <div class="connect">
          <span>收货人: {{stateList.name}}</span>
          <span>{{stateList.tel}}</span>
        </div>
        <div class="address-info">
          收货地址：{{stateList.address}}
        </div>
      </div>
      <div class="order">
        <ul class="order-list">
          <li class="order-item" v-for="(item, index) in stateList.goodlist" :key="index">
            <orderDetailTwo :message="item"></orderDetailTwo>
          </li>
        </ul>
        <div class="order-footer">
          <div class="freight">运费&nbsp;&nbsp;¥0</div>
          <div class="total">共{{stateList.goodlist.length}}件商品&nbsp;&nbsp;&nbsp;&nbsp;小计&nbsp;
            <span>¥{{stateList.money}}</span>
          </div>
        </div>
      </div>
    </div>

    <ul class="order-detail">
      <li class="detail">订单号：{{stateList.order_num}}</li>
      <li class="detail">创建时间：{{stateList.time}}</li>
      <!-- postfeename -->
      <li class="detail">快递公司：{{stateList.postfeename}}</li>
      <li class="detail space"  :data-text="stateList.postfeenum">快递号：{{stateList.postfeenum}}
        <span @click="copyNum">复制</span>
      </li>
      
      <!-- <li class="detail" v-if="state !== 1 || state !== 5">支付时间：2018-11-27 12:24</li>
      <li class="detail" v-if="state == 0 || state == 3 || state == 4">发货时间：2018-11-27 12:24</li>
      <li class="detail" v-if="state == 0 || state == 4">收货时间：2018-11-27 12:24</li> -->
    </ul>

    <div class="footer">
      <div class="left">
        <!-- <button>在线客服</button> -->
      </div>
      <div class="right" v-if="stateList.state == 1">
        <button @click="cancelOrder()">取消订单</button>
        <!-- <button class="red">付款</button> -->
      </div>
      <div class="right" v-else-if="stateList.state == 2">
        <button @click="refund()">申请退款</button>
      </div>
      <div class="right" v-else-if="stateList.state == 3">
        <!-- <button @click="pageTo('/pages/my/selectAfterSale')">批量退款</button> -->
        <!-- <button>查看物流</button> -->
        <button class="red" @click="receipt()">确认收货</button>
      </div>
      <div class="right" v-else-if="state == 4">
        <button>查看物流</button>
        <button @click="pageTo('/pages/my/publishEvaluate')">评价</button>
      </div>
      <!-- <div class="right" v-else-if="state == 0 || state == 5">
        <button @click="deleteOrder()">取消订单</button>
      </div> -->
    </div>
  </div>
</template>

<script>
import orderDetailTwo from "@/components/orderDetailTwo";

export default {
  components: {
    orderDetailTwo
  },
  data() {
    return {
      state: 0,
      stateList: ""
    };
  },

  methods: {
    copyNum(e) {
      let vm = this;
      let str = this.stateList.postfeenum;
      console.log(e.currentTarget.dataset.text, e);

      wx.setClipboardData({
        data: str,
        success: function(res) {
          wx.getClipboardData({
            success: function(res) {
              console.log(res.data); // data
            }
          });
        }
      });
    },
    cancelOrder() {
      wx.showModal({
        title: "您将取消订单？",
        content: "您即将取消订单，取消后若想下单需重新选择，是否确定取消？",
        cancelColor: "#242121",
        confirmColor: "#ED1731",
        success(res) {
          if (res.confirm) {
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        }
      });
    },
    receipt() {
      wx.showModal({
        title: "确认收货",
        content: "确认收货之后将不能进行退款/退货",
        cancelColor: "#242121",
        confirmColor: "#ED1731",
        success(res) {
          if (res.confirm) {
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        }
      });
    },
    refund() {
      let vm = this;
      wx.showModal({
        title: "您将申请退款？",
        content: "您即将申请退款，货款将直接退回您的付款账户，是否确定退款？",
        cancelColor: "#242121",
        confirmColor: "#ED1731",
        success(res) {
          if (res.confirm) {
            vm.pageTo("/pages/my/submitAfterSale", { id: vm.stateList.id });
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        }
      });
    },
    deleteOrder() {
      let VM = this;
      wx.showModal({
        title: "您将取消订单？",
        content: "您即将取消订单，此订单记录将永久取消，是否确定取消？",
        cancelColor: "#242121",
        confirmColor: "#ED1731",
        success(res) {
          if (res.confirm) {
            VM.$API
              .CancelMyOrder({
                i: 2,
                c: "entry",
                a: "wxapp",
                m: "mask",
                do: "CancelMyOrder",
                oid: VM.$route.query.id
              })
              .then(res => {
                if (res.code == 1) {
                  // VM.init()
                  setTimeout(() => {
                    VM.goBack();
                  }, 1000);
                } else {
                }
              });
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        }
      });
    },
    init() {
      this.$API
        .GetDetailOrder({
          i: 2,
          c: "entry",
          a: "wxapp",
          m: "mask",
          do: "GetDetailOrder",
          uid: wx.getStorageSync("sessionId"),
          orderid: this.$route.query.id
        })
        .then(res => {
          if (res.code == 1) {
            this.stateList = res.data;
            console.log(this.stateList, "订单详情");
          } else {
            // this.pageTo('/pages/shopCart/payResult', {isSuccess: false})
          }
        });
    }
  },
  onReady() {
    if (this.$route.query.state) {
      this.state = this.$route.query.state;
    }
  },
  onShow() {
    console.log(this.$route.query.id, "商品id");
    this.init();
  }
};
</script>

<style scoped lang="scss">
@import "~@/assets/css/_mixin";
.orderDetail-template {
  width: 100%;
  padding-bottom: 50px;
  .header {
    padding: 20px 12.5px;
    background: #ffffff;
    border-top: 1px solid #e5e5e5;
    margin-bottom: 12px;
    .main {
      span.type {
        color: #212121;
        font-size: 14px;
        margin-right: 24px;
        line-height: 24px;
        font-weight: bold;
        @include singleLine;
      }
      span.state {
        display: inline-block;
        padding: 6px 7.5px;
        border-radius: 5px;
        background: #ed1731;
        color: #ffffff;
        font-size: 12px;
        font-weight: bold;
        position: relative;
        &::before {
          content: "";
          position: absolute;
          display: block;
          width: 0;
          height: 0;
          border-width: 6px 6px 6px 0;
          border-style: solid;
          border-color: transparent #ed1731 transparent transparent;
          left: -5px;
          top: 0;
          bottom: 0;
          margin: auto;
        }
      }
    }
    .tips {
      @include singleLine;
      font-size: 13px;
      line-height: 26px;
      color: #212121;
      span {
        color: #ed1731;
        font-weight: bold;
      }
    }
  }
  .goods {
    width: 100%;
    background: #ffffff;
    margin-bottom: 12px;
    .address-body {
      margin: 0 13px;
      padding: 10px 1px;
      border-bottom: 1px solid #eaeaea;
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
  }
  ul.order-detail {
    padding: 8px 13px;
    margin-bottom: 12px;
    background: #ffffff;
    li.detail {
      width: 100%;
      color: #242121;
      font-size: 12px;
      @include singleLine;
      line-height: 26px;
    }
    li.space {
      color: #ed1731;
    }
  }
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 10px 12px;
    background: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #eaeaea;
    box-sizing: border-box;
    z-index: 10;
    button {
      display: inline-block;
      width: 65px;
      height: 30px;
      line-height: 28px;
      text-align: center;
      border-radius: 5px;
      background: #ffffff;
      font-size: 13px;
      color: #242121;
      margin-right: 12px;
      border: 1px solid #242121;
      &:last-of-type {
        margin-right: 0;
      }
      &.red {
        color: #ed1731;
        border: 1px solid #ed1731;
      }
    }
  }
}
</style>
