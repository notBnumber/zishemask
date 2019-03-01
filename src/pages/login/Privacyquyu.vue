<template>
  <!-- 隐私服务 -->
  <div class="privacy-template">
    <!-- <headers title='隐私服务' isBack></headers> -->
    <div class="text" v-html="content"></div>
      
  </div>
</template>

<script>
// import headers from '@/components/Header'

export default {
  // components: {
  //   headers
  // },
  data() {
    return {
      content:''
    };
  },
  methods: {},
  mounted() {
    //do something after mounting vue instance
  },
  onShow() {
    this.$API
      .QuyuXieyi({
        i: 2,
        c: "entry",
        a: "wxapp",
        m: "mask",
        do: "QuyuXieyi",
      })
      .then(res => {
        console.log(res, "区域申请协议");
        if (res.code == 1) {
          this.content = res.data
          console.log(this.content);
          
        } else {

        }
      });
  }
};
</script>

<style scoped lang='scss'>
@import "~@/assets/css/_mixin";
.privacy-template {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #ffffff;
  .text {
    font-size: 13px;
    color: #444444;
    line-height: 26px;
    padding: 19px 23px;
    text-indent: inherit;
  }
}
</style>
