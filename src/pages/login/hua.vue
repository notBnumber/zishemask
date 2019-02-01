<template>
    <div>
        <i-spin fix v-if="spinShow"></i-spin>
        <painter :customStyle="customStyle" @imgOK="onImgOk" :palette="template" :dirty="true"/>
        <button class="savebt" @click="save">保存</button>
    </div>
</template>

<script>
import Card from '../../palette/card'
const card = new Card()
const userInfo = {
  avatar: 'https://wx.qlogo.cn/mmopen/vi_32/171rpAQ2g2v0MV7WIcp7edYibXEcIjicpZNUgJ28ib5kQyD4mjLt7mr55y1tEB9z2KMWBqicYCwaCv29ErnJGFmVgQ/132',
  nickname:'我是小龙',
    myqrcode:'https://jin.itxiaolong.cn/addons/mask/img/1.jpeg'
}

const template = card.do(userInfo)
const customStyle = 'margin:0 auto;'

export default {
  data () {
    return {
      spinShow:true,
      shareImg: '',
      customStyle: customStyle,
      template: template
    }
  },
  methods: {
    save () {
        wx.saveImageToPhotosAlbum({
            filePath: this.shareImg,
            success: res => {
                wx.showModal({
                    title: '专属海报已保存到系统相册',
                    content: '快去分享给朋友，让更多的朋友发现这里的美好',
                    success: res => console.log(res),
                    error: err=> console.log(err)
                })
            },
            fail: err => { console.log(err) }
        })
      console.log('on save click')
    },
      onLoad() {
          let that=this;
          setTimeout(function () {
              that.spinShow=false;
          },1000)

      },
      onUnload() {
          this.spinShow=true;
      },
      onHide(){
          console.log('onhide')
          this.spinShow=true;
      },
    onImgOk (e) {
      this.shareImg = e.mp.detail.path
      // 两种路径是一样的
      console.log(e.mp.detail.path)
      console.log(e.target.path)
    }
  }
}
</script>
<style scoped lang="scss">
    .savebt{
        margin: 10px auto;
        width: 90%;
        display: flex;
        justify-content: center;
        background-color: #FFE873;
        padding: 5px 50px;
        text-align: center;
        border-radius: 5px;
    }
</style>