<template>
  <div>
    <i-spin fix v-if="spinShow"></i-spin>
    <painter :customStyle="customStyle" @imgOK="onImgOk" :palette="template" :dirty="true" />
    <button class="savebt" @click="save">保存</button>
  </div>
</template>

<script>
import Card from "../../palette/card";
const card = new Card();
const userInfo = {
  avatar:
    "https://wx.qlogo.cn/mmopen/vi_32/171rpAQ2g2v0MV7WIcp7edYibXEcIjicpZNUgJ28ib5kQyD4mjLt7mr55y1tEB9z2KMWBqicYCwaCv29ErnJGFmVgQ/132",
  nickname: "",
  myqrcode: ""
};

const template = card.do(userInfo);
const customStyle = "margin:0 auto;";

export default {
  data() {
    return {
      spinShow: true,
      shareImg: "",
      customStyle: customStyle,
      template: template,
      info:userInfo,
      cards:card
    };
  },
  methods: {
    save() {
      wx.saveImageToPhotosAlbum({
        filePath: this.shareImg,
        success: res => {
          wx.showModal({
            title: "专属海报已保存到系统相册",
            content: "快去分享给朋友，让更多的朋友发现这里的美好",
            success: res => console.log(res),
            error: err => console.log(err)
          });
        },
        fail: err => {
          console.log(err);
        }
      });
      console.log("on save click");
    },
    onUnload() {
      console.log("onUnload");
      this.spinShow = true;
    },
    onHide() {
      console.log("onhide");
      this.spinShow = true;
    },
    onImgOk(e) {
      this.shareImg = e.mp.detail.path;
      this.spinShow = false;
      // 两种路径是一样的
      console.log(e.mp.detail.path);
      console.log(e.target.path);
    },
    getData() {
      this.$API
        .Qrcodeinfo({
          i: 2,
          c: "entry",
          a: "wxapp",
          m: "mask",
          do: "Qrcodeinfo",
          uid: wx.getStorageSync("sessionId")
        })
        .then(res => {
          console.log(res, "请求验证码");
          if (res.code == 1) {
            this.info.avatar = res.data.headerimg
            this.info.nickname = res.data.nickname
            this.info.myqrcode = res.data.img
            console.log(this.template,'才');
            this.template = this.cards.do(this.info)

            
          }
        });
    }
  },
  onShow() {
    this.getData()
    // console.log(this.info,'jjjj');
    
  }
};
</script>
<style scoped lang="scss">
.savebt {
  margin: 10px auto;
  width: 90%;
  display: flex;
  justify-content: center;
  background-color: #ffe873;
  padding: 5px 50px;
  text-align: center;
  border-radius: 5px;
}
</style>