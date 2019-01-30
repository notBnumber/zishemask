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
        <div class="cent_left">
          <ul>
            <li>待结算(当月)</li>
            <li style="text-align: center;margin-top: 3px;">20元</li>
          </ul>
        </div>
        <div class="cent_right">
          <ul>
            <li>已结算(当月)</li>
            <li style="text-align: center;margin-top: 3px;">2050元</li>
          </ul>
        </div>
      </div>
      <div class="down">
        <div class="down_left">
          <ul>
            <li @click="pageTo('/pages/my/teamdetail')"><img src="https://jin.itxiaolong.cn/icon/teamicon.png"/></li>
            <li style="text-align: center;margin-top: 3px;">我的团队(35222)人</li>
          </ul>
        </div>
        <div class="down_cen">
          <ul>
            <li @click="pageTo('/pages/my/shareqrcode')"><img src="https://jin.itxiaolong.cn/icon/qrcodeicon.png"/></li>
            <li style="text-align: center;margin-top: 3px;">推广二维码</li>
          </ul>
        </div>
        <div class="down_right">
          <ul>
            <li @click="pageTo('/pages/my/earnings')"><img src="https://jin.itxiaolong.cn/icon/syicon.png"/></li>
            <li style="text-align: center;margin-top: 3px;">累积收益</li>
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
  }

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
  height: 14%;
  display: flex;
  margin: 8px;
}
.cent_left,.cent_right{
  width: 50%;
  height: 100%;
  margin-right:10px;
  margin-left: 4px;
  border-radius: 10px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
}
.down{
  width: 100%;
  height: 20%;
  display: flex;
  margin: 5px;
}
  .down_left,.down_cen,.down_right{
    width: 33%;
    height: 100%;
    margin-right:8px;
    border-radius: 10px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    li:first-child{
      display: flex;justify-content: center;
     padding-bottom: 5px;
    }
    img{
      width: 50px;
      height:50px;
      border-radius: 50%;

    }
  }
</style>
