export type buttonState = {
  type: string,
  buttonType: string,
  title: string,
  name: string,
  options?: dropdownButtonState[],
  icon?: string,
  special: boolean
}

export type dropdownButtonState = {
  title: string,
  name: string,
  icon?: string
}


export type DialogState = {
  title?: string
  width?: string
  type?: string
  visible: boolean
  content?: string
  isOption?: boolean
}

export type operationGroupDialogState = {
  title: string
  name: string,
  type?:string | any
}