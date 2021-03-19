import './MultifunctionTable.scss'
import {  useEffect, useState,useCallback } from "react"
import { Table,Pagination } from 'antd';
import {getList} from '@/api/utils'
import clamp from "clamp-js";

const { Column, ColumnGroup } = Table;

type otherRequestParameterState = {
  type: string
  name: string
  value?: string | Function | any
}

type MultifunctionTableProps = {
  configData: any
} 

const data = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const MultifunctionTable:React.FC<MultifunctionTableProps> = (props) => {
  const {configData} = props
  const {otherRequestParameter,url,searchbar} = configData
  const [tableData, setTableData] = useState(configData.table)
  const [pageSize, setPageSize] = useState(10)

  const [currentPage,setCurrentPage] = useState(1)

  const [pageTotal, setPageTotal] = useState(1) 
  const [tableLoding,setTableLoading] = useState(true)
  const [list,setList] = useState([])
  const [tableHeight,setTableHeight] = useState(window.innerHeight - 310)

  useEffect(() => {
    getTableInfo()
  }, [])

  //* 处理 resize 挂在 及其 销毁
  useEffect(() => {
    window.addEventListener('resize', onResize)
    return () => {
      console.log('销毁')
      window.removeEventListener('resize',  onResize)
    }
  }, [])

  //* 监听 currentPage
  useEffect(() => {
    getTableInfo('switch')
  }, [currentPage])

  //* 监听 pageSize
  useEffect(() => {
    getTableInfo('')
  }, [pageSize])

  /** onResize 处理视窗变化 table高度的变化 */
  const onResize = useCallback(() => {
    setTableHeight(window.innerHeight - 310)
  }, [])

  /** 处理 不同的切页事件 🛣 */
  const handleCurrentPage = (type?:string,number?:number) => {
    if (type === 'search' || type === '') {
      setCurrentPage(1)
      return 1
    } 
    else if (type === "switch") {
      return currentPage
    } 
    else if (type === 'delete') {
       /**
       * 1. 但前如果是第一页 就返回第一页
       * 2. 如果当前不是第一页 判断 如果我删除的个数 和 list 个数一样 页数 - 1
       * 3. 其他 保留在当前页
       */

      if (currentPage === 1) {
        return currentPage
      } 
      else if (number === list.length) {
        console.log('number === list.length',currentPage)
        setCurrentPage(currentPage -1)
        return currentPage - 1
      }
      else {
        return currentPage
      }
    }
    /** 也不知道 啥情况 */ 
    else {
      return 
    }
  }

  // 请求 🎲
  const getTableInfo = (type?:string,number?:number) => {
    let data = {
      pageSize: pageSize,
      pageNum: handleCurrentPage(type, number)
    };
    console.log('otherRequestParameter=>',otherRequestParameter)
    if (otherRequestParameter && otherRequestParameter.length) {
      const otherRequestData = otherRequestParameter.reduce((acc: {[name: string]: string | []},cur: otherRequestParameterState) => {
        acc[cur.name] = cur.type === 'ordinary' ? cur['value'] : cur['value']()
        return acc
      },{}) as {[name: string]: string | []}
      data = Object.assign(data,otherRequestData)
    }
    if (url === '') return setTableLoading(false)

    if (searchbar && searchbar.length) {
      console.log('有搜索框')
    } else {
      console.log('没有搜索框')
      lossSearchBarQuery(data, url);
    }
  }

  const lossSearchBarQuery = (data:any,url: string) => {
    getList(data,url).then(res => {
      const {data} = res.data
      // console.log('xxxx=>',data)
      setTableLoading(false)
      integrationDataOfTable(data)
    })
  }

  /** 整合数据 🚵🏻‍♂️ */
  const integrationDataOfTable = (data:any) => {
    const { records, total, current, size } = data;
    const qq:any = []
    for (let index = 0; index < 20; index++) {
      qq.push(records[0])
    }

    const curListData = qq.map((item:any,index:number) => {
      return { ...item, key: index + 1 + (current - 1) * size };
    })

    setList(curListData)
    // setPageTotal(total)
    setPageTotal(20)

    setTimeout(() => {
      const content = document.getElementsByClassName("controlNumberOfCows");
      for (let index = 0; index < content.length; index++) {
        clamp(content[index] as HTMLElement, { clamp: 3 });
      }
    }, 0);
  }

  const paginationChangeOperation = (page:number) => {
    setCurrentPage(page)
  }

  const onShowSizeChange = (_current:any, size:number) => {
    setPageSize(size)
  }

  // const height = UseWillSize()
  return (
    <>
      <Table 
        dataSource={list} 
        bordered
        loading={tableLoding}
        pagination={false}

        scroll={{ y: tableHeight,scrollToFirstRowOnChange: true}}
      >
          {/* <ColumnGroup title="Name">
            <Column title="First Name" dataIndex="firstName" key="firstName" />
            <Column title="Last Name" dataIndex="lastName" key="lastName" />
          </ColumnGroup> */}
          {/* <Column title="Age" dataIndex="age" key="name" />
          <Column title="Address" dataIndex="address" key="name" /> */}


          {
            tableData.map((tableInfo: any,key: number) => {
              return  <Column  align={tableInfo.align ? tableInfo.align : 'center'} title={tableInfo.title} dataIndex={tableInfo.name} key={key} />
            })
          }

        {/* <Column
          title="Tags"
          dataIndex="tags"
          key="tags"
          render={tags => (
            <>
            {tags.map(tag => (
              <Tag color="blue" key={tag}>
              {tag}
              </Tag>
              ))}
              </>
              )}
              />
              <Column
              title="Action"
              key="action"
              render={(text, record) => (
                <Space size="middle">
                <a>Invite {record.lastName}</a>
                <a>Delete</a>
                </Space>
                )}
              /> */}
        </Table>

        <Pagination
            className="pagination-wrapper"
            total={pageTotal}
            showTotal={(total) => `共 ${total} 项`}
            showSizeChanger
            pageSizeOptions={['10','20','30']}
            onChange={paginationChangeOperation}
            onShowSizeChange={onShowSizeChange}
        />
    </>
  )
}

export default MultifunctionTable
