<template>
  <!-- 个人信息 -->
  <div class="add-template">
    <div class="box">

      <i-panel>
        <div  class="sexradio"  @click="pageTo('/pages/my/editmoneycard')">
          <div class="jj">
            <img src="https://jin.itxiaolong.cn/icon/btn3.png" alt="">
            <div>
              <p class="p1">银行卡</p>
              <p class="p2">138****1111</p>
            </div>
          </div>
            <p class="pp1">修改&nbsp;></p>
          
        </div>

      </i-panel>

    </div>
    <i-toast id="toast" />
  </div>
</template>

<script>
import { $Toast } from "@/iView/base/index";
export default {
  data() {
    return {
      sexs: 1
    };
  },
  methods: {
    changeModel(e) {
      console.log(e);
    }
  },
  onShow() {
    //do something after mounting vue instance
  }
};
</script>

<style scoped lang='scss'>
@import "~@/assets/css/_mixin";
.add-template {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #f6f6f671;
  .box {
    // background-color: #fff;
    // padding: 0 15px 25px;
  }

  .sexradio {
    background-color: #fff;
    padding: 0 15px 25px;
    color: #495060;
    font-size: 16px;
    // height: 50px;
    border-bottom: 1px #f5f6f6 solid;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .jj {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      div {
        margin-left: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .p1 {
          font-size: 16px;
        }
        .p2 {
          font-size: 14px;
          color: #495060;
        }
      }
      img {
        display: inline-block;
        width: 60px;
        height: 30px;
      }
    }
  }

  .myradio {
    margin-left: 20px;
  }
  .bbtn {
    display: flex;
    justify-content: space-between;
    padding-left: 5px;
    padding-right: 5px;
    box-sizing: border-box;
    font-size: 16px;
    color: #fff;
    .bbtn1 {
      background-color: #fff;
      border-radius: 5px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 7px 10px;
      box-sizing: border-box;
      border: 0.5px solid #333;
      color: #000;
    }
    .bbtn2 {
      background-color: #1E90FF;
      border-radius: 5px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
            padding: 7px 10px;
      box-sizing: border-box;
    }
    .bbtn3 {
      background-color: #EE0000;
      border-radius: 5px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
            padding: 7px 10px;
      box-sizing: border-box;
    }
  }
}
</style>
