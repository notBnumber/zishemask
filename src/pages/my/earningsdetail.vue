<template>
  <!-- 我的销   template > div第一级需要div-->
  <div class="address-template">
    <div class="bodys">
      <div class="center">
        <div class="cen_top">
          <span>
            <img src="https://jin.itxiaolong.cn/icon/teammoneyicon.png"/>
            <label>佣金金额</label>
          </span>
          <span style="color: red;">￥{{info.rmoney}}元</span>
        </div>
        <div class="info_title">详细</div>
        <div class="info_detail">
          <ul>
            <li>
              <span>类型:</span>
              <span v-if="info.rtype ==1">直推</span>
              <span v-if="info.rtype ==2">间推</span>
              <span v-if="info.rtype ==3">银卡</span>
              <span v-if="info.rtype ==4">金卡</span>
              <span v-if="info.rtype ==5">市代</span>
              <span v-if="info.rtype ==6">省代</span>
              <span v-if="info.rtype ==7">提现</span>
              <span v-if="info.rtype ==8">红包</span>
            </li>
            <li>
              <span>时间:</span>
              <span>{{info.raddtime}}</span>
            </li>
            <li>
              <span>交易单号:</span>
              <span>{{info.rordernumber}}</span>
            </li>
            <li>
              <span>买家:</span>
              <span>{{info.rbuyername}}</span>
            </li>
            <li>
              <span>状态:</span>
              <span v-if="info.rsettlement ==0">待结算</span>
              <span v-if="info.rsettlement ==1">已结算</span>
            </li>
            <li>
              <span>备注:</span>
              <span>{{info.rcomment}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        data() {
            return {
                isDownRefresh: false,
                info:{}
            };
        },
        methods:{
            setActive(index) {
                this.tabActive = index;
            },
        },
      onShow() {
        console.log(this.$route.query,'99');
        this.info = this.$route.query
      }
    };
</script>

<style scoped lang='scss'>
  .bodys{
    width: 100%;
    height: 600px;
  }
  .info{
    margin-top: 10px;
  }
  .info li{
    margin-left: 10px;

  }
  .center{
    width: 100%;
  }
  .cen_top{
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 15px 8px;
    font-size: 15px;
    img{
      width: 25px;
      height:25px;
      vertical-align: middle;
      padding-right: 2px;
    }
  }
  .info_title{
    width: 100%;
    height: 50px;
    line-height: 50px;
    color: #7E8181;
    font-size: 16px;
    text-align: center;
    background-color: #EAEAEA;
  }
  .info_detail li{
    display: flex;
    justify-content: space-between;
    padding: 15px 10px;
    font-size: 15px;
    color: #7E8181;
    border-bottom: 1px #C1C1C1 solid;
  }


</style>
