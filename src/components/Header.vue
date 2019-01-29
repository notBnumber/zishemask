<template>
<div class="header-component">
  <div class="header-main"
      :style="{height, backgroundColor}">
    <div class="main"
        :style="{marginTop: statusBarHeight + 'px', backgroundColor, color}">
      {{title}}
      <div class="back-btn" v-if="isBack">
        <i class="back-icon"
          @click="goBack()">
        </i>
      </div>
    </div>
  </div>
  <div class="white-block" :style="{height}"></div>
</div>
</template>

<script>
export default {
  data() {
    return {
      height: '',
      statusBarHeight: 0
    }
  },
  props: {
    backgroundColor: {
      type: String,
      default: "#FFFFFF"
    },
    title: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "#222222"
    },
    isBack: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    getSystemInfo() {
      const res = wx.getSystemInfoSync()
      this.statusBarHeight = res.statusBarHeight
      this.height = this.statusBarHeight + 45 +　'px';
    },
    pushHeight() {
      this.$emit("pushHeight", this.statusBarHeight + 45)
    }
  },
  created() {
    this.getSystemInfo()
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/css/_mixin";
  .header-component {
    width: 100%;
    .header-main {
      width: 100%;
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      z-index: 10;
      .main {
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 17px;
        font-weight: bold;
        color: #222222;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        .back-btn {
          height: 100%;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          padding-left: 15px;
          display: flex;
          align-items: center;
        }
        i.back-icon {
          @include bg-icon(24px);
          margin: auto 0;
          background-image: url("~@/assets/img/nav_icon_back@2x.png");
        }
      }
    }
    .white-block {
      width: 100%;
      background: transparent;
    }
  }

</style>
