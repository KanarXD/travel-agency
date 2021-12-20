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
    return this.coreService.isLogged$.value;
  }

  logIn({username, password}: AuthDataModel) {
    let base64 = window.btoa(username + ':' + password);
    this.http.get<string[]>(ServerApi.LOGIN, {headers: {Authorization: 'Basic ' + base64}})
      .subscribe(
        (privilegeList: string[]) => {
          console.log('HTTP response', privilegeList)
          this.coreService.isLogged$.next(true);
          this.coreService.privilegeList$.next(privilegeList);
        });
  }

  logOut() {
    if (this.isLogged()) {
      this.http.get(ServerApi.LOGOUT).subscribe();
      this.coreService.isLogged$.next(false);
      this.coreService.privilegeList$.next([]);
    }
  }

}
