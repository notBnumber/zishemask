<template>
  <!-- 我的销   template > div第一级需要div-->
  <div class="address-template">
    <i-spin fix v-if="spinShow"></i-spin>
    <div class="bodys">
      <poster :drawing="drawinginfo" :savebtnText="savebtnText" ></poster>
    </div>
  </div>
</template>

<script>
    const qrcodeplugin = requirePlugin("poster");
export default {
  data() {
    return {
      isDownRefresh: false,
      savebtnText: "点击保存",
      drawinginfo: [],
        spinShow:true,
        qrcodeimg:'https://jin.itxiaolong.cn/addons/mask/img/1.jpeg'//自己的分享二维码
    };
  },
    methods:{
        setActive(index) {
            this.tabActive = index;
        },
    },
    onLoad() {
        let that=this;
        setTimeout(function () {
            console.log('关闭我')
            that.spinShow=false;
        },2500)

    },
    onShow() {
        let that=this;
        let uid=wx.getStorageSync('sessionId');
        if (uid){
          //获取自己的分享二维码

        }
        this.drawinginfo = [
            {
                type: "image",
                url: "https://jin.itxiaolong.cn/icon/index.jpg",
                left: 0,
                top: 0,
                width: 750,
                height: 1000
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
            },
            {
                type: 'image',
                url: that.qrcodeimg,
                left: 250,
                top: 700,
                width: 250,
                height: 250
            },
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
