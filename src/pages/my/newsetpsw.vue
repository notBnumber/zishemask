<template>
    <!-- 个人信息 -->
    <div class="add-template">
        <div class="box" style="overflow: hidden">
            <div class="boxtitle">
                请输入新的支付密码
            </div>
            <div class="code-input-main">
                <div class="code-input-main-item">{{code[0]}}</div>
                <div class="code-input-main-item">{{code[1]}}</div>
                <div class="code-input-main-item">{{code[2]}}</div>
                <div class="code-input-main-item">{{code[3]}}</div>
                <div class="code-input-main-item">{{code[4]}}</div>
                <div class="code-input-main-item">{{code[5]}}</div>
                <input class="code-input-input" v-model="code" maxlength="6" type="number" @change="getinput" />
            </div>
            <div class="mykey">
                <div class='keyboard' @click.stop='_handleKeyPress'>
                    <div class='key-row'>
                        <div class='key-cell' data-num='7'>7</div>
                        <div class='key-cell' data-num='8'>8</div>
                        <div class='key-cell' data-num='9'>9</div>
                        <div class='key-cell' data-num='D'>C</div>
                    </div>
                    <div class='key-row'>
                        <div class='key-cell' data-num='4'>4</div>
                        <div class='key-cell' data-num='5'>5</div>
                        <div class='key-cell' data-num='6'>6</div>
                        <div class='key-cell' data-num='C'>清空</div>
                    </div>
                    <div class='key-row'>
                        <div class='key-cell' data-num='1'>1</div>
                        <div class='key-cell' data-num='2'>2</div>
                        <div class='key-cell' data-num='3'>3</div>
                        <div class='key-cell noborder1' data-num='S'></div>
                    </div>
                    <div class='key-row'>
                        <div class='key-cell disabled' data-num='-1'></div>
                        <div class='key-cell' data-num='.'>.</div>
                        <div class='key-cell' data-num='0'>0</div>
                        <div class='key-cell noborder' data-num='S' style="padding-top:-60px;">确认</div>
                    </div>

                </div>
            </div>

        </div>
        <!-- <p class="ppp1" @click="pageTo('/pages/login/forgetpwd')">忘记密码?</p> -->
        <i-toast id="toast" />
    </div>
</template>

<script>
import { $Toast } from "@/iView/base/index";

export default {
  name: "CodeInput",
  data() {
    return {
      code: "",
      psw: ""
    };
  },
  methods: {
    getcode() {
      return this.code;
    },
    getinput(e) {
      console.log(e, "ddd");
    },
    //处理按键
    _handleKeyPress(e) {
      let num = e.target.dataset.num;
      //不同按键处理逻辑
      // -1 代表无效按键，直接返回
      if (num == -1) return false;
      switch (String(num)) {
        //小数点
        case ".":
          //this._handleDecimalPoint();
          break;
        //删除键
        case "D":
          this._handleDeleteKey();
          break;
        //清空键
        case "C":
          this._handleClearKey();
          break;
        //确认键
        case "S":
          this._handleConfirmKey();
          break;
        default:
          if (this.code.length >= 6) return false;
          this._handleNumberKey(num);
          break;
      }
    },
    //处理小数点函数
    _handleDecimalPoint() {
      //如果包含小数点，直接返回
      if (this.psw.indexOf(".") > -1) return false;
      //如果小数点是第一位，补0
      if (!this.psw.length) this.psw = "0.";
      else
        //如果不是，添加一个小数点
        this.psw = this.psw + ".";
    },
    //处理删除键
    _handleDeleteKey() {
      let S = this.psw;
      //如果没有输入，直接返回
      if (!S.length) return false;
      //否则删除最后一个
      this.psw = S.substring(0, S.length - 1);
      this.code = S.substring(0, this.code.length - 1);
    },
    //处理清空键
    _handleClearKey() {
      this.psw = "";
      this.code = "";
    },
    _handleConfirmKey() {
      let S = this.psw;
      let vm = this;
      //未输入
      if (!S.length) {
        this.$Toast({
          content: "不可为空",
          type: "warning"
        });
        return false;
      } else if (S.length < 6) {
        console.log(S, "提交打印");
        this.$Toast({
          content: "请输入正确密码",
          type: "warning"
        });
        return false;
      }

      // this.$Toast({
      //     content: "提交的密码是"+this.code,
      //     type: "warning"
      // });
      this.$API
        .Updatepaypsw({
          i: 2,
          c: "entry",
          a: "wxapp",
          m: "mask",
          do: "Updatepaypsw",
          paypsw: this.code,
          uid:
            wx.getStorageSync("sessionId") == ""
              ? ""
              : wx.getStorageSync("sessionId")
        })
        .then(res => {
          console.log(res, "注册");
          if (res.code == 1) {
            console.log();
            // this.switchTab("/pages/home/index");
            // this.goBack();
            setTimeout(()=>{
          this.pageTo("/pages/my/myMoney");
        },1000)
          } else {
            this.$Toast({
              content: res.msg,
              type: "error"
            });
          }
        });
      // vm.pageTo('/pages/login/forgetpwd')
      //将 8. 这种转换成 8.00
      if (S.indexOf(".") > -1 && S.indexOf(".") == S.length - 1)
        S = Number(S.substring(0, S.length - 1)).toFixed(2);
      //保留两位
      S = Number(S).toFixed(2);
      this.$emit("confirmEvent", S);
    },
    //处理数字
    _handleNumberKey(num) {
      console.log(num, "点击到");
      this.code += num;
      let S = this.psw;
      //如果有小数点且小数点位数不小于2
      if (S.indexOf(".") > -1 && S.substring(S.indexOf(".") + 1).length < 2)
        this.psw = S + num;
      //没有小数点
      if (!(S.indexOf(".") > -1)) {
        //如果第一位是0，只能输入小数点
        //                    if (num == 0 && S.length == 0)
        //                        this.psw = '0.';
        //                    else {
        // if (S.length && Number(S.charAt(0)) === 0) return;
        this.psw = S + num;
        //}
      }
    }
  },
  onShow() {
    this.code = ''
    this.psw = "";
  }
};
</script>

<style scoped lang='scss'>
.boxtitle {
  text-align: center;
  margin-top: 25px;
  margin-bottom: 10px;
}
.mykey {
  position: absolute;
  width: 100%;
  bottom: 0px;
}
.code-input-input {
  height: 80px;
  width: 100%;
  position: absolute;
  outline: none;
  color: transparent;
  text-shadow: 0 0 0 transparent;
  margin-left: -200%;
}
.code-input-main {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  /*width: 100%;*/
  /*height: 60px;*/
}
.code-input-main-item {
  font-family: time-font-myself;
  width: 140px;
  height: 50px;
  line-height: 50px;
  opacity: 0.8;
  border: solid #afafaf 1px;
  text-align: center;
  margin: 2px 5px;
  font-size: 20px;
  color: #afafaf;
}
.key-row {
  display: flex;
}
.key-cell {
  display: flex;
  justify-content: space-around;
  line-height: 40px;
  width: 100%;
  height: 40px;
  padding: 10px;
  border: 1px #afafaf solid;
}
.noborder {
  border-top: none;
}
.noborder1 {
  border-bottom: none;
}
.ppp1 {
  width: 100%;
  //   margin: auto;
  text-align: center;
  margin-top: 20px;
  color: #1e90ff;
}
</style>
