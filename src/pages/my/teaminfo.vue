<template>
  <!-- 我的销   template > div第一级需要div-->
  <div class="address-template">
    <div class="bodys">
      <div class="top">
        <img :src="info.headerimg" />
        <ul class="info">
          <li style="margin-bottom: 10px;">{{info.nickname}}</li>
          <li style="border:1px white solid;padding: 0px 5px;border-radius: 5px; background-color: white;color: #E9323C">推荐人：{{info.tjname}}</li>
        </ul>
      </div>
      <div class="center">
        <div class="cen_top">
          <span>
            <img :src="info.headerimg" />
            <label>消费总额</label>
          </span>
          <span style="color: red;">￥{{userInfo.consumption}}</span>
        </div>
        <div class="info_title">基本信息</div>
        <div class="info_detail">
          <ul>
            <li>
              <span>姓名:</span>
              <span>{{info.user_name == ''?'未填':info.user_name}}</span>
            </li>
            <li>
              <span>性别:</span>
              <span>{{info.sex == ''?'未填':info.sex}}</span>
            </li>
            <li>
              <span>微信号:</span>
              <span>{{info.wechat == ''?'未填':info.wechat}}</span>
            </li>
            <li>
              <span>QQ:</span>
              <span>{{info.qq == ''?'未填':info.qq}}</span>
            </li>
            <li>
              <span>生日:</span>
              <span>{{info.birthday == ''?'未填':info.birthday}}</span>
            </li>
            <li>
              <span>地区:</span>
              <span>{{info.address == ''?'未填':info.address}}</span>
            </li>
            <li>
              <span>昵称:</span>
              <span>{{info.nickname == ''?'未填':info.nickname}}</span>
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
      info: {},
      userInfo:{}
    };
  },
  methods: {
    setActive(index) {
      this.tabActive = index;
    },
    init() {
      this.$API
        .teaminfodetail({
          i: 2,
          c: "entry",
          a: "wxapp",
          m: "mask",
          do: "teaminfodetail",
          uid: wx.getStorageSync("sessionId"),
        })
        .then(res => {
          if (res.code == 1) {
            this.userInfo = res.data
          } else {
          }
        });
    }
  },
  onShow() {
    console.log("参数", this.$route.query);
    this.info = this.$route.query;
    this.init()
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
}
.cen_top {
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 15px 8px;
  font-size: 15px;
  img {
    width: 25px;
    height: 25px;
    vertical-align: middle;
    padding-right: 2px;
  }
}
.info_title {
  width: 100%;
  height: 50px;
  line-height: 50px;
  color: #7e8181;
  font-size: 16px;
  text-align: center;
  background-color: #eaeaea;
}
.info_detail li {
  display: flex;
  justify-content: space-between;
  padding: 15px 10px;
  font-size: 15px;
  color: #7e8181;
  border-bottom: 1px #c1c1c1 solid;
}
</style>
