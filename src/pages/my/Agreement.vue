<template>
  <!-- 关于我们 -->
  <div class="agreement-template">
    <div class="box">
      《腾讯游戏许可及服务协议》（以下简称“本协议”）由您与腾讯游戏服务提供方共同缔结，本协议具有合同效力。请您务必审慎阅读、充分理解各条款内容，特别是免除或者限制腾讯责任的条款（以下称“免责条款”）、对用户权利进行限制的条款（以下称“限制条款”）、约定争议解决方式和司法管辖的条款，以及开通或使用某项服务的单独协议。前述免责、限制及争议解决方式和管辖条款可能以黑体加粗、颜色标记或其他合理方式提示您注意，包括但不限于本协议第二条、第三条、第四条、第六条、第九条等相关条款，您对该等条款的确认将可能导致您在特定情况下的被动、不便、损失，请您在确认同意本协议之前或在使用腾讯游戏服务之前再次阅读前述条款。双方确认前述条款并非属于《合同法》第40条规定的“免除其责任、加重对方责任、排除对方主要权利的”的条款，并同意该条款的合法性及有效性。

      除非您已阅读并接受本协议所有条款，否则您无权使用腾讯游戏服务。如果您对本协议或腾讯游戏服务有意见或建议，可与腾讯客户服务部门联系，我们会给予您必要的帮助。您点击同意、接受或下一步，或您注册、使用腾讯游戏服务均视为您已阅读并同意签署本协议。

      如果您未满18周岁，请在法定监护人的陪同下阅读本协议，并特别注意未成年人使用条款。如您为未成年人法定监护人，希望合理设定孩子娱乐时间，培养孩子健康游戏习惯的，可依据相关规则登录腾讯游戏成长守护平台（https://jiazhang.qq.com/jz/home.html）了解相关信息，您使用腾讯游戏成长守护平台的，应遵守该平台上的《成长守护平台许可及服务协议》。
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        
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
.agreement-template{
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #FFFFFF;
  .box{
    padding: 17px;
    text-align: justify;
    text-indent: 2em;
    font-size:13px;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(0,0,0,1);
  }
}
</style>
