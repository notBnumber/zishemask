<template>
  <!-- 收藏  -->
  <div class="collectionItem-component" >
    <i class="pic" :style="{backgroundImage: 'url('+infos.Itemcover+')'}" @click.stop="pageTo('/pages/sort/details',{id:infos.gID})"></i>
    <!-- :style="{backgroundImage: 'url('+message.Itemcover+')'}" -->
    <!-- <i class="pic" :style="{backgroundImage: 'url('+ +')'}"></i> -->
    <div class="box-rig" @click.stop="pageTo('/pages/sort/details',{id:infos.gID})">
      <div>{{infos.Title}}</div>
      <p>
        <span class="price">¥
          <i>{{infos.Price}}</i>
        </span>
        <i class="icon" @click.stop="toggleCollect(infos.gID)" :class="[isClose && 'active']"></i>
      </p>
    </div>

    <i-modal :visible="modal1" @ok.stop="handleClose(infos.gID)" @cancel.stop="modalClose('modal1')">
      <p class="title">确定取消收藏吗？</p>
    </i-modal>
    <i-toast id="toast" />
  </div>
</template>

<script>
import { modal } from "@/mixins/modal";

export default {
  mixins: [modal],
  data() {
    return {
      modal1: false,
      infos: {},
      gID:null,
      isClose:false
    };
  },
  props: {
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
    handleClose(gID) {
      console.log(this.isClose,'默认');
      
     console.log(gID);
      
      this.$API
        .Collection({
          i: 3,
          c: "entry",
          a: "wxapp",
          m: "mask",
          do: "Collection",
          gid: gID,
          uid: wx.getStorageSync("sessionId")
        })
        .then(res => {
          if (res.code == 1) {
            this.isClose = true;
            console.log(this.isClose,'kfkjg');
            
            this.$Toast({
              content: res.msg,
              type: "success"
            });
            this.$emit("del");
          } else {
            // this.$Toast({
            //   content: res.msg,
            //   type: "warning"
            // });
          }
        });
      // this.$emit("closeCollect", this.index);
      this.modalClose("modal1");
    },
    toggleCollect(gID) {
      this.gID = gID
      if (this.isClose) {
        this.$emit("closeCollect", this.index);
      } else {
        this.modalOpen("modal1");
      }
    }
  },
  created() {
    this.infos = this.info;
  },
  onUnload() {}
};
</script>

<style lang="scss" scoped>
@import "~@/assets/css/_mixin";
.collectionItem-component {
  background-color: #fff;
  padding: 12px 13px;
  border-bottom: 1px solid #eaeaea;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  &:last-child {
    border-bottom: 0;
  }
  i.pic {
    @include bg-icon(120px);
    border-radius: 5px;
    margin-right: 10px;
    background-size: cover;
  }
  .box-rig {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 120px;
    overflow: hidden;
    div {
      width: 100%;
      margin-top: 10px;
      font-size: 13px;
      font-family: PingFang-SC-Bold;
      font-weight: bold;
      color: #444444;
      text-align: justify;
      @include moreLine(2);
    }
    p {
      margin-bottom: 10px;
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
        // width: 20px;
        // height: 20px;
        // background-color: #ED1731;
        // border-radius: 25%;
        @include bg-icon(24px);
        background-image: url("~@/assets/img/spxq_icon_collect_pre@2x.png");
        &.active {
          background-image: url("~@/assets/img/spxq_icon_collect@2x.png");
        }
      }
    }
  }
}
</style>
