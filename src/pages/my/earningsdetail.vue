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
          <span style="color: red;">￥0.00</span>
        </div>
        <div class="info_title">详细</div>
        <div class="info_detail">
          <ul>
            <li>
              <span>类型:</span>
              <span>直推奖金</span>
            </li>
            <li>
              <span>时间:</span>
              <span>2019-01-20</span>
            </li>
            <li>
              <span>交易单号:</span>
              <span>2019584487878</span>
            </li>
            <li>
              <span>买家:</span>
              <span>小龙啊</span>
            </li>
            <li>
              <span>状态:</span>
              <span>已完成</span>
            </li>
            <li>
              <span>备注:</span>
              <span>代理升级，奖励：xx元</span>
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
                isDownRefresh: false
            };
        },
        methods:{
            setActive(index) {
                this.tabActive = index;
            },
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
