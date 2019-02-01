import config from '@/config'
import http from '@/http/http'

class API {
  constructor() {
    this.BASE_URL = config.url;
  }

  requestPost(url) {
    return function (params) {
      return http.post(url, params)
    }
  }

  requestGet(url) {
    return function (params) {
      return http.get(url, params)
    }
  }
  // 登录
  login = this.requestPost('')
  // http://10.0.0.52:8080/b2cbase/api/account/login
  // 左侧分类
  left = this.requestPost('')
  // 右侧商品
  right = this.requestPost('')
  // 搜索商品
  search = this.requestPost('')
  // 商品详情
  detail = this.requestPost('')
  // 添加购物车
  Shopcar = this.requestPost('')
  // 收藏商品
  Collection = this.requestPost('')
  // 收藏列表
  Getcollection = this.requestPost('')
  // 购物车
  Getcart = this.requestPost('')
  // 我的足迹
  Getfootprint = this.requestPost('')
  // 是否有地址
  
  GetDefaultaddress = this.requestPost('')  
  // 新增地址接口
  Addaddress = this.requestPost('')
  // 我的地址
  MyAddress = this.requestPost('')

  // 编辑地址
  UpdAddress = this.requestPost('')

// 删除地址
DelAdd = this.requestPost('')
// 立即购买
Onegood = this.requestPost('')
// 提交订单
AddMyOrder = this.requestPost('')

// 订单列表
GetOrderlist = this.requestPost('')

// 订单详情
GetDetailOrder = this.requestPost('')

// 取消订单
CancelMyOrder = this.requestPost('')


//获取验证码
Smscode = this.requestPost('')





RegorFind = this.requestPost('')


toLogin = this.requestPost('')



doPay = this.requestPost('')
  // 首页轮播图
  ads = this.requestPost('/api/shop/index/ads')
  // 商品列表
  page = this.requestPost('/api/goods/page')
  // 我的收藏
  conllectPage = this.requestPost('/api/user/conllect/page')
  // 新增收货地址
  addAddress = this.requestPost('/api/address/add')
  // 收货地址列表
  addressList = this.requestPost('/api/address/list')
  // 删除收货地址
  delAddress = this.requestPost('/api/address/del')
  // 编辑收货地址
  editAddress = this.requestPost('/api/address/edit')
  // 添加/取消 收藏
  collection = this.requestPost('/api/user/conllect/addOrDel')

}
export default new API();
