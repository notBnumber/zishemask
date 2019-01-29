<template>
  <!-- 通知中心 -->
  <div class="noticeCenter-template">
    <div class="box">
      <ul>
        <li v-for="(item, index) in items" :key="index" @click="pageTo('/pages/my/noticedetail')"> 
          <p>
            <span>2.0版本上线啦！</span>
            <span>2018-07-21</span>
          </p>
          <p>今天终于把2.0版本上线了！</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        items:['','','']
      }
    },
    methods: {

    },
    mounted() {
      //do something after mounting vue instance

    }
  }
</script>

<style scoped lang='scss'>
@import "~@/assets/css/_mixin";
.noticeCenter-template{
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
        padding: 18px 0;
        border-bottom: 1px solid #EAEAEA;
        &:last-of-type{
          border: none
        }
        p:first-child{
          display: flex;
          justify-content: space-between;
          font-size:14px;
          font-family:PingFang-SC-Bold;
          font-weight:bold;
          color:#222222;
          span:last-child{
            font-size:14px;
            font-family:PingFang-SC-Regular;
            font-weight:400;
            color:#888888;
          }
        }
        p:last-child{
          margin-top: 6px;
          font-size:13px;
          font-family:PingFang-SC-Regular;
          font-weight:400;
          color:#444444;
        }
      }
    }
  }
}
</style>
