import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  isLogged$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  privilegeList$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  isLogged(): boolean {
    return this.isLogged$.value;
  }

}
