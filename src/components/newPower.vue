<template>
  <div class="orderAfterSale-component">
    <div class="div" @click="selected">
      组件{{info}}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 1
    };
  },
  props: {
    info: ""
  },

  // js 方法
  methods: {
    selected() {
      // 第一个参数事件名 第二个需要传的值 
      this.$emit("toggleSelect", '子产');
    }
  }
};
</script>
<style lang="scss" scoped>
.div {
  color: yellowgreen;
}
</style>
