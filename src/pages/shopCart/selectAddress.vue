<template>
  <div class="selectAddress-template">
    <ul class="address-list">
      <li class="address-item" v-for="(item, index) in 2" :key="index">
        <selectAdressItem></selectAdressItem>
      </li>
    </ul>

    <div class="btn">
      <button class="add">添加</button>
    </div>
  </div>
</template>

<script>
import selectAdressItem from '@/components/SelectAdressItem'

export default {
  components: {
    selectAdressItem
  },
  data() {
    return {

    }
  },
  props: {

  },
  methods: {
  },
  onReady() {
    // this.getFields();
  },
  onUnload() {
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/css/_mixin";
  .selectAddress-template {
    width: 100%;
    ul.address-list {
      width: 100%;
      li.address-item {
      }
    }
    .btn{
      position: fixed;
      bottom: 20px;
      left:0;
      right: 0;
      padding: 0 13px;
      z-index: 10;
      button.add {
        width: 100%;
        height: 40px;
        line-height: 40px;
        border-radius: 5px;
        background: #ED1731;
        color: #FFFFFF;
        font-size: 15px;
        text-align: center;
      }
    }
  }

</style>
