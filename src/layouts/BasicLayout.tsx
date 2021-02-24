import './BasicLayout.scss'
import {GlobalHeader,GlobalFooter} from '@/components'
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;


const BasicLayout = (props:any) => {
  return (
    <Layout className="layout-contain">
      <Header className="layout-contain-header ">
        <GlobalHeader />
      </Header>
      <Content className="laylut-contain-content">
          {/* BasicLayoutBasicLayoutBasicLayoutBasicLayoutBasicLayout */}
          {props.children}
      </Content>
      <Footer className="layout-contain-footer">
        <GlobalFooter />
      </Footer>
    </Layout>
  )
}

export default BasicLayout
