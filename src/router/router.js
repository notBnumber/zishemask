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
    path: "pages/login/hua",
    config: {
      "navigationBarTitleText": "生成海报",
      "usingComponents": {
        "i-toast": "/iView/toast/index",
        'painter': '/static/Painter/painter',
        "i-spin": "/iView/spin/index",
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
      "enablePullDownRefresh": false,
      "usingComponents": {
        "i-toast": "/iView/toast/index"
      }
    }
  },
  {
    path: "pages/login/forgetpwd",
    config: {
      "enablePullDownRefresh": false,
      "usingComponents": {
        "i-toast": "/iView/toast/index"
      }
    }
  },
  {
    path: "pages/login/shenqingtixian",
    config: {
      "enablePullDownRefresh": false,
      "usingComponents": {
        "i-toast": "/iView/toast/index"
      }
    }
  },
  {
    path: "pages/login/editzhifupwd",
    config: {
      "enablePullDownRefresh": false,
      "usingComponents": {
        "i-toast": "/iView/toast/index"
      }
    }
  },
  {
    path: "pages/login/newzhifupwd",
    config: {
      "enablePullDownRefresh": false,
      "usingComponents": {
        "i-toast": "/iView/toast/index"
      }
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
      "enablePullDownRefresh": false,
      "usingComponents": {
        "i-toast": "/iView/toast/index"
      }
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
      "enablePullDownRefresh": false,
        "usingComponents": {
            "i-toast": "/iView/toast/index",
        }
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
      "enablePullDownRefresh": false,
      "usingComponents": {
        "i-toast": "/iView/toast/index",
    }
    }
  },
  // 我的
  {
    path: "pages/my/index",
    config: {
      "navigationBarTitleText": "个人中心",
      "navigationBarTextStyle": "white",
      "navigationBarBackgroundColor": "#ED555F",
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
    path: "pages/my/userinfo",
    config: {
      "navigationBarTitleText": "个人信息",
      "usingComponents": {
        "i-modal": "/iView/modal/index",
        "i-swipeout": "/iView/swipeout/index",
        "i-toast": "/iView/toast/index",
        "i-input": "/iView/input/index",
        "i-radio": "/iView/radio/index",
        "i-panel": "/iView/panel/index",
        "i-radio-group": "/iView/radio-group/index",
      }
    }
  },
  {
    path: "pages/my/editmoneycard",
    config: {
      "navigationBarTitleText": "账号绑定",
      "usingComponents": {
        "i-modal": "/iView/modal/index",
        "i-swipeout": "/iView/swipeout/index",
        "i-toast": "/iView/toast/index",
        "i-input": "/iView/input/index",
        "i-radio": "/iView/radio/index",
        "i-panel": "/iView/panel/index",
        "i-radio-group": "/iView/radio-group/index",
      }
    }
  },
  {
    path: "pages/my/getMoney",
    config: {
      "navigationBarTitleText": "提现",
      "usingComponents": {
        "i-modal": "/iView/modal/index",
        "i-swipeout": "/iView/swipeout/index",
        "i-toast": "/iView/toast/index",
        "i-input": "/iView/input/index",
        "i-radio": "/iView/radio/index",
        "i-panel": "/iView/panel/index",
        "i-radio-group": "/iView/radio-group/index",
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
    path: "pages/my/myMoney",
    config: {
      "navigationBarTitleText": "我的资产",
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
    path: "pages/my/setpsw",
    config: {
      "navigationBarTitleText": "设置密码",
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
    path: "pages/my/setpsws",
    config: {
      "navigationBarTitleText": "确认密码",
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
    path: "pages/my/newsetpsw",
    config: {
      "navigationBarTitleText": "修改密码",
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
    path: "pages/my/vipcard",
    config: {
      "navigationBarTitleText": "会员卡",
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
    path: "pages/my/dayday",
    config: {
      "navigationBarTitleText": "签到",
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
    path: "pages/my/changepwd",
    config: {
      "navigationBarTitleText": "设置密码",
      "navigationBarTextStyle": "white",
      "navigationBarBackgroundColor": "#E9323C",
      "usingComponents": {
        "i-modal": "/iView/modal/index",
        "i-swipeout": "/iView/swipeout/index",
        "i-toast": "/iView/toast/index"
      }
    }
  },
  {
    path: "pages/my/shenqing",
    config: {
      "navigationBarTitleText": "申请资料",
      "navigationBarTextStyle": "white",
      "navigationBarBackgroundColor": "#E9323C",
      "usingComponents": {
        "i-modal": "/iView/modal/index",
        "i-swipeout": "/iView/swipeout/index",
        "i-toast": "/iView/toast/index",
        "i-input": "/iView/input/index",
        "i-radio": "/iView/radio/index",
        "i-panel": "/iView/panel/index",
        "i-radio-group": "/iView/radio-group/index",
        "i-checkbox-group": "/iView/checkbox-group/index",
        "i-checkbox": "/iView/checkbox/index"
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
    path: "pages/my/mynote",
    config: {
      "navigationBarTitleText": "消费记录",
      "usingComponents": {
        "i-modal": "/iView/modal/index",
        "i-swipeout": "/iView/swipeout/index",
        "i-toast": "/iView/toast/index",
      }
    }
  },
  {
    path: "pages/my/getMoneyNote",
    config: {
      "navigationBarTitleText": "提现记录",
      "usingComponents": {
        "i-modal": "/iView/modal/index",
        "i-swipeout": "/iView/swipeout/index",
        "i-toast": "/iView/toast/index",
      }
    }
  },
  {
    path: "pages/my/moneycard",
    config: {
      "navigationBarTitleText": "账号管理",
      "usingComponents": {
        "i-modal": "/iView/modal/index",
        "i-swipeout": "/iView/swipeout/index",
        "i-toast": "/iView/toast/index",
      }
    }
  },
  {
    path: "pages/my/shareqrcode",
    config: {
      "navigationBarTitleText": "我的专属码",
      "navigationBarTextStyle": "white",
      "navigationBarBackgroundColor": "#E9323C",
      "usingComponents": {
        "i-modal": "/iView/modal/index",
        "i-swipeout": "/iView/swipeout/index",
        "i-toast": "/iView/toast/index",
        "i-spin": "/iView/spin/index",
        "poster": "plugin://poster/poster"
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
    path: "pages/my/earnings",
    config: {
      "navigationBarTitleText": "累积收益",
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
    path: "pages/my/earningsdetail",
    config: {
      "navigationBarTitleText": "收益详细",
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
    path: "pages/my/toge",
    config: {
      "navigationBarTitleText": "我的合伙人",
      "usingComponents": {
        "i-modal": "/iView/modal/index",
        "i-swipeout": "/iView/swipeout/index",
        "i-toast": "/iView/toast/index",
      }
    }
  },
  {
    path: "pages/my/fuckvip",
    config: {
      "navigationBarTitleText": "我的会员卡",
      "usingComponents": {
        "i-modal": "/iView/modal/index",
        "i-swipeout": "/iView/swipeout/index",
        "i-toast": "/iView/toast/index",
      }
    }
  },
  {
    path: "pages/my/quyu",
    config: {
      "navigationBarTitleText": "区域商",
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
