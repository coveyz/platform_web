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
      type: 'danger'
    },
    {
      title: '取消',
      name: 'cancel',
      type: ''
    },
    {
      title: '确定',
      name: 'confirm',
      type: ''
    }
    
  ]
};

export default data;
