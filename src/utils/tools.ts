import { message } from 'antd';

export const successMessage = (word: string) => {
  message.success(word);
}

export const errorMessage = (word: string) => {
  return message.error(word);
}
