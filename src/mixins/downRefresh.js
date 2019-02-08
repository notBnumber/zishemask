export const downRefresh = {
  data() {
    return {
      isDownRefresh: false,
      timer: null,
      isFixedSearch: false,
      pageNumber: 1,
      pageSize: 5
    }
  },
  onPageScroll(e) {
    if(e.scrollTop > 0 ) {
      this.isFixedSearch = true
    }else {
      this.isFixedSearch = false
    }
  },
  // onPullDownRefresh() {
  //   let vm = this;
  //   this.isDownRefresh = true;
  //   console.log("开始刷新");
  //   this.timer = setTimeout(() => {
  //     wx.stopPullDownRefresh({
  //       success() {
  //         console.log("结束刷新");
  //         vm.isDownRefresh = false;
  //       }
  //     })
  //     clearTimeout(vm.timer);
  //   }, 2500)
  // },
  onReachBottom() {
    console.log("触底事件触发",this.page);
    this.page++
    this.inits();
    console.log(this.page,'刷新');
    
  }
}
