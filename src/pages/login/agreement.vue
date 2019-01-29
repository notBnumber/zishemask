<template>
  <!-- 服务协议 -->
  <div class="agreement-template">
    <!-- <headers title='服务协议' isBack></headers> -->
    <div class="text">
      提供专业可靠的APP软件开发服务，擅长社交、直播、商城及物联网开发等领域。
    </div>
  </div>
</template>

<script>
// import headers from '@/components/Header'
  export default {
    // components: {
    //   headers
    // },
    data(){
      return {

      }
    },
    methods: {

    },
    mounted() {
      //do something after mounting vue instance

    }
  }
</script>

<style scoped lang='scss'>
@import "~@/assets/css/_mixin";
.agreement-template{
  width: 100%;
  height: 100vh;
  background: #ffffff;
  overflow: hidden;
  .text{
    font-size: 13px;
    color: #444444;
    line-height: 26px;
    padding: 19px 23px;
    text-indent: inherit;
  }
}
</style>
