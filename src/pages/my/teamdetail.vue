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
          <li class="main_li" v-for="(item, index) in list" :key="index" @click="pageTo('/pages/my/teaminfo',{address:item.address,birthday:item.birthday,nickname:item.nickname,qq:item.qq,sex:item.sex,user_name:item.user_name,wechat:item.wechat,headerimg:item.headerimg,tjname:item.tjname})">
            <span class="main_left"><img :src="item.headerimg" /></span>
            <span class="main_right">
              <ul>
                <li>{{item.nickname}}</li>
                <li class="li_main">推荐人：{{item.tjname}}</li>
                <li>{{item.addtime}}</li>
              </ul>
            </span>
            <span class="main_footer">
              <img src="https://jin.itxiaolong.cn/icon/moreicon.png" />
            </span>
          </li>
        </ul>
        <ul v-if="tabActive==1">
          <li class="main_li" v-for="(item, index) in addList" :key="index" @click="pageTo('/pages/my/teaminfo',{address:item.address,birthday:item.birthday,nickname:item.nickname,qq:item.qq,sex:item.sex,user_name:item.user_name,wechat:item.wechat,headerimg:item.headerimg,tjname:item.tjname})">
            <span class="main_left"><img :src="item.headerimg" /></span>
            <span class="main_right">
              <ul>
                <li>{{item.nickname}}</li>
                <li class="li_main">推荐人：{{item.tjname}}</li>
                <li>{{item.addtime}}</li>
              </ul>
            </span>
            <span class="main_footer">
              <img src="https://jin.itxiaolong.cn/icon/moreicon.png" />
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
          i: 8,
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
            this.addList = res.data.two;
          } else {
          }
        });
    },
    handleinput() {
      console.log("聚焦", this.words);
      if (this.tabActive == 0) {
        this.inits();
        this.setActive(this.tabActive);
      }
    }
  },
  // onShow() {
  //   this.inits();
  // }
  mounted() {
    // this.list = [];
    this.page = 1;
    // this.info = {};
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
.main_right li:last-child {
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
