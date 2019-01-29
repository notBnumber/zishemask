<template>
  <!-- 发表评价 -->
  <div class="myEvaluate-template">
    <div class="box-top">
      <i class="pic" :style="{backgroundImage: 'url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546960518643&di=b3cb15c4fd09835361852aab475cc07f&imgtype=0&src=http%3A%2F%2Fs1.sinaimg.cn%2Fmw690%2F003H6y1Egy6PyA80Qg0b0%26690)'}"></i>
      <div class="box-rig">
        <p class="evaluate">
          <span>商品满意度</span>
          <i-rate :value="5" size="20"  class="rate"></i-rate></p>
        </p>
        <div>Nike耐克 cover系列 新款连帽实打实大师大师的飒飒的</div>
        <p class="zhon">蓝色，L码</p>
        <p class="bot">
          <span class="price">¥<i>8888</i></span>
          <i class="icon">x1</i>
        </p>
      </div>
    </div>
    <div class="box-bot">
      <textarea placeholder="请输入评价"  placeholder-style="color: #888888"></textarea>
      <p class="title">最多上传6张照片 (1/6)</p>
      <div class="box-img">
        <i v-for="(item, index) in picList" :key="index"><b @click="detele(index)"></b>
          <image :src="item" scaleToFill @click="prev(index)"></image>
        </i>
        <i class="add" @click="addList" v-if="picList.length < 6"></i>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  components: {

  },
  data() {
    return {
      starIndex2: 5,
      picList:[]
    }
  },
  props: {

  },
  methods: {
    addList(){
      var num = 6 - this.picList.length;
      var that = this;
      wx.chooseImage({
        count: num,
        success(res) {
          // tempFilePath可以作为img标签的src属性显示图片
          console.log(res.tempFilePaths);
          for(var i=0;i < res.tempFilePaths.length;i++){
            that.picList.push(res.tempFilePaths[i])
          }
        }
      })
    },
    detele(index){
      this.picList.splice(index,1)
    },
    prev(index){
      var that = this;
      wx.previewImage({
        current: that.picList[index], // 当前显示图片的http链接
        urls: that.picList // 需要预览的图片http链接列表
      })
    }
  },
  onReady() {

  },
  onUnload() {
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/css/_mixin";
  .myEvaluate-template {
    width: 100%;
    padding: 0 13px;
    background-color: #fff;
    box-sizing: border-box;
    .box-top{
      padding: 12px 0;
      border-bottom: 1px solid #EAEAEA;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      i.pic {
        @include bg-icon(100px);
        border-radius: 5px;
        margin-right: 12px;
        background-size: cover;
      }
      .box-rig {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 100px;
        overflow: hidden;
        p.evaluate{
          display: flex;
          justify-content: space-between;
          align-items: center;
          span{
            font-size:12px;
            font-family:PingFang-SC-Bold;
            font-weight:bold;
            color:#444444;
          }
          .rate{
            margin-top: -4px;
          }
        }
        div {
          width: 100%;
          font-size:12px;
          font-family:PingFang-SC-Bold;
          font-weight:400;
          color:#888888;
          text-align: justify;
          @include singleLine;
        }
        p.zhon{
          font-size:12px;
          font-family:PingFang-SC-Regular;
          font-weight:400;
          color:#888888;
        }
        p.bot {
          display: flex;
          justify-content: space-between;
          align-items: center;
          span.price {
            font-size: 15px;
            font-family:Arial-BoldMT;
            font-weight:bold;
            color:#ED1731;
            i{
              display: inline-block;
              margin-left: 5px;
              font-size:20px;
            }
          }
          .icon {
            font-size:13px;
            font-family:PingFang-SC-Regular;
            font-weight:400;
            color:#888888;
          }
        }
      }
    }
    .box-bot{
      padding: 18px 0;
      textarea{
        width: 100%;
        height: 100px;
        margin-bottom: 15px;
        background-color: #F8F8F8;
        padding: 12px;
        box-sizing: border-box;
        font-size:13px;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:#333333;
        border-radius: 5px;
      }
      .title{
        font-size:13px;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:#242121;
        margin-bottom: 10px;
      }
      .box-img{
        margin-top: 20px;
        i{
          @include bg-icon(105px)
          background-size: cover;
          position: relative;
          border: 1px solid #DDDDDD;
          margin-right: 17px;
          margin-bottom: 10px;
          border-radius: 5px;
          box-sizing: border-box;
          &:nth-child(3n+3){
            margin-right: 0;
          }
          b{
            display: inline-block;
            @include bg-icon(20px)
            background-image: url('~@/assets/img/return_icon_del@2x.png');
            position: absolute;
            top: 0;
            right: 0;
          }
          image{
            width: 100%;
            height: 100%;
            display: block;
          }
          &.add{
            background-image: url('~@/assets/img/return_icon_add@2x.png');
            border: 0;
          }
        }
      }
    }
  }

</style>
