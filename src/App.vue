<script>
export default {
  onLaunch() {
    console.log("小程序初始化执行");
    let vm = this;
    // wx.getSetting({
    //   success(res) {
    //     console.log(res,'扫码');
        
    //     if (!res.authSetting["scope.userInfo"] ) {
    //       // 未授权, 则跳转至授权页
    //       vm.replaceTo("/pages/login/wxLogin");
    //     } else {
    //       wx.login({
    //         success(res) {
    //           console.log(res, "授权");

    //           wx.setStorageSync("code", res.code);
    //           // vm.$API.wxLogin({
    //           //   code: res.code
    //           // }).then(response => {
    //           //   wx.setStorageSync('sessionId', response.data.sessionId)
    //           //   wx.switchTab({url: '/pages/purchase/purchase'})
    //           // })
    //         }
    //       });
    //       // 判断是否登录

    //       if (wx.getStorageSync('is') == '') {
    //         vm.replaceTo("/pages/login/login");
    //       }
    //     }
    //   }
    // });
    console.log(wx.getStorageSync('sessionId'),'叽叽叽叽???');
    //if(wx.getStorageSync('sessionId') ==''||wx.getStorageSync("is") == "") {
    if(wx.getStorageSync('sessionId') =='') {
     vm.replaceTo("/pages/login/wxLogin");
      console.log('去登录');
    }
  },
  
  // onShareAppMessage: function(ops) {
  //   if (ops.from === "button") {
  //     // 来自页面内转发按钮
  //     console.log(ops.target);
  //   }
  //   return {
  //     title: "紫色魁影",
  //     path: "pages/home/index",
  //     success: function(res) {
  //       // 转发成功
  //       console.log("转发成功:" + JSON.stringify(res));
  //     },
  //     fail: function(res) {
  //       // 转发失败
  //       console.log("转发失败:" + JSON.stringify(res));
  //     }
  //   };
  // }
};
</script>

<style>
</style>
