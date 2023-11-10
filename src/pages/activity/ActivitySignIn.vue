<template>
  <div>
    <image class="scan-img" src="../../static/activity/scanimg.jpg"></image>
    <button type="primary" @click="scan()" id="scan">扫一扫</button>

    <!-- <button type="primary" @click="qrsigncode()" id="token">签到码</button> -->
   <!-- <button type="primary" @click="qrapplycode()" id="token">报名码</button> -->


  </div>
</template>

<script >
export default {

  methods: {
    // 获取报名码函数
    // qrapplycode(){
    //   //获取appid和appsecret
    //   wx.request({
    //     method:'GET',
    //     url:'http://117.50.163.249:3166/system/app',
    //     header:{
    //       'Authorization':'Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjAwNjhiMzY4LTk2MTctNDhhMi05NGM3LWRhMDRlM2YxYTgzMyJ9.NRPuqh96eIsA11EgkRNVsnpZAGclIvE0EvdjCKhi3BOFVf94XOaEUFlw57jLQRyRpFkz_UALDIUNNtTRAlbumw'
    //     },
    //     success(res) {
    //       const appid=res.data.data.appid
    //       const appsecret=res.data.data.appsecret
    //       //获取access_token
    //        wx.request({
    //        method:'POST',
    //        url:'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid='+appid+'&secret='+appsecret,
    //        success(res) {
    //          console.log(res.data.access_token)
    //          //获取报名码
    //   wx.request({
    //        url:'https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token='+res.data.access_token,
    //        method:'POST',
    //        data:{
    //          "page": "pages/activity/ActivityDetails",
    //           "scene": "id=2210",//activityid
    //           "check_path": false,
    //           "env_version": "release"
    //        },
    //        success(res){
    //          //将二进制的图片格式转换
    //         const base64 = wx.arrayBufferToBase64(res.data);
    //         const imgurl = 'data:image/jpeg;base64,' + base64;
    //        }
    //      })
    //        }
    //      })
    //     }
    //   })

    // },

    scan() {
      uni.scanCode({
        success: (res) => {
          console.log(res)
          // var path = res.path
          //  //微信开发者工具 在开发者工具里出现乱码需要decodeURIComponent转义,真机不需要,可以直接使用
          // console.log("res.path",res.path); //pages/me/me?scene=table_id%3D8%26shop_id%3D1
          // path= path.split('?');   //分割字符串 path[0]等于pages/me/me,path[1]等于scene=table_id%3D8%26shop_id%3D1


          // var scene = path[1];
          // var reg  = new RegExp("scene=","g");
          //  var scene = path.replace(reg,"");
          //  //手机和开放者工具不一样的地方就在这几步了
          // var scene = decodeURIComponent(scene);   //在手机上省略这一步  开发者工具需要

          //  scene = scene.split("&");


          //  var list = {};
          //  for(var i = 0; i<scene.length; i++){
          //      var b = scene[i].split("=");
          //      list[b[0]] = b[1];
          //  }

          //  console.log(list);
          uni.navigateTo({
            url: '/' + res.path
          })

        }
      })
    },
    // 获取签到码
    //  qrsigncode(){
    //    wx.request({
    //      method:'GET',
    //      url:'http://117.50.163.249:3166/system/app',
    //      header:{
    //        'Authorization':`Bearer ${uni.getStorageSync('token')}`
    //      },
    //      success(res) {
    //    wx.request({
    //      method:'POST',
    //      url:'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid='+appId+'&secret='+appsecret,
    //      success(res) {
    //        console.log(res)
    //        console.log(res.data.access_token)
    // wx.request({
    //      url:'https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token='+res.data.access_token,
    //      method:'POST',
    //      data:{
    //        "page": "pages/activity/SignCheck",
    //         "scene": "id=2210",
    //         "check_path": false,
    //         "env_version": "release"
    //      },
    //      success(res){
    //        console.log(res)
    //       const base64 = wx.arrayBufferToBase64(res.data);
    //       const imgurl = 'data:image/jpeg;base64,' + base64;

    //      }
    //    })
    //      }
    //    })
    //    }})
    //  },
  },



}



</script>
<style scoped>
.scan-img {
  width: 70%;
  height: 500rpx;

  margin: 5vh 15%;
  /* border: 1rpx solid #ccc; */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

button {
  width: 80%;
  margin: 1vh 10%;
}
</style>
