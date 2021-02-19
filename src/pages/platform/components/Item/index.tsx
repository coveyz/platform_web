import './Item.scss'
import React from 'react'
import {SvgIcons} from '@/components'

type PlatformProps = {
  platformList: object[]
}

const platformItem:React.FC<PlatformProps> = (props) => {
  const {platformList} = props

  const handleEditOption = (item:any) => {
    console.log('edit',item);
  }

  const handleSettingOption = (item:any) => {
    console.log('setting',item)
  }

  return (
    <>
      {
        platformList.map((item:any,key:number) => {
          return (
            <div className="platform-scope-content" key={key}>
              <div className="platform-scope">
                <div className="icon">
                  <SvgIcons iconClass='platformItem'/>
                </div>
                <div className="platformName"> {item.title} </div>
                <div className="action" >
                  <i onClick={() => handleEditOption(item)}>
                    <SvgIcons iconClass='edit' />
                  </i>
                  <i onClick={() => handleSettingOption(item)}>
                   <SvgIcons iconClass='setting'/>
                  </i>
                </div>
              </div>
            </div>
          )
        })
      }
    </>
  )
}

export default platformItem
