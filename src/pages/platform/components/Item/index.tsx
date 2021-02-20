import './Item.scss'
import React from 'react'
import {SvgIcons} from '@/components'

type PlatformProps = {
  platformList: object[],
  platformItemOptions: (item:any,type: string) => void
}

const platformItem:React.FC<PlatformProps> = (props) => {
  const {platformList,platformItemOptions} = props



  const handleOptions = (item:any,type:string) => {
    platformItemOptions(item,type)
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
                  <i onClick={() => handleOptions(item,'edit')}>
                    <SvgIcons iconClass='edit' />
                  </i>
                  <i onClick={() => handleOptions(item,'setting')}>
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
