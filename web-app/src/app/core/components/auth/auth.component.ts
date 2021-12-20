import {Component} from "@angular/core";
import {AuthService} from "../../services/auth/auth.service";
import {BehaviorSubject} from "rxjs";
import {CoreService} from "../../../shared/services/core.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['auth.component.scss']
})
export class AuthComponent {
  constructor(
    private authService: AuthService,
    private coreService: CoreService
  ) {
  }

  get isLogged$(): BehaviorSubject<boolean> {
    return this.coreService.isLogged$;
  }

  logIn(formValue: any) {
    this.authService.logIn(formValue);
  }

  logOut() {
    this.authService.logOut();
  }

}
