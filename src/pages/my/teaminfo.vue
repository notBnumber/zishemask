<template>
  <!-- 我的销   template > div第一级需要div-->
  <div class="address-template">
    <div class="bodys">
      <div class="top">
          <img src="https://jin.itxiaolong.cn/icon/index.jpg"/>
        <ul class="info">
          <li style="margin-bottom: 10px;">昵称</li>
          <li style="border:1px white solid;padding: 0px 5px;border-radius: 5px; background-color: white;color: #E9323C">推荐人：傻逼</li>
        </ul>
      </div>
      <div class="center">
        <div class="cen_top">
          <span>
            <img src="https://jin.itxiaolong.cn/icon/teammoneyicon.png"/>
            <label>消费总额</label>
          </span>
          <span style="color: red;">￥0.00</span>
        </div>
        <div class="info_title">基本信息</div>
        <div class="info_detail">
          <ul>
            <li>
              <span>姓名:</span>
              <span>小龙</span>
            </li>
            <li>
              <span>性别:</span>
              <span>男</span>
            </li>
            <li>
              <span>微信号:</span>
              <span>itxiaolong</span>
            </li>
            <li>
              <span>QQ:</span>
              <span>171254455</span>
            </li>
            <li>
              <span>生日:</span>
              <span>待填</span>
            </li>
            <li>
              <span>地区:</span>
              <span>广东 雷州</span>
            </li>
            <li>
              <span>微信号:</span>
              <span>itxiaolong</span>
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
      addList: [],
      isDownRefresh: false
    };
  },

};
</script>

<style scoped lang='scss'>
  .bodys{
    width: 100%;
    height: 600px;
  }
.top{
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #E9323C;
  color: white;
  font-size: 13px;
  img{
    width: 70px;
    height:70px;
    border-radius: 50%;

  }
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
