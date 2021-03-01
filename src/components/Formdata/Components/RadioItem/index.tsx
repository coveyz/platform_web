import { Form, Radio } from 'antd';
import {radioFormdata} from '@/components/type.d'

type radioOperationsState = {
  title: string
  value: string
}


type RadioProps = {
  radioInfo: radioFormdata
  radioRule: any[]
}

const RadioItem:React.FC<RadioProps> = (props) => {
  const {radioInfo,radioRule} = props
  return (
    <Form.Item label={radioInfo.title} name={radioInfo.name}
     className= {[
      `new-${radioInfo.type}-item`,
      radioInfo.tips ? 'tipsStyle' : '', 
      radioInfo.level === 'special' ? `new-${radioInfo.name}-item` : '',
      radioInfo.title.length > 6 ? 'textSoLong' : ''
      ].join(' ')}
      rules={radioRule}
    >
      <Radio.Group>
        {
          radioInfo['operations']?.map((item:radioOperationsState,key:number) => {
            return  <Radio key={key} value={item.value}>{item.title}</Radio>
          })
        }
      </Radio.Group>
    </Form.Item>
  )
}

export default RadioItem
