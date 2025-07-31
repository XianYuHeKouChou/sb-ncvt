import {ElMessage, ElNotification} from 'element-plus';
import axios from 'axios';
import type {AxiosResponse} from 'axios';

export default {
  // 请求主机
  host: 'http://192.168.3.213:1337',
  /**
   * 成功 Message 提示
   * @param msg 提示信息
   */
  successMessage(msg: string): void {
    ElMessage({
      message: msg,
      type: 'success',
      plain: true,
    });
  },
  /**
   * 失败 Message 提示
   * @param msg 提示信息
   */
  failMessage(msg: string): void {
    ElMessage({
      message: msg,
      type: 'error',
      plain: true,
    });
  },
  /**
   * 成功 Notification 提示
   * @param msg 提示信息
   */
  successNotification(msg: string): void {
    ElNotification({
      message: msg,
      type: 'success',
    })
  },
  /**
   * 失败 Notification 提示
   * @param msg 提示信息
   */
  failNotification(msg: string): void {
    ElNotification({
      message: msg,
      type: 'error',
    })
  },
  /**
   * 储存数据到本地
   * @param key 键
   * @param value 值
   */
  setLocalStorage(key: string, value: any): void {
    localStorage.setItem(key, value);
  },
  /**
   * 获取本地数据
   * @param key 键
   * @returns 值
   */
  getLocalStorage(key: string): unknown {
    const value = localStorage.getItem(key);
    if (value === null) {
      return null;
    }
    try {
      // 尝试能不能转回原始数据类型
      return JSON.parse(value);
    } catch (e) {
      // 如果解析失败，直接返回字符串
      return value
    }
  },
  /**
   * 将时间字符串转换为 UTC+8 格式
   * @param timeString 时间字符串
   * @returns 转换后的时间字符串
   */
  convertToUTC8(timeString: string): string {
    const date = new Date(timeString);
    const adjustedDate = new Date(date.getTime() + 8 * 60 * 60 * 1000);
    const year = adjustedDate.getUTCFullYear();
    const month = String(adjustedDate.getUTCMonth() + 1).padStart(2, '0');
    const day = String(adjustedDate.getUTCDate()).padStart(2, '0');
    const hours = String(adjustedDate.getUTCHours()).padStart(2, '0');
    const minutes = String(adjustedDate.getUTCMinutes()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  },
  /**
   * GET 请求不带 token，返回 Promise 对象
   * @param url 请求的 URL
   * @returns Promise 对象
   */
  httpGetNoToken(url: string): Promise<AxiosResponse> {
    return new Promise((resolve, reject) => {
      axios
        .get(this.host + url)
        .then(resolve)
        .catch((error) => {
          const msg = error.response?.data?.error?.message || error.message;
          reject(msg);
        });
    });
  },
  /**
   * POST 请求不带 token，返回 Promise 对象
   * @param url 请求的 URL
   * @param data 请求的数据
   * @returns Promise 对象
   */
  httpPostNoToken(url: string, data: object): Promise<AxiosResponse> {
    return new Promise((resolve, reject) => {
      axios
        .post(this.host + url, data)
        .then(resolve)
        .catch((error) => {
          const msg = error.response?.data?.error?.message || error.message;
          reject(msg);
        });
    });
  },
};
