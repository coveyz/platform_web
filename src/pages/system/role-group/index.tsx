import React, { useState,useEffect } from 'react'
import {Button} from 'antd'

const RoleGroup = () => {



  const [num, changeNum] = useState(1)
  const [str, changeStr] = useState("现在数字是1")
  useEffect(() => {
    console.log('usss',num)
    getNum()
  }, [num])

  
  const setNum = (num:any = Math.floor(Math.random()*(10-5+1))+5) => {
    // 使用 async await  自执行函数  setTimeout 都没用
    changeNum(num)
    // 执行之后  getNum里拿不到最新的state
  }

  const getNum = () => {
      const newStr = "现在数字是" + num
      console.log('cur=>',num)
      console.log(newStr)
      changeStr(newStr)
  }

  return (
    <div>
      RoleGroup
      <Button onClick={() => {setNum()}}>点我+1</Button>
      <div>{num}</div>
      <div>{str}</div>
    </div>
  )
}

export default RoleGroup
