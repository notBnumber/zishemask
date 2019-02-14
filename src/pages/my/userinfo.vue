<template>
    <!-- 个人信息 -->
    <div class="add-template">
        <div class="box">

            <i-panel>
                <div class="inp">
                    <span>姓名：</span>
                    <input title="姓名" placeholder="请输入名字" v-model="info.user_name" />
                </div>
                 <RadioGroup v-model="info.sex" @change="changeModel" class="sexradio">
                    <span>性别：</span>
                    <Radio :label="0" :value="0" class="myradio" :checked="isCheck">男</Radio>
                    <Radio :label="1" :value="1" class="myradio" :checked="isChecks">女</Radio>
                </RadioGroup>
                <!--<div class="inp">-->
                    <!--<span>-->
                        <!--性别:-->
                    <!--</span>-->
                    <!--<div v-for="(items , index ) in list" :key="index">-->
                        <!--<input type="radio" name="radios" :value="index" v-model="fuckDefault">-->
                        <!--<span>{{items.title}}</span>-->
                    <!--</div>-->
                <!--</div>-->
                <div class="inp">
                    <span>
                        QQ：
                    </span>
                    <input type="number" title="QQ" placeholder="请输入QQ" v-model="info.qq" />
                </div>
                <div class="inp">
                    <span>
                        微信：
                    </span>
                    <input type="text" title="微信" placeholder="请输入微信" v-model="info.wechat" />
                </div>
                <div class="inp">
                    <span>
                        手机号：
                    </span>
                    <input title="手机号" placeholder="请输入手机号" v-model="info.user_tel" />
                </div>
                <div class="birthday">
                    <label>生日：</label>
                    <picker mode="date" value="date" @change="bindDateChange">
                        <span>{{info.birthday == null?'未填':info.birthday}}</span>
                    </picker>
                </div>
                <!-- <div class="area">
                    <label>所在地区：</label>
                    <picker mode="address" value="address" @change="bindaddressChange">
                        <span>{{info.address == null?'未填':info.address}}</span>
                    </picker>
                </div> -->

                <div class="inp">
                    <span>密码：</span>
                    <input value="已设置密码" title="密码" disabled v-if="info.issetpsw == 1" />
                    <input value="未设置密码" title="密码" disabled v-if="info.issetpsw == 0" />
                </div>

            </i-panel>

        </div>
        <div class="btn">
            <button class="login-out" @click="submit">提交</button>
        </div>
        <i-toast id="toast" />
    </div>
</template>

<script>
import { $Toast } from "@/iView/base/index";
export default {
  data() {
    return {
      isselect: false,
      info: {
        address: "请选择地区",
        name: "",
        sexs: 1,
        user_tel: "",
        qq: "",
        wechat: "",
        birthday: "",
        address: {}
      },
      list: [{ title: "男" }, { title: "女" }],
      detail: "ss",
      fuckDefault: '1'
    };
  },
  computed: {
    isCheck  () {
        if(this.info.sex == 0) {
            return true
        } else {
            return false
        }
    },
    isChecks  () {
        if(this.info.sex == 1) {
            return true
        } else {
            return false
        }
    }
  },
  methods: {
    init() {
      this.$API
        .GetUserinfo({
          i: 2,
          c: "entry",
          a: "wxapp",
          m: "mask",
          do: "GetUserinfo",
          uid: wx.getStorageSync("sessionId")
        })
        .then(res => {
          console.log(res, "设置地址");
          if (res.code == 1) {
            // this.$Toast({ content: "添加成功", type: "success" });
            // setTimeout(() => {
            //   this.goBack();
            // }, 1000);
            this.info = res.data;
          }
        });
    },
    // 默认地址
    btn() {
      this.isselect = !this.isselect;
      if (this.isselect == true) {
        this.fuckDefault = 1;
      } else {
        this.fuckDefault = 0;
      }
    },
    bindaddressChange(e) {
      this.info.address = e.mp.detail.value.join("-");
      console.log(this.address);
    },
    changeModel(e) {
      console.log(e.mp.detail.value, "选择中性别");
      this.info.sex = e.mp.detail.value;
    },
    bindDateChange(e) {
      console.log("日期携带值为", e.mp.detail.value);
      this.info.birthday = e.mp.detail.value;
      console.log(this.info.birthday);
    },
    submit() {
      if (!this.info.user_name) {
        this.$Toast({ content: "请输入姓名" });
        return;
      }
      if (!this.info.user_tel) {
        this.$Toast({ content: "请输入联系电话" });
        return;
      }
      var Verification = /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/;
      if (!Verification.test(this.info.user_tel)) {
        this.$Toast({ content: "请输入正确的电话号码" });
        return;
      }
      if (this.info.address == "请选择地区") {
        this.$Toast({ content: "请选择地区" });
        return;
      }
      this.$API
        .UpdateInfo({
          i: 2,
          c: "entry",
          a: "wxapp",
          m: "mask",
          do: "UpdateInfo",
          uid: wx.getStorageSync("sessionId"),
          user_name: this.info.user_name,
          user_tel: this.info.user_tel,
          address: this.info.address,
          qq: this.info.qq,
          wechat: this.info.wechat,
          birthday: this.info.birthday,
          sex: this.info.sex
        })
        .then(res => {
          console.log(res, "设置地址");
          if (res.code == 1) {
            // this.$Toast({ content: "添加成功", type: "success" });
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
      //   sheng: this.address.split('-')[0],
      //   shi: this.address.split('-')[1],
      //   qu: this.address.split('-')[2],
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
    this.init();
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
    span {
      font-size: 16px;
    }
    .inp {
      margin-top: 15px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      input {
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

  .birthday,
  .area {
    display: flex;
    justify-content: flex-start;
    padding: 10px;
    padding-left: 0px;
    color: #495060;
    font-size: 17px;
    label {
      //   margin-left: 10px;
    }
    span {
      //   padding-left: 30px;
      color: #757575;
    }
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
}
</style>
