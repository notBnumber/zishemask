<template>
  <div class="searchResult-component">
    <!-- 搜索 -->
    <div class="search-main" id="search">
      <div class="search-body">
        <i class="search-icon"></i>
        <input type="text" placeholder="搜索" confirm-type="search" v-model.lazy="keyword" @confirm="goSearch" />
      </div>
    </div>

    <!-- 筛选栏 -->
    <ul class="tabs" :style="{top: searchHeight + 'px'}">
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
      <li class="goods-item" v-for="(item, index) in searchResult" :key="index">
        <goodsBlock :message=item></goodsBlock>
      </li>
    </ul>

  </div>
</template>

<script>
import goodsBlock from "@/components/GoodsBlock";

export default {
  components: {
    goodsBlock
  },
  data() {
    return {
      searchHeight: 0,
      tabHeight: 0,
      filterHeight: 0,
      tabHeight: 0,
      keyword: "",
      tabActive: 0,
      priceArrow: false,
      isFilter: false,
      searchResult:[]
    };
  },
  props: {},
  methods: {
    //搜索内容
    goSearch(e) {
      console.log(e, "fskl");
      // if (e.mp.detail.value == "") {
      //   $Toast({
      //     content: "请输入搜索内容",
      //     type: "error"
      //   });
      //   return;
      // } else {
        this.$API
          .right({
            i: 2,
            c: "entry",
            a: "wxapp",
            m: "mask",
            do: "Findgood",
            keywords: e.mp.detail.value
          })
          .then(res => {
            console.log(res, "搜索结果");
            this.searchResult = res.data.list;
          });
      // }
    },
    getFields() {
      let vm = this;
      let query = wx.createSelectorQuery();
      query
        .select("#search")
        .fields(
          {
            size: true
          },
          res => {
            console.log(res);
            vm.searchHeight = res.height;
          }
        )
        .exec();
      query
        .select(".filter-body")
        .fields(
          {
            size: true
          },
          res => {
            console.log(res);
            vm.filterHeight = res.height;
          }
        )
        .exec();
      query
        .select(".tab")
        .fields(
          {
            size: true
          },
          res => {
            console.log(res);
            vm.tabHeight = res.height;
          }
        )
        .exec();
    },
    switchTabs(index) {
      if (index === 0 || index === 1) {
        if (this.tabActive === index) return;
        this.isFilter = false;
        this.tabActive = index;
      } else if (index === 2) {
        if (!this.priceArrow) {
          this.tabActive = 2;
        } else {
          this.tabActive = 3;
        }
        this.isFilter = false;
        this.priceArrow = !this.priceArrow;
      } else if (index === 4) {
        this.tabActive = index;
        this.isFilter = !this.isFilter;
      }
    }
  },
  onReady() {
    this.getFields();
    if (this.$route.query.keyword) {
      this.keyword = this.$route.query.keyword;
    }
  },
  onUnload() {
    this.keyword = "";
    this.filterHeight = 0;
    this.tabActive = 0;
    this.priceArrow = false;
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/css/_mixin";
.searchResult-component {
  width: 100%;
  .search-main {
    position: sticky;
    padding: 7px 12px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    background: #ffffff;
    .search-body {
      height: 16px;
      padding: 9px 0;
      border-radius: 2px;
      flex: 1;
      overflow: hidden;
      background: #f5f5f5;
      color: #999999;
      font-size: 13px;
      display: flex;
      justify-content: center;
      align-items: center;
      i.search-icon {
        @include bg-icon(13px);
        background-image: url("~@/assets/img/home_icon_search@2x.png");
        margin: auto 10px auto 12px;
      }
      input {
        flex: 1;
        margin-right: 10px;
        overflow: hidden;
        color: #000000;
        font-size: 13px;
        background: transparent;
        &::placeholder {
          color: #999999;
        }
      }
    }
  }
  ul.tabs {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    position: sticky;
    left: 0;
    right: 0;
    z-index: 10;
    background: #ffffff;
    z-index: 10;
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
        color: #ed1731;
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
      transition: height 0.3s;
      background: #ffffff;
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
          border: 1px solid #dddddd;
          border-radius: 5px;
          background: #f8f8f8;
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
          background: #bbbbbb;
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
              color: #e3162f;
              border: 1px solid #e3162f;
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
          color: #ffffff;
          font-size: 13px;
          text-align: center;
          height: 40px;
          line-height: 40px;
          border-radius: 5px;
          background: #242121;
          &:last-of-type {
            margin: 0;
            background: #ed1731;
          }
        }
      }
    }
  }
  .white-space {
    width: 100%;
  }
  ul.goods-list {
    padding: 0 13px;
    background: #ffffff;
    li.goods-item {
      width: 100%;
    }
  }
}
</style>
