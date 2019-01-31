<template>
  <!-- 个人信息 -->
  <div class="add-template">
    <div class="box">
      <div class="code-input-main">
        <div class="code-input-main-item">{{code[0]}}</div>
        <div class="code-input-main-item">{{code[1]}}</div>
        <div class="code-input-main-item">{{code[2]}}</div>
        <div class="code-input-main-item">{{code[3]}}</div>
        <div class="code-input-main-item">{{code[4]}}</div>
        <div class="code-input-main-item">{{code[5]}}</div>
        <input class="code-input-input" v-model="code" maxlength="6" type="number" @change="getinput"/>
      </div>
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
          <div class='key-cell' data-num='-1'></div>
        </div>
        <div class='key-row'>
          <div class='key-cell disabled' data-num='-1'></div>
          <div class='key-cell' data-num='.'>.</div>
          <div class='key-cell' data-num='0'>0</div>
          <div class='key-cell' data-num='S'>确认</div>
        </div>

      </div>
    </div>
    <i-toast id="toast" />
  </div>
</template>

<script>
    import { $Toast } from "@/iView/base/index";

    export default {
        name:"CodeInput",
        data () {
            return {
              code:'',
                psw:''
            }
        },
        methods: {
          getcode(){
              return this.code;
          },
            getinput(e){
              console.log(e,'ddd')
            },
            //处理按键
            _handleKeyPress(e) {
                let num = e.target.dataset.num;
                //不同按键处理逻辑
                // -1 代表无效按键，直接返回
                if (num == -1) return false;
                switch (String(num)) {
                    //小数点
                    case '.':
                        this._handleDecimalPoint();
                        break;
                    //删除键
                    case 'D':
                        this._handleDeleteKey();
                        break;
                    //清空键
                    case 'C':
                        this._handleClearKey();
                        break;
                    //确认键
                    case 'S':
                        this._handleConfirmKey();
                        break;
                    default:
                        if (this.code.length>=6) return false;
                        this._handleNumberKey(num);
                        break;
                }
            },
            //处理小数点函数
            _handleDecimalPoint() {
                //如果包含小数点，直接返回
                if (this.psw.indexOf('.') > -1) return false;
                //如果小数点是第一位，补0
                if (!this.psw.length)
                    this.psw = '0.';
                //如果不是，添加一个小数点
                else
                    this.psw = this.psw + '.';
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
                this.psw = '';
                this.code = '';
            },
            _handleConfirmKey() {
                let S = this.psw;
                //未输入
                if (!S.length){
                    this.$Toast({
                        content: "不可为空",
                        type: "warning"
                    });
                    return false;
                }else if(S.length<6){
                    console.log(S,'提交打印')
                    this.$Toast({
                        content: "请输入正确密码",
                        type: "warning"
                    });
                    return false;
                }
                this.$Toast({
                    content: "提交的密码是"+this.code,
                    type: "warning"
                });
                //将 8. 这种转换成 8.00
                if (S.indexOf('.') > -1 && S.indexOf('.') == (S.length - 1))
                    S = Number(S.substring(0, S.length - 1)).toFixed(2);
                //保留两位
                S = Number(S).toFixed(2);
                this.$emit('confirmEvent',S)
            },
            //处理数字
            _handleNumberKey(num) {
                console.log(num,'点击到')
                let getcode=new Array();
                getcode.push(num)
                console.log(getcode,'数组')
                this.code+=num
                let S = this.psw;
                //如果有小数点且小数点位数不小于2
                if ( S.indexOf('.') > -1 && S.substring(S.indexOf('.') + 1).length < 2)
                    this.psw = S + num;
                //没有小数点
                if (!(S.indexOf('.') > -1)) {
                    //如果第一位是0，只能输入小数点
                    if (num == 0 && S.length == 0)
                        this.psw = '0.';
                    else {
                        if (S.length && Number(S.charAt(0)) === 0) return;
                        this.psw = S + num;
                    }
                }
            }
        }
    }
</script>

<style scoped lang='scss'>
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
    width: 150px;
    height: 50px;
    line-height: 50px;
    opacity: 0.8;
    border: solid #AFAFAF 1px;
    text-align: center;
    margin: 2px 5px;
    font-size: 20px;
    color: #AFAFAF;
  }
  .key-row{
    display: flex;
  }
  .key-cell{
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 10px;
    border: 1px red solid;
  }
</style>
