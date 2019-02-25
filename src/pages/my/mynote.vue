<template>
  <!-- 我的销   template > div第一级需要div-->
  <div class="address-template">
    <div class="bodys">
      <div class="title">
        <!-- v-bind:class="tabActive==1?'title_left': 'title_left ischose'" -->
        <span class="title_left" :class="[tabActive==0 && 'ischose']" @click="setActive(0)">
          <ul>
            <li>全部</li>
          </ul>
        </span>
        <span class="title_left" :class="[tabActive==1 && 'ischose']" @click="setActive(1)">
          <ul>
            <li>收入</li>
          </ul>
        </span>
        <span class="title_left" :class="[tabActive==2 && 'ischose']" @click="setActive(2)">
          <ul>
            <li>支出</li>
          </ul>
        </span>
      </div>
      <div class="main">
        <ul>
          <li class="main_li" v-for="(item, index) in info" :key="index">
            <span class="main_right">
              <ul>
                <li class="liOne">{{item.rcomment}}</li>
                <li>{{item.raddtime}}</li>
              </ul>
            </span>
            <span class="main_footer" v-if="item.rstate==0">
              +{{item.rmoney}}
            </span>
            <span class="main_footer" v-if="item.rstate==1">
              -{{item.rmoney}}
            </span>
          </li>
        </ul>
        <span class="space" v-if="info.length==0">----空空如也----</span>
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
      type: 2,
      info: []
    };
  },
  methods: {
    setActive(index) {
      console.log(index, "选择");

      this.tabActive = index;
      if (this.tabActive == 0) {
        this.type = 2;
      } else if (this.tabActive == 1) {
        this.type = 0;
      } else if (this.tabActive == 2) {
        this.type = 1;
      }
      this.info = []
      this.init();
      //            this.$Toast({
      //                content: "选中"+index,
      //                type: "warning"
      //            });
    },
    init() {
      this.$API
        .Getrecord({
          i: 2,
          c: "entry",
          a: "wxapp",
          m: "mask",
          do: "Getrecord",
          uid: wx.getStorageSync("sessionId"),
          type: this.type
        })
        .then(res => {
          if (res.code == 1) {
            this.info = res.data;
          } else {
          }
        });
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
  // height: 50px;
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
  padding-top: 8px;
  position: absolute;
  right: 35px;
  font-size: 14px;
  color: #e9323c;
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
  .space{
    width: 100%;
    height: 100vh;
    margin-top: -50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.liOne {
  font-size: 14px;
  color: #898989;
}
</style>
