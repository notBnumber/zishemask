<template>
  <div class="sort-component">
    <!-- 搜索 -->
    <div class="search-main" id="search">
      <div class="search-body" @click="pageTo('/pages/home/search_result')">
        <i class="search-icon"></i>
        <p>搜索</p>
      </div>
      <!-- <i class="message-icon" @click="pageTo('/pages/my/noticeCenter')">
        <i class="message-num">99</i>
      </i> -->
    </div>

    <div class="body">
      <!-- 左 -->
      <!-- <scroll-view scroll-y class="box-left" @scrolltolower="rightlower"> -->
      <div class="box-left">
        <div @click="toRight(item.id,index)" class="left-item" v-for="(item, index) in leftList" :key="index" :class="[index == myindex && 'active']">
          {{item.typename}}
        </div>
      </div>
      <!-- </scroll-view> -->

      <!-- 右 -->
      <!-- <scroll-view scroll-y class="box-right" @scrolltolower="leftlower"> -->
      <div class="box-right">
        <div class="right-item" v-for="(item, index) in rightList" :key="index"  @click="pageTo('/pages/sort/details',{id:item.gID})">
          <i :style="{backgroundImage: 'url( '+item.Itemcover+')'}"></i>
          <span>{{item.Title}}</span>
        </div>
      </div>
      <!-- </scroll-view> -->

      <i-toast id="toast" />
    </div>
  </div>
</template>

<script>
import goodsItem from "@/components/GoodsItem";
export default {
  components: {
    goodsItem
  },
  data() {
    return {
      searchInput: false,
      keyword: "",
      leftList: [],
      rightList: [],
      myindex: 0,
      leftId: 1
    };
  },
  props: {},
  methods: {
    //初始化左侧分类

    initLeft() {
      this.$API
        .left({
          i: 8,
          c: "entry",
          a: "wxapp",
          m: "mask",
          do: "gettype"
        })
        .then(res => {
          console.log(res, "左侧分类");
          this.leftList = res.data;
        });
    },
    // 右侧商品
    initRight() {
      this.$API
        .right({
          i: 8,
          c: "entry",
          a: "wxapp",
          m: "mask",
          do: "getgoodapi",
          id: this.leftId
        })
        .then(res => {
          console.log(res, "右侧商品");
          this.rightList = res.data;
        });
    },
    toRight(id, index) {
      console.log(id, index);
      this.myindex = index;
      this.leftId = id;
      this.initRight();
    },
    changeFocus() {
      this.keyword = "";
      this.searchInput = !this.searchInput;
    },
    goSearch({ mp: { detail } }) {
      if (detail.value == "") {
        this.$Toast({
          content: "请输入搜索内容",
          type: "error"
        });
        return;
      }
      this.replaceTo("/pages/home/search_result", { keyword: detail.value });
    },
    leftlower(e) {
      console.log(e);
      this.$Toast({
        content: "到底了亲~~~~"
      });
    },
    rightlower(e) {
      console.log(e);
      this.$Toast({
        content: "到底了亲~~~"
      });
    }
  },
  onReady() {
    let vm = this;
    console.log(this.$store.state.test);
    vm.initLeft();
    vm.initRight();
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/css/_mixin";
.sort-component {
  width: 100%;
  height: 100vh;
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
      padding: 9px 0;
      border-radius: 2px;
      flex: 1;
      overflow: hidden;
      // margin-right: 15px;
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
      }
    }
    i.message-icon {
      @include bg-icon(21px);
      background-image: url("~@/assets/img/nav_icon_message_black@2x.png");
      position: relative;
      i.message-num {
        position: absolute;
        top: -5px;
        right: -5px;
        display: inline-block;
        padding: 0 2px;
        height: 15px;
        line-height: 15px;
        border-radius: 5px;
        font-size: 11px;
        color: #ffffff;
        text-align: center;
        background: #ed1731;
      }
    }
  }

  .body {
    height: calc(100% - 48px);
    display: flex;
    overflow: hidden;
    .box-left {
      width: 100px;
      height: 100%;
      overflow-y: scroll;
      background-color: #f8f8f8;
      -webkit-overflow-scrolling: touch;
      &::-webkit-scrollbar {
        display: none;
      }
      .left-item {
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: 14px;
        font-family: PingFang-SC-Regular;
        font-weight: 400;
        color: #444444;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        &.active {
          background-color: #fff;
          position: relative;
          color: rgb(119, 144, 117);
        }
      }
    }
    .box-right {
      flex: 1;
      height: 100%;
      background-color: #fff;
      padding: 17px;
      box-sizing: border-box;
      display: flex;
      overflow-y: scroll;
      flex-direction: column;
      justify-content: flex-start;
      -webkit-overflow-scrolling: touch;
      &::-webkit-scrollbar {
        display: none;
      }
      .right-item {
        display: flex;
        flex-direction: column;
        margin-right: 15px;
        margin-bottom: 10px;
        width: 170px;
        float: left;
        &:nth-child(3n + 3) {
          margin-right: 0;
        }
        i {
          @include bg-icon(170px);
        }
        span {
          font-size: 18px;
          font-family: PingFang-SC-Bold;
          font-weight: bold;
          color: rgba(68, 68, 68, 1);
          text-align: center;
        }
      }
    }
  }
}
</style>
