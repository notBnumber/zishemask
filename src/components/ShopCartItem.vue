<template>
  <div class="shopCartItem-component">
    <div class="del" @click.stop="del(info.gID)">删除</div>
    <i class="select-icon" @click.stop="selected()" :class="[isSelected && 'active']"></i>
    <div class="goods-image" :style="{backgroundImage: 'url('+info.Itemcover+')'}"></div>
    <div class="goods-info">
      <p class="name">{{info.Title}}</p>
      <div class="attr">
        <span class="color">+{{info.integral}}积分</span>,
        <span class="size">已售{{info.TotalQty}}</span> ,
        <span class="size">运费{{info.freight}}</span>
      </div>
      <div class="content">
        <div class="price">¥{{info.Price}}</div>
        <div class="numInput">
          <button class="reduce" plain @click.stop="reduce(info.gID)" :class="[info.num == 1 && 'disabled']" :disabled="info.num == 1"></button>
          <!-- <input type="number"
                v-model.number="number"
                min="1" max="99" maxlength="3"
                @input="handleChangeNum"
                @blur="handleBlur"> -->
          <span class="num">{{info.num}}</span>
          <button class="add" plain @click.stop="add(info.gID)" :class="[info.num == 99 && 'disabled']" :disabled="info.num == 99"></button>
        </div>
      </div>
    </div>

    <i-action-sheet :visible='visible' @cancel="visible = false">
      <div class="frame-box" slot="header">
        <div class="frame1">
          <i class="pic" :style="{backgroundImage: 'url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547111114003&di=9927b361668028a216cdd930765c45d1&imgtype=0&src=http%3A%2F%2Fwww.zmdtvw.cn%2Fd%2Ffile%2Fp%2F2019%2F01%2F04%2F5fd85da05d3f3c50e03b9828f95ea39c.jpeg)'}"></i>
          <div class="frame-right">
            <p>
              <i @click="visible = false"></i>
            </p>
            <p>¥{{info.Price}}</p>
            <p>{{info.Title}}</p>
          </div>
        </div>
        <!-- <div class="color">
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
      </div> -->
        <!-- <div class="number">
        <span>数量</span>
        <span>
          <i @click="reduce()"></i>
          <i>{{info.num}}</i>
          <i @click="add()"></i>
        </span>
      </div> -->

        <div class="btn">
          <button class="login-out" @click="addshopping">确定</button>
        </div>
      </div>
    </i-action-sheet>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    };
  },
  props: {
    isSelected: {
      type: Boolean,
      default: false
    },
    info: {
      type: Object,
      default: {}
    },
    index: {
      type: Number,
      default: 0
    }
  },

  methods: {
    // 删除
    del(id) {
      this.$API
        .Delshopcat({
          i: 2,
          c: "entry",
          a: "wxapp",
          m: "mask",
          do: "Delshopcat",
          state: 1,
          gid: id,
          uid: wx.getStorageSync("sessionId"),
        })
        .then(res => {
          if (res.code == 1) {
            this.$emit("del");
            // this.$Toast({
            //   content: "加入购物车成功",
            //   type: "success"
            // });
          }
        });
    },
    reduce(id) {
      this.info.num = Number(this.info.num);
      if (this.info.num > 0) {
        this.info.num -= 1;
      }
      this.$API
        .Shopcar({
          i: 2,
          c: "entry",
          a: "wxapp",
          m: "mask",
          do: "Shopcar",
          state: 1,
          gid: id,
          uid: wx.getStorageSync("sessionId"),
          num: this.info.num
        })
        .then(res => {
          if (res.code == 1) {
            // this.$Toast({
            //   content: "加入购物车成功",
            //   type: "success"
            // });
          }
        });
    },
    add(id) {
      this.info.num = Number(this.info.num);
      if (this.info.num < 99) {
        this.info.num += 1;
      }
      this.$API
        .Shopcar({
          i: 2,
          c: "entry",
          a: "wxapp",
          m: "mask",
          do: "Shopcar",
          state: 1,
          gid: id,
          uid: wx.getStorageSync("sessionId"),
          num: this.info.num
        })
        .then(res => {
          if (res.code == 1) {
            // this.$Toast({
            //   content: "加入购物车成功",
            //   type: "success"
            // });
          }
        });
    },
    handleChangeNum({ mp: { detail } }) {
      let value = detail.value;
      this.info.num = value.replace(/[^0-9]+/g, "");
      if (this.info.num.length > 2) {
        this.info.num = 99;
      }
    },
    handleBlur({ mp: { detail } }) {
      if (!this.info.num) {
        this.info.num = 1;
      }
    },
    selected() {
      this.$emit("toggleSelect", this.index, this.info.num);
    }
  },
  beforeDestroy() {
    this.visible = false;
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/css/_mixin";
.shopCartItem-component {
  width: 100%;
  padding: 12px 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eaeaea;
  position: relative;
  .del {
    position: absolute;
    right: 10px;
    top: 10px;
  }
  i.select-icon {
    @include icon(17px);
    background: #f5f5f5;
    border: 1px solid #dddddd;
    box-sizing: border-box;
    &.active {
      border: none;
      @include bg-img("myaddress_radio_1@2x.png");
      background-size: 100% 100%;
    }
  }
  .goods-image {
    width: 100px;
    height: 100px;
    border-radius: 5px;
    @include bg;
    margin: 0 12px 0 15px;
  }
  .goods-info {
    flex: 1;
    overflow: hidden;
    background: #ffffff;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    p.name {
      width: 100%;
      min-height: 56px;
      text-align: justify;
      color: #444444;
      font-size: 13px;
      line-height: 26px;
      @include moreLine(2);
    }
    .attr {
      background: #f5f5f5;
      padding: 5px;
      font-size: 11px;
      color: #888888;
      display: flex;
      align-items: center;
      margin: 5px 0;
      i.arrow-icon {
        @include icon(12px);
        background-image: url("~@/assets/img/cart_icon_1@2x.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        margin-left: 8px;
      }
    }
    .content {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      @include singleLine;
      .price {
        display: flex;
        align-items: center;
        color: #ed1731;
        font-size: 15px;
        font-weight: bold;
      }
      .numInput {
        display: flex;
        align-items: center;
        button {
          border: none;
          @include bg-icon(20px);
          &.reduce {
            border-radius: 2px 0 0 2px;
            background-image: url("~@/assets/img/-s-cart_icon_reduce@2x.png");
            &.disabled {
              background-image: url("~@/assets/img/cart_icon_reduce@2x.png");
            }
          }
          &.add {
            border-radius: 0 2px 2px 0;
            background-image: url("~@/assets/img/-s-cart_icon_add@2x.png");
            &.disabled {
              background-image: url("~@/assets/img/cart_icon_add2@2x.png");
            }
          }
        }
        span.num {
          width: 30px;
          height: 20px;
          line-height: 20px;
          overflow: hidden;
          background: transparent;
          color: #242121;
          font-size: 13px;
          text-align: center;
        }
        // input {
        //   width: 30px;
        //   height: 20px;
        //   line-height: 20px;
        //   overflow: hidden;
        //   background: transparent;
        //   color: #242121;
        //   font-size: 13px;
        //   text-align: center;
        // }
      }
    }
  }
  .frame-box {
    padding: 12px;
    background-color: #fff;
    overflow: hidden;
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
          width: 50px;
          height: 24px;
          line-height: 24px;
        }
        i:last-child {
          @include bg-icon(24px);
          background-image: url("~@/assets/img/spxq4_icon_add@2x.png");
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
}
</style>
