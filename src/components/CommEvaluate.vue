<template>
  <!-- 评价 -->
  <div class="comm-template">
    <div class="box-bot">
      <div class="box-item">
        <span> <i :style="{backgroundImage: 'url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547111114003&di=9927b361668028a216cdd930765c45d1&imgtype=0&src=http%3A%2F%2Fwww.zmdtvw.cn%2Fd%2Ffile%2Fp%2F2019%2F01%2F04%2F5fd85da05d3f3c50e03b9828f95ea39c.jpeg)'}"></i> 强人所难</span>
        <p>
        <i-rate
          :value="5"
          size="20">
        </i-rate></p>
      </div>
      <p class="box-code">2018-07-02 <em>金色，42码 </em></p>
      <p class="box-tit">等发售等了好久了！！抢到了第一批货！！真的太好看了！！金色的真的超级酷！</p>
      <div class="box-img">
        <i v-for="(item, index) in boxImage" :key="index" :style="{backgroundImage: 'url('+ item +')'}"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {

  },
  data() {
    return {
      boxImage:[
        'http://t2.hddhhn.com/uploads/tu/201812/661/3.jpg',
        'http://t2.hddhhn.com/uploads/tu/201812/661/4.jpg',
        'http://t2.hddhhn.com/uploads/tu/201812/661/6.jpg'
      ],
    }
  },
  props: {

  },
  methods: {
  },
  onReady() {

  },
  onUnload() {
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/css/_mixin";
  .comm-template {
    .box-bot{
      padding: 18px 0;
      .box-item{
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        // align-items: center;
        span{
          display: flex;
          align-items: center;
          font-size:13px;
          font-family:PingFang-SC-Regular;
          font-weight:400;
          color:#888888;
          i{
            margin-right: 9px;
            @include bg-icon(30px);
            background-size: cover;
            border-radius: 50%;
          }
        }
      }
      p.box-code{
        font-size:13px;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:#888888;
        margin-bottom: 10px;
        em{
          margin-left: 10px;
          display: inline-block;
        }
      }
      p.box-tit{
        font-size:13px;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:#000000;
        text-align: justify;
      }
      .box-img{
        display: flex;
        margin-top: 20px;
        justify-content: space-around;
        i{
          @include bg-icon(105px)
          background-size: cover;
        }
      }
    }
  }

</style>
