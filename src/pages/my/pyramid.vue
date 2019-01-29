<template>
  <!-- 我的销   template > div第一级需要div-->
  <div class="address-template">
    <div class="div">
      分销
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
.div{
  color: red;
}
</style>
