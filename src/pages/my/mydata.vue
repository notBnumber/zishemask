<template>
  <!-- 我的资料 -->
  <div class="mydata-template">
    <div class="box">
      <ul>
        <li>
          <span>头像</span>
          <p>
            <b @click="uploadimg" :style="{backgroundImage:'url('+ myimg +')'}"></b>
            <i></i>
          </p>
        </li>
        <li @click="pageTo('/pages/my/changename')">
          <span>昵称</span>
          <p>
            小跑
            <i></i>
          </p>
        </li>
        <picker @change="bindPickerChange" :value="index" :range="array">
          <li class="no">
            <span>性别</span>
            <p>
              {{array[index]}}
              <i></i>
            </p>
          </li>
        </picker>
      </ul>
    </div>


  </div>
</template>

<script>
  export default {
    data(){
      return {
        myimg:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1079230720,2354101054&fm=26&gp=0.jpg',
        array:['男','女'],
        index:0
      }
    },
    methods: {
      uploadimg(){
        var that = this;
        wx.chooseImage({
          count: 1,
          success(res) {
            // tempFilePath可以作为img标签的src属性显示图片
            console.log(res.tempFilePaths);
            that.myimg = res.tempFilePaths[0]
          }
        })
      },
      bindPickerChange(e){
        this.index = e.mp.detail.value
      }
    },
    mounted() {
      //do something after mounting vue instance

    }
  }
</script>

<style scoped lang='scss'>
@import "~@/assets/css/_mixin";
.mydata-template{
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #F8F8F8;
  .box{
    margin-top: 12px;
    ul{
      padding: 0 13px;
      background-color: #fff;
      li{
        padding: 24px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size:13px;
        font-family:PingFang-SC-Bold;
        font-weight:bold;
        color:#000000;
        border-bottom: 1px solid #EAEAEA;
        &.no{
          border: none
        }
        i{
          @include bg-icon(10px)
          background-image: url('~@/assets/img/user_icon_more_2@2x.png');
        }
        p{
          position: relative;
          b{
            display: inline-block;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: #eee;
            position: absolute;
            right:20px;
            top:-10px;
            @include bg;
          }
        }

      }
    }
  }
  .btn{
    position: fixed;
    bottom: 20px;
    left:0;
    right: 0;
    padding: 0 13px;
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
