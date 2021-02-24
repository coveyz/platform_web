export type constantsProps = {
  path: string
  name: string
  title: string
  limit: string
  icon: string
  hidden?: boolean
}

interface MetaProps {
  hidden?: boolean
  title: string
  icon: string
  limit: string
}

interface RouterConfigProps {
  path: string
  name?: string
  component: any
  redirect?: string
  meta?: MetaProps
  // children?: Array<RouterConfigProps>
}

interface ChildrenRouterConfigProps {
  children?: Array<RouterConfigProps>
}

export interface RouterConfig extends RouterConfigProps<ChildrenRouterConfigProps> {}