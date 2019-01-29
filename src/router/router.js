module.exports = [
  // 首页
  {
    path: "pages/home/index",
    config: {
      "navigationBarTitleText": "首页",
      "usingComponents": {
        "i-toast": "/iView/toast/index"
      }
    }
  },
  {
    path: "pages/home/goodsList",
    config: {
      "navigationBarTitleText": "商品列表",
      "usingComponents": {
        "i-toast": "/iView/toast/index"
      }
    }
  },
  // 登录
  {
    path: "pages/login/login",
    config: {
      "enablePullDownRefresh": false,
      "navigationBarTitleText": "登录",
      "usingComponents": {
        "i-toast": "/iView/toast/index"
      }
    }
  },
  // 搜素初始页
  {
    path: "pages/home/search_init",
    config: {
      "navigationBarTitleText": "搜索",
      "usingComponents": {
        "i-toast": "/iView/toast/index"
      }
    }
  },
  // 搜素结果页
  {
    path: "pages/home/search_result",
    config: {
      "navigationBarTitleText": "搜索",
      "usingComponents": {
        "i-toast": "/iView/toast/index"
      }
    }
  },
  //每日推荐
  {
    path: "pages/home/everyDay",
    config: {
      "navigationBarTitleText": "每日促销",
      "navigationBarBackgroundColor": "#242121",
      "navigationBarTextStyle": "white"
    }
  },
  {
    path: "pages/login/wxLogin",
    config: {
      "usingComponents": {
        "i-button": "/iView/button/index",
        "i-toast": "/iView/toast/index"
      }
    }
  },
  // 隐私政策
  {
    path: "pages/login/Privacy",
    config: {
      "enablePullDownRefresh": false
    }
  },
  // 服务协议
  {
    path: "pages/login/agreement",
    config: {
      "enablePullDownRefresh": false
    }
  },
  // 忘记密码
  {
    path: "pages/login/forget",
    config: {
      "enablePullDownRefresh": false
    }
  },
  // 绑定手机
  {
    path: "pages/login/bindphone",
    config: {
      "enablePullDownRefresh": false
    }
  },
  // 验证码登录
  {
    path: "pages/login/codeLogin",
    config: {
      "enablePullDownRefresh": false
    }
  },
  // 注册
  {
    path: "pages/login/register",
    config: {
      "enablePullDownRefresh": false
    }
  },

  // 分类
  {
    path: "pages/sort/index",
    config: {
      "navigationBarTitleText": "分类",
      "enablePullDownRefresh": false,
      "disableScroll": true,
      "usingComponents": {
        "i-toast": "/iView/toast/index"
      }
    }
  },
  // 商品详情
  {
    path: "pages/sort/details",
    config: {
      "navigationBarTitleText": "商品详情",
      "enablePullDownRefresh": false,
      "usingComponents": {
        "i-toast": "/iView/toast/index",
        "i-action-sheet": "/iView/action-sheet/index",
        "i-rate": "/iView/rate/index"
      }
    }
  },

  // 购物车
  {
    path: "pages/shopCart/index",
    config: {
      "navigationBarTitleText": "购物车",
      "usingComponents": {
        "i-toast": "/iView/toast/index",
        "i-action-sheet": "/iView/action-sheet/index",
      }
    }
  },
  // 确认订单
  {
    path: "pages/shopCart/confirmOrder",
    config: {
      "navigationBarTitleText": "确认订单",
      "enablePullDownRefresh": false
    }
  },
  {
    path: "pages/shopCart/selectAddress",
    config: {
      "navigationBarTitleText": "选择地址",
      "enablePullDownRefresh": false
    }
  },
  {
    path: "pages/shopCart/payResult",
    config: {
      "navigationBarTitleText": "支付结果",
      "enablePullDownRefresh": false
    }
  },
  {
    path: "pages/shopCart/selectPay",
    config: {
      "navigationBarTitleText": "选择支付",
      "enablePullDownRefresh": false
    }
  },
  // 我的
  {
    path: "pages/my/index",
    config: {
      "navigationBarTitleText": "个人中心",
      "navigationBarTextStyle": "white",
      "navigationBarBackgroundColor": "#242121",
      "disableScroll": true,
      "enablePullDownRefresh": false,
      "usingComponents": {
        "i-modal": "/iView/modal/index",
      }
    }
  },
  // 设置Agreement
  {
    path: "pages/my/setting",
    config: {
      "navigationBarTitleText": "设置",
      "enablePullDownRefresh": false,
      "usingComponents": {
        "i-button": "/iView/button/index"
      }
    }
  },
  {
    path: "pages/my/helpCenter",
    config: {
      "enablePullDownRefresh": false,
      "navigationBarTitleText": "帮助中心"
    }
  },
  {
    path: "pages/my/Agreement",
    config: {
      "enablePullDownRefresh": false,
      "navigationBarTitleText": "服务协议"
    }
  },
  {
    path: "pages/my/aboutUser",
    config: {
      "enablePullDownRefresh": false,
      "navigationBarTitleText": "关于我们"
    }
  },
  // 更改绑定
  {
    path: "pages/my/setphone",
    config: {
      "enablePullDownRefresh": false
    }
  },
  {
    path: "pages/my/mydata",
    config: {
      "navigationBarTitleText": "我的资料"
    }
  },
  {
    path: "pages/my/changename",
    config: {
      "enablePullDownRefresh": false,
      "navigationBarTitleText": "编辑昵称"
    }
  },
  {
    path: "pages/my/noticeCenter",
    config: {
      "navigationBarTitleText": "通知中心"
    }
  },
  {
    path: "pages/my/noticedetail",
    config: {
      "enablePullDownRefresh": false,
      "navigationBarTitleText": "通知详情"
    }
  },
  {
    path: "pages/my/myAddress",
    config: {
      "navigationBarTitleText": "我的地址",
      "usingComponents": {
        "i-modal": "/iView/modal/index",
      }
    }
  },
  {
    path: "pages/my/editAddress",
    config: {
      "enablePullDownRefresh": false,
      "navigationBarTitleText": "编辑地址",
      "usingComponents": {
        "i-toast": "/iView/toast/index",
        "i-switch": "/iView/switch/index"
      }
    }
  },
  {
    path: "pages/my/addAddress",
    config: {
      "enablePullDownRefresh": false,
      "navigationBarTitleText": "添加地址",
      "usingComponents": {
        "i-toast": "/iView/toast/index",
        "i-switch": "/iView/switch/index"
      }
    }
  },
  {
    path: "pages/my/myCollection",
    config: {
      "navigationBarTitleText": "我的收藏",
      "usingComponents": {
        "i-modal": "/iView/modal/index",
        "i-swipeout": "/iView/swipeout/index",
        "i-toast": "/iView/toast/index",
      }
    }
  },
  {
    path: "pages/my/pyramid",
    config: {
      "navigationBarTitleText": "我的分销",
        "navigationBarTextStyle": "white",
        "navigationBarBackgroundColor": "#E9323C",
      "usingComponents": {
        "i-modal": "/iView/modal/index",
        "i-swipeout": "/iView/swipeout/index",
        "i-toast": "/iView/toast/index",
      }
    }
  },
    {
        path: "pages/my/teamdetail",
        config: {
            "navigationBarTitleText": "我的团队",
            "navigationBarTextStyle": "white",
            "navigationBarBackgroundColor": "#E9323C",
            "usingComponents": {
                "i-modal": "/iView/modal/index",
                "i-swipeout": "/iView/swipeout/index",
                "i-toast": "/iView/toast/index",
            }
        }
    },
    {
        path: "pages/my/teaminfo",
        config: {
            "navigationBarTitleText": "队员信息",
            "navigationBarTextStyle": "white",
            "navigationBarBackgroundColor": "#E9323C",
            "usingComponents": {
                "i-modal": "/iView/modal/index",
                "i-swipeout": "/iView/swipeout/index",
                "i-toast": "/iView/toast/index",
            }
        }
    },
  {
    path: "pages/my/power",
    config: {
      "navigationBarTitleText": "我的特权",
      "usingComponents": {
        "i-modal": "/iView/modal/index",
        "i-swipeout": "/iView/swipeout/index",
        "i-toast": "/iView/toast/index",
      }
    }
  },
  {
    path: "pages/my/orderCenter",
    config: {
      "navigationBarTitleText": "我的订单",
      "usingComponents": {
        "i-toast": "/iView/toast/index"
      }
    }
  },
  {
    path: "pages/my/orderAfterSale",
    config: {
      "navigationBarTitleText": "退款/售后",
      "usingComponents": {
        "i-toast": "/iView/toast/index"
      }
    }
  },
  {
    path: "pages/my/orderDetail",
    config: {
      "navigationBarTitleText": "订单详情",
      "enablePullDownRefresh": false,
      "usingComponents": {
        "i-toast": "/iView/toast/index"
      }
    }
  },
  {
    path: "pages/my/afterSaleDetail",
    config: {
      "navigationBarTitleText": "售后详情",
      "enablePullDownRefresh": false,
      "usingComponents": {
        "i-toast": "/iView/toast/index"
      }
    }
  },
  //
  {
    path: "pages/my/myEvaluate",
    config: {
      "navigationBarTitleText": "我的足迹",
      "usingComponents": {
        "i-rate": "/iView/rate/index"
      }
    }
  },
  {
    path: "pages/my/publishEvaluate",
    config: {
      "navigationBarTitleText": "发表评价",
      "enablePullDownRefresh": false,
      "usingComponents": {
        "i-rate": "/iView/rate/index"
      }
    }
  },
  {
    path: "pages/my/selectAfterSale",
    config: {
      "enablePullDownRefresh": false,
      "navigationBarTitleText": "选择售后商品"
    }
  },
  {
    path: "pages/my/submitAfterSale",
    config: {
      "enablePullDownRefresh": false,
      "navigationBarTitleText": "退货"
    }
  },
  {
    path: "pages/my/evaluateSuccess",
    config: {
      "enablePullDownRefresh": false,
      "navigationBarTitleText": "评论成功"
    }
  },
  {
    path: "pages/my/allEvaluate",
    config: {
      "navigationBarTitleText": "商品评价",
      "usingComponents": {
        "i-rate": "/iView/rate/index"
      }
    }
  },
]
