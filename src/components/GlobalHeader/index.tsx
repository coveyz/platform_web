import './GlobalHeader.scss'
import logoPage from '@/assets/images/basic/logo.png'

const GlobalHeader = () => {
  return (
    <div className="global-header">
      <div className="global-header-info">
        <img src={logoPage} alt="" />
        <span>干部监督综合管控平台</span>
      </div>
    </div>
  )
}

export default GlobalHeader
