<template>
  <!-- 个人信息 -->
  <div class="add-template">
    <div class="box">

      <i-panel >
        <RadioGroup v-model="sexs" @change="changeModel" class="sexradio">
          <div class="jj">
            <img src="https://csyueshi.com/icon/brankcard.png" alt="">
            <div>
              <p class="p1">银行卡</p>
              <p class="p2">{{info.phone}}</p>
            </div>
          </div>
          <Radio :label="1" :value="1" class="myradio"></Radio>
        </RadioGroup>

      </i-panel>
      <div class="bbtn">
        <div class="bbtn1" @click="pageTo('/pages/my/getMoneyNote')">提现记录</div>
        <div class="bbtn2" @click="pageTo('/pages/my/moneycard',{id:info.id,branch:info.branch,name:info.name,openbranch:info.openbranch,phone:info.phone,cardnumber:info.cardnumber,phone1:info.phone1})">提现账号管理</div>
        <div class="bbtn3" @click="pageTo('/pages/login/shenqingtixian',{id:info.id})">确认提现账号</div>
      </div>

    </div>
    <i-toast id="toast" />
  </div>
</template>

<script>
import { $Toast } from "@/iView/base/index";
export default {
  data() {
    return {
      sexs: 1,
      info:[]
    };
  },
  methods: {
    //
    init() {
      this.$API
        .GetCard({
          i: 3,
          c: "entry",
          a: "wxapp",
          m: "mask",
          do: "GetCard",
          uid: wx.getStorageSync("sessionId"),
        })
        .then(res => {
          if (res.code == 1) {
            this.info = res.data
            this.info.phone1 = this.info.phone
            console.log(this.phone1);
            
            let str = this.info.phone.split('');
            this.info.phone = str[0]+str[1]+str[2]+'****'+str[7]+str[8]+str[9]+str[10]
          } else {
          }
        });
    },
    changeModel(e) {
      console.log(e);
    }
  },
  onShow() {
    this.init();
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
    margin-top: 15px;
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
        width: 55px;
        height: 40px;
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
    margin-top: 10px;
    .bbtn1 {
      background-color: #fff;
      border-radius: 5px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 7px 10px;
      box-sizing: border-box;
      border: 0.5px solid #D6D6D6;
      color: #585858;
    }
    .bbtn2 {
      background-color: #1e90ff;
      border-radius: 5px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 7px 10px;
      box-sizing: border-box;
    }
    .bbtn3 {
      background-color: #ee0000;
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
