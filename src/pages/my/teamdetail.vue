<template>
  <!-- 我的销   template > div第一级需要div-->
  <div class="address-template">
    <div class="bodys">
      团队列表
    </div>

  </div>
</template>

<script>
export default {

  data() {
    return {
      addList: [],
      isDownRefresh: false
    };
  },

};
</script>

<style scoped lang='scss'>
  .bodys{
    width: 100%;
    height: 600px;
  }
</style>
