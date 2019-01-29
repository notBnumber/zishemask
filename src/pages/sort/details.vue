<template>
  <div class="details-template">
    <!-- 轮播图 -->
    <div class="swiper">
      <swiper autoplay interval="3000" circular @change="getCurrentIndex">
        <swiper-item class="swiperImage" v-for="(image, index) in detail.imgarr" :key="index">
          <image :src="image" mode="aspectFill"></image>

        </swiper-item>
      </swiper>
      <!-- <i></i> -->
      <!-- <span>{{currentIndex + 1}} / {{swiperImage.length}}</span> -->
    </div>

    <div class="layer1">
      <p class="title">{{detail.Title}}</p>
      <h1>¥{{detail.Price}}</h1>
      <p class="sele">
        <span>+{{detail.integral}}积分</span>
        <span>已售{{detail.TotalQty}}</span>
        <span>运费{{detail.freight}}</span>
      </p>
      <!-- <p class="Bothends">
        <span>运费：<i>免邮</i></span>
        <span>销量：<i>170件</i></span>
      </p> -->
    </div>

    <div class="layer2">
      <div class="layer2-item">
        <div class="number">
          <span>数量</span>
          <span>
            <i @click="clicknum('-')"></i>
            <i>{{num}}</i>
            <i @click="clicknum('+')"></i>
          </span>
        </div>
      </div>
      <!-- <div class="layer2-item" @click="visible1 = true">
        <span>参数 <i>产地、品牌</i></span>
        <i class="icon"></i>
      </div> -->
    </div>

    <!-- <div class="layer3">
      <p class="layer3-tit">
        <span>宝贝评价</span>
        <span @click="pageTo('/pages/my/allEvaluate')">查看全部
          <i></i>
        </span>
      </p>
      <div class="layer3-box">
        <div class="box-item">
          <span>
            <i :style="{backgroundImage: 'url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547111114003&di=9927b361668028a216cdd930765c45d1&imgtype=0&src=http%3A%2F%2Fwww.zmdtvw.cn%2Fd%2Ffile%2Fp%2F2019%2F01%2F04%2F5fd85da05d3f3c50e03b9828f95ea39c.jpeg)'}"></i> 强人所难</span>
          <p>
            <i-rate :value="starIndex2" size="20">
            </i-rate>
          </p>
        </div>
        <p class="box-tit">等发售等了好久了！！抢到了第一批货！！真的太好看了！！金色的真的超级酷！</p>
      </div>
    </div> -->

    <div class="layer4">
      <p class="title">——• 商品详情 •——</p>
      <div class="text" v-html="detail.content">
        <!-- {{detail.content}} -->
      </div>
    </div>

    <p class="more">------------------- 已经到底了 -------------------</p>

    <div class="lay-lower">
      <div class="lower-left">
        <!-- <button class="span" open-type='contact' plain>
          <i class="kf"></i>
          客服
        </button> -->
        <span class="span" @click="switchTab('/pages/shopCart/index')">
          <i class="gwc badge"></i>
          购物车
        </span>
        <span class="span last" @click="Collection">
          <i class="aix" :class="[isColl && 'active']"></i>
          收藏
        </span>
      </div>
      <div class="right-btn">
        <span @click="toggleSheet(0)">加入购物车</span>
        <span @click="toBuy()">立即购买</span>
      </div>
    </div>

    <i-action-sheet :visible='visible' @cancel="cancel">
      <div class="frame-box" slot="header">
        <div class="frame1">
          <i class="pic" :style="{backgroundImage: 'url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547111114003&di=9927b361668028a216cdd930765c45d1&imgtype=0&src=http%3A%2F%2Fwww.zmdtvw.cn%2Fd%2Ffile%2Fp%2F2019%2F01%2F04%2F5fd85da05d3f3c50e03b9828f95ea39c.jpeg)'}"></i>
          <div class="frame-right">
            <p>
              <i @click="visible = false"></i>
            </p>
            <p>¥1104</p>
            <p>{{vuex}}</p>
          </div>
        </div>

        <div class="color">
          <span>颜色分类</span>
          <div class="box">
            <i v-for="(item, index) in 8" :key="index" :class="[index == colIndex && 'active']" @click='colIndex = index'>金色</i>
          </div>
        </div>

        <div class="codeNumber">
          <span>码数</span>
          <div class="box">
            <i v-for="(item, index) in 8" :key="index" :class="[39 + index == 39 + codeIndex && 'active']" @click='codeIndex = index'>{{ 39 + index}}</i>
          </div>
        </div>

        <div class="number">
          <span>数量</span>
          <span>
            <i @click="clicknum('-')"></i>
            <i>{{num}}</i>
            <i @click="clicknum('+')"></i>
          </span>
        </div>

        <div class="btn">
          <button class="login-out" @click="addshopping">确定</button>
        </div>
      </div>
    </i-action-sheet>

    <i-action-sheet :visible='visible1' @cancel="cancel1">
      <div class="parameter-box" slot="header">
        <p>商品参数</p>
        <div class="parameter">
          <span>品牌</span>
          <i>NIKE/耐克</i>
        </div>
        <div class="parameter">
          <span>货号</span>
          <i>NK422002014221</i>
        </div>
        <div class="parameter">
          <span>吊牌价</span>
          <i>2010元</i>
        </div>
        <div class="parameter">
          <span>上市年份</span>
          <i>2020年</i>
        </div>
        <div class="parameter">
          <span>适用性别</span>
          <i>男</i>
        </div>
        <span class="close" @click="visible1 = false">关闭</span>
      </div>
    </i-action-sheet>
    <i-toast id="toast" />
  </div>
