export interface ApiProps {
  url: string;
  headers?: { [k: string]: string };
  payload?: { [k: string]: any } | string;
}

export interface ApiRequestProps extends ApiProps {
  method: 'get' | 'post' | 'put' | 'delete';
}
