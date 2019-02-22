<template>
  <!-- 我的销   template > div第一级需要div-->
  <div class="address-template">
    <div class="bodys">
      <div class="top">
        <input type="text" placeholder="请输入用户名或者用户ID" v-model="words" v-on:input="handleinput()" />
      </div>
      <div class="title">
        <span v-bind:class="tabActive==1?'title_left': 'title_left ischose'" @click="setActive(0)">
          <ul>
            <li>一级团队({{info.onecount==null?0:info.onecount}})</li>
            <li>合伙人({{info.onehhcount==null?0:info.onehhcount}})粉丝({{info.onefscount==null?0:info.onefscount}})</li>
          </ul>
        </span>
        <span v-bind:class="tabActive==0?'title_right': 'title_right ischose'" @click="setActive(1)">
          <ul>
            <li>二级团队({{info.twocount==null?0:info.twocount}})</li>
            <li>合伙人({{info.twocounthh==null?0:info.twocounthh}})粉丝({{info.twocountfs==null?0:info.twocountfs}})</li>
          </ul>
        </span>
      </div>
      <div class="main">
        <ul v-if="tabActive==0">
          <li class="main_li" v-for="(item, index) in list" :key="index" @click="pageTo('/pages/my/teaminfo',{id:item.uuid,address:item.address,birthday:item.birthday,nickname:item.nickname,qq:item.qq,sex:item.sex,user_name:item.user_name,wechat:item.wechat,headerimg:item.headerimg,tjname:item.tjname})">
            <span class="main_left"><img :src="item.headerimg" /></span>
            <span class="main_right">
              <ul>
                <li>{{item.nickname}}</li>
                <li class="li_main">推荐人：{{item.tjname}}</li>
                <li>{{item.addtime}}</li>
                <li>
                  <span v-if="item.level==0" class="levelstye">普通用户</span>
                  <span v-if="item.level==1" class="levelstye1">合伙人</span>
                  <span v-if="item.level==2" class="levelstye2">银卡合伙人</span>
                  <span v-if="item.level==3" class="levelstye3">金卡合伙人</span>
                  <span v-if="item.level==4" class="levelstye4">市代合伙人</span>
                  <span v-if="item.level==5" class="levelstye5">省代合伙人</span>
                  <span v-if="item.quyuid==4" class="levelstye2" style="margin-left:5px">市代合伙人</span>
                  <span v-if="item.quyuid==5" class="levelstye2" style="margin-left:5px">省代合伙人</span>
                </li>
              </ul>
            </span>
            <span class="main_footer">
              <img src="https://cssy.hn90qc.com/icon/moreicon.png" />
            </span>
          </li>
        </ul>
        <ul v-if="tabActive==1">
          <li class="main_li" v-for="(item, index) in addList" :key="index" @click="pageTo('/pages/my/teaminfo',{id:item.uuid,address:item.address,birthday:item.birthday,nickname:item.nickname,qq:item.qq,sex:item.sex,user_name:item.user_name,wechat:item.wechat,headerimg:item.headerimg,tjname:item.tjname})">
            <span class="main_left"><img :src="item.headerimg" /></span>
            <span class="main_right">
              <ul>
                <li>{{item.nickname}}</li>
                <li class="li_main">推荐人：{{item.tjname}}</li>
                <li>{{item.addtime}}</li>
                <li>
                  <span v-if="item.level==0" class="levelstye">普通用户</span>
                  <span v-if="item.level==1" class="levelstye1">合伙人</span>
                  <span v-if="item.level==2" class="levelstye2">银卡合伙人</span>
                  <span v-if="item.level==3" class="levelstye3">金卡合伙人</span>
                  <span v-if="item.level==4" class="levelstye4">市代合伙人</span>
                  <span v-if="item.level==5" class="levelstye5">省代合伙人</span>
                  <span v-if="item.quyuid==4" class="levelstye2" style="margin-left:5px">市代合伙人</span>
                  <span v-if="item.quyuid==5" class="levelstye2" style="margin-left:5px">省代合伙人</span>
                </li>
              </ul>
            </span>
            <span class="main_footer">
              <img src="https://cssy.hn90qc.com/icon/moreicon.png" />
            </span>
          </li>
        </ul>
      </div>
    </div>
    <i-toast id="toast" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      addList: [],
      tabActive: 0,
      isDownRefresh: false,
      info: {},
      list: [],
      words: "",
      page: 1,
      fuck: []
    };
  },
  methods: {
    setActive(index) {
      this.tabActive = index;
      console.log(this.tabActive);

      if (this.tabActive == 0) {
        // if (this.list.length == 0) {
        //   console.log("没有");
        //   this.list = this.info.one;
        // } else {
        //   console.log("有", this.list);

        //   this.list = this.fuck.concat(this.list);
        //   // console.log(this.list);
        // }
      } else {
        // this.list = [];
        // if (this.list.length == 0) {
        //   this.list = this.info.two;
        //   console.log(this.list, "二级");
        // } else {
        //   this.list = this.list.concat(this.info.two);
        // }
        // this.list = this.info.two;
      }
      //  this.$Toast({
      //      content: "选中"+index,
      //      type: "warning"
      //  });
    },
    inits() {
      this.$API
        .Team({
          i: 2,
          c: "entry",
          a: "wxapp",
          m: "mask",
          do: "Team",
          uid: wx.getStorageSync("sessionId"),
          keywords: this.words,
          page: this.page
        })
        .then(res => {
          if (res.code == 1) {
            this.info = res.data;
            console.log(this.info);
            this.setActive(this.tabActive);
            this.list = this.list.concat(res.data.one);
            this.addList = this.addList.concat(res.data.two);
          } else {
          }
        });
    },
    handleinput() {
      console.log("聚焦", this.words);
      // if (this.tabActive == 0) {
        this.list = []
        this.addList = []
        this.inits();
        // this.setActive(this.tabActive);
      // }
    }
  },
  // onShow() {
  //   this.inits();
  // }
  onShow() {
    this.list = [];
    this.page = 1;
    // this.info = {};
    this.tabActive = 0
    this.addList = [];
    this.inits();
    this.fuck = this.list;
  }
};
</script>

