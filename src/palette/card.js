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
      background: 'https://csyueshi.com/icon/qrcodebj.jpg',
      width: '700rpx',
      height: '1050rpx',
      borderRadius: '20rpx',
      views: [
          {
            type: 'image',
            url: this.cardInfo.avatar,//头像
            css: {
              top: '48rpx',
              left: '185rpx',
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
                  left: '510rpx',
                  top: '480rpx',
                  width: '310rpx',
                  height: '310rpx',
                  borderRadius: '10rpx',
                  align: 'right'
              }
          },
          {
            type: 'text',
            text: this.cardInfo.nickname,//昵称
            css: {
                left: '205rpx',
                top: '50rpx',
                fontSize: '35rpx',
                align: 'left',
                color:'black',
                maxLines:"1",
                width:'350rpx',
                fontWeight:"bold"
            }
          }
      ]
    })
  }
}
