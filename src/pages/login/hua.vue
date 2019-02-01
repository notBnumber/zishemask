<template>
    <div>
        <painter :customStyle="customStyle" @imgOK="onImgOk" :palette="template" :dirty="true"/>
        <button style="margin-top:40rpx" @click="save">保存</button>
    </div>
</template>

<script>
import Card from '../../palette/card'
const card = new Card()
const userInfo = {
  avatar: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=329429574,1947956322&fm=173&app=49&f=JPEG?w=600&h=362&s=1861796CCC05A37418ED4D120300D0CA'
}

const template = card.do(userInfo)
const customStyle = 'margin-left:40rpx'

export default {
  data () {
    return {
      shareImg: '',
      customStyle: customStyle,
      template: template
    }
  },
  methods: {
    save () {
      console.log('on save click')
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