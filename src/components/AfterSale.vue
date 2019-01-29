<template>
<div class="AfterSale-component">
  <div class="goods-image" :style="{backgroundImage: 'url(http://47.107.81.81/image/b2c/home_pic_12@2x.png)'}"></div>
  <div class="goods-info">
    <p class="name">Air Jordan 1 x OFF WHITE联名 AJ1 白红黑 男鞋篮球鞋</p>
    <div class="middle">
      <div class="attr">
        <span class="color">金色</span>,
        <span class="size">42码</span>
      </div>
      <button>关闭申请</button>
    </div>
    <div class="content">
      <div class="price">¥1100</div>
      <div class="num">x1</div>
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

  },
  methods: {

  },
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/css/_mixin";
  .AfterSale-component {
    padding: 12px 1px;
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
      .middle {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 5px 0;
        .attr {
          // background: #F5F5F5;
          // padding: 5px;
          font-size: 12px;
          color: #888888;
          display: flex;
          align-items: center;
        }
        button {
          display: inline-block;
          width: 65px;
          height: 30px;
          line-height: 28px;
          text-align: center;
          background: #ffffff;
          border-radius: 5px;
          border: 1px solid #242121;
          font-size: 13px;
          color: #242121;
          box-sizing: border-box;
        }
      }
      .content {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
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
