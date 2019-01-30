<template>
  <!-- 我的销   template > div第一级需要div-->
  <div class="address-template">
    <div class="bodys">
      <poster :drawing="drawinginfo" class="canvas-style"></poster>
    </div>

  </div>
</template>

<script>
let qrcodeplugin = requirePlugin("poster");
export default {
  data() {
    return {
      isDownRefresh: false,
      savebtnText: "点击保存",
      drawinginfo: []
    };
  },
  methods: {
    setActive(index) {
      this.tabActive = index;
    }
  },
  onShow() {
    console.log(111);

    this.drawinginfo = [
      {
        type: "image",
        url: "https://jin.itxiaolong.cn/icon/index.jpg",
        left: 0,
        top: 0,
        width: 650,
        height: 950
      },
      {
        type: "text",
        textType: "CN",
        content: "我是文字",
        fontSize: 26,
        color: "white",
        textAlign: "center",
        left: 170,
        top: 50,
        width: 650
      }
    ];
  }
};
</script>

<style scoped lang='scss'>
.bodys {
  width: 100%;
}
/* 画布样式 */
.canvas-style {
  // width: 100% !important;
  // height: 700px  !important;
  // margin: 0 auto;
  // border: 1px solid orangered;
  // margin-top: 3px;
  width: 650rpx !important;
  height: 950rpx !important;
  margin: 0 auto;
  border: 1px solid orangered;
  margin-top: 10rpx;
}
.palette {
  margin: auto;
}
</style>
