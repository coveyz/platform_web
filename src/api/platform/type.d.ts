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

export type roleOfSelectUserState = {
  name: string
}

export type roleGroupOfSelectUserState = {
  name: string
}

export type selectedUserState = {
  pmId: string
  personName: string
}

export type userToBeSelectedState = {
  personName: string
  groupId: string
  deptId: string
}

export type saveUserOfPlatformState = {
  pmId: string
  userIds: string[]
}