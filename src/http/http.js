import config from '@/config'
const URL = config.url

import axios from 'axios'
import Vue from 'vue'
import qs from 'qs'
const vm = new Vue()

axios.defaults.adapter = function (config) {
  console.log(config.data,'ddddd');
  // let  newdata={
  //   i:null,
  //   c:'',
  //   a:'',
  //   m:'',
  //   do:config.data.do
  // }
  // //这里把参数放到newdata里,然后再复到下面
  // newdata.i=8;
  // newdata.c='entry';
  // newdata.a='wxapp';
  // newdata.m='mask';
  // console.log(newdata,'jjjdjfj');

  
  // i: 8,
  // c: "entry",
  // a: "wxapp",
  // m: "mask",
  return new Promise((resolve, reject) => {
    try
    {
      wx.showLoading({
        title: '拼命加载中'
      })
      wx.request({
        url: config.url,
        data: config.data,
        header: config.headers,
        method: config.method,
        dataType: config.dataType,
        success: function (data) {
          const code = Number(data.data.code)
          console.log(config,'kkkk');
          
          if (code === 1) {
            resolve(data.data)            
          } else if (code === 2) {
            // wx.login({
            //   success(res) {
            //     vm.$API.wxLogin({
            //       code: res.code
            //     }).then(response => {
            //       wx.setStorageSync('sessionId', response.data.sessionId)
            //       wx.setStorageSync('personalId', response.data.id)
            //       resolve(data.data)
            //       // 如果没有绑定
            //       // if(response.data.isBind == 0) {
            //       //   this.$router.replace('/pages/personal/login');
            //       // }else {
            //       //   wx.switchTab({url: '/pages/purchase/purchase'})
            //       // }
            //     })
            //   }
            // })
          } else if (code === 0) {
            resolve(data.data)   
            const msg = data.data.msg
            console.log('错误');
            
            wx.showToast({
              title: `${msg}`,
              icon: 'none',
              duration: 2000
            });
          } else {
            resolve(data.data)   
          }
        },
        fail(err) {
          console.log(err);
          wx.showToast({
            title: '网络出错',
            icon: 'none'
          })
        },
        complete: () => {
          wx.hideLoading()
        }
      })
    } catch (err) {
      console.log(err)
    }

  })
}


//发送一般请求
const http = axios.create({
  timeout: 5000,
  baseURL: URL,
  header: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Credentials': 'true'
  }
})
//请求拦截器
http.interceptors.request.use(async (configs) => {
  // if(wx.getStorage('sessionId')) {
  //   config.data += '&sessionId=' + localStorage.getItem('sessionId')
  // }
  // var value = await wx.getStorageSync('sessionId')
  // if (value) {
  //   configs.data += '&sessionId=' + value
  // }
  // configs.data += '&shopId=' + config.appId
  return configs
}, err => {
  return Promise.reject(error);
})

//form请求
const form = axios.create({
  timeout: 60000,
  baseURL: URL,
  headers: {
    'Content-Type': 'multipart/form-data'
  }
})

export default {
  get(url, params = {}) {
    return new Promise(async (resolve, reject) => {
      try
      {
        const data = await http.get(url, { params })
        const code = Number(data.data.code)
        console.log("data: " + data);
        if (code === 1)
        {
          // resolve (data.data)
        } else
        {
          // 提示报错信息
          wx.showToast({
            title: `${data.data.desc}`,
            icon: 'none',
          });
        }
        resolve(data.data)
      } catch (err)
      {
        console.log("err: " + err)
      }
    })
  },
  post(url, params = {}, back = true) {
    return new Promise(async (resolve, reject) => {
      try
      {
        const data = await http.post(url, qs.stringify(params))
        resolve(data)
        
      }
      catch (err)
      {
        console.log(err)
      }

    })
  },

  form(url, params = {}) {
    return new Promise(async (reslove, reject) => {
      try
      {
        const data = await form.post(url, params)
        const code = Number(data.data.code)
        if (code === 1)
        {
          reslove(data.data)
        } else
        {
          // vm.$toast(data.data.desc)
        }
      }
      catch (err)
      {
        console.log(err)
      }
    })

  },
}
