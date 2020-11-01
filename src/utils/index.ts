import { Toast } from 'antd-mobile';

export function openLoading(text?: string) {
  Toast.loading(text, 0);
}

interface IParams {
  text: string;
  sec?: number;
  callback?: () => void;
}

export function toastFail(param: IParams) {
  const { text, sec = 2, callback } = param;
  Toast.fail(text, sec, callback, false);
}

export function closeLoading() {
  Toast.hide();
}

export function formatObj2Str(obj: object) {
  return Object.keys(obj)
    .map(key => `${key}=${obj[key]}`)
    .join('&');
}

export function transformURL(url: string, obj?: object) {
  return url + (obj != null ? '?' + formatObj2Str(obj as any) : '');
}

export const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
