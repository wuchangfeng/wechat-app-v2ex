Page({
  data: {
    title: '最热话题',
    hotest: [],
    hidden: false
  },

  // item 详情页面
  redictDetail: function(e) {
    var id = e.currentTarget.id,
      url = '../detail/detail?id=' + id;
    wx.navigateTo({
      url: url
    })
  },

  // 获取最新数据
  fetchData: function() {
    var that = this;
    wx.request({
      url: 'https://www.v2ex.com/api/topics/hot.json',
      success: function(res) {
        // console.log(res);
        that.setData({
          hotest: res.data
        })
        // 设置超时
        setTimeout(function() {
          that.setData({
            hidden: true
          })
        }, 300)
      }
    })
  },

  // 启动函数
  onLoad: function () {
    this.setData({
      hidden: false
    })
    this.fetchData();
  }
})
