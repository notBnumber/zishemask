<template>
  <!-- 商品评价 -->
  <div class="all-template">
    <div class="comm-box" v-for="(item, index) in 5" :key="index">
      <CommEvaluate></CommEvaluate>
    </div>
  </div>
</template>

<script>
import CommEvaluate from '@/components/CommEvaluate'
export default {
  components: {
    CommEvaluate
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

  },
  onUnload() {
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/css/_mixin";
  .all-template {
    width: 100%;
    min-height:100vh;
    overflow: hidden;
    .comm-box{
      background-color: #fff;
      margin-bottom: 12px;
      padding: 0 13px;
      &:last-child{
        margin-bottom: 0;
      }
    }
  }

</style>
