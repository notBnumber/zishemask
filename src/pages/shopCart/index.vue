<template>
  <div class="shopCart-component">
    <div class="header">
      <p class="shopCartNum">购物车共
        <span>{{goodsList.length}}</span>款商品</p>
      <!-- <p class="edit-btn" @click="toggleButtonType()" :class="[buttonType && 'isComplete']">
        {{buttonType ? '编辑' : '完成'}}
      </p> -->
    </div>
    <ul class="shopCart-list">
      <li class="shopCart-item" v-for="(item, index) in goodsList" :key="index">
        <shopCartItem :info="item" :isSelected="flagArr[index]" :index="index" @toggleSelect="toggleSelect" @del='del'></shopCartItem>
      </li>
    </ul>
    <div class="footer">
      <div class="all-select">
        <i class="all-select-btn" @click="allSelected()" :class="[isAll && 'active']"></i>
        全选
      </div>
      <div class="operational">
        <div class="operation1" v-if="buttonType">
          <div class="total-price">
            合计：
            <span>¥{{totalPrice}}</span>
          </div>
          <button class="settlement" @click="toBuy()">结算</button>
        </div>
        <div class="operation2" v-else>
          <button class="collect">移入收藏</button>
          <button class="delete">删除</button>
        </div>
      </div>
    </div>
    <i-toast id="toast" />
  </div>
</template>

<script>
import shopCartItem from "@/components/ShopCartItem";

export default {
  components: {
    shopCartItem
  },
  data() {
    return {
      buttonType: true,
      isAll: false,
      goodsList: [],
      flagArr: [],
      arr: [],
      WanSalary2: []
    };
  },
  watch: {
    flagArr(currentVal, oldValue) {
      if (
        currentVal.every(item => {
          return item == true;
        })
      ) {
        this.isAll = true;
      } else {
        this.isAll = false;
      }
    }
  },
  computed: {
    totalPrice() {
      let total = 0;
      this.flagArr.forEach((item, index) => {
        if (item) {
          total +=
            this.goodsList[index].Price * this.goodsList[index].num +
            this.goodsList[index].num * this.goodsList[index].freight;
        }
      });
      return total.toFixed(2);
    }
  },
  props: {},
  methods: {
    init() {
      this.$API
        .Getcart({
          i: 8,
          c: "entry",
          a: "wxapp",
          m: "mask",
          do: "Getcart",
          uid: wx.getStorageSync("sessionId")
        })
        .then(res => {
          console.log(res, "搜索结果");
          this.goodsList = res.data;
          this.goodsList.forEach(() => {
            this.flagArr.push(false);
          });
        });
    },
    allSelected() {
      if (this.isAll) {
        this.flagArr.forEach((item, index) => {
          this.$set(this.flagArr, index, false);
        });

        for (let item of this.goodsList) {
          item.ischange = false;
        }
      } else {
        this.flagArr.forEach((item, index) => {
          this.$set(this.flagArr, index, true);
        });
        for (let item of this.goodsList) {
          item.ischange = true;
        }
      }
      console.log("全选", this.goodsList);
    },
    toggleSelect(index, num) {
      console.log(index, "选择");

      if (this.flagArr[index]) {
        this.$set(this.flagArr, index, false);
      } else {
        this.$set(this.flagArr, index, true);
      }

      for (let i in this.flagArr) {
        if (this.flagArr[i] == true) {
          this.goodsList[i].ischange = true;
          this.goodsList[i].num = num;
        } else {
          this.goodsList[i].ischange = false;
        }
      }
      console.log("单选", this.goodsList);
    },
    del() {
      this.init()
    },
    // 过滤
    toBuy() {
      console.log(this.goodsList, "出事");
      let arr = [];
      // this.arr = this.myFunction(this.arr)
      this.WanSalary2 = this.goodsList.filter(function(item) {
        return item.ischange == true;
      });
      console.log(this.WanSalary2, "选中的数组");
      for (let item of this.WanSalary2) {
        let obj = {};
        obj.id = item.gID;
        obj.value = item.Title;
        obj.img = item.Itemcover;
        obj.price = item.Price;
        obj.freight = item.freight;
        obj.integral = item.integral;
        obj.TotalQty = item.TotalQty;
        obj.num = item.num;
        arr.push(obj);
      }
      console.log(arr, "过滤数组");

      if (this.WanSalary2.length != 0) {
        let str = JSON.stringify(arr);
        this.pageTo("/pages/shopCart/confirmOrder", { obj: str });
      } else {
        this.$Toast({
          content: "请选择商品",
          type: "warning"
        });
      }
    },

    toggleButtonType() {
      this.buttonType = !this.buttonType;
    }
  },
  onShow() {
    // this.goodsList.forEach(item => {
    //   this.flagArr.push(false);
    // });
    console.log("加载购物车");

    
    // this.WanSalary2 = this.goodsList.filter(function(item) {
    //   return item.ischange == true;
    // });
    console.log(this.WanSalary2.length,'过滤数组');
    
  },
  onReady() {
    // this.init();
    // this.getFiel
    this.init();
  },
  onUnload() {
    this.buttonType = true;
    this.isAll = false;
    this.flagArr = [];
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/css/_mixin";
.shopCart-component {
  width: 100%;
  padding-bottom: 50px;
  .header {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f8f8f8;
    z-index: 10;
    p {
      padding: 14px 13px;
      font-size: 13px;
      &.shopCartNum {
        color: #999999;
        span {
          margin: 0 5px;
          color: #ed1731;
        }
      }
      &.edit-btn {
        font-size: 13px;
        color: #222222;
        &.isComplete {
          color: #ed1731;
        }
      }
    }
  }
  ul.shopCart-list {
    width: 100%;
    background: #ffffff;
    li.shopCart-item {
      padding: 0 12.5px;
    }
  }
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 50px;
    border-top: 1px solid #eaeaea;
    background: #fbfbfb;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 10;
    .all-select {
      display: flex;
      align-items: center;
      color: #242121;
      font-size: 14px;
      font-weight: bold;
      i.all-select-btn {
        @include bg-icon(17px);
        background: #f5f5f5;
        border: 1px solid #dddddd;
        border-radius: 50%;
        box-sizing: border-box;
        margin: auto 10px auto 12px;
        &.active {
          border: none;
          @include bg-img("myaddress_radio_1@2x.png");
          background-size: 100% 100%;
        }
      }
    }
    .operational {
      display: flex;
      align-items: center;
      .operation1 {
        display: flex;
        align-items: center;
        .total-price {
          display: inline-block;
          color: #242121;
          font-size: 14px;
          margin-right: 10px;
          font-weight: bold;
          span {
            color: #ed1731;
          }
        }
        button.settlement {
          display: inline-block;
          width: 90px;
          height: 34px;
          line-height: 34px;
          margin-right: 12px;
          background: #ed1731;
          color: #ffffff;
          font-size: 13px;
          font-weight: bold;
          text-align: center;
          border-radius: 5px;
        }
      }
      .operation2 {
        button {
          display: inline-block;
          width: 90px;
          height: 34px;
          line-height: 34px;
          margin-right: 10px;
          color: #ffffff;
          font-size: 13px;
          font-weight: bold;
          text-align: center;
          border-radius: 5px;
          &:last-of-type {
            margin-right: 12px;
          }
          &.collect {
            background: #212121;
          }
          &.delete {
            background: #ed1731;
          }
        }
      }
    }
  }
  // .white-blcok {
  //   height: 50px;
  // }
}
</style>
