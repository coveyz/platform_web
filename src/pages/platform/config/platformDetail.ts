const data = {
  operationGroup: [
    {
      type: 'primry', // 类型 样式
      buttonType: 'linearButton', // 类型
      title: '保存', // 文字
      name: 'Add', // 键 //区别操作
      icon: 'add', // 图标
      special: true, // 特殊类型 // true 不进行 选中个数的判断
    },
    {
      type: 'primry', // 类型 样式
      buttonType: 'linearButton', // 类型
      title: '返回', // 文字
      name: 'Back', // 键 //区别操作
      icon: 'back', // 图标
      special: true, // 特殊类型 // true 不进行 选中个数的判断
    },
  ],
  mainData: [
    {
      type: 'input', // 类型
      title: '名称', // 文字
      name: 'clientName', // 键
      value: '', // 值
      level: 'special', // 是否有特殊处理 样式单独处理
      tips: false, // true: label 会标红
      readonly: false, // 是否 只读
    },
    {
      type: 'enclosureOfImages', // 类型
      title: '图标', // 文字
      name: 'logoUrl', // 键
      value: '', // 值
      fileNumber: 0, // 文件名
      limit: 1,
      fileList: [], // 文件列表
      level: 'ordinary', // 是否有特殊处理 样式单独处理
      tips: false, // true: label 会标红
      readonly: false // 是否 只读
    },
    {
      type: 'radio',
      title: '是否可见',
      name: 'visibleFlag',
      value: '1',
      operations: [
        {
          title: '可见',
          value: '1'
        },
        {
          title: '不可见',
          value: '0'
        }
      ],
      level: 'special',
      tips: false,
      readonly: false, // 是否 只读
    },
    {
      type: 'radio',
      title: '是否启用',
      name: 'enableFlag',
      value: '1',
      operations: [
        {
          title: '启用',
          value: '1'
        },
        {
          title: '不启用',
          value: '0'
        }
      ],
      level: 'special',
      tips: false,
      readonly: false, // 是否 只读
    },
    {
      type: 'select',// 类型
      title: '平台类型', // 文字
      name: 'clientType', // 键
      value: '', // 值
      level: 'ordinary', // 是否有特殊处理 样式单独处理
      tips: false, // true: label 会标红
      readonly: false // 是否 只读
    },
    {
      type: 'input', // 类型
      title: '回调URL(单点登录)', // 文字
      name: 'clientRedirectUrl', // 键
      value: '', // 值
      level: 'special', // 是否有特殊处理 样式单独处理
      tips: false, // true: label 会标红
      readonly: false, // 是否 只读
    },
    {
      type: 'input', // 类型
      title: '安全码', // 文字
      name: 'clientSecret', // 键
      value: '', // 值
      level: 'special', // 是否有特殊处理 样式单独处理
      tips: false, // true: label 会标红
      readonly: false, // 是否 只读
    },

    {
      type: 'input', // 类型
      title: '平台首页URL', // 文字
      name: 'clientIndexUrl', // 键
      value: '', // 值
      level: 'special', // 是否有特殊处理 样式单独处理
      tips: false, // true: label 会标红
      readonly: false, // 是否 只读
    },
    {
      type: 'input', // 类型
      title: 'Client ID', // 文字
      name: 'clientId', // 键
      value: '', // 值
      level: 'special', // 是否有特殊处理 样式单独处理
      tips: false, // true: label 会标红
      readonly: false, // 是否 只读
    },
  ],
  rule: {
    clientName: [{ required: true, message: `请输入名称` }],
    logoUrl: [{ required: true, message: '请选择图片' }],
    clientRedirectUrl: [{ required: true, message: `请输入回调URL` }],
    clientSecret: [{ required: true, message: `请输入安全码` }],
    clientIndexUrl: [{ required: true, message: `请输入平台首页` }],
    clientId: [{ required: true, message: `请输入ClientID` }],
    visibleFlag: [{ required: true, message: '请选择是否可见' }],
    enableFlag: [{ required: true, message: '请选择是否启用' }],
    clientType: [{ required: true, message: '请选择平台类型' }],
  }
}


export default data