<template>
<div class="afterSaleCart-component">
  <i class="select-icon" @click="selected()" :class="[isSelected && 'active']"></i>
  <div class="goods-image" :style="{backgroundImage: 'url(http://47.107.81.81/image/b2c/home_pic_12@2x.png)'}"></div>
  <div class="goods-info">
    <p class="name">{{info.name}}</p>
    <div class="attr">
      <span class="color">金色</span>,
      <span class="size">42码</span>
    </div>
    <div class="content">
      <div class="price">¥{{info.price}}</div>
      <div class="numInput">
        <button class="reduce" plain @click="reduce" :class="[info.num == 1 && 'disabled']" :disabled="info.num == 1"></button>
        <span class="num">{{info.num}}</span>
        <button class="add" plain @click="add" :class="[info.num == 99 && 'disabled']" :disabled="info.num == 99"></button>
      </div>
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
    isSelected: {
      type: Boolean,
      default: false
    },
    info: {
      type: Object,
      default: {}
    },
    index: {
      type: Number,
      default: 0
    }
  },
  methods: {
    reduce() {
      this.info.num = Number(this.info.num)
      if(this.info.num > 0) {
        this.info.num -= 1;
      }
    },
    add() {
      this.info.num = Number(this.info.num)
      if(this.info.num < 99) {
        this.info.num += 1;
      }
    },
    handleChangeNum({mp: {detail}}) {
      let value = detail.value;
      this.info.num = value.replace(/[^0-9]+/g, '')
      if(this.info.num.length > 2) {
        this.info.num = 99;
      }
    },
    handleBlur({mp: {detail}}) {
      if(!this.info.num) {
        this.info.num = 1;
      }
    },
    selected() {
      this.$emit('toggleSelect', this.index)
    }
  },
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/css/_mixin";
  .afterSaleCart-component {
    padding: 12px 1px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #EAEAEA;
    i.select-icon {
      @include icon(17px);
      background: #F5F5F5;
      border: 1px solid #DDDDDD;
      box-sizing: border-box;
      &.active {
        border: none;
        @include bg-img("myaddress_radio_1@2x.png");
        background-size: 100% 100%;
      }
    }
    .goods-image {
      width: 100px;
      height: 100px;
      border-radius: 5px;
      @include bg;
      margin: 0 12px 0 15px;
    }
    .goods-info {
      flex: 1;
      overflow: hidden;
      background: #FFFFFF;
      display: flex;
      flex-wrap: wrap;
      align-items: flex-end;
      p.name {
        width: 100%;
        min-height: 56px;
        text-align: justify;
        color: #444444;
        font-size: 13px;
        line-height: 26px;
        @include moreLine(2);
      }
      .attr {
        background: #F5F5F5;
        padding: 5px;
        font-size: 11px;
        color: #888888;
        display: flex;
        align-items: center;
        margin: 5px 0;
        i.arrow-icon {
          @include icon(12px);
          background-image: url("~@/assets/img/cart_icon_1@2x.png");
          background-repeat: no-repeat;
          background-size: 100% 100%;
          margin-left: 8px;
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
        .numInput {
          display: flex;
          align-items: center;
          button {
            border: none;
            @include bg-icon(20px);
            &.reduce {
              border-radius: 2px 0 0 2px;
              background-image: url("~@/assets/img/-s-cart_icon_reduce@2x.png");
              &.disabled {
                background-image: url("~@/assets/img/cart_icon_reduce@2x.png");
              }
            }
            &.add {
              border-radius: 0 2px 2px 0;
              background-image: url("~@/assets/img/-s-cart_icon_add@2x.png");
              &.disabled {
                background-image: url("~@/assets/img/cart_icon_add2@2x.png");
              }
            }
          }
          span.num {
              width: 30px;
              height: 20px;
              line-height: 20px;
              overflow: hidden;
              background: transparent;
              color: #242121;
              font-size: 13px;
              text-align: center;
          }
        }
      }
    }
  }

</style>
