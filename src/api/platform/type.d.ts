export type platformListState = {
  clientName: string
  clientId: string
}

export type platformoperationState = {
  id: string
  clientName: string
  logoUrl: string
  visibleFlag: string
  enableFlag: string
  clientType: string
  clientRedirectUrl: string
  clientSecret: string
  clientIndexUrl: string
  clientId: string
}

export type platformDetailState = {
  id: string
}



export type deletePlatformState = {
  ids: string[]
}