<template>
  <div class="my-template">

    <div class="caonima">请输入支付密码确认身份</div>

    <input type="digit">
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.my-template {
  position: relative;
  width: 100%;
  background-color: #cdc1c5;
  .caonima {
    text-align: center;
    background-color: #fff;
    margin: auto;
    width: 100%;
    height: 100px;
    line-height: 100px;
    color: #000;
  }
}
</style>
