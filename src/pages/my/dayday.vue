<template>
  <div class="my-template">
    <div class="mImg">
      <img src="https://jin.itxiaolong.cn/icon/qiandao.jpg" alt="">
    </div>
    <p class="caonima">今天你已经签到了</p>

    <div class="main_title">
      <div class="tab">
        <p>总积分</p>
        <p>0</p>
      </div>
      <div class="tab">
        <p>剩余积分</p>
        <p>0</p>
      </div>
      <div class="tab">
        <p>签到积分</p>
        <p>0</p>
      </div>
      <div class="tab notab">
        <p>消费积分</p>
        <p>0</p>
      </div>
    </div>
    <div class="main_day">
      <ul>
        <li>
          <div class="liDiv">
            <p>日期</p>
            <p>签到情况</p>
            <p>积分</p>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div class="liDiv1">
            <p>2019-1-1星期一</p>
            <p>已签到</p>
            <p>1</p>
          </div>
        </li>
        <li>
          <div class="liDiv1">
            <p>2019-1-1星期一</p>
            <p>已签到</p>
            <p>1</p>
          </div>
        </li>
      </ul>
    </div>
    
  </div>

</template>

<script>
export default {
  data() {
    return {
      addList: [],
      isLogin: true
    };
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.my-template {
  position: relative;
  width: 100%;
  .caonima {
    text-align: center;
    background-color: #CDC1C5		;
    margin: auto;
    margin-top: 20px;
    width: 70%;
    height: 50px;
    line-height: 50px;
    border-radius: 30px;
  }
  .head {
    background-color: #CDC1C5		;
    width: 100%;
    height: 70px;
  }
  .mImg {
    width: 100%;
    height: 266px;

  }

  .main_title {
    margin-top: 30px;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid #CDC1C5		;
    border-bottom: 1px solid #CDC1C5		;
    .tab {
      width: 25%;
      height: 60px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-right: 1px dashed #CDC1C5		;
    }
    .notab {
      border: none;
    }
  }
  .main_day {
    margin-top: 30px;
    padding: 15px;
    box-sizing: border-box;
    .liDiv {
      width: 100%;
      height: 40px;
      padding-left: 10px;
      padding-right: 10px;
      box-sizing: border-box;
      background-color: #CDC1C5		;
      display: flex;
      justify-content: space-between;
      p {
        width: 33.3%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .liDiv1 {
      width: 100%;
      height: 25px;
      padding-left: 10px;
      padding-right: 10px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #000;
      p {
        width: 33.3%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        font-size: 12px;
      }
    }
  }
}
</style>
