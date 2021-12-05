import {ApiService} from "./api.models";
import {Observable} from "rxjs";
import { HttpClient } from "@angular/common/http";


export abstract class ServerApiService<T> implements ApiService<T> {
  httpClient: HttpClient;
  serviceUrl: string;

  constructor(httpClient: HttpClient, serviceUrl: string) {
    this.httpClient = httpClient;
    this.serviceUrl = serviceUrl;
  }

  fetch(): Observable<T> {
    return this.httpClient.get<T & T[]>(this.serviceUrl);
  }

  get(id: bigint): Observable<T> {
    return this.httpClient.get<T>(`${this.serviceUrl}/${id}`);
  }

  add(item: T): Observable<T> {
    return this.httpClient.post<T>(this.serviceUrl, item);
  }

  update(item: T): Observable<T> {
    throw new Error("not implemented");
  }

  remove(id: bigint): Observable<T> {
    return this.httpClient.delete<T>(`${this.serviceUrl}/${id}`);
  }


}

