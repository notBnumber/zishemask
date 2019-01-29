<script>
export default {
  onLaunch() {
    console.log("小程序初始化执行");
    let vm = this;
    wx.getSetting({      
      success(res) {
        if(!res.authSetting["scope.userInfo"]) {
          // 未授权, 则跳转至授权页
          vm.replaceTo('/pages/login/wxLogin');
        }else {
          wx.login({
            success(res) {
              console.log(res,'授权');
              
              wx.setStorageSync('code', res.code)
              // vm.$API.wxLogin({
              //   code: res.code
              // }).then(response => {
              //   wx.setStorageSync('sessionId', response.data.sessionId)
              //   wx.switchTab({url: '/pages/purchase/purchase'})
              // })
            }
          })
        }
      }
    })
  }
}
</script>

<style>

</style>
