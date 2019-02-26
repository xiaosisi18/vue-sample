module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://www.baidu.com',
          changeOrigin: true
        },
        '/ws': {
          target: 'http://www.windimg.com',
          ws: true,
          changeOrigin: true
        }
      }
    }
  }