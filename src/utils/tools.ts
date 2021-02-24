import { message } from 'antd';

export const successMessage = (word: string) => {
  message.success(word);
}

export const errorMessage = (word: string) => {
  return message.error(word);
}


export const getPageTitle = (title: string) => {
  if (title) {
    document.title = title
  } else {
    document.title = '干部监督综合管控平台'
  }
}

//* 将数据整合成对象
export const integrationData = (res: any) => {
  return res.reduce((acc: any, cur: any) => {
    Object.assign(acc, cur);
    return acc;
  }, {});
}
