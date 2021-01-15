export interface ApiProps {
  url: string;
  headers?: { [k: string]: string };
  payload?: { [k: string]: string } | string;
}

export interface ApiRequestProps extends ApiProps {
  method: 'get' | 'post' | 'put' | 'delete';
}
