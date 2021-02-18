/* eslint-disable no-shadow-restricted-names */
// eslint-disable-next-line no-unused-vars
const config = (function (global, undefined) {
  const config = {}
  /**
   * @description 是否网络版
   */
  config.online = true
  /**
   * @description 版本号
   */
  config.version = '1.0.0'
  /**
   * @description 上线时间（预计）
   */
  config.onlineTime = ''
  /**
   * @description api请求基础路径
   */
  config.baseUrl = {
    dev: '/api',
    pro: 'http://192.168.76.66:18018'
  }

  config.systemName = ''

  /**
   * @description 平台的名称
   */
  config.platformName = 'tf_platform_web'
  config.platformTitle = '干部监督综合管控平台'

  global.config = config
  return config
})(typeof window !== 'undefined' ? window : this)
