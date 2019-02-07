<template>
  <!-- 订单中心 -->
  <div class="orderCenter-template">
    <!-- Tabs -->
    <ul class="tabs">
      <li class="tab" v-for="(item, index) in tabs" :key="index" :class="[tabActive === index && 'active']" @click="setActive(index)">
        <em>{{item.title}}</em>
      </li>
      <span class="line" :style="{left: (4 + tabActive * 20) + '%'}"></span>
    </ul>

    <!-- Order -->
    <ul class="order-list" >
      <li class="order-item" v-for="(item, index) in stateList" :key="index">
        <orderItem :state="item"></orderItem>
      </li>
    </ul>
    <!-- <ul class="order-list" v-if="tabActive==1">
      <li class="order-item" v-for="(item, index) in stateList" :key="index">
        <orderItem :state="item"></orderItem>
      </li>
    </ul>
    <ul class="order-list" v-if="tabActive==2">
      <li class="order-item" v-for="(item, index) in stateList" :key="index">
        <orderItem :state="item"></orderItem>
      </li>
    </ul>
    <ul class="order-list" v-if="tabActive==3">
      <li class="order-item" v-for="(item, index) in stateList" :key="index">
        <orderItem :state="item"></orderItem>
      </li>
    </ul>
    <ul class="order-list" v-if="tabActive==4">
      <li class="order-item" v-for="(item, index) in stateList" :key="index">
        <orderItem :state="item"></orderItem>
      </li>
    </ul> -->
  </div>
</template>

<script>
import orderItem from "@/components/OrderItem";

export default {
  components: {
    orderItem
  },
  data() {
    return {
      //         state-0表示全部订单
      // 1表示待支付
      // 2-待发货 3-待收货 4-已完成 5-售后
      tabs: [
        { title: "全  部", state: 0 },
        { title: "待付款", state: 1 },
        { title: "待发货", state: 2 },
        { title: "待收货", state: 3 },
        { title: "已完成", state: 4 }
        // {title: '售后', state: 5},
      ],
      stateList: [],
      tabActive: 0
    };
  },
  methods: {
    setActive(index) {
      this.tabActive = index;
      this.init()
    },
    init() {
      this.$API
        .GetOrderlist({
          i: 8,
          c: "entry",
          a: "wxapp",
          m: "mask",
          do: "GetOrderlist",
          uid: wx.getStorageSync("sessionId"),
          state:this.tabActive
        })
        .then(res => {
          if (res.code == 1) {
            console.log("提交成功");
            this.stateList = res.data
          } else {
            // this.pageTo('/pages/shopCart/payResult', {isSuccess: false})
          }
        });
    }
  },
  onShow() {
    this.init()
  },
  onReady() {
    //do something after mounting vue instance
    if (this.$route.query.tabIndex) {
      const tabIndex = this.$route.query.tabIndex;
      this.setActive(tabIndex);
    } else {
      this.setActive(0);
    }
  }
};
</script>

<style scoped lang="scss">
@import "~@/assets/css/_mixin";
.orderCenter-template {
  width: 100%;
  ul.tabs {
    width: 100%;
    display: flex;
    align-items: center;
    background: #fff;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    li.tab {
      flex: 0 1 20%;
      overflow: hidden;
      &.active {
        em {
          color: #ed1731;
        }
      }
      em {
        padding: 17px 0 20px;
        color: #888888;
        font-size: 14px;
        font-weight: bold;
        text-align: center;
        position: relative;
      }
    }
    span.line {
      display: block;
      position: absolute;
      bottom: 8px;
      left: 4%;
      width: 12%;
      height: 4px;
      border-radius: 5px;
      margin: auto;
      background: #ed1731;
      transition: left 0.3s;
    }
  }
  ul.order-list {
    width: 100%;
    li.order-item {
      width: 100%;
    }
  }
}
</style>
