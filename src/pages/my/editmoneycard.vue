<template>
  <!-- 个人信息 -->
  <div class="add-template">
    <div class="box">

      <!-- <i-panel> -->
      <div class="inp">
        <span>姓名：</span><input v-model="info.name" title="姓名" placeholder="请输入姓名" maxlength="20" type="text" />
      </div>
      <!-- <i-input  type="number" title="QQ" placeholder="请输入QQ"/> -->
      <!-- <i-input  type="text" title="微信" placeholder="请输入微信" /> -->

      <div class="inp">
        <span>手机号码：</span><input v-model="info.phone1" title="手机号" placeholder="请输入手机号" maxlength="20" type="text" />
      </div>

      <!-- <i-input value="已设置密码" title="密码" disabled /> -->
      <div class="inp">
        <span>开户行：</span><input v-model="info.openbranch" type="text" title="开户行" placeholder="请输入开户行" maxlength="20" />
      </div>
      <div class="inp">
        <span>
          所属支行：</span><input v-model="info.branch" type="text" title="所属支行" placeholder="请输入所属支行" maxlength="20" />
      </div>
      <div class="inp">
        <span>
          银行卡号：</span><input v-model="info.uniacid" type="number" title="银行卡号" placeholder="请输入银行卡号" maxlength="20" />
      </div>

      <!-- </i-panel> -->

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
      info: {
        name: "",
        phone1: "",
        openbranch: "",
        branch: "",
        uniacid: ""
      },
      add: false,
      region: "请选择地区",
      isselect: false,

      sexs: 1,
      // phone: "",
      // openbranch: "",
      // branch: "",
      // cardnumber: "",
      detail: "",
      address: {},
      fuckDefault: 0,
      ckeckVal: false
    };
  },
  methods: {
    cname(e) {
      console.log(e);
    },
    submit() {
      if (!this.info.name) {
        this.$Toast({ content: "姓名" });
        return;
      }
      if (!this.info.phone1) {
        this.$Toast({ content: "请输入联系电话" });
        return;
      }
      var Verification = /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/;
      if (!Verification.test(this.info.phone1)) {
        this.$Toast({ content: "请输入正确的电话号码" });
        return;
      }
      console.log(this.add,'新增还是编辑');
      
      if (this.add == true) {
        this.$API
          .Card({
            i: 8,
            c: "entry",
            a: "wxapp",
            m: "mask",
            do: "Card",
            uid: wx.getStorageSync("sessionId"),
            name: this.info.name,
            phone: this.info.phone1,
            openbranch: this.info.openbranch,
            branch: this.info.branch,
            cardnumber: this.info.uniacid
          })
          .then(res => {
            if (res.code == 1) {
              this.pageTo("/pages/my/setpsws");
            } else {
            }
          });
      } else {
              this.$API
        .Card({
          i: 8,
          c: "entry",
          a: "wxapp",
          m: "mask",
          do: "Card",
          uid: wx.getStorageSync("sessionId"),
          name: this.info.name,
          phone: this.info.phone1,
          openbranch: this.info.openbranch,
          branch: this.info.branch,
          cardnumber: this.info.uniacid,
          id:this.info.id
        })
        .then(res => {
          if (res.code == 1) {
            this.pageTo("/pages/my/setpsws");
          } else {
          }
        });
      }
    }
  },
  onShow() {
    //do something after mounting vue instance
    console.log(this.$route.query);
    this.info = this.$route.query;
    if (this.info == {}) {
      this.add = true;
    } else {
      this.add = false;
    }
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
  .inp {
    display: flex;
    justify-content: flex-start;
    margin-top: 10px;
    input {
      font-size: 16px;
    }
  }
  .box {
    background-color: #fff;
    padding: 0 15px 15px;
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
}
</style>
