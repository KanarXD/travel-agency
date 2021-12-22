import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthDataModel} from './auth.service.models';
import {ServerApi} from "../../../shared/utils/server.api";
import {CoreService} from "../../../shared/services/core.service";

@Injectable({providedIn: 'root'})
export class AuthService {

  constructor(
    private http: HttpClient,
    private coreService: CoreService
  ) {
  }

  isLogged(): boolean {
    return this.coreService.userStatus$.getValue().isLogged;
  }

  logIn({username, password}: AuthDataModel) {
    let base64 = window.btoa(username + ':' + password);
    this.http.get<string[]>(ServerApi.LOGIN, {headers: {Authorization: 'Basic ' + base64}})
      .subscribe(
        (privilegeList: string[]) => {
          console.log('HTTP response', privilegeList);
          this.coreService.userStatus$.next({isLogged: true, privilegeList: privilegeList});
        });
  }

  logOut() {
    if (this.isLogged()) {
      this.http.get(ServerApi.LOGOUT).subscribe();
      this.coreService.userStatus$.next({isLogged: false, privilegeList: []});
    }
  }

}
