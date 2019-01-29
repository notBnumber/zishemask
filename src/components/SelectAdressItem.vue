<template>
  <div class="selectAdressItem-component">
    <i class="select-icon" @click="selected()" :class="[isSelected && 'active']"></i>
    <div class="address-body">
      <div class="connect">
        <span>收货人: 利达</span><span>186240132021</span>
      </div>
      <div class="address-info">
        收货地址：广东省广州市黄埔区天猫国际城110层10
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 1,
      isSelected: false
    }
  },
  props: {

  },
  methods: {
    selected() {
      this.isSelected = !this.isSelected;
    }
  },
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/css/_mixin";
    .selectAdressItem-component {
      margin: 12px 13px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      background: #ffffff;
      i.select-icon {
        @include icon(17px);
        background: #F5F5F5;
        border: 1px solid #DDDDDD;
        box-sizing: border-box;
        margin-left: 15px;
        &.active {
          border: none;
          @include bg-img("myaddress_radio_1@2x.png");
          background-size: 100% 100%;
        }
      }
      .address-body {
        padding: 10px 20px;
        .connect {
          width: 100%;
          display: flex;
          justify-content: space-between;
          color: #222222;
          font-weight: bold;
          font-size: 14px;
          line-height: 28px;
        }
        .address-info {
          width: 100%;
          @include moreLine(2);
          color: #222222;
          font-size: 13px;
          line-height: 26px;
          text-align: justify;
        }
      }
      i.more-icon {
        @include bg-icon(20px);
        background-image: url('~@/assets/img/qrdd_bg_more@2x.png');
        margin-right: 9px;
      }
    }

</style>
