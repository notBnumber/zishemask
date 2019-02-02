<template>
  <!-- 我的销   template > div第一级需要div-->
  <div class="address-template">
    <div class="bodys">
      <div class="top">
        <div class="top_h">
          <label>￥2562.00</label>
        </div>
        <div class="top_m">
          <span @click="showtype">{{typemsg}}</span>

            <picker
                  mode="date"
                  value="date"
                  start="2015-09-01"
                  end="2020-09-01"
                  @change="bindDateChange">
              <span>{{date}}</span>
            </picker>

        </div>
        <div class="top_f">
          <span>
            <ul>
              <li>待结算</li>
              <li>￥50</li>
            </ul>
          </span>
          <span>
            <ul>
              <li>已结算</li>
              <li>￥500</li>
            </ul>
          </span>
        </div>
      </div>

      <div class="main">
        <ul>
          <li class="main_li" v-for="(item, index) in 10"  :key="index"  @click="pageTo('/pages/my/earningsdetail')">
            <span class="main_left">
              <ul>
                <li style="font-size: 12px;padding-bottom: 3px;">it小龙</li>
                <li>2019-01-29</li>
              </ul>
            </span>
            <span class="main_right">
              <span>已结算</span>
            </span>
            <span  class="main_footer">
              <img src="https://jin.itxiaolong.cn/icon/moreicon.png"/>
            </span>
          </li>
        </ul>
      </div>
    </div>
    <i-toast id="toast" />
  </div>
</template>

<script>
export default {

  data() {
    return {
      addList: [],
        tabActive: 0,
        isDownRefresh: false,
        typemsg:'全部',
        date:'2015-01-21'
    };
  },
    onShow(){
        this.init();
        console.log(this.getCurrentMonthFirst(),'当月第一天')
    },
    methods:{
        init(){
            this.date=this.getCurrentMonthFirst();
            this.typemsg='全部';
        },
      showtype(){
          let that=this;
          wx.showActionSheet({
              itemList: ['全部','直推奖励', '间推奖励', '红包发放'],
              success(res) {
                  console.log(res.tapIndex,'选中id')
                  switch (res.tapIndex){
                      case 0:
                          that.typemsg='全部'
                          break;
                      case 1:
                          that.typemsg='直推奖励'
                          break;
                      case 2:
                          that.typemsg='间推奖励'
                          break;
                      case 3:
                          that.typemsg='红包发放'
                          break;
                  }

//                  wx.showToast({
//                      title: '选择了' + res.tapIndex,
//                      duration: 1000
//                  })
              },
              fail(res) {
                  console.log(res.errMsg,'什么')
              }
          })
      },
        bindDateChange(e) {
            console.log('picker发送选择改变，携带值为', e.mp.detail.value)
            this.date= e.mp.detail.value
        },
        getCurrentMonthFirst(){
            var date = new Date();
            date.setDate(1);
            var month = parseInt(date.getMonth()+1);
            var day = date.getDate();
            if (month < 10) {
                month = '0' + month
            }
            if (day < 10) {
                day = '0' + day
            }
            return date.getFullYear() + '-' + month + '-' + day;
        }
    }

};
</script>

<style scoped lang='scss'>
  .bodys{
    width: 100%;
  }
  .top{
    width: 100%;
    height: 150px;
    background-color: #E9323C;
    align-items: center;
  }
.top_h{
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  label{
    color: white;
    font-size: 20px;
  }
}
.top_m{
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  span{
    border-radius: 20px;
    padding: 5px 20px;
    color: #E9323C;
    font-size: 15px;
    background-color: white;
    margin-left: 10px;
  }
}
.top_f{
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  ul{
    color: white;
    font-size: 15px;
    text-align: center;
    padding-bottom: 10px;
  }
  ul:first-child{
    padding-left: 60px;
  }
  ul:last-child{
    padding-right: 50px;
  }
}
  .main_li{
    border-radius: 15px;
    padding: 10px 5px;
    background-color: white;
    margin-top: 10px;
    img{
      width: 75px;
      height: 75px;
      border-radius: 50%;
    }
  }
  .main li:first-child .main_right{
    span{
      background-color: #484B86;
      color: white;
    }

  }
  .ischose{
    border-bottom: 2px #E9323C solid;
    color:#E9323C ;
  }
  .main_left{
    display: flex;
    align-items: center;
    margin-left: 18px;
  }
  .main_footer{
    position: absolute;
    right: 35px;
    padding-top: 8px;
    img{
      width: 12px;
      height: 12px;
    }
  }
  .main_left li:last-child{
    color: #B1ADAA;
    font-size: 12px;
  }
  .li_main{
    color: #898989;
    font-size: 15px;
  }
  .main_right{
    display: flex;
    align-items: center;
    justify-content: center;
    span{
      position: absolute;
      right: 80px;
      background-color: #F0F0F0;
      border-radius: 15px;
      font-size: 13px;
      color: #4D4D4D;
      padding: 5px 15px;
    }
  }
  .main{
    width: 90%;
    height: 100%;
    padding: 8px;
    margin-left: 15px;
    ul li{
      display: flex;
    }

  }
</style>
