<template>
  <div class="goodsList-component">
    <!-- 筛选栏 -->
    <ul class="tabs">
      <li class="tab" @click="switchTabs(0)" :class="[tabActive === 0 && 'active']">默认</li>
      <li class="tab" @click="switchTabs(1)" :class="[tabActive === 1 && 'active']">销量</li>
      <li class="tab price" @click="switchTabs(2)" :class="[(tabActive === 2 || tabActive === 3) && 'active']">
        <span class="name">价格</span>
        <span class="arrow" :class="[tabActive == 2 ? 'active' : '']">
          <i class="arrow-top"></i>
          <i class="arrow-bottom"></i>
        </span>
      </li>
      <li class="tab filter" @click="switchTabs(4)" :class="[tabActive === 4 && 'active']">
        <i class="filter-icon"></i>
        <span class="name">筛选</span>
      </li>
      <li class="filter-body" :style="{height: [(!isFilter && !filterHeight) ? '' : (isFilter && filterHeight) ? (filterHeight + 'px')  : 0]}">
        <div class="price-range">
          <div class="title">价格区间</div>
          <div class="main">
            <input type="digit" v-model.lazy="minPrice">
            <i class="line"></i>
            <input type="digit" v-model.lazy="maxPrice">
          </div>
        </div>
        <div class="service">
          <div class="title">服务</div>
          <div class="main">
            <ul class="service-list">
              <li class="service-item active">全部</li>
              <li class="service-item">包邮</li>
              <li class="service-item">7天内退货</li>
            </ul>
          </div>
        </div>
        <div class="btn">
          <button class="reset">重置</button>
          <button class="confirm">确定</button>
        </div>
      </li>
    </ul>
    <!-- <div class="white-space" :style="{height: tabHeight + 20 + 'px'}" v-show="isFixedSearch"></div> -->

    <ul class="goods-list">
      <li class="goods-item" v-for="(item, index) in 10" :key="index">
        <goodsItem></goodsItem>
      </li>
    </ul>

  </div>
</template>

<script>
import goodsItem from '@/components/GoodsItem'

export default {
  components: {
    goodsItem
  },
  data() {
    return {
      searchHeight: 0,
      tabHeight: 0,
      filterHeight: 0,
      tabHeight: 0,
      keyword: '',
      tabActive: 0,
      priceArrow: false,
      isFilter: false,
    }
  },
  props: {

  },
  methods: {
    switchTabs(index) {
      if(index === 0 || index === 1) {
        if(this.tabActive === index) return
        this.isFilter = false
        this.tabActive = index;
      }else if(index === 2){
        if(!this.priceArrow) {
          this.tabActive = 2
        }else {
          this.tabActive = 3
        }
        this.isFilter = false
        this.priceArrow = !this.priceArrow
      }else if (index === 4) {
        this.tabActive = index;
        this.isFilter = !this.isFilter;
      }
      console.log(this.isFilter);
    },
    getFields() {
      let vm = this;
      let query = wx.createSelectorQuery();
      query.select('.filter-body').fields({
        size: true
      }, (res) => {
        console.log(res);
        vm.filterHeight = res.height;
      }).exec()
      query.select('.tab').fields({
        size: true
      }, (res) => {
        console.log(res);
        vm.tabHeight = res.height;
      }).exec()
    },
  },
  onReady() {
    this.getFields();
  },
  onShow() {
    if(this.$route.query.title) {
      wx.setNavigationBarTitle({
        title: this.$route.query.title
      })
    }
  },
  onUnload() {
    console.log("隐藏");
    this.filterHeight = 0;
    this.switchTabs(0);
    this.priceArrow = false;
    console.log(this.isFilter, this.tabActive);
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/css/_mixin";
  .goodsList-component {
    width: 100%;
    ul.tabs {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      position: sticky;
      left: 0;
      right: 0;
      top: 0;
      z-index: 10;
      background: #FFFFFF;
      li.tab {
        flex: 0 1 25%;
        height: 20px;
        line-height: 20px;
        margin: 10px 0;
        text-align: center;
        color: #444444;
        background: transparent;
        font-size: 14px;
        &.active {
          color: #ED1731;
        }
        &.price {
          display: flex;
          justify-content: center;
          align-items: center;
          span.arrow {
            display: inline-block;
            width: 6px;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            margin-left: 6px;
            i {
              display: block;
              width: 100%;
              height: 4px;
              &.arrow-top {
                @include bg-img("search2_icon_1@2x.png");
              }
              &.arrow-bottom {
                @include bg-img("search2_icon_2@2x.png");
              }
            }
            &.active {
              transform: rotateX(180deg);
            }
          }
        }
        &.filter {
          display: flex;
          justify-content: center;
          align-items: center;
          i.filter-icon {
            @include bg-icon(16px);
            background-image: url("~@/assets/img/search2_icon_3@2x.png");
            margin-right: 7.5px;
          }
          &.active {
            i.filter-icon {
              background-image: url("~@/assets/img/search3_icon_2@2x.png");
            }
          }
        }
      }
      li.filter-body {
        overflow: hidden;
        transition: height .3s;
        background: #FFFFFF;
        .title {
          font-size: 13px;
          color: #242121;
          padding: 12px 12.5px;
          margin-top: 18px;
        }
        .main {
          padding: 0 24px;
          display: flex;
          align-items: center;
          input {
            flex: 1;
            overflow: hidden;
            border: 1px solid #DDDDDD;
            border-radius: 5px;
            background: #F8F8F8;
            text-align: center;
            padding: 5px 10px;
            font-size: 13px;
            color: #000000;
          }
          i.line {
            display: inline-block;
            width: 12px;
            height: 2px;
            margin: auto 17.5px;
            border-radius: 2px;
            background: #BBBBBB;
          }
          ul.service-list {
            width: 100%;
            li.service-item {
              display: inline-block;
              color: #242121;
              font-size: 13px;
              border: 1px solid #242121;
              padding: 9px 12.5px;
              border-radius: 5px;
              margin-right: 18px;
              margin-bottom: 10px;
              &:last-of-type {
                margin: 0;
              }
              &.active {
                color: #E3162F;
                border: 1px solid #E3162F;
              }
            }
          }
        }
        .btn {
          padding: 30px 20px 20px;
          display: flex;
          button {
            display: inline-block;
            flex: 1;
            overflow: hidden;
            margin-right: 15px;
            color: #FFFFFF;
            font-size: 13px;
            text-align: center;
            height: 40px;
            line-height: 40px;
            border-radius: 5px;
            background: #242121;
            &:last-of-type {
              margin: 0;
              background: #ED1731;
            }
          }
        }
      }
    }
    .white-space {
      width: 100%;
    }
    ul.goods-list {
      padding: 13px;
      display: flex;
      flex-wrap: wrap;
      li.goods-item {
        flex: 0 1 49%;
        overflow: hidden;
        margin-bottom: 13px;
        &:nth-of-type(2n + 1) {
          margin-right: 2%;
        }
      }
    }
  }

</style>
