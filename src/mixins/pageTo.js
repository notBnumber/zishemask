export var pageTo = {
  methods: {
    goBack() {
      this.$router.back(-1)
    },
    pageTo(url, params = {}) {
      this.$router.push({
        path: url,
        query: params
      })
    },
    replaceTo(url, params = {}) {
      this.$router.replace({
        path: url,
        query: params
      })
    },
    switchTab(url) {
      wx.switchTab({url})
    }
  }
}
