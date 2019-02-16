<template>
  <!-- 售后订单 -->
  <div class="orderAfterSale-template">

    <!-- Order -->
    <ul class="order-list">
      <li class="order-item" v-for="(item, index) in stateList" :key="index">
        <orderAfterSaleItem :state="item"></orderAfterSaleItem>
      </li>
    </ul>
    <span v-if="stateList.length==0">空空如也</span>
  </div>
</template>

<script>
  import orderAfterSaleItem from '@/components/OrderAfterSale'

  export default {
    components: {
      orderAfterSaleItem
    },
    data(){
      return {
        stateList: []
      }
    },
    methods: {
          init() {
      this.$API
        .GetOrderlist({
          i: 2,
          c: "entry",
          a: "wxapp",
          m: "mask",
          do: "GetOrderlist",
          uid: wx.getStorageSync("sessionId"),
          state:6
        })
        .then(res => {
          console.log(res);
          
          if (res.code == 1) {
            console.log("提交成功");
            // this.stateList = res.data
            // console.log(this.stateList.length,'jjjjjjjjjj');
               this.stateList = res.data

            
          } else {
            console.log(99999999);
            this.stateList = []
            
          }
        });
    }
    },
    onReady() {
      //do something after mounting vue instance
    },
    onShow() {
      this.init()
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/assets/css/_mixin";
  .orderAfterSale-template {
    width: 100%;
    ul.order-list {
      width: 100%;
      li.order-item {
        width: 100%;
      }
    }
  }
</style>
