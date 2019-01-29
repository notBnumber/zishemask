<template>
<div class="orderGoodsItem-component">
  <div class="goods-image" :style="{backgroundImage: 'url('+message.img+')'}"></div>
  <div class="goods-info">
    <p class="name">{{message.value}}</p>
    <div class="mid">
      <div class="attr">
        <span class="color">+{{message.integral}}积分</span>,
        <span class="size">已售{{message.TotalQty}}</span>
      </div>
      <button v-if="state==3" @click="pageTo('/pages/my/submitAfterSale')">申请售后</button>
    </div>
    <div class="content">
      <div class="price">¥{{message.price}}</div>
      <div class="num">x{{message.num}}</div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      number: 1
    }
  },
  props: {
    message:{}
  },
  methods: {

  },
  onShow() {
    console.log('kdddddddddddddddddf据该公司个人通过入户官方公布');
    
  },
  mounted () {
    console.log(this.info,'组件');
    
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/css/_mixin";
  .orderGoodsItem-component {
    padding: 12px 2px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #EAEAEA;
    .goods-image {
      width: 100px;
      height: 100px;
      border-radius: 5px;
      @include bg;
      margin-right: 12px;
    }
    .goods-info {
      flex: 1;
      overflow: hidden;
      background: #FFFFFF;
      display: flex;
      flex-wrap: wrap;
      align-items: flex-end;
      p.name {
        min-height: 56px;
        text-align: justify;
        color: #444444;
        font-size: 13px;
        line-height: 26px;
        @include moreLine(2);
      }
      .mid {
        width: 100%;
        margin: 5px 0;
        display: flex;
        justify-content: space-between;
        .attr {
          // background: #F5F5F5;
          // padding: 5px;
          font-size: 12px;
          line-height: 24px;
          color: #888888;
          display: flex;
          align-items: center;
        }
        button {
          display: inline-block;
          padding: 6px 9.5px;
          background: #ffffff;
          font-size: 12px;
          color: #242121;
          border: 1px solid #242121;
          border-radius: 5px;
          &:disabled {
            background: #F8F8F8;
            color: #999999;
          }
        }
      }
      .content {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        @include singleLine;
        .price {
          display: flex;
          align-items: center;
          color: #ED1731;
          font-size: 15px;
          font-weight: bold;
        }
        .num {
          color: #888888;
          font-size: 13px;
        }
      }
    }
  }

</style>
