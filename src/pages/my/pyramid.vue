<template>
  <!-- 我的销   template > div第一级需要div-->
  <div class="address-template">
    <div class="bodys">
      <div class="top">
        <img :src="userInfo.headerimg" />
        <ul class="info">
          <li style="margin-bottom: 10px;">{{userInfo.nickname}}</li>
          <li style="border:1px white solid;padding: 0px 5px;border-radius: 5px; background-color: white;color: #E9323C">推荐人：{{userInfo.tjname}}</li>
        </ul>
      </div>
      <div class="center">
        <div class="cent_left">
          <ul>
            <li>待结算(当月)</li>
            <li style="text-align: center;margin-top: 3px;">{{num.nosettlement==null?0:num.nosettlement}}元</li>
          </ul>
        </div>
        <div class="cent_right">
          <ul>
            <li>已结算(当月)</li>
            <li style="text-align: center;margin-top: 3px;">{{num.settlement==null?0:num.settlement}}元</li>
          </ul>
        </div>
      </div>
      <div class="down">
        <div class="down_left">
          <ul>
            <li @click="pageTo('/pages/my/teamdetail')"><img src="https://cssy.hn90qc.com/icon/teamicon.png" /></li>
            <li style="text-align: center;margin-top: 3px;">我的团队({{num.teamcount==null?0:num.teamcount}})人</li>
          </ul>
        </div>
        <div class="down_cen">
          <ul>
            <li @click="toqrcode"><img src="https://cssy.hn90qc.com/icon/qrcodeicon.png" /></li>
            <li style="text-align: center;margin-top: 3px;">推广二维码</li>
          </ul>
        </div>
        <div class="down_right">
          <ul>
            <li @click="pageTo('/pages/my/earnings')"><img src="https://cssy.hn90qc.com/icon/syicon.png" /></li>
            <li style="text-align: center;margin-top: 3px;">累积收益</li>
          </ul>
        </div>
      </div>
    </div>
    <i-toast id="toast" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDownRefresh: false,
      userInfo:{},
      num:{}
    };
  },
  methods: {
    init() {
      this.$API
        .Gettream({
          i: 2,
          c: "entry",
          a: "wxapp",
          m: "mask",
          do: "Gettream",
          uid: wx.getStorageSync("sessionId")
        })
        .then(res => {
          if (res.code == 1) {
            this.userInfo = res.data.userinfo
            this.num = res.data
          } else {
          }
        });
    },
      toqrcode() {
          if (this.userInfo.level == 0) {
              this.$Toast({
                  content: "请升级会员",
                  type: "warning"
              });
          } else {
              this.pageTo('/pages/login/hua')
          }
      }
  },
  onShow() {
    this.init();
  }
};
</script>

<style scoped lang='scss'>
.bodys {
  width: 100%;
  height: 600px;
}
.top {
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #e9323c;
  color: white;
  font-size: 13px;
  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
}
.info {
  margin-top: 10px;
}
.info li {
  margin-left: 10px;
}
.center {
  width: 100%;
  height: 14%;
  display: flex;
  margin: 8px;
}
.cent_left,
.cent_right {
  width: 50%;
  height: 100%;
  margin-right: 10px;
  margin-left: 4px;
  border-radius: 10px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
}
.down {
  width: 100%;
  height: 20%;
  display: flex;
  margin: 5px;
}
.down_left,
.down_cen,
.down_right {
  width: 33%;
  height: 100%;
  margin-right: 8px;
  border-radius: 10px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  li:first-child {
    display: flex;
    justify-content: center;
    padding-bottom: 5px;
  }
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
}
</style>
