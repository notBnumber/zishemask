<template>
  <!-- 关于我们 -->
  <div class="about-template">
    <ul class="tabs">
      <li class="tab" v-for="(item, index) in tabs" :key="index"
                      :class="[tabActive === index && 'active']"
                      @click="setActive(index)">
        <em>{{item.title}}</em>
      </li>
      <span class="line" :style="{left: (4 + tabActive * 20) + '%'}"></span>
    </ul>
    <ul class="goods-list">
      <li class="goods-item" v-for="(item, index) in 10" :key="index">
        <goodsBlock></goodsBlock>
      </li>
    </ul>
  </div>
</template>

<script>
  import goodsBlock from '@/components/GoodsBlock'
  export default {
    components: {
      goodsBlock
    },
    data(){
      return {
        tabs: [
          {title: '精选', state: 0},
          {title: '运动', state: 1},
          {title: '数码', state: 2},
          {title: '家具', state: 3},
          {title: '女装', state: 4},
        ],
        tabActive: 0,
      }
    },
    methods: {
      setActive(index) {
        this.tabActive = index;
      }
    },
    mounted() {
      //do something after mounting vue instance

    },
    onReady() {
      //do something after mounting vue instance
      if(this.$route.query.tabIndex) {
        const tabIndex = this.$route.query.tabIndex
        this.setActive(tabIndex);
      }else {
        this.setActive(0);
      }
    }
  }
</script>

<style scoped lang='scss'>
@import "~@/assets/css/_mixin";
.about-template{
  width: 100%;
  ul.tabs {
    width: 100%;
    display: flex;
    align-items: center;
    background: #242121;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    li.tab {
      flex: 0 1 20%;
      overflow: hidden;
      &.active {
        em {
          color: #ED1731;
        }
      }
      em {
        padding: 17px 0 20px;
        color: #FFFFFF;
        font-size: 14px;
        font-weight: bold;
        text-align: center;
        position: relative;
        font-family:PingFang-SC-Bold;
      }
    }
    span.line {
      display: block;
      position: absolute;
      bottom: 8px;
      left: 4%;
      width: 12%;
      height: 4px;
      border-radius: 5px;
      margin: auto;
      background: #ED1731;
      transition: left .3s;
    }
  }
  ul.goods-list {
    padding: 0 13px;
    background: #FFFFFF;
    li.goods-item {
      width: 100%;
    }
  }
}
</style>
