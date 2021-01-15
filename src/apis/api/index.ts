import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import qs from 'qs';
import { printInfo } from '@helpers/DebugHelper';
import * as T from './type';

const buildHeaders = (headers?: { [k: string]: string }) => {
  return {
    // Accept: 'application/json',
    'Content-Type': 'application/json',
    ...headers,
  };
};

const buildParams = (query?: any) => {
  if (!query) {
    return '';
  }

  return `?${qs.stringify(query)}`;
};

const handleResponse = (response: AxiosResponse) => {
  printInfo(response);

  if (response.status >= 200 && response.status <= 204 && response.data.success) {
    return Promise.resolve(response.data.data);
  }

  return Promise.reject(response.data.error);
};

export const request = ({ method, url, headers, payload }: T.ApiRequestProps) => {
  const option: AxiosRequestConfig = {
    url,
    method,
    headers: buildHeaders(headers),
    timeout: 60000,
    withCredentials: false,
    responseType: 'json',
  };

  if (method === 'get') {
    option.params = buildParams(payload);
  }

  if (method === 'post' || method === 'put' || method === 'delete') {
    option.data = payload;
  }

  return axios(option).then(handleResponse);
};

export function setToken(token: string) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

const api = {
  get: ({ url, headers, payload }: T.ApiProps) => {
    return request({ method: 'get', url, headers, payload });
  },
  post: ({ url, headers, payload }: T.ApiProps) => {
    return request({ method: 'post', url, headers, payload });
  },
  put: ({ url, headers, payload }: T.ApiProps) => {
    return request({ method: 'put', url, headers, payload });
  },
  delete: ({ url, headers, payload }: T.ApiProps) => {
    return request({ method: 'delete', url, headers, payload });
  },
};

export default api;
