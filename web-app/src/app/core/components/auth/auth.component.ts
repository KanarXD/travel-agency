import {Component} from "@angular/core";
import {AuthService} from "../../services/auth/auth.service";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['auth.component.scss']
})
export class AuthComponent {
  constructor(
    private authService: AuthService
  ) {
  }

  // constructor(
  //   private authService: AuthService,
  //   private coreService: CoreService
  // ) {
  //   this.logged();
  // }
  //
  // get access$() {
  //   return this.coreService.access$;
  // }
  //
  get isLogged$(): BehaviorSubject<boolean> {
    return this.authService.isLogged$;
  }


  logIn(formValue: any) {
    this.authService.logIn(formValue);
  }

  logOut() {
    this.authService.logOut();
  }

}
