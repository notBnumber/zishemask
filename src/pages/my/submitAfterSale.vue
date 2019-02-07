<template>
  <!-- 我的评价 -->
  <div class="myEvaluate-template">
    <!-- <div class="one">
      <img src="" alt="">
      <p>名字</p>
      <div class="ddd">
        <p>￥价格</p>
        <p>X1</p>
      </div>
    </div> -->
    <!-- <shouhou></shouhou> -->

    <ul class="goods-list">
      <li class="goods-item" v-for="(item, index) in stateLists.goodlist" :key="index">
        <shouhou :message='item'></shouhou>
        <!-- {{item.address}} -->
        <!-- 这个组件不加载 -->
      </li>
    </ul>
    <div class="types">
      <p>服务类型</p>
      <div class="btn" :class="[ val == index && 'btn_active']" v-for="(item, index) in stateList" :key="index" @click="selects(index)">
        {{item.title}}
      </div>
    </div>
    <div class="box">
      <textarea placeholder="请输入退货理由" placeholder-style="color: #888888"></textarea>

    </div>
    <div class="btn">
      <button class="login-out">提交退款申请</button>
    </div>
  </div>
</template>

<script>
import shouhou from "@/components/shouhou";
export default {
  components: {
    shouhou
  },
  data() {
    return {
      stateList: [
        {
          title: "退货退款"
        },
        {
          title: "仅退款"
        },
        {
          title: "换货"
        }
      ],
      stateLists: [],
      val: 0
    };
  },
  props: {},
  methods: {
    selects(index) {
      this.val = index;
      console.log(this.val);

      // this.isopen = false;
    },
    init() {
      this.$API
        .GetDetailOrder({
          i: 8,
          c: "entry",
          a: "wxapp",
          m: "mask",
          do: "GetDetailOrder",
          uid: wx.getStorageSync("sessionId"),
          orderid: this.$route.query.id
        })
        .then(res => {
          if (res.code == 1) {
            this.stateLists = res.data;
            console.log(this.stateLists, "订单详情");
          } else {
            // this.pageTo('/pages/shopCart/payResult', {isSuccess: false})
          }
        });
    }
  },
  onReady() {
    // this.val = this.[0];
    this.init();
  },
  onUnload() {}
};
</script>

<style lang="scss" scoped>
@import "~@/assets/css/_mixin";
.myEvaluate-template {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  overflow-y: scroll;
  background-color: #fff;
  .one {
    background-color: #fff;
    padding: 18px 13px;
    display: flex;
    justify-content: space-between;
    img {
      width: 100px;
      height: 100px;
    }
    p {
      font-size: 13px;
      font-family: PingFang-SC-Regular;
      font-weight: 400;
      color: #333;
    }
    .ddd {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
  .types {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 10px;
    .btn {
      padding: 8px 7px;
      box-sizing: border-box;
      border: 1px solid #ed1731;
      border-radius: 5px;
      font-size: 13px;
      margin-left: 8px;
    }
    .btn_active {
      background-color: #ed1731;
    }
  }
  .box {
    padding: 18px 13px;
    textarea {
      width: 100%;
      height: 140px;
      background-color: #f8f8f8;
      border-radius: 5px;
      padding: 13px 12px;
      margin-bottom: 12px;
      box-sizing: border-box;
      font-size: 13px;
      font-family: PingFang-SC-Regular;
      font-weight: 400;
      color: #333;
    }
    .collapse {
      position: relative;
      .collapse-title {
        padding: 0 13px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #f8f8f8;
        height: 40px;
        border-radius: 5px;
        span {
          font-size: 13px;
          font-family: PingFang-SC-Regular;
          font-weight: 400;
          color: #888888;
        }
        i {
          @include bg-icon(12px);
          background-image: url("~@/assets/img/cart_icon_1@2x.png");
          transition: all 0.5s;
          &.active {
            transform: rotate(180deg);
          }
        }
      }
      .collapse-item {
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        width: 100%;
        position: absolute;
        z-index: 10;
        background-color: #fff;
        p {
          padding: 13px;
          font-size: 12px;
          font-family: PingFang-SC-Medium;
          font-weight: 500;
          color: #333333;
          border-bottom: 1px solid #cccccc;
          &:last-child {
            border: 0;
          }
        }
      }
      .falsactive {
        opacity: 0;
        transform: scaleY(0);
        transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.3s;
        transform-origin: center top;
      }
      .trueactive {
        opacity: 1;
        transform: scaleY(1);
        transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.3s;
        transform-origin: center top;
        top: 40px;
      }
    }
    .box-img {
      margin-top: 20px;
      i {
        @include bg-icon(105px) background-size: cover;
        position: relative;
        border: 1px solid #dddddd;
        margin-right: 17px;
        margin-bottom: 10px;
        border-radius: 5px;
        box-sizing: border-box;
        &:nth-child(3n + 3) {
          margin-right: 0;
        }
        b {
          display: inline-block;
          @include bg-icon(20px) background-image:
            url("~@/assets/img/return_icon_del@2x.png");
          position: absolute;
          top: 0;
          right: 0;
        }
        image {
          width: 100%;
          height: 100%;
          display: block;
        }
        &.add {
          background-image: url("~@/assets/img/return_icon_add@2x.png");
          border: 0;
        }
      }
    }
  }
  ul.order-list {
    width: 100%;
    li.order-item {
      width: 100%;
    }
  }
  .btn {
    padding: 0 13px;
    // margin-top: 50px;
    button.login-out {
      width: 100%;
      height: 40px;
      line-height: 40px;
      border-radius: 5px;
      background: #ed1731;
      color: #ffffff;
      font-size: 15px;
      text-align: center;
    }
  }
}
</style>
