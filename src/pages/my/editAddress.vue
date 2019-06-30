<template>
  <!-- 编辑地址 -->
  <div class="edit-template">
    <div class="box">
      <ul>
        <li>
          <span>收货人：</span>
          <input type="text" placeholder="请输入收件人名称" placeholder-style="color:#888888" v-model="name">
        </li>
        <li>
          <span>联系电话：</span>
          <input type="number" placeholder="请输入收件人联系方式" placeholder-style="color:#888888" v-model="phone">
        </li>
        <li>
          <span>所在地区：</span>
          <picker mode="region" @change="bindRegionChange">
            <div>
              {{region}}
              <i></i>
            </div>
          </picker>
        </li>
        <li>
          <span>详细地址：</span>
          <input type="text" placeholder="请输入收件人详细地址" placeholder-style="color:#888888" class="left" v-model="address">
        </li>
      </ul>
    </div>
    <div class="setting">
      <span>设置为默认地址</span>
      <i-switch :value="isselect" @change="btn"></i-switch>
    </div>
    <div class="btn">
      <button class="login-out" @click="submit">保存</button>
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
      phone: "",
      address: "",
      id: 0,
      default:0
    };
  },
  methods: {
    bindRegionChange(e) {
      this.region = e.mp.detail.value.join("-");
    },
    btn() {
      this.isselect = !this.isselect
      if (this.isselect == true) {
        this.detail = 1
      } else {
        this.detail = 0
      }
    },
    submit() {
      if (!this.name) {
        this.$Toast({ content: "请输入收货人姓名" });
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
      if (!this.address) {
        this.$Toast({ content: "请输入详细地址" });
        return;
      }
      this.$API
        .UpdAddress({
          i: 3,
          c: "entry",
          a: "wxapp",
          m: "mask",
          do: "UpdAddress",
          uid: wx.getStorageSync("sessionId"),
          name: this.name,
          phone: this.phone,
          address: this.region,
          detailadd: this.address,
          is_default: this.detail,
          aid:this.id
        })
        .then(res => {
          console.log(res, "设置地址");
          if (res.code == 1) {
            this.$Toast({ content: "编辑成功", type: "success" });
            setTimeout(() => {
              this.goBack();
            }, 1000);
          }
        });


      // this.$API.editAddress({
      //   sessionId:wx.getStorageSync('sessionId'),
      //   id: this.id,
      //   name: this.name,
      //   mobile: this.phone,
      //   // code:'514500',
      //   sheng: this.region.split('-')[0],
      //   shi: this.region.split('-')[1],
      //   qu: this.region.split('-')[2],
      //   address: this.address,
      //   isChoice: Number(this.isselect)
      // }).then(res=>{
      //   console.log(res);
      //   this.$Toast({content:'保存成功',type:'success'})
      //   setTimeout(()=>{
      //     this.goBack()
      //   },1000)
      // })
    }
  },
  onShow() {
    //do something after mounting vue instance
    var itemList = JSON.parse(this.$route.query.value);
    this.name = itemList.name;
    this.phone = itemList.phone;
    let str = itemList.address.split("-");
    this.region = str[0] + "-" + str[1] + "-" + str[2];
    this.address = itemList.detailadd;
    console.log(itemList.detailadd, this.region, itemList.detail, itemList);

    this.id = itemList.aid;
    // this.isselect = itemList.is_default;
    if (itemList.is_default == 0) {
      this.isselect = false;
      this.default = 0
    } else {
      this.isselect = true;
      this.default = 1
    }
  }
};
</script>

<style scoped lang='scss'>
@import "~@/assets/css/_mixin";
.edit-template {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #f8f8f8;
  .box {
    margin-top: 12px;
    background-color: #fff;
    padding: 0 15px 25px;
    ul {
      li {
        border-bottom: 1px solid #eaeaea;
        padding: 15px 0;
        display: flex;
        align-items: center;
        font-size: 14px;
        justify-content: space-between;
        span {
          font-family: PingFang-SC-Bold;
          font-weight: bold;
          color: rgba(36, 33, 33, 1);
        }
        input {
          flex: 1;
          font-size: 14px;
          font-family: PingFang-SC-Regular;
          font-weight: 400;
          color: rgba(36, 33, 33, 1);
          text-align: right;
          &.left {
            text-align: left;
          }
        }
        i {
          @include bg-icon(10px) background-image:
            url("~@/assets/img/user_icon_more_2@2x.png");
        }
        &:last-child {
          border: 0;
        }
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
