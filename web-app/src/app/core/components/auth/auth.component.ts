import {AfterViewInit, Component} from "@angular/core";
import {AuthService} from "../../services/auth/auth.service";
import {Subject} from "rxjs";
import {CoreService} from "../../../shared/services/core.service";
import {UserStatus} from "../../../shared/utils/app.models";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['auth.component.scss']
})
export class AuthComponent implements AfterViewInit {
  isLogged$!: Subject<boolean>;

  constructor(
    private authService: AuthService,
    private coreService: CoreService
  ) {
  }


  logIn(formValue: any) {
    this.authService.logIn(formValue);
  }

  logOut() {
    this.authService.logOut();
  }

  ngAfterViewInit(): void {
    this.coreService.userStatus$.subscribe((userStatus: UserStatus) => {
      this.isLogged$.next(userStatus.isLogged);
    })
  }

}
