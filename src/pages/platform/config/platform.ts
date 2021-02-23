const data = {
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
			title: '删除',
			name: 'delete',
			type: 'danger',
		},
		{
			title: '取消',
			name: 'cancel',
			type: '',
		},
		{
			title: '确定',
			name: 'confirm',
			type: 'primary',
		},
	],
	mainData: [
		{
			type: 'input', // 类型
			title: '单位或地址', // 文字
			name: 'dwhdz', // 键
			value: '555', // 值
			level: 'special', // 是否有特殊处理 样式单独处理
			tips: false, // true: label 会标红
			readonly: false, // 是否 只读
		},
    {
      type: 'select',// 类型
      title: '信访形式', // 文字
      name: 'xfxs', // 键
      value: 'male', // 值
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
  type: 'platform'
};

export default data;
