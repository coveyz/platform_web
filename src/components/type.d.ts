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


 //* FormData typescript
export interface FormDataState {
  title: string 
  name: string
  type: string
  level: string
  tips: boolean
  readonly: boolean
}

export interface selectOfFormData extends FormDataState {
  value: string
  options?: string
}

export interface inputOfFormData extends FormDataState {
  value: string
}

export interface dataOfFormdata extends FormDataState {
  value: string
}