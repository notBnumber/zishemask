<template>
  <!-- 我的销   template > div第一级需要div-->
  <div class="address-template">
    <div class="bodys">

      <div class="main">
        <div class="main_title">
          <div class="birthday">
            <picker mode="date" value="date" @change="bindDateChange">
              <span>{{mydate}}</span>
            </picker>
          </div>
        </div>
        <ul class="fuck">
          <li class="main_li" v-for="(item, index) in info" :key="index">
            <span class="main_right">
              <ul>
                <li class="liOne">{{item.rbuyername}}</li>
                <li>{{item.raddtime}}</li>
              </ul>
            </span>
            <span class="main_footer">
              +{{item.rmoney}}
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
      mydate:'',
      nn:'',
      info:[]
    };
  },
  methods: {
    bindDateChange(e) {
      console.log("日期携带值为", e.mp.detail.value);
      var birthday = e.mp.detail.value;
      var str = birthday.split('-')
      this.mydate = e.mp.detail.value;
      this.init()
    },
    setActive(index) {
      console.log(index, "选择");

      this.tabActive = index;
      //            this.$Toast({
      //                content: "选中"+index,
      //                type: "warning"
      //            });
    },
    init() {
      this.$API
        .Getwithdrawal({
          i: 2,
          c: "entry",
          a: "wxapp",
          m: "mask",
          do: "Getwithdrawal",
          uid: wx.getStorageSync("sessionId"),
          dates: this.mydate
        })
        .then(res => {
          if (res.code == 1) {
            this.info = res.data;
            console.log(this.info);
            
          } else {
          }
        });
    }
  },
  onShow() {
    var date=new Date;
 var year=date.getFullYear(); 
 var month=date.getMonth()+1;
  var day = date.getDate();   
 month =(month<10 ? "0"+month:month); 
  day =(day<10 ? "0"+day:day); 
  this.mydate = (year.toString()+'-'+month.toString()+'-'+day.toString());
  this.init()
  }
};
</script>

<style scoped lang='scss'>
.bodys {
  width: 100%;
}
.main_title {
  height: 40px;
  line-height: 40px;
}
.fuck {
  margin-top: 15px;
}
.top {
  width: 100%;
  height: 50px;
  background-color: #e9323c;
  display: flex;
  justify-content: center;
  line-height: 50px;
  align-items: center;
  input {
    background-color: white;
    width: 80%;
    border-radius: 15px;
    font-size: 12px;
    padding-left: 15px;
  }
}
.title {
  width: 90%;
  height: 70px;
  display: flex;
  font-size: 13px;
  align-content: space-around;
}
.title_left,
.title_right {
  width: 45%;
  text-align: center;
  margin-left: 25px;

  margin-bottom: 5px;
  ul li {
    margin-top: 8px;
  }
}
.main_li {
  border-radius: 15px;
  padding: 5px;
  background-color: white;
  margin-top: 10px;
  // height: 50px;
}
.ischose {
  border-bottom: 2px #e9323c solid;
  color: #e9323c;
}
.main_right {
  display: flex;
  align-items: center;
  margin-left: 18px;
}
.main_footer {
  padding-top: 8px;
  position: absolute;
  right: 35px;
  font-size: 14px;
  color: #e9323c;
}
.main_right li:last-child {
  color: #b1adaa;
  font-size: 12px;
}
.li_main {
  color: #898989;
  font-size: 15px;
}
.main {
  width: 90%;
  height: 100%;
  padding: 8px;
  margin-left: 15px;
  ul li {
    display: flex;
  }
}
.liOne {
  font-size: 14px;
  color: #898989;
}
</style>
