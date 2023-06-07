Page({
  data: {
    weathers: [],
  },
  onLoad: function (options) {
    this.getWeathers();
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  getWeathers() {
    wx.request({
      url: "https://localhost:7084/WeatherForecast",
      data: {},
      method: "GET",
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
      },
      fail: function (err) {
        console.log(err);
      }
    })
  },
})
