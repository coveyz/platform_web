import React,{useState} from 'react'
import { Form,Radio,Button,Input } from 'antd';
import {selectOfSearchBar} from '@/components/type.d'
import {SelectItem} from './components'

type searchbarItem = selectOfSearchBar 

type SearchBarState = {
  searchbar: Array<searchbarItem>
}

export type SearchBarProps = {
  configData: SearchBarState
  optionObj?: any 
}

const SearchBar:React.FC<SearchBarProps> = (props) => {
  const {configData,optionObj} = props
  const [searchbarArr,setSearchBarArr] = useState(configData.searchbar)
  const [form] = Form.useForm();

  return (
    <Form
        layout={'inline'}
        form={form}
    >
      {
        searchbarArr.map((item:searchbarItem,key:number) => {
          if (item.type === 'select') {
             return <SelectItem key={key} selectInfo={item} optionObj={optionObj}/>
          } 
          else {
            return 
          }
        })
      }
    </Form>
  )
}

export default SearchBar
