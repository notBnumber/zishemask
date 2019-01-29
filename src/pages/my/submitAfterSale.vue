<template>
  <!-- 我的评价 -->
  <div class="myEvaluate-template">
    <div class="box" >
      <textarea placeholder="请输入退货理由" placeholder-style="color: #888888"></textarea>
      <div class="collapse">
        <p class="collapse-title" @click="isopen = true">
          <span>{{val}}</span>
          <i :class="[isopen && 'active']"></i>
        </p>
        <div class="collapse-item" :class="isopen ? 'trueactive' : 'falsactive' " >
          <p v-for="(item, index) in stateList" :key="index" @click="select(index)">{{item}}</p>
        </div>
      </div>

      <div class="box-img">
        <i v-for="(item, index) in picList" :key="index"><b @click="detele(index)"></b>
          <image :src="item" scaleToFill @click="prev(index)"></image>
        </i>
        <i class="add" @click="addList" v-if="picList.length < 6"></i>
      </div>
    </div>
    <div class="btn">
      <button class="login-out">提交退款申请</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stateList: ['未收到货','已收到货'],
      val:'',
      isopen: false,
      picList:[]
    }
  },
  props: {

  },
  methods: {
    select(index){
      this.val =this.stateList[index];
      this.isopen = false;
    },
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
    this.val =this.stateList[0];
  },
  onUnload() {
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/css/_mixin";
  .myEvaluate-template {
    width: 100%;
    height:100vh;
    overflow: hidden;
    overflow-y: scroll;
    background-color: #fff;
    .box{
      padding: 18px 13px;
      textarea{
        width: 100%;
        height: 140px;
        background-color: #F8F8F8;
        border-radius: 5px;
        padding: 13px 12px;
        margin-bottom: 12px;
        box-sizing: border-box;
        font-size: 13px;
        font-family: PingFang-SC-Regular;
        font-weight: 400;
        color: #333;
      }
      .collapse{
        position: relative;
        .collapse-title{
          padding: 0 13px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #F8F8F8;
          height: 40px;
          border-radius: 5px;
          span{
            font-size: 13px;
            font-family: PingFang-SC-Regular;
            font-weight: 400;
            color: #888888;
          }
          i{
            @include bg-icon(12px);
            background-image: url('~@/assets/img/cart_icon_1@2x.png');
            transition: all .5s;
            &.active{
              transform: rotate(180deg);
            }
          }
        }
        .collapse-item{
          box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
          width: 100%;
          position: absolute;
          z-index: 10;
          background-color: #fff;
          p{
            padding: 13px;
            font-size:12px;
            font-family:PingFang-SC-Medium;
            font-weight:500;
            color:#333333;
            border-bottom: 1px solid #CCCCCC;
            &:last-child{
              border: 0;
            }
          }
        }
        .falsactive{
          opacity: 0;
          transform: scaleY(0);
          transition: transform .5s cubic-bezier(.23,1,.32,1),opacity .3s;
          transform-origin: center top;
        }
        .trueactive{
          opacity: 1;
          transform: scaleY(1);
          transition: transform .5s cubic-bezier(.23,1,.32,1),opacity .3s;
          transform-origin: center top;
          top: 40px;
        }
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
    .btn{
      padding: 0 13px;
      // margin-top: 50px;
      button.login-out {
        width: 100%;
        height: 40px;
        line-height: 40px;
        border-radius: 5px;
        background: #ED1731;
        color: #FFFFFF;
        font-size: 15px;
        text-align: center;
      }
    }
  }

</style>
