<template>
  <!-- 订单详情 -->
  <div class="afterSaleDetail-template">
    <div class="header">
      <div class="main">
        <span class="type">退货退款，未收到货</span>
        <span class="state">审核中</span>
      </div>
      <div class="tips"><span>6天 23小时</span>后系统自动为您退款</div>
    </div>

    <div class="goods">
      <afterSale></afterSale>
      <div class="price">退款金额 <span>¥700.00</span></div>
    </div>

    <ul class="order-detail">
      <li class="detail">售后单号：GZ241352441120</li>
      <li class="detail">申请时间：2018-11-27  12:24</li>
      <li class="detail">审核时间：2018-11-27  12:24</li>
    </ul>

    <div class="reason">
      <span>拒绝原因：</span>已发货
    </div>
  </div>
</template>

<script>
  import afterSale from '@/components/AfterSale'

  export default {
    components: {
      afterSale
    },
    data(){
      return {
      }
    },
    methods: {
    },
    onReady() {
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/assets/css/_mixin";
  .afterSaleDetail-template {
    width: 100%;
    .header {
      padding: 20px 12.5px;
      background: #ffffff;
      border-top: 1px solid #E5E5E5;
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
          background: #ED1731;
          color: #FFFFFF;
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
            border-color: transparent #ED1731 transparent transparent;
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
          color: #ED1731;
          font-weight: bold;
        }
      }
    }
    .goods {
      padding: 0 14px;
      background: #ffffff;
      margin-bottom: 12px;
      .price {
        text-align: right;
        font-size: 13px;
        color: #242121;
        line-height: 26px;
        padding: 12px 0;
        span {
          font-weight: bold;
          color: #ED1731;
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
    }
    .reason {
      padding: 10px 13px;
      font-size: 13px;
      color: #242121;
      line-height: 26px;
      background: #FFFFFF;
      span {
        color: #ED1731;
        font-weight: bold;
      }
    }
  }
</style>
