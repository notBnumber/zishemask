<template>
  <div class="my-template">
    <div class="mImg">
      <img src="https://cssy.hn90qc.com/icon/qiandao.jpg" alt="">
    </div>
    <p class="caonima" v-if="isday == true">今天你已经签到了</p>
    <p class="caonima1" v-if="isday ==false " @click="Singin">点击签到</p>
    <div class="main_title">
      <div class="tab" @click="tabs(0)">
        <p>总积分</p>
        <p>{{aa.alljifeng}}</p>
      </div>
      <div class="tab" @click="tabs(0)">
        <p>剩余积分</p>
        <p>{{aa.shengjifeng}}</p>
      </div>
      <div class="tab" @click="tabs(2)">
        <p>签到积分</p>
        <p>{{aa.qiandaojifeng}}</p>
      </div>
      <div class="tab notab" @click="tabs(1)">
        <p>消费积分</p>
        <p>{{aa.payjifeng}}</p>
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
        <li v-for="( item , index ) in info" :key="index">
          <div class="liDiv1">
            <p>{{item.cerated_time}}</p>
            <p>{{item.note}}</p>
            <p>{{item.score}}</p>
          </div>
        </li>

      </ul>
    </div>
    <i-toast id="toast" />
  </div>

</template>

<script>
export default {
  data() {
    return {
      addList: [],
      isLogin: true,
      isday: false,
      types: 0,
      info: [],aa:{}
    };
  },
  methods: {
    Singin() {
      this.$API
        .Singin({
          i: 2,
          c: "entry",
          a: "wxapp",
          m: "mask",
          do: "Singin",
          uid: wx.getStorageSync("sessionId")
        })
        .then(res => {
          if (res.code == 1) {
            this.$Toast({ content: res.msg });
            setTimeout(() => {
              this.goBack();
            }, 1000);
          } else {
          }
        });
    },
    tabs(index) {
      this.types = index;
      this.gets();
    },
    init() {
      this.$API
        .TodaySingin({
          i: 2,
          c: "entry",
          a: "wxapp",
          m: "mask",
          do: "TodaySingin",
          uid: wx.getStorageSync("sessionId")
        })
        .then(res => {
          if (res.code == 1) {
            this.isday = true;
          } else {
            this.isday = false;
          }
        });
    },
    gets() {
      this.$API
        .SinginList({
          i: 2,
          c: "entry",
          a: "wxapp",
          m: "mask",
          do: "SinginList",
          uid: wx.getStorageSync("sessionId"),
          type: this.types
        })
        .then(res => {
          if (res.code == 1) {
            this.aa = res.data
            this.info = res.data.list;
            for(let item of this.info) {
              item.cerated_time = item.cerated_time.split(' ')[0]
            }
          } else {
          }
        });
    }
  },
  onShow() {
    this.types = 0
    this.init();
    this.gets();
  }
};
</script>
<style lang="scss" scoped>
.my-template {
  position: relative;
  width: 100%;
  .caonima {
    text-align: center;
    background-color: #cdc1c5;
    margin: auto;
    margin-top: 20px;
    width: 70%;
    height: 50px;
    line-height: 50px;
    border-radius: 30px;
  }
  .caonima1 {
    text-align: center;
    background-color: #ed1731;
    margin: auto;
    margin-top: 20px;
    width: 70%;
    height: 50px;
    line-height: 50px;
    border-radius: 30px;
    color: #fff;
  }
  .head {
    background-color: #cdc1c5;
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
    border-top: 1px solid #cdc1c5;
    border-bottom: 1px solid #cdc1c5;
    .tab {
      width: 33.3%;
      height: 60px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-right: 1px dashed #cdc1c5;
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
      background-color: #cdc1c5;
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
