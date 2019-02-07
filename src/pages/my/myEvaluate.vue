<template>
  <!-- 我的评价 -->
  <div class="myEvaluate-template">
    <div class="box" v-for="(item, index1) in goodsList" :key="index1" @click="pageTo('/pages/sort/details',{id:item.gID})">
      <div class="box-top">
        <i class="pic" :style="{backgroundImage: 'url('+item.Itemcover+')'}"></i>
        <div class="box-rig">
          <div>{{item.Title}}</div>
          <p class="zhon">库存{{item.TotalQty}}</p>
          <p class="bot">
            <span class="price">¥
              <i>{{item.Price}}</i>
            </span>
            <i class="icon">+{{item.integral}}积分</i>
          </p>
        </div>
        <div class="del" @click.stop="del(item.gID)">删除</div>
      </div>

      <!-- <CommEvaluate></CommEvaluate> -->
    </div>
  </div>
</template>

<script>
import CommEvaluate from "@/components/CommEvaluate";
export default {
  components: {
    CommEvaluate
  },
  data() {
    return {
      boxImage: [
        "http://t2.hddhhn.com/uploads/tu/201812/661/3.jpg",
        "http://t2.hddhhn.com/uploads/tu/201812/661/4.jpg",
        "http://t2.hddhhn.com/uploads/tu/201812/661/6.jpg"
      ],
      goodsList: []
    };
  },
  props: {},
  methods: {
    init() {
      this.$API
        .Getfootprint({
          i: 8,
          c: "entry",
          a: "wxapp",
          m: "mask",
          do: "Getfootprint",
          uid: wx.getStorageSync("sessionId")
        })
        .then(res => {
          console.log(res, "搜索结果");
          this.goodsList = res.data;
        });
    },
    del(id) {
      this.$API
        .Delfootprint({
          i: 8,
          c: "entry",
          a: "wxapp",
          m: "mask",
          do: "Delfootprint",
          id: id,
         uid: wx.getStorageSync("sessionId")
        })
        .then(res => {
          if (res.code == 1) {
            this.init();
          } else {
            // this.pageTo('/pages/shopCart/payResult', {isSuccess: false})
          }
        });
    }
  },
  onShow() {
    this.init();
  },
  onReady() {},
  onUnload() {}
};
</script>

<style lang="scss" scoped>
@import "~@/assets/css/_mixin";
.myEvaluate-template {
  width: 100%;
  padding-top: 12px;
  .box {
    // margin-top: 12px;
    padding: 0 13px;
    background-color: #fff;
    margin-bottom: 12px;
    &:last-child {
      margin-bottom: 0;
    }
    .box-top {
      padding: 12px 0;
      border-bottom: 1px solid #eaeaea;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      position: relative;
      i.pic {
        @include bg-icon(100px);
        border-radius: 5px;
        margin-right: 12px;
        background-size: cover;
      }
      .box-rig {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 100px;
        overflow: hidden;

        div {
          width: 100%;
          font-size: 13px;
          font-family: PingFang-SC-Bold;
          font-weight: bold;
          color: #444444;
          text-align: justify;
          @include moreLine(2);
        }
        p.zhon {
          font-size: 12px;
          font-family: PingFang-SC-Regular;
          font-weight: 400;
          color: #888888;
        }
        p.bot {
          display: flex;
          justify-content: space-between;
          align-items: center;
          span.price {
            font-size: 15px;
            font-family: Arial-BoldMT;
            font-weight: bold;
            color: #ed1731;
            i {
              display: inline-block;
              margin-left: 5px;
              font-size: 20px;
            }
          }
          .icon {
            font-size: 13px;
            font-family: PingFang-SC-Regular;
            font-weight: 400;
            color: #888888;
          }
        }
      }
      .del {
        position: absolute;
        top: 10px;
        right: 10px;
      }
    }
  }
}
</style>
