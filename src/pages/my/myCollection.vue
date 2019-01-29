<template>
  <!-- 我的收藏 -->
  <div class="collection-template">
    <div v-if="itemsList.length > 0">
      <div class="box" v-for="(item, index) in itemsList" :key="index">
        <collectionItem :info="item" :index="index" @closeCollect="closeCollect" :isClose="isCloseArr[index]"></collectionItem>
      </div>
    </div>
    <div class="show" v-else>
      没有收藏的商品哦~~~~~
    </div>   
    <!-- <i-toast id="toast" />  -->
  </div>
  
</template>

<script>
import collectionItem from "@/components/CollectionItem";

export default {
  data() {
    return {
      actions: [
        {
          name: "删除",
          color: "#fff",
          fontsize: "20",
          width: 100,
          background: "#ed3f14"
        }
      ],
      itemsList: [],
      pageNumber: 1,
      modal: false,
      goodsId: 0,
      isCloseArr: []
    };
  },
  components: {
    collectionItem
  },
  methods: {
    // 删除收藏
    del(id) {
      this.$API
        .Collection({
          i: 8,
          c: "entry",
          a: "wxapp",
          m: "mask",
          do: "Collection",
          gid: id,
          uid: wx.getStorageSync("sessionId")
        })
        .then(res => {
          if (res.code == 1) {
            this.$Toast({
              content: "取消收藏成功",
              type: "success"
            });
          } else {
            this.$Toast({
              content: "取消收藏失败",
              type: "warning"
            });
          }
        });
    },
    isshow(id) {
      this.modal = true;
      this.goodsId = id;
    },
    closeCollect(index) {
      if (this.isCloseArr[index]) {
        this.$set(this.isCloseArr, index, false);
      } else {
        this.$set(this.isCloseArr, index, true);
      }
    },
    getList() {
      this.$API
        .Getcollection({
          i: 8,
          c: "entry",
          a: "wxapp",
          m: "mask",
          do: "Getcollection",
          uid: wx.getStorageSync("sessionId")
        })
        .then(res => {
          console.log(res, "我的收藏");
          if (res.code == 1) {
            this.itemsList = res.data;
          }
        });
    },
    handleClose(index) {
      // this.$API.collection({
      //   sessionId: wx.getStorageSync('sessionId'),
      //   goodsId: this.goodsId
      // }).then(res=>{
      //   console.log(res,'取消收藏');
      //   this.modal = false;
      // })
      this.modal = false;
      this.isClose = true;
    }
  },
  onLoad() {
    this.itemsList.forEach((item, index) => {
      this.isCloseArr[index] = false;
    });
  },
  onShow() {
    this.getList();
    console.log(this.$API.BASE_URL);
  }
};
</script>

<style scoped lang='scss'>
@import "~@/assets/css/_mixin";
.collection-template {
  width: 100%;
  min-height: 100vh;
  background-color: #f8f8f8;
  .show {
    padding-top: 100px;
    text-align: center;
  }
  .zxc {
    display: flex;
    justify-content: space-between;
  }
  .box {
    width: 100%;
  }
}
</style>
