<template>
  <div class="home-template">
    <!-- 搜索 -->
    <!-- <div class="search-main" id="search">
      <div class="search-body" @click="pageTo('/pages/home/search_init')">
        <i class="search-icon"></i>
        <p>请输入商品关键词</p>
      </div>

    </div> -->

    <!-- 轮播图 -->
    <!-- <div class="swiper">
      <swiper indicator-dots
              indicator-color="#BBBBBB"
              indicator-active-color="#FFFFFF"
              autoplay
              interval="3000"
              circular>
        <swiper-item class="swiperImage" v-for="(image, index) in swiperImage" :key="index">
          <image :src="image" mode="aspectFill"></image>
        </swiper-item>
      </swiper>
    </div> -->

    <!-- 分类 -->
    <!-- <ul class="classification">
      <li class="class-item" v-for="(classItem, index) in classification" :key="index">
        <div class="class-body" @click="pageTo('/pages/home/goodsList', {title: classItem.name})">
          <div class="class-img" :style="{backgroundImage: 'url(' + classItem.image + ')'}"></div>
          <h5 class="name">{{classItem.name}}</h5>
        </div>
      </li>
      <li class="class-item">
        <div class="class-body" @click="switchTab('/pages/sort/index')">
          <div class="class-img" :style="{backgroundImage: 'url(' + class10 + ')'}"></div>
          <h5 class="name">全部</h5>
        </div>
      </li>
    </ul> -->

    <!-- 广告专场 -->
    <!-- <div class="ad" @click="pageTo('/pages/home/everyDay')">
      <div class="main-Ad"></div>
      <div class="secondary-Ad"></div>
    </div> -->

    <!-- Goods -->
    <!-- <div class="white-block" :style="{height: searchHeight + 28 + 'px'}" v-show="isFixed"></div> -->
    <!-- Tabs -->
    <!-- <ul class="tabs" id="tabs" :class="[isFixed && 'fixed']" :style="{top: searchHeight + 'px'}">
        <li class="tab" v-for="(tab, index) in tabs" :key="index"
                        :class="tabActive == index && 'active'"
                        @click="switchTabs(index)">
                        {{tab}}
        </li>
      </ul> -->
    <!-- Goods List -->
    <!-- <ul class="goods-list">
        <li class="goods-item" v-for="(item, index) in 10" :key="index">
          <goodsItem></goodsItem>
        </li>
      </ul> -->
    <!-- 上图 -->
    <div class="topDiv">
      <img src="https://csyueshi.com/icon/index.jpg" alt="">
    </div>
    <div class="bottomDiv">
      <div class="detailBtn" @click="pageTo('/pages/sort/details', {id: item.gID})" v-for="( item , index ) of bottomBtn" :key="index">
        <img :src=item.image alt="">
      </div>
    </div>
    <i-toast id="toast" />
  </div>
</template>

<script>
import goodsItem from "@/components/GoodsItem";
import { $Toast } from "@/iView/base/index";
import class1 from "@/assets/img/home_pic_1@2x.png";
import class2 from "@/assets/img/home_pic_2@2x.png";
import class3 from "@/assets/img/home_pic_3@2x.png";
import class4 from "@/assets/img/home_pic_4@2x.png";
import class5 from "@/assets/img/home_pic_5@2x.png";
import class6 from "@/assets/img/home_pic_6@2x.png";
import class7 from "@/assets/img/home_pic_7@2x.png";
import class8 from "@/assets/img/home_pic_8@2x.png";
import class9 from "@/assets/img/home_pic_9@2x.png";
import class10 from "@/assets/img/home_icon_more@2x.png";

