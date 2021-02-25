import React ,{useState}from 'react'
import './ButtonGroup.scss'
import {SvgIcons} from '@/components'
import {buttonState} from '@/components/type.d'
import { Button,Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';


export type ButtonGroupState = {
  operationGroup:buttonState[]
}

export type ButtonGroupProps = {
  configData: ButtonGroupState
  handleButtonOptions: (buttonInfo: buttonState) => void
}

const ButtonGroup:React.FC<ButtonGroupProps> = (props) => {
  const {configData,handleButtonOptions} = props
  const [optionsArr] = useState(configData.operationGroup)

  const menu = (button:buttonState) => {
    const {options} = button
    return (
      <Menu>
        {
          options?.map((item:any,key:number) => {
            return (
              <Menu.Item key={key} onClick={() => handleOperation(item)} icon={item.icon ? <SvgIcons iconClass={item.icon}/> : null}>
                {item.title}
              </Menu.Item>
            )
          })
        }
      </Menu>
    )
  }

  //* 触发父组件
  const handleOperation = (button:buttonState) => {
    handleButtonOptions(button)
  }

  return (
    <div className="buttonGroup-frame">
      {
        optionsArr.map((button:any,key:number) => {
          //* 基础 button 样式 
          //* 线性 button 样式
          if (button.buttonType === 'button' || button.buttonType === 'linearButton') {
            return <Button className={button.buttonType === 'button' ? 'button-item' : 'button-linearButton-item'} onClick={() => handleOperation(button)} key={key} disabled={!button.special} type={button.type} icon={button.icon ? <SvgIcons iconClass={button.icon}/> : null}>{button.title}</Button>
          } 
          // else if (button.buttonType === 'link') {
          //   return <Button className={button.buttonType === 'button' ? 'button-item' : 'button-linearButton-item'} onClick={() => handleOperation(button)} key={key} disabled={!button.special} type={button.type} icon={button.icon ? <SvgIcons iconClass={button.icon}/> : null}>{button.title}</Button>
          // }
          //* 基础 下拉 button 样式
          else if (button.buttonType === 'dropdownButton') {
            return (
                <Dropdown className='button-item' overlay={() => menu(button)} key={key} disabled={!button.special}>
                  <Button type={button.type} icon={button.icon ? <SvgIcons iconClass={button.icon}/> : null}>
                    {button.title} 
                    <DownOutlined />
                  </Button>
                </Dropdown>
            )
          } 
          else {
            return 
          }
        })
      }
    </div>
  )
}

export default ButtonGroup