<style scoped lang='scss'>
.bodys {
  width: 100%;
}
.levelstye{
  background-color: #0F8BC6;color: white;padding: 3px 12px;
  font-size: 14px;
  margin-top: 5px;
  border-radius: 5px;
}
.levelstye1{
  background-color: #5FC421;color: white;padding: 3px 12px;
  font-size: 14px;
  margin-top: 5px;
  border-radius: 5px;
}
.levelstye2{
  background-color: #C90FCE;color: white;padding: 3px 12px;
  font-size: 14px;
  margin-top: 5px;
  border-radius: 5px;
}
.levelstye3{
  background-color: #03FAF7;color: white;padding: 3px 12px;
  font-size: 14px;
  margin-top: 5px;
  border-radius: 5px;
}
.levelstye4{
  background-color: #D62E1A;color: white;padding: 3px 12px;
  font-size: 14px;
  margin-top: 5px;
  border-radius: 5px;
}
.levelstye5{
  background-color: #FAF703;color: white;padding: 3px 12px;
  font-size: 14px;
  margin-top: 5px;
  border-radius: 5px;
}
.top {
  width: 100%;
  height: 50px;
  background-color: #e9323c;
  display: flex;
  justify-content: center;
  line-height: 50px;
  align-items: center;
  input {
    background-color: white;
    width: 80%;
    border-radius: 15px;
    font-size: 12px;
    padding-left: 15px;
  }
}
.title {
  width: 90%;
  height: 70px;
  display: flex;
  font-size: 13px;
  align-content: space-around;
}
.title_left,
.title_right {
  width: 45%;
  text-align: center;
  margin-left: 25px;

  margin-bottom: 5px;
  ul li {
    margin-top: 8px;
  }
}
.main_li {
  border-radius: 15px;
  padding: 5px;
  background-color: white;
  margin-top: 10px;
  img {
    width: 75px;
    height: 75px;
    border-radius: 50%;
  }
}
.ischose {
  border-bottom: 2px #e9323c solid;
  color: #e9323c;
}
.main_right {
  display: flex;
  align-items: center;
  margin-left: 18px;
}
.main_footer {
  position: absolute;
  right: 35px;
  padding-top: 30px;
  img {
    width: 20px;
    height: 20px;
  }
}
.main_right li:nth-child(3) {
  color: #b1adaa;
  font-size: 12px;
}
.li_main {
  color: #898989;
  font-size: 15px;
}
.main {
  width: 90%;
  height: 100%;
  padding: 8px;
  margin-left: 15px;
  ul li {
    display: flex;
  }
}
</style>
