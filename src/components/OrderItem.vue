<template>
<div class="orderItem-component" @click="pageTo('/pages/my/orderDetail', {id:state.id})" v-if="state!=''">
  <div class="header">
    <span class="order-no">订单号：{{state.order_num}}</span>
    <span class="order-state">{{state.state == 4 ? '交易完成' : state.state == 1 ? '待付款' : state.state == 2 ? '待发货' : state.state == 3 ? '待收货' : state.state == 4 ? '已完成' : '售后'}}</span>
  </div>

  <!-- state-0表示全部订单
1表示待支付
2-待发货 3-待收货 4-已完成 6-退款/售后  -->
  <ul class="goods-list">
    <li class="goods-item" v-for="(item, index) in goodList" :key="index">
      <payItems :message='item'></payItems>
      <!-- 这个组件不加载 -->
    </li>
  </ul>
  <div class="footer">
    <div class="left">
      共{{state.goodlist.length}}件商品&nbsp;&nbsp;&nbsp;&nbsp;小计&nbsp;<span>¥{{state.money}}</span>
    </div>
    <!-- <div   class="right"  @click="pageTo('/pages/my/submitAfterSale')">
      申请售后
    </div> -->
    <div class="right">
      <div class="btn" v-if="state == 4" >
        <button   @click="pageTo('/pages/my/submitAfterSale',{id:state.id})">申请售后</button>
        <!-- <button>付款</button> -->
      </div>
      <div class="btn" v-else-if="state === 3">
        <button   >确认收货</button>
        <!-- <button>付款</button> -->
      </div>
      <!-- <div class="btn" v-else-if="state === 2">
        <button @click.stop="refund()">申请退款</button>
      </div>
      <div class="btn" v-else-if="state === 3">
        <button @click.stop="logistics()">查看物流</button>
        <button @click.stop="receipt()">确认收货</button>
      </div>
      <div class="btn" v-else-if="state === 4">
        <button @click.stop="pageTo('/pages/my/publishEvaluate')">评价</button>
      </div>
      <div class="btn" v-else-if="state === 0 || state === 5">
        <button @click.stop="deleteOrder()">删除订单</button>
      </div> -->
    </div>
  </div>
</div>
</template>

<script>
import payItems from '@/components/payItems'

export default {
  components: {
    payItems
  },
  data() {
    return {
      number: 1,
      goodList:[],
      length:0
    }
  },
  props: {
    state: {
      type: Object,
      default: {}
    }
  },
  created() {
    console.log(this.state,'全部订单',this.state.goodlist.length);
    this.goodList = this.state.goodlist
  
  },
  methods: {
    cancelOrder() {
      wx.showModal({
        title: '您将取消订单？',
        content: '您即将取消订单，取消后若想下单需重新选择，是否确定取消？',
        cancelColor: '#242121',
        confirmColor: '#ED1731',
        success(res) {
          if (res.confirm) {

          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    },
    refund() {
      let vm = this;
      wx.showModal({
        title: '您将申请退款？',
        content: '您即将申请退款，货款将直接退回您的付款账户，是否确定退款？',
        cancelColor: '#242121',
        confirmColor: '#ED1731',
        success(res) {
          if (res.confirm) {
            vm.pageTo('/pages/my/selectAfterSale');
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    },
    deleteOrder() {
      wx.showModal({
        title: '您将删除订单？',
        content: '您即将删除订单，此订单记录将永久删除，是否确定删除？',
        cancelColor: '#242121',
        confirmColor: '#ED1731',
        success(res) {
          if (res.confirm) {

          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    },
    receipt() {
      wx.showModal({
        title: '确认收货',
        content: '确认收货之后将不能进行退款/退货',
        cancelColor: '#242121',
        confirmColor: '#ED1731',
        success(res) {
          if (res.confirm) {

          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    },
    logistics() {

    },

  },
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/css/_mixin";
  .orderItem-component {
    width: 100%;
    background: #FFFFFF;
    margin-top: 12px;
    .header {
      height: 41.5px;
      line-height: 41.5px;
      padding: 0 15px 0 12.5px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #EAEAEA;
      span.order-no {
        color: #888888;
        font-size: 13px;
        @include singleLine;
      }
      span.order-state {
        color: #ED1731;
        font-size: 14px;
        font-weight: bold;
      }
    }
    ul.goods-list {
      padding: 0 13px;
      li.goods-item {
        width: 100%;
      }
    }
    .footer {
      padding: 12px 14px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        font-size: 13px;
        color: #242121;
        @include singleLine;
        span {
          color: #ED1731;
        }
      }
      .right {
        button {
          display: inline-block;
          width: 65px;
          height: 30px;
          line-height: 28px;
          text-align: center;
          background: #ffffff;
          border-radius: 5px;
          border: 1px solid #242121;
          margin-right: 12px;
          font-size: 13px;
          color: #242121;
          box-sizing: border-box;
          &:last-of-type {
            color: #ED1731;
            border: 1px solid #ED1731;
            margin-right: 0
          }
        }
      }
    }
  }

</style>
