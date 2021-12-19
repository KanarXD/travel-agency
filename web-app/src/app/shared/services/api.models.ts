import {Observable} from "rxjs";

export type HttpMethodName = 'add' | 'remove' | 'update' | 'more';

export enum ServerApiAction {
  Add = 'add',
  Remove = 'remove',
  Update = 'update',
  More = 'more'
}

export interface ServerApiFilter {
  currentPage: number;
  itemsPerPage: number;
}

export type ResponseData<T> = {
  data: T[] & T & any;
  total: number;
  message: string;
  error: string;
}

export interface ApiService<T> {

  fetch(): Observable<ResponseData<T>>;

  get(id: number): Observable<ResponseData<T>>;

  add(item: T): Observable<ResponseData<T>>;

  update(item: T): Observable<ResponseData<T>>;

  remove(id: number): Observable<ResponseData<T>>;

}
