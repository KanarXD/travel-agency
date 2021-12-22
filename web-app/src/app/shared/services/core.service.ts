import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {UserStatus} from "../utils/app.models";

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  private _userStatus$: BehaviorSubject<UserStatus> = new BehaviorSubject<UserStatus>({
    isLogged: false,
    privilegeList: []
  });

  get userStatus$(): BehaviorSubject<UserStatus> {
    return this._userStatus$;
  }

}
