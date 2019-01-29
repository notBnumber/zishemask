<template>
  <!-- 我的销   template > div第一级需要div-->
  <div class="address-template">
    <div class="bodys">
      <div class="top">
        <input type="text" placeholder="请输入用户名或者用户ID" />
      </div>
      <div class="title">
        <span class="title_left ischose">
          <ul>
            <li>一级团队(221)</li>
            <li>合伙人(20)粉丝(202)</li>
          </ul>
        </span>
        <span class="title_right">
          <ul>
             <li>二级团队(221)</li>
            <li>合伙人(20)粉丝(202)</li>
          </ul>
        </span>
      </div>
      <div class="main">
        <ul>
          <li class="main_li" v-for="(item, index) in 10" @click="pageTo('/pages/my/teaminfo')">
            <span class="main_left"><img src="https://jin.itxiaolong.cn/icon/index.jpg"/></span>
            <span class="main_right">
              <ul>
                <li>it小龙</li>
                <li class="li_main">推荐人：傻逼哥</li>
                <li>2019-01-29</li>
              </ul>
            </span>
            <span  class="main_footer">
              <img src="https://jin.itxiaolong.cn/icon/moreicon.png"/>
            </span>
          </li>
        </ul>
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
  }
  .top{
    width: 100%;
    height: 50px;
    border: 1px red solid;
    background-color: #E9323C;
    display: flex;
    justify-content: center;
    line-height: 50px;
    align-items: center;
    input{
      background-color: white;
      width: 80%;
      border-radius: 15px;
     font-size: 12px;
      padding-left: 15px;
    }
  }
  .title{
    width: 90%;
    height: 70px;
    display: flex;
    font-size: 13px;
    align-content: space-around;
  }
  .title_left,.title_right{
    width: 45%;
    text-align: center;
    margin-left: 25px;

    margin-bottom: 5px;
    ul li{
      margin-top: 8px;
    }
  }
  .main_li{
    border-radius: 15px;
    padding: 5px;
    background-color: white;
    margin-top: 10px;
    img{
      width: 75px;
      height: 75px;
      border-radius: 50%;
    }
  }
  .ischose{
    border-bottom: 2px #E9323C solid;
    color:#E9323C ;
  }
  .main_right{
    display: flex;
    align-items: center;
    margin-left: 18px;
  }
  .main_footer{
    position: absolute;
    right: 35px;
    padding-top: 30px;
    img{
      width: 20px;
      height: 20px;
    }
  }
  .main_right li:last-child{
    color: #B1ADAA;
    font-size: 12px;
  }
  .li_main{
    color: #898989;
    font-size: 15px;
  }
  .main{
    width: 90%;
    height: 100%;
    padding: 8px;
    margin-left: 15px;
    ul li{
      display: flex;
    }

  }
</style>
