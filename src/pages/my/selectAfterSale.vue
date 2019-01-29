<template>
  <!-- 选择售后商品 -->
  <div class="selectAfterSale-template">
    <ul class="afterSaleGoods">
      <li class="goods-item" v-for="(item, index) in goodsList" :key="index">
        <afterSaleCart :info="item" :isSelected="flagArr[index]" :index="index" @toggleSelect="toggleSelect"></afterSaleCart>
      </li>
    </ul>

    <div class="footer">
      <div class="all-select">
        <i class="all-select-btn" @click="allSelected()" :class="[isAll && 'active']"></i>
        全选
      </div>
      <button @click="pageTo('/pages/my/submitAfterSale')">确认</button>
    </div>
  </div>
</template>

<script>
  import afterSaleCart from '@/components/AfterSaleCart'

  export default {
    components: {
      afterSaleCart
    },
    data(){
      return {
        goodsList: [
          {
            name: '梦里花落知多少',
            price: 520,
            num: 1
          },
          {
            name: '开琼筵以坐花，飞羽觞而醉月',
            price: 250,
            num: 2
          },
          {
            name: '挟飞仙以遨游，抱明月而长终。知不可乎骤得，托遗响于悲风',
            price: 125,
            num: 1
          },
        ],
        flagArr: [],
        isAll: false
      }
    },
    watch: {
      flagArr(currentVal) {
        if(currentVal.every(item => {return item == true})) {
          this.isAll = true;
        }else {
          this.isAll = false;
        }
      }
    },
    methods: {
      allSelected() {
        if(this.isAll) {
          this.flagArr.forEach((item, index) => {
            this.$set(this.flagArr, index, false);
          })
        }else {
          this.flagArr.forEach((item, index) => {
            this.$set(this.flagArr, index, true);
          })
        }
      },
      toggleSelect(index) {
        if(this.flagArr[index]) {
          this.$set(this.flagArr, index, false);
        }else {
          this.$set(this.flagArr, index, true);
        }
      },
    },
    onShow() {
      this.goodsList.forEach(item => {
        this.flagArr.push(false);
      })
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/assets/css/_mixin";
  .selectAfterSale-template {
    width: 100%;
    background: #FFFFFF;
    ul.afterSaleGoods {
      width: 100%;
      background: #FFFFFF;
      li.goods-item {
        padding: 0 13px;
      }
    }

    .footer {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 50px;
      border-top: 1px solid #EAEAEA;
      background: #FBFBFB;
      display: flex;
      align-items: center;
      justify-content: space-between;
      z-index: 10;
      .all-select {
        display: flex;
        align-items: center;
        color: #242121;
        font-size: 14px;
        font-weight: bold;
        i.all-select-btn {
          @include bg-icon(17px);
          background: #F5F5F5;
          border: 1px solid #DDDDDD;
          border-radius: 50%;
          box-sizing: border-box;
          margin: auto 10px auto 12px;
          &.active {
            border: none;
            @include bg-img("myaddress_radio_1@2x.png");
            background-size: 100% 100%;
          }
        }
      }
      button {
        display: inline-block;
        width: 90px;
        height: 34px;
        line-height: 34px;
        margin-right: 12px;
        background: #ED1731;
        color: #ffffff;
        font-size: 13px;
        font-weight: bold;
        text-align: center;
        border-radius: 5px;
      }
    }
  }

</style>
