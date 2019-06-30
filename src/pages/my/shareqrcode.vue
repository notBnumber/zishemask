<template>
  <!-- 我的销   template > div第一级需要div-->
  <div class="address-template">
    <i-spin fix v-if="spinShow"></i-spin>
    <div class="bodys">
      <poster :drawing="drawinginfo" :savebtnText="savebtnText" :bindcompleted="docompleted"  bindsaveImage='saveImage'></poster>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      isDownRefresh: false,
      savebtnText: "点击保存",
      drawinginfo: [],
        spinShow:true,
        nickname:'我是昵称',
        qrcodeimg:'https://jin.itxiaolong.cn/addons/mask/img/1.jpeg',//自己的分享二维码
        headerimg:'https://wx.qlogo.cn/mmopen/vi_32/171rpAQ2g2v0MV7WIcp7edYibXEcIjicpZNUgJ28ib5kQyD4mjLt7mr55y1tEB9z2KMWBqicYCwaCv29ErnJGFmVgQ/132',//头像
    };
  },
    methods:{
        setActive(index) {
            this.tabActive = index;
        },


    },

    saveImage() {
        console.log(88484);
        
    },
    docompleted(){
          console.log('完成事件');

    },
    onLoad() {
        let that=this;
        setTimeout(function () {
            console.log('关闭我')
            that.spinShow=false;
        },4500)

    },
    onUnload() {
        console.log('onUnload')
    },
    onHide(){
        console.log('onhide')
        this.spinShow=true;
    },
    onShow() {
        console.log('onShow')
        let that=this;
        let uid=wx.getStorageSync('sessionId');
        if (uid){
          //获取自己的分享二维码

        }
        this.drawinginfo = [

            {
                type: "image",
                url: "https://csyueshi.com/icon/qrcodebj.jpg",
                left: 0,
                top: 0,
                width: 750,
                height: 1000
            },
            {
                type: "text",
                textType: "CN",
                content: that.nickname,
                fontSize: 32,
                color: "white",
                bold:"true",
                textAlign: "center",
                left: 270,
                top: 50,
                width: 650
            },
            {
                type: 'image',
                url: that.qrcodeimg,
                left: 250,
                top: 450,
                width: 280,
                height: 280
            },
            {
                type: "image",
                url: that.headerimg,
                left: 80,
                top: 50,
                width: 100,
                height: 100
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
