<template>
  <!-- 我的销   template > div第一级需要div-->
  <div class="address-template">
    <div class="bodys">
      <poster :drawing="drawinginfo"></poster>
    </div>

  </div>
</template>

<script>
    let qrcodeplugin=requirePlugin("poster");
export default {
  data() {
    return {
      isDownRefresh: false,
        savebtnText:'点击保存',
        drawinginfo:[]
    };
  },
    methods:{
        setActive(index) {
            this.tabActive = index;
        },
    },
    onLoad() {
        this.drawinginfo=[{
                type: 'image',
                url: 'https://jin.itxiaolong.cn/icon/index.jpg',
                left: 0,
                top: 0,
                width: 750,
                height: 1100
            },
            {
                type: 'text',
                textType: 'CN',
                content: '我是文字',
                fontSize: 26,
                color: 'white',
                textAlign: 'left',
                left: 170,
                top: 50,
                width: 650,
            }];
    }

};
</script>

<style scoped lang='scss'>
  .bodys{
    width: 100%;
  }
  /* 画布样式 */
  .canvas-style{
    width: 750px !important;
    height: 1100px  !important;
    margin: 0 auto;
    border: 1px solid orangered;
    margin-top: 3px;
  }
</style>
