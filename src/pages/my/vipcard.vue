<template>
  <div class="my-template">
    <div class="head">

    </div>
    <div class="mImg">
      <img src="https://jin.itxiaolong.cn/icon/vip.jpg" alt="">
    </div>
    <p>使用时请出示此卡</p>


    <div class="main_title">
      <div class="tab">
        <p>消费金额</p>
        <p>0元</p>
      </div>
      <div class="tab">
        <p>消费金额</p>
        <p>0元</p>
      </div>
      <div class="tab notab">
        <p>消费金额</p>
        <p>0元</p>
      </div>
    </div>
    <div class="main_day">
      <div class="main_day_son" @click="pageTo('/pages/my/dayday')">
        点击这里签到赚积分
      </div>
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
  p {
    text-align: center;
  }
  .head {
    background-color: #999;
    width: 100%;
    height: 70px;
  }
  .mImg {
    width: 100%;
    display: flex;      
    justify-content: center;
    img {
      margin-top: -40px;
    border-radius: 8px;
    overflow: hidden;

      width: 250px;
      height: 155px;
    }
  }

  .main_title {
    margin-top: 30px;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid #999;
    border-bottom: 1px solid #999;
    .tab {
      width: 33.3%;
      height: 60px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-right: 1px dashed #999;
    }
    .notab {
      border: none;
    }
  }
  .main_day {
    margin-top: 30px;
    width: 100%;
    height: 70px;
    padding: 8px 10px;
    box-sizing: border-box;
          border: 1px solid #999;
      overflow: hidden;
    .main_day_son {
      width: 100%;
      height: 50px;
      text-align: center;
      line-height: 50px;
      border-radius: 5px;
      border: 1px solid #999;
      overflow: hidden;
      color: #DC143C;
    }
  }
}
</style>
