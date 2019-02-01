// 名片分享样式
export default class LastMayday {
  cardInfo = {}

  do (cardInfo) {
    this.cardInfo = JSON.parse(JSON.stringify(cardInfo))
    return this._template()
  }

  TEXT_SMALL = {
    fontSize: '24rpx'
  }

  _template () {
    return ({
      background: 'https://jin.itxiaolong.cn/icon/qrcodebj.jpg',
      width: '700rpx',
      height: '1050rpx',
      borderRadius: '20rpx',
      views: [
          {
            type: 'image',
            url: this.cardInfo.avatar,//头像
            css: {
              top: '30rpx',
              left: '180rpx',
              width: '132rpx',
              height: '132rpx',
              borderRadius: '10rpx',
              align: 'right'
            }
            },
          {
              type: 'image',
              url: this.cardInfo.myqrcode,//二维码
              css: {
                  left: '480rpx',
                  top: '500rpx',
                  width: '250rpx',
                  height: '250rpx',
                  borderRadius: '10rpx',
                  align: 'right'
              }
          },
          {
            type: 'text',
            text: this.cardInfo.nickname,//昵称
            css: {
                left: '200rpx',
                top: '50rpx',
                fontSize: '35rpx',
                align: 'left',
                color:'white',
                maxLines:"1",
                width:'350rpx'
            }
          }
      ]
    })
  }
}