export default {
  components: {
    goodsItem
  },
  data() {
    return {
      searchHeight: 0,
      scrollTop: 0,
      isFixedSearch: false,
      isFixed: false,
      swiperImage: [
        "http://hddesktopwallpapers.in/wp-content/uploads/2015/07/images-of-easter-680x425.jpg",
        "http://hddesktopwallpapers.in/wp-content/uploads/2015/07/images-easter-eggs-680x425.jpg",
        "http://hddesktopwallpapers.in/wp-content/uploads/2015/07/free-easter-wallpaper-680x425.jpeg",
        "http://hddesktopwallpapers.in/wp-content/uploads/2015/07/images-easter-eggs-680x425.jpg"
      ],
      classification: [
        { image: class1, name: "女装" },
        { image: class2, name: "女鞋" },
        { image: class3, name: "箱包" },
        { image: class4, name: "数码" },
        { image: class5, name: "电器" },
        { image: class6, name: "男装" },
        { image: class7, name: "男鞋" },
        { image: class8, name: "内衣" },
        { image: class9, name: "母婴" }
      ],
      class10,
      tabs: ["推荐", "热门", "最新"],
      tabActive: 0,
      bottomBtn: [
        {
          image: "https://csyueshi.com/icon/btn1.png",
          gID: 26
        },
        {
          image: "https://csyueshi.com/icon/btn2.png",
          gID: 24
        },
        {
          image: "https://csyueshi.com/icon/btn3.png",
          gID: 27
        }
      ]
    };
  },
  methods: {},
  config: {
    enablePullDownRefresh: true
  },
  // 下拉刷新方法，与methods方法同级

  async onPullDownRefresh() {
    console.log("下拉加载");

    // to doing..
    // 停止下拉刷新
    wx.stopPullDownRefresh();
  },
  // 上拉加载，拉到底部触发
  onReachBottom() {
    // 到这底部在这里需要做什么事情
    this.loadMore();
    console.log("上拉触底");
  },
  onShareAppMessage: function(ops) {
    if (ops.from === "button") {
      // 来自页面内转发按钮
      console.log(ops.target);
    }
    return {
      title: "紫色魅影",
      path: "pages/home/index",
      success: function(res) {
        // 转发成功
        console.log("转发成功:" + JSON.stringify(res));
      },
      fail: function(res) {
        // 转发失败
        console.log("转发失败:" + JSON.stringify(res));
      }
    };
  },
  onLoad: function(options) {
    var scene = decodeURIComponent(options.scene);
    console.log(scene, "???????????");

    if ("undefined" != scene && scene != null) {
      //        this.$Toast({
      //            content: "扫码进来的"+scene,
      //            type: "success"
      //        });
      let uid = wx.getStorageSync("sessionId");
      if (uid) {
        //直接绑定用户
        if (uid != scene) {
          console.log(scene, "得到pid");
          this.$API
            .bang({
              i: 3,
              c: "entry",
              a: "wxapp",
              m: "mask",
              do: "Savaid",
              uid: uid,
              pid: scene
            })
            .then(res => {
              console.log(res, "首页中绑定用户");
              //if (res.code == 1) {
              this.$Toast({
                content: res.msg,
                type: "success"
              });
              //}
            });
        }
      } else {
        //用户还没授权，先把pdi本地保存先
        console.log(scene, "已保存pid");
        wx.setStorageSync("pid", scene);
        // 这里验证登录?
        let vm = this;
        //废除手机登陆
          //if(wx.getStorageSync('sessionId') ==''||wx.getStorageSync("is") == "") {
          if(wx.getStorageSync('sessionId') =='') {
              vm.replaceTo("/pages/login/wxLogin");
          }
      }
    }
  },

  onReady() {
    let vm = this;
    console.log(this.$store.state.test);
    // vm.init()
  },
  methods: {
    // isLogin() {
    //   this.$API
    //     .toLogin({
    //       i: 3,
    //       c: "entry",
    //       a: "wxapp",
    //       m: "mask",
    //       do: "Login",
    //       // do参数?
    //       uid: wx.getStorageSync("sessionId")
    //     })
    //     .then(res => {
    //       console.log(res);
    //
    //       if (res.code == 1) {
    //         // this.switchTab("/pages/home/index");
    //         wx.setStorageSync("is", true);
    //         // 成功登录 is为true
    //       } else {
    //         this.pageTo("/pages/login/register");
    //         // this.$Toast({
    //         //   content: res.msg,
    //         //   type: "warning"
    //         // });
    //       }
    //     });
    // }
  },
  onShow() {
    console.log(wx.getStorageSync("is"),'我说home/index');
      //if(wx.getStorageSync('sessionId') ==''||wx.getStorageSync("is") == "") {
      if(wx.getStorageSync('sessionId') =='') {
          wx.redirectTo({
              url: '/pages/login/wxLogin'
          })

      }
  }
};
</script>

<style scoped lang="scss">
@import "~@/assets/css/_mixin";
.home-template {
  width: 100%;

  position: relative;
  height: 100%;
  // background-color: rgb(247, 247, 24);
  .topDiv {
    width: 100%;
    height: 80%;
    img {
      display: inline-block;
    }
  }
  .bottomDiv {
    padding: 5px;
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    height: 20%;
    width: 100%;
    background-color: #ffffff;
    .detailBtn {
      width: 33%;
      padding: 13px;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 70px;
        height: 70px;
      }
    }
  }
}
</style>
