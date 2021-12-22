import {ApiService, ResponseData} from "./api.models";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

export abstract class ServerApiService<T> implements ApiService<T> {
  httpClient: HttpClient;
  serviceUrl: string;

  protected constructor(httpClient: HttpClient, serviceUrl: string) {
    this.httpClient = httpClient;
    this.serviceUrl = serviceUrl;
  }

  fetch(serverApiFilter?: any): Observable<ResponseData<T>> {
    return this.httpClient.get<ResponseData<T>>(this.serviceUrl, {params: serverApiFilter});
  }

  get(id: number): Observable<ResponseData<T>> {
    return this.httpClient.get<ResponseData<T>>(`${this.serviceUrl}/${id}`);
  }

  add(item: T): Observable<ResponseData<T>> {
    return this.httpClient.post<ResponseData<T>>(this.serviceUrl, item);
  }

  update(item: T): Observable<ResponseData<T>> {
    throw new Error("not implemented");
  }

  remove(id: number): Observable<ResponseData<T>> {
    return this.httpClient.delete<ResponseData<T>>(`${this.serviceUrl}/${id}`);
  }

}

