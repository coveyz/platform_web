const data = {
  operationGroup: [
    {
      type: 'primry', // 类型 样式
      buttonType: 'linearButton', // 类型
      title: '新建', // 文字
      name: 'Add', // 键 //区别操作
      icon: 'add', // 图标
      special: true, // 特殊类型 // true 不进行 选中个数的判断
    },
    {
      type: 'danger', // 类型 样式
      buttonType: 'button', // 类型
      title: '删除', // 文字
      name: 'Delete', // 键 //区别操作
      icon: 'delete', // 图标
      special: true, // 特殊类型 // true 不进行 选中个数的判断
    }
  ],
  table: [
    {
      name: "key", // 键
      title: "序号", // 文字
      width: "60", // 宽度
      align: "", // 当前栏的 位置 // 默认居中
      operation: false, // 是否要进行操作
      fixed: true, // 是否固定
      tooltip: false,
      children: [] // 是否复杂表头 有没有子
    },
    {
      name: "name", // 键
      title: "角色名", // 文字
      width: "", // 宽度
      align: "", // 当前栏的 位置 // 默认居中
      operation: false, // 是否要进行操作
      fixed: true, // 是否固定
      tooltip: false,
      children: [] // 是否复杂表头 有没有子
    },
    {
      name: "remark", // 键
      title: "备注", // 文字
      width: "", // 宽度
      align: "left", // 当前栏的 位置 // 默认居中
      operation: false, // 是否要进行操作
      fixed: true, // 是否固定
      tooltip: false,
      children: [] // 是否复杂表头 有没有子
    },
    {
      name: "code", // 键
      title: "角色编码", // 文字
      width: "", // 宽度
      align: "", // 当前栏的 位置 // 默认居中
      operation: false, // 是否要进行操作
      fixed: true, // 是否固定
      tooltip: false,
      children: [] // 是否复杂表头 有没有子
    },
    {
      name: "category", // 键
      title: "角色类型", // 文字
      width: "", // 宽度
      align: "", // 当前栏的 位置 // 默认居中
      operation: false, // 是否要进行操作
      fixed: true, // 是否固定
      tooltip: false,
      children: [] // 是否复杂表头 有没有子
    },
  ],
  otherRequestParameter: [
    {
      type: "special", // 类型
      name: "special", // 键
      value: () => { // 值
        return "123"
      }
    },
    {
      type: "ordinary", // 类型
      name: "ordinary", // 键
      value: "444" // 值
    },
  ],
  url: '/api/role/pageRole',
  select: false
}

export default data