<template>
<div class="goodsItem-component" @click="pageTo('/pages/sort/details')">
  <div class="goods-image" :style="{backgroundImage: 'url(http://47.107.81.81/image/b2c/home_pic_11@2x.png)'}"></div>
  <div class="goods-info">
    <p class="name">Nike Air 2020年限量金色</p>
    <div class="content">
      <em class="price">¥1100</em>
      <p class="payNum">4人付款</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {

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
  .goodsItem-component {
    width: 100%;
    border-radius: 5px;
    .goods-image {
      width: 100%;
      height: 170px;
      border-radius: 5px 5px 0 0;
      @include bg;
    }
    .goods-info {
      background: #FFFFFF;
      padding: 13px 12px 15px;
      border: 1px solid #EAEAEA;
      border-top: none;
      border-radius: 0 0 5px 5px;
      p.name {
        color: #444444;
        font-size: 13px;
        @include singleLine;
      }
      .content {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        @include singleLine;
        margin-top: 15px;
        em.price {
          font-weight: bold;
          font-size: 18px;
          color: #ED1731;
        }
        p.payNum {
          color: #888888;
          font-size: 10px;
        }
      }
    }
  }

</style>
