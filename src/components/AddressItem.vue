<template>
  <!-- 我的地址 -->
  <div class="min-template">
    <div class="box">
      <p class="receiving">
        <span>收货人：{{itemList.name}}</span>
        <span>{{itemList.phone}}</span>
      </p>
      <p class="addres">收货地址：{{itemList.detailadd}}</p>
      <p class="setting">
        <span v-show="itemList.is_default !=0" style="opacity:0">
          <!-- <i :class="[itemList.isChoice && 'active']" ></i>设为默认 -->
          默认地址
        </span>
        <span>
          <i @click="pageTo('/pages/my/editAddress',{value: JSON.stringify(itemList)})">编辑</i>
          <i @click="modalOpen('modal')">删除</i>
        </span>
      </p>
    </div>
    <i-modal :visible="modal" @ok="handleClose(itemList.aid)"  @cancel="modalClose('modal')">
      <p class="title">确认删除该收货地址吗？</p>
    </i-modal>
  </div>
</template>

<script>
  import { modal } from '@/mixins/modal'
  export default {
    mixins: [modal],
    props: {
      itemList:{
        type:Object,
        default: {}
      },
      index:{
        tyle: Number,
        default: 0
      }
    },
    data(){
      return {
        modal: false
      }
    },
    methods: {
      handleClose(id){
        this.modalClose('modal')
        this.$API.DelAdd({
          i: 2,
          c: "entry",
          a: "wxapp",
          m: "mask",
          do: "DelAdd",
          aid :id
        }).then((res)=>{
          if(res.code == 1){
            this.$emit('pop',this.index)
          }
        })
      },
      handdefa(){
        this.$emit('modify',this.index)
        // this.$API.editAddress({
        //   sessionId:wx.getStorageSync('sessionId'),
        //   id: this.itemList.id,
        //   isChoice: 1
        // }).then(res=>{
        //   console.log(res,'设置默认地址');
        //   if(res.code == 1){
        //     this.$emit('modify',this.index)
        //   }
        // })
      }
    },
    mounted() {
      //do something after mounting vue instance
      console.log(this.itemList,'djdjgu');
      

    }
  }
</script>

<style scoped lang='scss'>
@import "~@/assets/css/_mixin";
.min-template{
  width: 100%;
  .title{
    margin: 20px 0;
    font-size:15px;
    font-family:PingFang-SC-Bold;
    font-weight:bold;
    color:rgba(36,33,33,1);
  }
  .box{
    padding: 18px 13px 0;
    // margin-bottom: 12px;
    background-color: #FFF;
    border-radius:5px;
    .receiving{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 5px;
      span {
        font-size:14px;
        font-family:PingFang-SC-Bold;
        font-weight:bold;
        color:#222222;
      }
    }
    .addres{
      font-size:13px;
      font-family:PingFang-SC-Regular;
      font-weight:400;
      color:#222222;
      margin-bottom: 18px;
    }
    .setting{
      border-top: 1px solid #EAEAEA;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 0;
      span{
        display: flex;
        align-items: center;
        font-size:13px;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:#222222;
      }
      span:first-child{
        i{
          @include bg-icon(17px);
          background-image: url('~@/assets/img/myaddress_radio_2@2x.png');
          margin-right: 11px;
          &.active{
            background-image: url('~@/assets/img/myaddress_radio_1@2x.png');
          }
        }
      }
      span:last-child{
        i:last-child{
          margin-left: 15px;
          color: #ED1731;
        }
      }
    }
  }
}
</style>
