<template>
  <!-- 我的地址 -->
  <div class="address-template">
    <div class="items" v-for="(item, index) in addList" :key="index" >
      <addressItem @modify='modify' :index='index' :itemList='item' @pop='pop'></addressItem>
    </div>
    <div class="addbtn" @click="pageTo('/pages/my/addAddress')">
      <div>添加</div>
    </div>
  </div>
</template>

<script>
import addressItem from "@/components/AddressItem";
export default {
  components: {
    addressItem
  },
  data() {
    return {
      addList: [],
      isDownRefresh: false
    };
  },
  methods: {
    modify(index) {
      for (var i = 0; i < this.addList.length; i++) {
        this.addList[i].isChoice = false;
      }
      this.addList[index].isChoice = true;
    },
    pop(index) {
      this.addList.splice(index, 1);
    },
    addressList() {
      // MyAddress
      this.$API
        .MyAddress({
          i: 2,
          c: "entry",
          a: "wxapp",
          m: "mask",
          do: "MyAddress",
          uid: wx.getStorageSync("sessionId")
        })
        .then(res => {
          console.log(res, "我的地址");
          if (res.code == 1) {
            this.addList = res.data;
          }
        });
    },
    isChange(id) {
      setTimeout(() => {
        this.goBack();
      }, 1000);
    }
  },
  onShow() {
    //do something after mounting vue instance
    this.addressList();
  },
  onPullDownRefresh() {
    console.log("开始刷新");
    // this.addressList();
  }
};
</script>

<style scoped lang='scss'>
@import "~@/assets/css/_mixin";
.address-template {
  width: 100%;
  min-height: 100vh;
  padding: 12px 13px 60px;
  box-sizing: border-box;
  .items {
    margin-bottom: 12px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .addbtn {
    padding: 10px 13px;
    box-sizing: border-box;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    div {
      width: 100%;
      height: 40px;
      line-height: 40px;
      text-align: center;
      font-size: 15px;
      font-family: PingFang-SC-Regular;
      font-weight: 400;
      color: #ffffff;
      background-color: #ed1731;
      border-radius: 5px;
    }
  }
}
</style>
