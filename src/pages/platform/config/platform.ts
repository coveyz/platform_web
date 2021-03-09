const data = {
  searchbar: [
    {
      type: 'select',
      title: '角色',
      name: 'role',
      value: '',
      show: true,
      level: 'ordinary',
      options: 'role'
    },
    {
      type: 'select',
      title: '角色组',
      name: 'roleGroup',
      value: '',
      show: true,
      level: 'ordinary',
      options: 'roleGroup'
    },
    {
      type: "multipleSelectionTree", // 类型
      title: "机构", // 文字
      name: "lbs", // 请求的key
      value: [], // 值
      text: [],  // 选中的文字  // 针对 树类型结构  multipleSelectionTree
      aggregate: [], // 选中的文字 和 值 都在这里  // 针对 树 multipleSelectionTree
      options: "dep", // 选项 // 针对 树,select 等
      show: true, // 是否显示隐藏 // 针对更多搜索
      level: "special", // ordinary/special // 针对更多搜索
      isMultiple:false,
      children: 'nextDept',
      label: 'name'
    }
  ],
  operationGroup: [
    // {
    // 	type: 'primary', // 类型 样式
    // 	buttonType: 'button', // 类型
    // 	title: '新建', // 文字
    // 	name: 'Add', // 键 //区别操作
    // 	icon: 'add', // 图标
    // 	special: true, // 特殊类型 // true 不进行 选中个数的判断
    // },
    // {
    //   type: "danger", // 类型 样式
    //   buttonType: "dropdownButton", // 类型
    //   title: "导出呈批单", // 文字
    //   options: [
    //     {
    //       title: "呈批单(红色)",
    //       name: "",
    //       icon: 'add'
    //     }, {
    //       title: "呈批单(黑色)",
    //       name: "",
    //       icon: 'add'
    //     }
    //   ], // 下拉的值
    //   name: "", // 键 区别操作
    //   icon: "", // 图标
    //   special: true // 特殊类型 // 当false 不进行 选中个数的判断
    // },
    {
      type: 'primry', // 类型 样式
      buttonType: 'linearButton', // 类型
      title: '新建', // 文字
      name: 'Add', // 键 //区别操作
      icon: 'add', // 图标
      special: true, // 特殊类型 // true 不进行 选中个数的判断
    },
  ],
  operationGroupOfDialog: [
    {
      title: '保存',
      name: 'confirm',
      type: 'primary',
    },
    {
      title: '取消',
      name: 'cancel',
      type: '',
    },

  ],
  mainData: [
    {
      type: 'input', // 类型
      title: '单位或地址', // 文字
      name: 'dwhdz', // 键
      value: '', // 值
      level: 'special', // 是否有特殊处理 样式单独处理
      tips: false, // true: label 会标红
      readonly: false, // 是否 只读
    },
    {
      type: 'select',// 类型
      title: '信访形式', // 文字
      name: 'xfxs', // 键
      value: '', // 值
      options: 'xfxs',  // 选项 // 针对 树,select 等
      level: 'ordinary', // 是否有特殊处理 样式单独处理
      tips: false, // true: label 会标红
      readonly: false // 是否 只读
    },
    {
      type: 'date', // 类型
      title: '受理日期',// 文字
      name: 'slrq',// 键
      value: '', // 值
      format: '', //类型
      dateType: '', // 日期范围
      level: 'ordinary',// 是否有特殊处理 样式单独处理
      tips: false,  // true: label 会标红
      readonly: false // 是否 只读
    },
  ],
  rule: {
    dwhdz:
      [
        {
          required: true,
          message: `请输入单位地址`
        },
      ],
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
  },

  type: 'platform'
};

export default data;
