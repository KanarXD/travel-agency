import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AuthDataModel} from './auth.service.models';
import {ServerApi} from "../../../shared/utils/server.api";

@Injectable({providedIn: 'root'})
export class AuthService {
    isLogged$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


    constructor(
        private http: HttpClient
    ) {
    }

    // isLogged(): Observable<any> {
    //   // return this.http.get(ServerApi.AUTH_IS_LOGGED);
    // }

    logIn({username, password}: AuthDataModel) {
        let base64 = window.btoa(username + ':' + password);
        this.http.get<string[]>(ServerApi.LOGIN, {headers: {Authorization: 'Basic ' + base64}, withCredentials: true})
            .subscribe(
                (privilegeList: string[]) => {
                    console.log('HTTP response', privilegeList)
                    this.isLogged$.next(true);
                });
    }

    logOut() {
        this.isLogged$.next(false);
    }

}
