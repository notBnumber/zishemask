<template>
  <div class="payResult-template">
    <div class="payResult">
      <i class="payResult-icon" :class="[isSuccess ? 'success' : 'fail']"></i>
    </div>
    <div class="tips-title">{{isSuccess ? '支付成功'+money+'!' : '支付失败!'}}</div>
    <div class="tips-content">{{isSuccess ? '' : '请检查是否已扣钱，请勿再次支付！'}}</div>
    <div class="btn" v-if="isSuccess">
      <button class="left" @click="replaceTo('/pages/my/orderCenter',{id:ids})">查看订单</button>
      <button class="right" @click="switchTab('/pages/home/index')">回到首页</button>
    </div>
    <div class="btn" v-else>
      <!-- <button class="left" @click="goBack()">重新支付</button> -->
      <button class="right" @click="switchTab('/pages/home/index')">回到首页</button>
    </div>
  </div>
</template>

<script>
import selectAdressItem from "@/components/SelectAdressItem";

export default {
  components: {
    selectAdressItem
  },
  data() {
    return {
      isSuccess: true,
      ids: "",
      money: ""
    };
  },
  props: {},
  methods: {},
  onShow() {
    console.log(this.$route.query, "参数");
    this.ids = this.$route.query.id;
    this.money = this.$route.query.money;
    if (this.$route.query.isSuccess && this.$route.query.isSuccess == "true") {
      this.isSuccess = true;
      // 成功
    } else {
      this.isSuccess = false;
      // ?失败
    }
  },
  onReady() {
    console.log(this.$route.query);
    // 拿不到参数
  },
  onLoad(e) {
    console.log(e);
  },
  onUnload() {}
};
</script>

<style lang="scss" scoped>
@import "~@/assets/css/_mixin";
.payResult-template {
  width: 100%;
  min-height: 100vh;
  background: #ffffff;
  .payResult {
    padding: 5% 0;
    i.payResult-icon {
      @include bg-icon(120px);
      display: block;
      margin: 0 auto;
      &.success {
        background-image: url("~@/assets/img/result_icon_1@2x.png");
      }
      &.fail {
        background-image: url("~@/assets/img/result_icon_2@2x.png");
      }
    }
  }
  .tips-title {
    width: 100%;
    text-align: center;
    color: #222222;
    font-size: 17px;
    line-height: 34px;
    font-weight: bold;
  }
  .tips-content {
    text-align: center;
    padding: 0 28px;
    color: #222222;
    font-size: 15px;
    line-height: 30px;
  }
  .btn {
    padding: 0 28px;
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    button {
      display: inline-block;
      width: 120px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      color: #ed1731;
      background: #ffffff;
      font-size: 14px;
      font-weight: bold;
      border-radius: 5px;
      border: 1px solid #ed1731;
      box-sizing: border-box;
      &.right {
        background: #ed1731;
        color: #ffffff;
        border: none;
      }
    }
  }
}
</style>
