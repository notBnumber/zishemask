<template>
<div class="goodsBlock-component" @click="pageTo('/pages/sort/details',{id:message.gID})">
  <div class="goods-image" :style="{backgroundImage: 'url('+message.Itemcover+')'}"></div>
  <div class="goods-info">
    <p class="name">{{message.Title}}</p>
    <ul class="service-list">
      <li class="service-item return">{{message.integral}}</li>
      <li class="service-item return">{{message.TotalQty}}</li>
      <!-- <li class="service-item return"></li> -->
    </ul>
    <div class="content">
      <div class="price">
        <span class="after-price">¥<em>{{message.price}}</em></span>
        <span class="original-price">¥{{message.OriPrice}}</span>
      </div>
      <!-- <p class="sellNum">{{message.Price}}条评价</p> -->
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  props: {
    message:{}
  },
  methods: {

  },
  mounted () {
    console.log(this.message);
    
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/css/_mixin";
  .goodsBlock-component {
    width: 100%;
    padding: 12px 0;
    display: flex;
    border-bottom: 1px solid #EAEAEA;
    .goods-image {
      width: 120px;
      height: 120px;
      border-radius: 5px;
      @include bg;
      margin-right: 10px;
    }
    .goods-info {
      flex: 1;
      overflow: hidden;
      background: #FFFFFF;
      display: flex;
      flex-wrap: wrap;
      align-items: flex-end;
      p.name {
        min-height: 40px;
        text-align: justify;
        color: #444444;
        font-size: 13px;
        line-height: 20px;
        @include moreLine(2);
      }
      ul.service-list {
        width: 100%;
        li.service-item {
          display: inline-block;
          border-radius: 3px;
          padding: 2px 6px;
          margin-right: 7px;
          margin-bottom: 7px;
          &.shipping {
            color: #444444;
            font-size: 10px;
            border: 1px solid #444444;
          }
          &.return {
            color: #ED1731;
            font-size: 10px;
            border: 1px solid #ED1731;
          }
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
          span.after-price {
            color: #ED1731;
            font-size: 15px;
            margin-right: 10px;
            em {
              display: inline-block;
              font-size: 20px;
              font-weight: bold;
            }
          }
          span.original-price {
            color: #999999;
            font-size: 12px;
            text-decoration: line-through;
          }
        }
        p.sellNum {
          color: #999999;
          font-size: 12px;
        }
      }
    }
  }

</style>
