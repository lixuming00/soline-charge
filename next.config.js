const withImages = require('next-images');
const withAntdLess = require('next-plugin-antd-less');

const withTM = require('next-transpile-modules')([
  'antd-mobile',
]);

module.exports = withTM(withImages(withAntdLess({
  nextjs: {
    localIdentNameFollowDev: true, // default false, for easy to debug on PROD mode
  }
})));