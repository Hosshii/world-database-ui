module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://150.95.157.67:12500', // 自分のポートにする
        pathRewrite: {
          '^/api/': '/',
        },
      },
    },
    overlay: {
      warnings: true,
      errors: true,
    },
  },
}
