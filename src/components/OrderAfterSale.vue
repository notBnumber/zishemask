<template>
<div class="orderAfterSale-component">
  <div class="header">
    <span class="order-class" v-if="state.state==6">待退款</span>
    <span class="order-class" v-if="state.state==7">已退款</span>
    <span class="order-class" v-if="state.state==8">拒绝退款</span>
    <span class="order-state"></span>
  </div>
  <ul class="goods-list">
    <li class="goods-item" v-for="(item, index) in state.goodlist" :key="index" >
      <orderGoodsItem :message='item'></orderGoodsItem>
    </li>
  </ul>
  <div class="footer">
    <div class="btn">
      <!-- <button>查看详情</button> -->
    </div>
  </div>
</div>
</template>

<script>
import orderGoodsItem from '@/components/OrderGoodsItem'

export default {
  components: {
    orderGoodsItem
  },
  data() {
    return {
      number: 1
    }
  },
  props: {
    state:{}
  },
  methods: {

  },
  created() {
    console.log(this.state,'进退货');
    
    
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/css/_mixin";
  .orderAfterSale-component {
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
      span.order-class {
        color: #242121;
        font-size: 13px;
        font-weight: bold;
        @include singleLine;
      }
      span.order-state {
        color: #ED1731;
        font-size: 14px;
        font-weight: bold;
        @include singleLine;
      }
    }
    ul.goods-list {
      padding: 0 13px;
      li.goods-item {
        width: 100%;
      }
    }
    .footer {
      padding: 12px 13px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      button {
        display: inline-block;
        width: 65px;
        height: 30px;
        line-height: 28px;
        text-align: center;
        background: #ffffff;
        border-radius: 5px;
        border: 1px solid #242121;
        // margin-right: 12px;
        font-size: 13px;
        color: #242121;
        box-sizing: border-box;
      }
    }
  }

</style>
