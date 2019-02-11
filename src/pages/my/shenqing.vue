<template>
  <!-- 个人信息 -->
  <div class="add-template">
    <div class="box">

      <div class="inp">
        <span>姓名：</span>
        <input title="姓名" placeholder="请填写收货人的名字" v-model="name"/>
      </div>
      <!-- <i-input  type="number" title="QQ" placeholder="请输入QQ"/> -->
      <!-- <i-input  type="text" title="微信" placeholder="请输入微信" /> -->
      <div class="inp">
        <span>手机号码：</span>
        <input title="手机号" placeholder="请输入收货人的手机号码" v-model="phone"/>
      </div>
      <div class="area">
        <span>常住地址:</span>
        <picker mode="region" @change="bindRegionChange">
          <div class="chooseaddress">
            {{region}}
            <i></i>
          </div>
        </picker>
      </div>

      <!-- <i-input value="已设置密码" title="密码" disabled /> -->
      <div class="inp">
        <span>备注：</span>
        <input type="text" title="备注" placeholder="请输入备注"  v-model="beizhu">
      </div>
      <!-- <i-checkbox-group v-model="sexs" @change="changeModel" class="sexradio">
                    <i-checkbox  value="1" class="myradio">
                        <span>阅读区域团队协议</span>
                    </i-checkbox>
                </i-checkbox-group> -->
      <!-- <i-checkbox-group  @change="handleFruitChange">
                        <i-checkbox  value="阅读区域团队协议">
                            <span></span>
                        </i-checkbox>
                    </i-checkbox-group> -->
      <label for="label" class="cao">
        <input type="checkbox" id="label" v-model="ckeckVal" @click="clickMe" class="cao1">
        <span @click.stop="cao">阅读区域团队协议</span>
      </label>

    </div>
    <div class="btn">
      <button class="login-out" @click="submit">提交申请</button>
    </div>
    <i-toast id="toast" />
  </div>
</template>

<script>
import { $Toast } from "@/iView/base/index";
export default {
  data() {
    return {
      region: "请选择地区",
      isselect: false,
      name: "",
      sexs: 1,
      phone: "",
      qq: "",
      wx: "",
      briday: "",
      detail: "",
      address: {},
      fuckDefault: 0,
      ckeckVal: false,
      beizhu:""
    };
  },
  methods: {
    // 默认地址
    btn() {
      this.isselect = !this.isselect;
      if (this.isselect == true) {
        this.fuckDefault = 1;
      } else {
        this.fuckDefault = 0;
      }
    },
    cao() {
      console.log("9999999999999999999");
    },
    clickMe() {
      console.log(9999);

      var that = this;
      // if(that.ckeckVal){
      //     console.log('选择');

      // }else{
      //     console.log('选择没有');
      // }
      that.ckeckVal = !that.ckeckVal;
      console.log(that.ckeckVal);
    },
    bindRegionChange(e) {
      this.region = e.mp.detail.value.join("-");
      console.log(this.region);
    },
    changeModel(e) {
      console.log(e.mp.detail.value, "选择中性别");
    },
    submit() {
      if (!this.name) {
        this.$Toast({ content: "请输入姓名" });
        return;
      }
      if (!this.phone) {
        this.$Toast({ content: "请输入联系电话" });
        return;
      }
      var Verification = /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/;
      if (!Verification.test(this.phone)) {
        this.$Toast({ content: "请输入正确的电话号码" });
        return;
      }
      if (this.region == "请选择地区") {
        this.$Toast({ content: "请选择地区" });
        return;
      }
      if(this.ckeckVal == false) {
        this.$Toast({ content: "未同意区域团队协议" });
        return;
      }
      // if (!this.detail) {
      //   this.$Toast({ content: "请输入详细地址" });
      //   return;
      // }
      this.$API
        .Sqproorcity({
          i: 8,
          c: "entry",
          a: "wxapp",
          m: "mask",
          do: "Sqproorcity",
          uid: wx.getStorageSync("sessionId"),
          name: this.name,
          phone: this.phone,
          address: this.region,
          comment: this.beizhu,
        })
        .then(res => {
          console.log(res, "设置地址");
          if (res.code == 1) {
            this.$Toast({ content: "添加成功", type: "success" });
            setTimeout(() => {
              this.goBack();
            }, 1000);

          }
        });

      // this.$API.addAddress({
      //   sessionId:wx.getStorageSync('sessionId'),
      //   name: this.name,
      //   mobile: this.phone,
      //   // code:'514500',
      //   sheng: this.region.split('-')[0],
      //   shi: this.region.split('-')[1],
      //   qu: this.region.split('-')[2],
      //   address: this.detail,
      //   isChoice: Number(this.isselect)
      // }).then(res=>{
      //   this.$Toast({content:'添加成功',type:'success'})
      //   setTimeout(()=>{
      //     this.goBack()
      //   },1000)
      // })
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
  background-color: #f8f8f8;
  .box {
    background-color: #fff;
    padding: 0 15px 25px;
    .inp{
      display: flex;
      justify-content: flex-start;
      margin-top: 15px;
      input{
        font-size: 16px;
      }
    }
  }
  .setting {
    margin-top: 13px;
    display: flex;
    justify-content: space-between;
    padding: 12px 15px;
    background-color: #fff;
    align-items: center;
    span {
      font-size: 14px;
      font-family: PingFang-SC-Bold;
      font-weight: bold;
      color: #242121;
    }
  }
  .area {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    padding: 5px 0px;
    color: #495060;
    font-size: 16px;
  }
  .btn {
    position: fixed;
    bottom: 20px;
    left: 0;
    right: 0;
    padding: 0 13px;
    button.login-out {
      width: 100%;
      height: 40px;
      line-height: 40px;
      border-radius: 5px;
      background: #ed1731;
      color: #ffffff;
      font-size: 15px;
      text-align: center;
    }
  }
  .sexradio {
    color: #495060;
    font-size: 16px;
    padding: 12px 16px;
    border-bottom: 1px #f5f6f6 solid;
  }
  .qqinput {
    border-bottom: 1px #f5f6f6 solid;
  }
  .myradio {
    margin-left: 20px;
  }
  .chooseaddress {
    font-size: 17px;
    margin-right: 50px;
  }
  .cao {
    font-size: 14px;
    color: #9d9d9d;
    margin-top: 15px;
  }
  .cao1 {
    font-size: 14px;
     margin-top: 15px;
  }
}
</style>
