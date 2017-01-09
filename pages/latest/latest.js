Page({
  data: {
    title: '最新话题',
    latest: [],
    hidden: false
  },
  
  // 下拉刷新获取最新信息
  onPullDownRefresh: function () {
    this.fetchData();
    // console.log('onPullDownRefresh', new Date())
  },

  // 事件处理函数
  redictDetail: function(e) {
    var id = e.currentTarget.id,
      url = '../detail/detail?id=' + id;
      wx.navigateTo({
         url: url
    })
  },

  // 获取数据
  fetchData: function() {
    var that = this;
    that.setData({
      hidden: false
    })
    wx.request({
      url: 'https://www.v2ex.com/api/topics/latest.json',
      success: function(res) {
        console.log(res);
        that.setData({
          latest: res.data
        })
        setTimeout(function() {
          that.setData({
            hidden: true
          })
        }, 300)
      }
    })
  },

  // 自动加载获取数据
  onLoad: function () {
    this.fetchData();
  }
})