<template>
  <!-- 售后订单 -->
  <div class="orderAfterSale-template">

    <!-- Order -->
    <ul class="order-list">
      <li class="order-item" v-for="(item, index) in 5" :key="index">
        <orderAfterSaleItem></orderAfterSaleItem>
      </li>
    </ul>
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
      }
    },
    methods: {
    },
    onReady() {
      //do something after mounting vue instance
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
