import './SearchBar.scss'
import React,{useState,useImperativeHandle} from 'react'
import { Form } from 'antd';
import {selectOfSearchBar,multipleSelectionTree} from '@/components/type.d'
import {SelectItem,MultipleSelectionTree} from './components'

type searchbarItem = selectOfSearchBar | multipleSelectionTree

type SearchBarState = {
  searchbar: Array<searchbarItem>
}

export type SearchBarProps = {
  configData: SearchBarState
  optionObj?: any 
  cRef?: any
  searchbarOperation?: (type:string,data: any) => void
}

const SearchBar:React.FC<SearchBarProps> = (props) => {
  const {configData,optionObj,searchbarOperation} = props
  const [searchbarArr,setSearchBarArr] = useState(configData.searchbar)
  const [form] = Form.useForm();

  useImperativeHandle(props.cRef, () => ({
    verification: () => {
      return new Promise((resolve,reject) => {
        form.validateFields()
          .then((value) => {
            resolve(value)
          })
         .catch((err) => err)
      })
    },
    reset: () => {
    },
    backFill: () => {
    }
  }));

  const  selectOperation= (data:any) => {
    // console.log('selectOperation-search=>',data)
    searchbarOperation && searchbarOperation('select',data)
  }

  const multipleTreeOperation = (data: any) => {
    // console.log('multipleTreeOperation-search=>',data)
    searchbarOperation && searchbarOperation('multipleTree',data)
  }

  return (
    <Form
        layout={'inline'}
        form={form}
        className='seatchBar-frame'
    >
      {
        searchbarArr.map((item:searchbarItem,key:number) => {
          if (item.type === 'select' && item.show) {
             return <SelectItem key={key} selectInfo={item} optionObj={optionObj} selectOperation={selectOperation}/>
          } else if (item.type === 'multipleSelectionTree' && item.show) {
            return <MultipleSelectionTree  key={key} multipleSelectionTreeInfo={item} multipleTreeOperation={multipleTreeOperation} optionObj={optionObj}/>
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