</template>

<script>
import selectAdressItem from "@/components/SelectAdressItem";

export default {
  components: {
    selectAdressItem
  },

  data() {
    return {
      isSelected: false,
      swiperImage: [
        "http://t2.hddhhn.com/uploads/tu/201812/661/3.jpg",
        "http://t2.hddhhn.com/uploads/tu/201812/661/4.jpg",
        "http://t2.hddhhn.com/uploads/tu/201812/661/6.jpg",
        "http://t2.hddhhn.com/uploads/tu/201812/661/7.jpg"
      ],
      currentIndex: 0,
      visible: false,
      visible1: false,
      starIndex2: 4,
      colIndex: 0,
      codeIndex: 0,
      num: 1,
      isColl: null,
      isAddShopCart: false, //是否是加入购物车,
      detail: ""
    };
  },
  // computed: {
  //   vuex() {
  //     return this.$store.state.test;
  //   }
  // },
  computed: {
    //监听 不能先在data定义变量
    vuex() {
      return this.$store.state.test;
    }
  },

  props: {},
  mounted() {
    var y = new Date().getFullYear(); //当前年份
    var m = new Date().getMonth(); //当前月份
    var q = parseInt(m / 3); //当前季度
    var qs = new Date(y, (q - 1) * 3, 1); //上一季度的开始日期
    var qe = new Date(y, q * 3, 0); //上一季度的结束日期
    console.log("初始化", this.$route.query.id, q, qs, qe);
  },
  methods: {
    // 初始化商品详情
    init() {
      this.$API
        .detail({
          i: 8,
          c: "entry",
          a: "wxapp",
          m: "mask",
          do: "Detailgood",
          gid: this.$route.query.id,
          uid: wx.getStorageSync("sessionId")
        })
        .then(res => {
          console.log(res, "详情");
          this.detail = res.data;
          this.isColl = res.data.iscollection
          console.log("sksdfkgkg", this.detail);
        });
    },

    getCurrentIndex({ mp: { detail } }) {
      // console.log(detail);
      this.currentIndex = detail.current;
    },
    cancel() {
      this.visible = false;
    },
    cancel1() {
      this.visible1 = false;
    },
    clicknum(str) {
      if (str == "-") {
        this.num--;
        if (this.num <= 0) {
          this.num = 1;
        }
      } else {
        this.num++;
      }
    },
    // 添加购物车 购买商品
    toggleSheet(index) {
      if (index === 0) {
        // this.isAddShopCart = true;
        // this.num = 1
        console.log("加入购物车", this.num);
        this.$API
          .Shopcar({
            i: 8,
            c: "entry",
            a: "wxapp",
            m: "mask",
            do: "Shopcar",
            state: 1,
            gid: this.$route.query.id,
            uid: wx.getStorageSync("sessionId"),
            num: this.num
          })
          .then(res => {
            if (res.code == 1) {
              this.$Toast({
                content: "加入购物车成功",
                type: "success"
              });
            }
          });
      } else if (index === 1) {
        this.isAddShopCart = false;
        console.log("立即购买");
        // pages/my/orderDetail
      }
      // this.visible = true;
    },
    toBuy() {
      // pageTo('/pages/shopCart/confirmOrder',{id:detail.gID,num:num,freight:freight})
      console.log(this.detail,'详情');
      
      let arr = [];
      let obj = {
        // id: this.detail.gID,
        // value: this.detail.Title,
        // img: this.detail.Itemcover,
        // price: this.detail.Price,
        // freight: this.detail.freight
      };
      obj.id = this.detail.gID;
      obj.value = this.detail.Title;
      obj.img = this.detail.Itemcover;
      obj.price = this.detail.Price;
      obj.freight = this.detail.freight;
      obj.integral = this.detail.integral;
       obj.TotalQty = this.detail.TotalQty;
      obj.num = this.num
      obj.ischange = true
       arr.push(obj);
      console.log(arr, "djkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
      let str = JSON.stringify(arr)
      this.pageTo('/pages/shopCart/confirmOrder',{obj:str})
    },
    addshopping() {
      if (this.isAddShopCart) {
        this.$Toast({
          content: "加入购物车成功",
          type: "success"
        });
      } else {
        this.pageTo("/pages/shopCart/confirmOrder");
      }
      this.visible = false;
    },
    //收藏按钮
    Collection() {
      if (this.isColl) {
        this.isColl = false;
        this.$API
          .Collection({
            i: 8,
            c: "entry",
            a: "wxapp",
            m: "mask",
            do: "Collection",
            gid: this.$route.query.id,
            uid: wx.getStorageSync("sessionId")
          })
          .then(res => {
            if (res.code == 1) {
              this.$Toast({
                content: "已取消收藏",
                type: "warning"
              });
            } else {
              this.$Toast({
                content: "取消收藏失败",
                type: "warning"
              });
            }
          });
      } else {
        this.isColl = true;
        // Getcollection
        this.$API
          .Collection({
            i: 8,
            c: "entry",
            a: "wxapp",
            m: "mask",
            do: "Collection",
            gid: this.$route.query.id,
            uid: wx.getStorageSync("sessionId")
          })
          .then(res => {
            if (res.code == 1) {
              this.$Toast({
                content: "收藏成功",
                type: "success"
              });
            } else {
              this.$Toast({
                content: "收藏失败",
                type: "warning"
              });
            }
          });
      }
    }
  },
  onShow() {
    let vm = this;
    vm.num = 1;
    vm.init();
  },
  onReady() {
    // this.getFields();
    // vm.vuex=vm.$store.state.test
    // console.log(vm.vuex, "kfjfjfjfj");
  },
  onUnload() {}
};
</script>

<style lang="scss" scoped>
@import "~@/assets/css/_mixin";
.details-template {
  width: 100%;
  padding-bottom: 51px;
  .swiper {
    width: 100%;
    height: 375px;
    position: relative;
    swiper {
      width: 100%;
      height: 100%;
      .swiperImage {
        image {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
    }
    i {
      position: absolute;
      right: 10px;
      top: 27px;
      z-index: 2;
      @include bg-icon(30px) background-image:
        url("~@/assets/img/spxq_icon_share@2x.png");
    }
    span {
      padding: 5px 11px;
      border-radius: 20px;
      position: absolute;
      z-index: 2;
      right: 10px;
      bottom: 10px;
      display: inline-block;
      background-color: RGBA(0, 0, 0, 0.3);
      font-size: 11px;
      font-family: PingFang-SC-Bold;
      font-weight: bold;
      color: #fff;
    }
  }
  .layer1 {
    padding: 18px 13px;
    background-color: #fff;
    margin-bottom: 12px;
    h1 {
      font-size: 24px;
      font-family: Arial-BoldMT;
      font-weight: bold;
      color: #ed1731;
      i {
        display: inline-block;
        margin-left: 5px;
        font-size: 14px;
        font-family: ArialMT;
        font-weight: 400;
        text-decoration: line-through;
        color: #999999;
      }
    }
    p.title {
      font-size: 15px;
      font-family: PingFang-SC-Bold;
      font-weight: bold;
      color: #444444;
    }
    p.sele {
      margin-top: 8px;
      span {
        display: inline-block;
        padding: 0 6px;
        font-size: 10px;
        font-family: PingFang-SC-Regular;
        font-weight: 400;
        margin-right: 7px;
        // border-radius: 3px;
      }
      span:first-child {
        // border: 1px solid #444444;
        color: #444444;
      }
      span:last-child {
        // border: 1px solid #ED1731;
        color: #444444;
      }
    }
    p.Bothends {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 8px;
      span {
        font-size: 12px;
        font-family: PingFang-SC-Regular;
        font-weight: 400;
        color: #888888;
        i {
          display: inline-block;
        }
      }
    }
  }
  .layer2 {
    background-color: #fff;
    margin-bottom: 12px;
    .layer2-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px 13px;
      box-sizing: border-box;
      border-bottom: 1px solid #eaeaea;
      &:last-child {
        border: 0;
      }
      span {
        font-size: 14px;
        font-family: PingFang-SC-Regular;
        font-weight: 400;
        color: #888888;
        i {
          margin-left: 10px;
          display: inline-block;
          font-family: PingFang-SC-Medium;
          font-weight: 500;
          color: #444444;
        }
      }
      i.icon {
        @include bg-icon(10px) background-image:
          url("~@/assets/img/user_icon_more_2@2x.png");
      }
    }
    .number {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 24px 0;
      span:first-child {
        font-size: 13px;
        font-family: PingFang-SC-Regular;
        font-weight: 400;
        color: #444444;
      }
      span:last-child {
        display: flex;
        i:first-child {
          @include bg-icon(24px);
          background-image: url("~@/assets/img/spxq4_icon_reduce@2x.png");
        }
        i:nth-child(2) {
          font-size: 13px;
          font-family: PingFang-SC-Regular;
          font-weight: 400;
          color: #242121;
          // width: 50px;
          height: 24px;
          line-height: 24px;
        }
        i:last-child {
          @include bg-icon(24px);
          background-image: url("~@/assets/img/spxq4_icon_add@2x.png");
        }
      }
    }
  }
  .layer3 {
    background-color: #fff;
    padding: 0 13px;
    margin-bottom: 12px;
    p.layer3-tit {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 0;
      span {
        font-size: 14px;
        font-family: PingFang-SC-Medium;
        font-weight: 500;
      }
      span:first-child {
        color: #444444;
      }
      span:last-child {
        color: #ed1731;
        display: flex;
        align-items: center;
        i {
          margin-top: 2px;
          @include bg-icon(15px) background-image:
            url("~@/assets/img/spxq_icon_more_red@2x.png");
        }
      }
    }
    .layer3-box {
      padding: 15px 0;
      .box-item {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        // align-items: center;
        span {
          display: flex;
          align-items: center;
          font-size: 13px;
          font-family: PingFang-SC-Regular;
          font-weight: 400;
          color: #888888;
          i {
            margin-right: 9px;
            @include bg-icon(30px);
            background-size: cover;
            border-radius: 50%;
          }
        }
      }
      p.box-tit {
        font-size: 13px;
        font-family: PingFang-SC-Regular;
        font-weight: 400;
        color: #000000;
        text-align: justify;
      }
    }
  }
  .layer4 {
    padding-bottom: 15px;
    background-color: #fff;
    p.title {
      padding: 15px 0;
      font-size: 14px;
      font-family: PingFang-SC-Medium;
      font-weight: 500;
      color: #444444;
      text-align: center;
    }
    .text {
      width: 100%;
      image {
        width: 100%;
        height: 209px;
      }
    }
  }
  p.more {
    font-size: 12px;
    font-family: PingFang-SC-Regular;
    font-weight: 400;
    color: #888888;
    padding: 18px 0;
    text-align: center;
  }
  .lay-lower {
    background-color: #fff;
    padding: 5px 15px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #eaeaea;
    .lower-left {
      // padding: 0 18px;
      display: flex;
      justify-content: space-around;
      width: 35%;
      .span {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 10px;
        font-family: PingFang-SC-Bold;
        font-weight: bold;
        color: #888888;
        margin-right: 20px;
        border: none;
        &.last {
          margin-right: 0;
        }
        i {
          @include bg-icon(24px);
          margin-bottom: 1px;
          &.kf {
            background-image: url("~@/assets/img/spxq_icon_service@2x.png");
          }
          &.gwc {
            position: relative;
            background-image: url("~@/assets/img/spxq_icon_cart@2x.png");
          }
          &.aix {
            background-image: url("~@/assets/img/spxq_icon_collect@2x.png");
          }
          &.active {
            background-image: url("~@/assets/img/spxq_icon_collect_pre@2x.png");
          }
          &.badge::after {
            content: "";
            display: inline-block;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: red;
            position: absolute;
            right: 0;
            top: 0;
          }
        }
      }
    }
    .right-btn {
      height: 40px;
      span {
        display: inline-block;
        font-size: 13px;
        font-family: PingFang-SC-Bold;
        font-weight: bold;
        color: #ffffff;
        width: 100px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border-radius: 5px;
        &:first-child {
          background-color: #242121;
          margin-right: 10px;
        }
        &:last-child {
          background-color: #ed1731;
        }
      }
    }
  }
  .frame-box {
    padding: 12px;
    background-color: #fff;
    .frame1 {
      display: flex;
      margin-bottom: 20px;
      i.pic {
        @include bg-icon(80px);
        margin-right: 12px;
        background-size: cover;
      }
      .frame-right {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        p {
          text-align: left;
        }
        p:first-child {
          display: flex;
          justify-content: flex-end;
          i {
            @include bg-icon(15px);
            background-image: url("~@/assets/img/spxq4_icon_close@2x.png");
          }
        }
        p:nth-child(2) {
          font-size: 24px;
          font-family: Arial-BoldMT;
          font-weight: bold;
          color: #ed1731;
        }
        p:nth-child(3) {
          font-size: 13px;
          font-family: PingFang-SC-Regular;
          font-weight: 400;
          color: #888888;
          @include singleLine;
        }
      }
    }
    .color {
      padding: 24px 0 14px;
      border-top: 1px solid #eaeaea;
      border-bottom: 1px solid #eaeaea;
      text-align: left;
      span {
        font-size: 13px;
        font-family: PingFang-SC-Regular;
        font-weight: 400;
        color: #444444;
      }
      .box {
        margin-top: 12px;
        i {
          padding: 6px 13px;
          border: 1px solid #242121;
          color: #242121;
          display: inline-block;
          font-size: 13px;
          font-family: PingFang-SC-Regular;
          font-weight: 400;
          border-radius: 3px;
          margin-right: 10px;
          margin-bottom: 10px;
          &.active {
            border: 1px solid #e3162f;
            color: #e3162f;
          }
        }
      }
    }
    .codeNumber {
      padding: 24px 0 14px;
      border-bottom: 1px solid #eaeaea;
      text-align: left;
      span {
        font-size: 13px;
        font-family: PingFang-SC-Regular;
        font-weight: 400;
        color: #444444;
      }
      .box {
        margin-top: 12px;
        i {
          padding: 6px 13px;
          border: 1px solid #242121;
          color: #242121;
          display: inline-block;
          font-size: 13px;
          font-family: PingFang-SC-Regular;
          font-weight: 400;
          border-radius: 3px;
          margin-right: 10px;
          margin-bottom: 10px;
          &.active {
            border: 1px solid #e3162f;
            color: #e3162f;
          }
        }
      }
    }

    .btn {
      button.login-out {
        width: 100%;
        height: 40px;
        line-height: 40px;
        border-radius: 5px;
        background: #ed1731;
        color: #ffffff;
        font-size: 15px;
        text-align: center;
      }
    }
  }
  .parameter-box {
    padding: 12px;
    background-color: #fff;
    p {
      font-size: 16px;
      font-family: PingFang-SC-Medium;
      font-weight: 500;
      color: #000000;
    }
    .parameter {
      padding: 18px 0;
      border-bottom: 1px solid #eaeaea;
      display: flex;
      font-size: 13px;
      font-family: PingFang-SC-Regular;
      font-weight: 400;
      &:last-of-type {
        border-bottom: 0;
      }
      span {
        width: 60px;
        margin-right: 15px;
        color: #888888;
        text-align: left;
      }
      i {
        text-align: left;
        color: #242121;
        flex: 1;
        @include singleLine;
      }
    }
    .close {
      margin-top: 160px;
      display: block;
      width: 100%;
      height: 44px;
      line-height: 44px;
      text-align: center;
      background-color: #ed1731;
      border-radius: 5px;
      ont-size: 15px;
      font-family: PingFang-SC-Regular;
      font-weight: 400;
      color: #ffffff;
    }
  }
}
</style>
