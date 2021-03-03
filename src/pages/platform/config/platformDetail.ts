const data = {
  mainData: [
    {
      type: 'input', // 类型
      title: '名称', // 文字
      name: 'name', // 键
      value: '555', // 值
      level: 'special', // 是否有特殊处理 样式单独处理
      tips: false, // true: label 会标红
      readonly: false, // 是否 只读
    },
    {
      type: 'enclosureOfImages', // 类型
      title: '图标', // 文字
      name: 'xxx', // 键
      value: [], // 值
      fileNumber: 0, // 文件名
      limit: 1,
      fileList: [], // 文件列表
      level: 'ordinary', // 是否有特殊处理 样式单独处理
      tips: false, // true: label 会标红
      readonly: false // 是否 只读
    },
    {
      type: 'radio',
      title: '是否启用',
      name: 'sfkj',
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
      name: 'sfqy',
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
      name: 'xfxs', // 键
      value: '', // 值
      level: 'ordinary', // 是否有特殊处理 样式单独处理
      tips: false, // true: label 会标红
      readonly: false // 是否 只读
    },
    {
      type: 'input', // 类型
      title: '回调URL(单点登录)', // 文字
      name: 'hdurl', // 键
      value: '555', // 值
      level: 'special', // 是否有特殊处理 样式单独处理
      tips: false, // true: label 会标红
      readonly: false, // 是否 只读
    },
    {
      type: 'input', // 类型
      title: '安全码', // 文字
      name: 'aqm', // 键
      value: '555', // 值
      level: 'special', // 是否有特殊处理 样式单独处理
      tips: false, // true: label 会标红
      readonly: false, // 是否 只读
    },

    {
      type: 'input', // 类型
      title: '平台首页URL', // 文字
      name: 'ptsyurl', // 键
      value: '555', // 值
      level: 'special', // 是否有特殊处理 样式单独处理
      tips: false, // true: label 会标红
      readonly: false, // 是否 只读
    },
    {
      type: 'input', // 类型
      title: 'Client ID', // 文字
      name: 'id', // 键
      value: '555', // 值
      level: 'special', // 是否有特殊处理 样式单独处理
      tips: false, // true: label 会标红
      readonly: false, // 是否 只读
    },
  ],
  rule: {
    name:
      [
        {
          required: true,
          message: `请输入名称`
        },
      ],
    xxx:
      [{ required: true, message: '请选择图片' }],
    hdurl:
      [
        {
          required: true,
          message: `请输入回调URL`
        },
      ],
    aqm:
      [
        {
          required: true,
          message: `请输入安全码`
        },
      ],
    ptsyurl:
      [
        {
          required: true,
          message: `请输入平台首页`
        },
      ],
    id:
      [
        {
          required: true,
          message: `请输入ClientID`
        },
      ],
    sfkj:
      [{ required: true, message: 'Please pick an item!' }],
    sfqy: [{ required: true, message: 'Please pick an item!' }],
    xfxs:
      [
        {
          // required: true,
          // message: `请输入单位地址`,
          validator: (_: any, value: any) => {
            return value ? Promise.resolve() : Promise.reject('Should accept agreement')
          }
        },
      ],
    slrq:
      [
        {
          required: true,
          message: `请输入单位地址`
        },
      ],
  }
}


export default data