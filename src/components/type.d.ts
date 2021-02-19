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