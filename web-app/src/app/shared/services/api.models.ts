import {Observable} from "rxjs";

export interface ApiService<T> {
  fetch(): Observable<T>;
  get(id: bigint): Observable<T>;
  add(item: T): Observable<T>;
  update(item: T): Observable<T>;
  remove(id: bigint): Observable<T>;
}
