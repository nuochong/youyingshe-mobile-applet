export default {
  install(Vue, options) {
    Vue.prototype.url = 'test common global';
    
    //去除前后空格
    Vue.prototype.trim = function(str) {
      return str.replace(/(^\s*)|(\s*$)/g, '');
    };
    Vue.prototype.test = function(args) {
      console.log('This is Test!');
    };
    //本地存储
    Vue.prototype.setStorage = function(key, data) {
      return new Promise((resolve, reject) => {
        wx.setStorage({
          key: key,
          data: data,
          success(res) {
            //console.log("存储成功了!",res);
            resolve({
              data: res.data,
              msg: '存储数据成功！'
            });
          },
          fail(err) {
            //console.log("存储失败了!");
            reject({
              msg: '存储数据失败!'
            });
          }
        });
      });
    };
    Vue.prototype.getStorage = function(key) {
      return new Promise(function(resolve, reject) {
        // 先判断本地数据存储有没有cookie
        wx.getStorage({
          key: key,
          success: function(res) {
            resolve(res.data);
            // resolve({
            //     data: res.data,
            //     msg: "读取数据成功！"
            // })
          },
          fail: function(res) {
            resolve(null);
          }
        });
      });
    };
    Vue.prototype.delStorage = function(key) {
      console.log('delStorage');
      wx.removeStorage({
        key: key,
        success(res) {
          console.log('删除数据成功！');
        },
        fail(err) {
          console.log('删除数据失败!');
        }
      });
    };
    //提示
    Vue.prototype.toastNone = function(content = '内容', time = 1500) {
      wx.showToast({
        title: content,
        icon: 'none',
        duration: time
      });
    };
  }
};
