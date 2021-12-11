import {Observable} from "rxjs";

export type HttpMethodName = 'add' | 'remove' | 'update' | 'more';

export enum Action {
  Add = 'add',
  Remove = 'remove',
  Update = 'update',
  More = 'more'
}

export interface ApiService<T> {
  fetch(): Observable<T>;

  get(id: bigint): Observable<T>;

  add(item: T): Observable<T>;

  update(item: T): Observable<T>;

  remove(id: bigint): Observable<T>;
}
