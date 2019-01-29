<template>
  <div class="searchInit-component">
    <!-- 搜索 -->
    <div class="search-main" id="search">
      <div class="search-body" @click="changeFocus()">
        <i class="search-icon" :class="[searchInput && 'focus']"></i>
        <input type="text" placeholder="搜索" confirm-type="search" v-model.lazy="keyword" @blur="changeFocus()" @confirm="goSearch" focus v-if="searchInput" />
        <p v-else>搜索</p>
      </div>
    </div>

    <div class="body">
      <!-- 关键字 -->
      <div class="keyword">
        <div class="title">热门搜索</div>
        <ul class="keyword-list">
          <li class="keyword-item">女鞋</li>
          <li class="keyword-item">Apple</li>
          <li class="keyword-item">羽绒服</li>
          <li class="keyword-item">nike高帮鞋</li>
          <li class="keyword-item">斜肩包</li>
          <li class="keyword-item">哈利波特</li>
        </ul>
      </div>
      <!-- 推荐商品 -->
      <div class="goods">
        <div class="title">推荐商品</div>
        <ul class="goods-list">
          <li class="goods-item" v-for="(item, index) in 10" :key="index">
            <goodsItem></goodsItem>
          </li>
        </ul>
      </div>

      <i-toast id="toast" />
    </div>
  </div>
</template>

<script>
import goodsItem from "@/components/GoodsItem";
import { $Toast } from "@/iView/base/index";

export default {
  components: {
    goodsItem
  },
  data() {
    return {
      searchHeight: 0,
      searchInput: false,
      keyword: ""
    };
  },
  props: {},
  methods: {
    changeFocus() {
      // this.keyword = '';
      console.log("触发");

      this.searchInput = !this.searchInput;
    },
    goSearch(e) {
      console.log(e, "fskl");
      if (e.mp.detail.value == "") {
        $Toast({
          content: "请输入搜索内容",
          type: "error"
        });
        return;
      } else {
        this.$API
          .right({
            i: 8,
            c: "entry",
            a: "wxapp",
            m: "mask",
            do: "Findgood",
            keywords: e.mp.detail.value
          })
          .then(res => {
            console.log(res, "搜索结果");
            this.rightList = res.data;
          });
      }
      this.replaceTo("/pages/home/search_result", {
        keyword: e.mp.detail.value
      });
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
    }
  },
  onReady() {
    this.getFields();
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/css/_mixin";
.searchInit-component {
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
        margin: auto 5px;
        &.focus {
          margin: auto 10px auto 12px;
        }
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

  .body {
    padding: 0 12.5px;
    .title {
      padding: 15px 0;
      font-size: 15px;
      color: #444444;
      font-weight: bold;
    }
    .keyword {
      margin-top: 10px;
      ul.keyword-list {
        li.keyword-item {
          display: inline-block;
          padding: 9px 12.5px;
          margin-right: 10px;
          margin-bottom: 10px;
          background: #f1f1f1;
          font-size: 13px;
          color: #888888;
          border-radius: 4px;
          &:last-of-type {
            margin: 0;
          }
        }
      }
    }
    .goods {
      width: 100%;
      ul.goods-list {
        display: flex;
        flex-wrap: wrap;
        li.goods-item {
          flex: 0 1 49%;
          overflow: hidden;
          margin-bottom: 12.5px;
          &:nth-of-type(2n + 1) {
            margin-right: 2%;
          }
        }
      }
    }
  }
}
</style>
